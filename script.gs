function mailMerge() {
  
  ////////////// CHANGE THESE VALUES //////////////////////////////////
  
  /* Unique IDs for the spreadsheet you're using to send emails and the
  Google Doc that contains your message */
  const spreadsheetId = '1nuhE3-qXa9hg19sl-5k2bQ-9yd-E8xgdQMnkrLFBK20';
  const docId = '1Lr-k9Hc_j_DpzRBR-VdRyBAWPn8cTtdl3bFKj1xgVqg';
  
  /* The subjectline of the emails you are sending */
  const subject = 'Balanced Man Scholarship';
  
  /////////////////////////////////////////////////////////////////////
  
  /* Location of emails, names, and status columns in spreadsheet */ 
  const emailColumn = 1;
  const namesColumn = 2;
  const statusColumn = 3;
  
  /* Open the spreadsheet and get the first 'sheet' */
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheets()[0];
  
  /* Read the text out of the Google Doc that contains our email template */
  var emailTemplate = DocumentApp.openById(docId).getBody().getText();
  
  /* Create a function closure with our email template */
  var fillTemplate = makeTemplate(emailTemplate);
  
  /* Declare variables we will use in the loop */
  var name, stat, i, emailText, emailAddress;
  
  /* For every row in our spreadsheet, fill the template, an email, and indicate success on the spreadsheet */
  for (i = 1; i <= sheet.getLastRow(); ++i) {
    name = sheet.getRange(i, namesColumn);
    stat = sheet.getRange(i, statusColumn);
    
    /* Check if that person has already received an email */
    if (stat.getValue() !== "Email Sent") {
      
      /* Generate a personalized email. */
      emailText = fillTemplate(name.getValue());
      emailAddress = sheet.getRange(i, emailColumn).getValue();
      
      GmailApp.sendEmail(emailAddress, subject, { htmlBody: emailText });
      
      /* Set the status to "sent" */
      stat.setValue("Email Sent");
      /* Apply changes to the spreadsheet */
      SpreadsheetApp.flush();
    }
  }
  
}

/**
* makeTemplate: return a function that repeatedly fills the same template with
* personalized values.
* 
* @param {String}: string containing template markers (our email)
* @return {Function}: function that evaluates our template
*/
function makeTemplate(template) {
  return function(value) {
    // Find the tag to replace with personal text
    var templateVar = template.match(/\$\{(\w)+\}/g);
    return template.replace(templateVar, value || "");
  };
}
