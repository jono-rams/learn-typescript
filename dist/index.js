"use strict";
// enums
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
function addTicket(details, priority) {
    if (priority === Priority.Lowest) { }
    else if (priority === Priority.Low) { }
    else if (priority === Priority.Medium) { }
    else if (priority === Priority.High) { }
    else if (priority === Priority.Urgent) { }
}
addTicket("Fix Computer", Priority.Urgent);
