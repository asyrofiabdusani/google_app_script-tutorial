function learnGoogleAppScript() {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    var result = activeSheet.getRange(8, 3, 10).getValues();
    activeSheet.getRange(8, 4, 10).setValues(result);
}