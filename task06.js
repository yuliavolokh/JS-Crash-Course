//Task 1
class CssClass {
  constructor(name, styles) {
    this.name = name;
    this.styles = styles;
  }
  setStyle(property, value) {
    this.styles[property] = value;
  }
  removeStyle(property) {
    delete this.styles[property];
  }
  getCSS() {
    let css = '.' + this.name + ' {\n';
    for (const [property, value] of Object.entries(this.styles)) {
      css += '  ' + property + ': ' + value + ';\n';
    }
    css += '}\n';
    return css;
  }
}
//Task 2
class Button {
  constructor(width, height, text) {
    this.width = width;
    this.height = height;
    this.text = text;
  }
  showBtn() {
    document.write(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.text}</button>`);
  }
}
class BootstrapButton extends Button {
  constructor(width, height, text, color) {
    super(width, height, text);
    this.color = color;
  }
  showBtn() {
    document.write(`<button class="btn" style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color};">${this.text}</button>`);
  }
}
