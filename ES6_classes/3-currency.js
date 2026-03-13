export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter y Setter para 'code'
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter y Setter para 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Método displayFullCurrency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
