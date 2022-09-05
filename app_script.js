function learnGoogleAppScript() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    var lr = activeSheet.getLastRow();
    var activeSheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet4');

    var quota = (MailApp.getRemainingDailyQuota());
    if (quota < (lr - 1)) {
        Browser.msgBox("Email can't be sent. Remaining quota is not enough");
    } else {
        for (var i = 2; i <= lr; i++) {
            var bodyTxt = activeSheet2.getRange(1, 1).getValue();
            var email = activeSheet.getRange(i, 1).getValue();
            var name = activeSheet.getRange(i, 2).getValue();
            var subj = activeSheet.getRange(i, 3).getValue();
            var bill = activeSheet.getRange(i, 4).getDisplayValue();
            var dueDate = activeSheet.getRange(i, 5).getDisplayValue();

            bodyTxt = bodyTxt.replace('{name}', name).replace('{bill}', bill).replace('{date}', dueDate);

            MailApp.sendEmail(email, subj, bodyTxt);
        }
    }
}
