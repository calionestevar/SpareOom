// Data models and type definitions

export class KindredSpirit {
  constructor(name) {
    this.id = Date.now().toString() + Math.random();
    this.name = name;
    this.createdAt = new Date().toISOString();
  }
}

export class AvonleaLesson {
  constructor(childId, subject, description, date) {
    this.id = Date.now().toString() + Math.random();
    this.childId = childId;
    this.subject = subject;
    this.description = description || '';
    this.date = date;
    this.completed = false;
    this.createdAt = new Date().toISOString();
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}