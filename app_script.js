function learnGoogleAppScript() {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    var result = activeSheet.getRange(8, 3).getValues();
    activeSheet.getRange(8, 4).setValues(result);
}