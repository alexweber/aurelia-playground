export class Welcome {
  constructor() {
    this.chamada = 'Seja bem vindo ao inferno seu canalha!';
    this.firstName = 'João';
    this.lastName = 'Silva';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    alert(`Bem vindo, ${this.fullName}, seu otário!`);
  }
}
