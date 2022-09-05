function learnGoogleAppScript() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2")
    activeSheet.getRange(1, 1).setValue("hello world!")
}