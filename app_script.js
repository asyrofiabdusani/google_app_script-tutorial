function learnGoogleAppScript() {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    activeSheet.getRange(8, 3, 10).setValue("Hello World!");
}