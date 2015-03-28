export class TodoTask {
  constructor(title = '', desc = '', status = false) {
    this.title = title;
    this.desc = desc;
    this.status = status;
  }

  setComplete () {
    this.status = true;
  }

  setIncomplete () {
    this.status = false;
  }
}
