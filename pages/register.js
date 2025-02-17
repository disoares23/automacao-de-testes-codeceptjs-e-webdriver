const {I} = inject();

module.exports = {
  fields: {
    userName: 'input[name="username"]',
    passWord: 'input[name="password"]',
    repeatPassWord: 'input[name="repeatedPassword"]',
    firstName: 'input[name="account.firstName"]',
    lastName: 'input[name="account.lastName"]',
    email: 'input[name="account.email"]',
    phone: 'input[name="account.phone"]',
    address1: 'input[name="account.address1"]',
    address2: 'input[name="account.address2"]',
    city: 'input[name="account.city"]',
    state: 'input[name="account.state"]',
    zip: 'input[name="account.zip"]',
    country: 'input[name="account.country"]',
    languagePreference: 'select[name="account.languagePreference"]',
    favouriteCategoryId: 'select[name="account.favouriteCategoryId"]',
    enableList: 'input[name="account.listOption"]',
    enableBanner: 'input[name="account.bannerOption"]'

  },

  button: {
    registerButton: '//a[contains(text(), "Register Now!")]',
    saveAccountInformation: 'input[name="newAccount"]'
  },

  messages: {

  },

  createUserWithSuccess(fName, fLastName, fEmail, fpassW) {
    I.click(this.button.registerButton)
    I.fillField(this.fields.userName, fName)
    I.fillField(this.fields.passWord, fpassW)
    I.fillField(this.fields.repeatPassWord, fpassW)

    I.fillField(this.fields.firstName, fName)
    I.fillField(this.fields.lastName, fLastName)

    I.fillField(this.fields.email, fEmail)
    I.fillField(this.fields.phone, '9876543210')

    I.fillField(this.fields.address1, 'Rua do qa 123')
    I.fillField(this.fields.address2, '2E')
    I.fillField(this.fields.city, 'Qualitywood')
    I.fillField(this.fields.state, 'QA')
    I.fillField(this.fields.zip, '12345-678')
    I.fillField(this.fields.country, 'Assure')

    I.scrollPageToBottom()

    I.selectOption(this.fields.languagePreference, 'japanese')
    I.selectOption(this.fields.favouriteCategoryId, 'DOGS')

    I.checkOption(this.fields.enableList)
    I.checkOption(this.fields.enableBanner)

    I.click(this.button.saveAccountInformation)

  }

}
