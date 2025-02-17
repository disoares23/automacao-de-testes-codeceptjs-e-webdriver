Feature('Create user');

var faker = require('faker');
const { I, register, sign_in} = inject();


BeforeSuite(() => {
    console.log('Início de testes')
})
Before(() => {
    I.amOnPage('/actions/Catalog.action')
})

After(() => {
    console.log('Fim de testes')
})

AfterSuite(() => {
    console.log('Fim de script')
})

Scenario('Login with success', async ({login}) => {
    await login('user')
});


Scenario('Create new user', () => {

    var fName = faker.name.firstName()
    var fLastName = faker.name.lastName()
    var fEmail = faker.internet.email() 
    var fpassW = 'aptonia7' 
    
    // home
    I.click('Sign In')

    // create account
    register.createUserWithSuccess(fName, fLastName, fEmail, fpassW)

    I.amOnPage('/actions/Catalog.action')
    I.click('Sign In')

    I.see('username')

    // sign in
    sign_in.enterAccount(fName, fpassW)
    
}); 
