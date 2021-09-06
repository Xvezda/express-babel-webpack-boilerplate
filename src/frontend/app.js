import './app.scss';

class App {
  constructor(parent) {
    this.$parent = parent;

    this.$parent.innerHTML = `<h1>Hello World</h1>`;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  new App(document.getElementById('app'));
});
