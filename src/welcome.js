export class Welcome {
  constructor() {
    this.heading = 'Welcome to Aurelia!';
    this.firstName = 'John';
    this.lastName = 'Smith';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    alert(`Yo, ${this.fullName}!`);
  }
}
