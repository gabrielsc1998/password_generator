class Generator {
  _lastPassword = '';

  _generateRandomChar = () => {
    const generatedChar = Math.floor(Math.random() * 62);
    if (generatedChar < 10) {
      return generatedChar;
    }
    if (generatedChar < 36) {
      return String.fromCharCode(generatedChar + 55);
    }
    return String.fromCharCode(generatedChar + 61);
  };

  password = (length) => {
    let generatedString = '';
    while (generatedString.length < length) {
      generatedString += this._generateRandomChar();
    }
    this._lastPassword = generatedString;
    return generatedString;
  }

  lastPassword = () => this._lastPassword;
}

export default new Generator();
