function learnGoogleAppScript() {
    var app = SpreadsheetApp;
    var spreadsheet = app.getActiveSpreadsheet();
    var activeSheet = spreadsheet.getActiveSheet();
    activeSheet.getRange(1, 1).setValue(10);
    var result = activeSheet.getRange(1, 1).getValues();
    if (result < 6) {
        activeSheet.getRange(1, 2).setValue("Smalll");
    } else {
        activeSheet.getRange(1, 2).setValue("Big");
    }
}