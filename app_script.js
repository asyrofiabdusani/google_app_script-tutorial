function learnGoogleAppScript() {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    var result = activeSheet.getRange(8, 3, 5).getValues();
    Logger.log(result);
}