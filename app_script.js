function learnGoogleAppScript(params) {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    activeSheet.getRange('A1').setValue("Hello World!");
}