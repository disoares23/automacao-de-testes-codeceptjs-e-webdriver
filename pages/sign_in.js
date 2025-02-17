const { I, fName, fpassW} = inject();

module.exports = {

  button: {
    clickLogin: 'Login'
  },

  enterAccount(fName, fpassW) {
    I.fillField('input[name="username"]', fName)
    I.fillField('input[name="password"]', fpassW)
    I.click(this.button.clickLogin)
    I.see('My Account')
  }
}
