function learnGoogleAppScript() {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    var result = activeSheet.getRange(1, 1).getValues();
    for (i = 0; i < 10; i++) {
        activeSheet.getRange(i + 1, 2).setValue(result);
    }
}