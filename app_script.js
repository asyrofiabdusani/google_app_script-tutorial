function learnGoogleAppScript() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet3");
    var cal = CalendarApp.getCalendarById("asyrofiabdusani@gmail.com");
    var lr = activeSheet.getLastRow();

    for (var i = 2; i <= lr; i++) {
        var stDate = activeSheet.getRange(i, 1).getValue();
        var endDate = activeSheet.getRange(i, 2).getValue();
        var eTitl = activeSheet.getRange(i, 3).getValue();
        var eDesc = activeSheet.getRange(i, 4).getValue();
        var eLoc = activeSheet.getRange(i, 5).getValue();

        cal.createEvent(eTitl, stDate, endDate, { location: eLoc, description: eDesc });
    }
}