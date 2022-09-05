function learnGoogleAppScript() {
    var activeSheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet1");
    var activeSheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet2");
    var calId = activeSheet1.getRange(2, 1).getValue();
    var cal = CalendarApp.getCalendarById(calId);

    var startDt = activeSheet1.getRange(2, 2).getValue();
    var endDt = activeSheet1.getRange(2, 3).getValue();
    var events = cal.getEvents(startDt, endDt);

    for (var i = 0; i < events.length; i++) {
        activeSheet2.getRange(i + 3, 1).setValue(events[i].getStartTime());
        activeSheet2.getRange(i + 3, 2).setValue(events[i].getStartTime().getHours() + ":" + events[i].getStartTime().getMinutes() + ":" + events[i].getStartTime().getSeconds());
        activeSheet2.getRange(i + 3, 3).setValue(events[i].getEndTime());
        activeSheet2.getRange(i + 3, 4).setValue(events[i].getEndTime().getHours() + ":" + events[i].getStartTime().getMinutes() + ":" + events[i].getStartTime().getSeconds());
        activeSheet2.getRange(i + 3, 5).setValue(events[i].getDescription());
        activeSheet2.getRange(i + 3, 6).setValue(events[i].getLocation());
    }
}

