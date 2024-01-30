

var p = MindFusion.Scheduling;

var calendar = new p.Calendar(document.getElementById("calendar"));
calendar.currentView = p.CalendarView.SingleMonth;
calendar.theme = "earth";

calendar.render();
