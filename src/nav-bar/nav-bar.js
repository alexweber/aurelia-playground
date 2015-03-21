import {Behavior} from 'aurelia-framework';

export class NavBar {
  static metadata() {
    return Behavior.withProperty('router').customElement('foo-nav-bar');
  }
}
