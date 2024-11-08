// enums

enum Priority {
  Lowest = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  Urgent = 4,
}

function addTicket(details: string, priority: Priority) {
  if (priority === Priority.Lowest) {}
  else if (priority === Priority.Low) {}
  else if (priority === Priority.Medium) {}
  else if (priority === Priority.High) {}
  else if (priority === Priority.Urgent) {}
}

addTicket("Fix Computer", Priority.Urgent);
