function learnGoogleAppScript() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    activeSheet.getRange(1, 1);
    var lastRow = activeSheet.getLastRow();
    var lastCol = activeSheet.getLastColumn();
    activeSheet.getRange(lastRow + 1, 1, 1, 2).setValue("new value");
    activeSheet.getRange(lastRow + 1, lastCol + 1, 4, 2).setValue("new value");
    Logger.log(lastRow);
    Logger.log(lastCol);
}

