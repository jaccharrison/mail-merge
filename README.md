# mail-merge

I wrote this Google Script so that I wouldn't have to personalize 400 emails to potential new fraternity members. It's not as robust as a similar tool that I wrote at NASA, but it gets the job done. These are the instructions that I included for fraternity brothers that don't want to send 400 personalized emails after me. At the time of typing this (2018/02/09), I'm the Vice President of Communications instead of the Vice President of Recruitment for SigEp, which means I am probably going to be sending more mass personalized emails in the future. This might get more robust. 

Here's the (edited) instructions that I included in the Google Script.

This script sends personalized-ish emails to all of the people
on whatever Spreadsheet you point it to.

1 . Get whatever list of email addresses you have. Create a new spreadsheet.
    Only use the first 'sheet' in your new spreadsheet (don't create other
    tabs at the bottom of the page).
2. Copy the list of emails into the first column of your new spreadsheet. 
3. Copy the names (which should be in the same order as the emails) into the
   second column of the Spreadsheet.
 5. Open the 'email script.gs' file on the left side of this window. 
 4. Get the Document ID of the spreadsheet you copied the names into. Put that into
     the code where it says 'const spreadsheetId = '. This is on line 7.
     To get the 'id' of google docs or sheets, you open the document, and look
     at the URL in the top bar of your browser. Most of the URL will read like
     english. Then, between two '/' characters, you'll see a long string of 
     bullshit. That bullshit is the document ID. If you need help recognizing it, look
     at the ids that are already in the code from last time somebody used it.
  5. Go to the Google Doc titled 'Email Message', which hopefully nobody has 
     moved, and type your message. If they did move it, just create a new doc,
     and copy the document ID into the 'const docId = ' field below the 
     spreadsheet constant. When you type the message, you have one 'tag' to place: ${name}. 
     Type exactly ${name} wherever you want the person's name to be in the email.
     Note that you must use HTML formatting to add extra effects to your message. In particular,
     any time you want to go to a new line, you should type <br>.
  6. **Set the subject of your email.** That's the 'const subject = ' field on
     line 11. **Don't forget this.** The BMS chairman I was overseeing did. All of his emails sent with the subject line "TEST". I wonder why we didn't receive as many applications this year.
  7. **Run the script.** See the button between the 'bug' and the light bulb?
     Make sure that says 'mailMerge'. If it doesn't, click the button, and select mailMerge.
  8. **Press play.** When the script is done, check you spreadsheet and make sure
     all of the rows say 'Email Sent' after them. If the script stopped at
     a certain point (Google only lets you send so many emails per SMTP 
     greeting, so it's entirely possible that it did if you're emailing the 400 freshmen that received a scholarship from the university), just run the script
     again. The script will skip any people it already sent emails to.
 
     
     If you make changes to the code, please try to prioritize clarity.
     Nobody cares about performance of this script, and you're also not getting
     any points for being concise. Keep in mind that a history major might have to
     work with this someday.
 
  Love,
  Jacob 'Sunshine' Harrison
 
