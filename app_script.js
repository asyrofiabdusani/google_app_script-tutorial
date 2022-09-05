function learnGoogleAppScript() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    var lr = activeSheet.getLastRow();
    var activeSheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet4');

    var quota = (MailApp.getRemainingDailyQuota());
    if (quota < (lr - 1)) {
        Browser.msgBox("Email can't be sent. Remaining quota is not enough");
    } else {
        sendEmail(activeSheet, activeSheet2, lr);
    }
}

function sendEmail(sh1, sh2, lr) {
    for (var i = 2; i <= lr; i++) {
        var bodyTxt = sh2.getRange(1, 1).getValue();
        var dataEmail = sh1.getRange(i, 1).getValue();
        var dataName = sh1.getRange(i, 2).getValue();
        var dataSubj = sh1.getRange(i, 3).getValue();
        var dataBill = sh1.getRange(i, 4).getDisplayValue();
        var dataDueDate = sh1.getRange(i, 5).getDisplayValue();

        var datas = {
            name: dataName,
            bill: dataBill,
            due_date: dataDueDate,
        }

        for (key in datas) {
            bodyTxt = bodyTxt.replace('{' + key + '}', datas[key]);
        }

        MailApp.sendEmail(dataEmail, dataSubj, bodyTxt);
    }
}

