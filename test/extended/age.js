import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Age field', () => {

    before('Open App', function () {
        browser.url('');
    });

    it.skip('TC-067 Age field placeholder = "Hero\'s age', function (){
        let elem = $(sel.age);
        expect(elem).toHaveElementProperty('placeholder', exp.agePlaceholder)
    });

    xit('TC-068 Age field accepts one digit', function () {
        const input = $(sel.age);
        input.setValue('1');
        browser.pause(1000);
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });

    xit('TC-069 Age field accepts 12 digits', function() {
        const input = $(sel.age);
        input.setValue('99999999999');
        browser.pause(2000);
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });

    xit('TC-070 Age field accepts random digits', function(){
        const input = $(sel.age);
        input.setValue(Math.trunc(Math.random() * (98) + 1));
        browser.pause(2000);
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });

    xit('TC-071 Age field accepts 0 before the number', function(){
        const input = $(sel.age);
        input.setValue('0' + Math.trunc(Math.random() * (98) + 1));
        browser.pause(2000);
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });

    xit('TC-072 Age field accepts space before the number', function(){
        const input = $(sel.age);
        input.setValue(' ' + Math.trunc(Math.random() * (98) + 1));
        browser.pause(2000);
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });

    xit('TC - 073 By clicking up on the spin, the value should increase by 1, when Age field empty', function() {
        $(sel.spinner).click();
        expect($(sel.age).getValue()).toEqual('1');
    });

    xit('TC - 074 By clicking up on the spin, the value should increase by 1, when Age field not empty', function() {
        const input = $(sel.age);
        input.setValue('1');
        $(sel.spinnerUp).click();
        expect($(sel.age).getValue()).toEqual('2');
    });

    xit('TC - 075 By clicking down on the spin, the value should increase by 1, when Age field not empty', function() {
        const input = $(sel.age);
        $(sel.spinnerDown).click();
        expect($(sel.age).getValue()).toEqual('1');
    });

    xit('Tc-076 Copy-paste functionality', function(){
        $(sel.name).setValue('2134');
        $(sel.name).doubleClick();
        $(sel.name).keys('Command', 'c');
        $(sel.age).click();
        $(sel.age).keys('Command', 'v');
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });

    it('TC-077 Click down on the spin, when Age field is empty', function(){

    })

    xit('TC-087 Error appears when the Age field left empty', function () {
        const input = $(sel.age);
        input.setValue('1');
        $(sel.age).keys('Backspace');
        const err = $(sel.ageFieldError).waitForDisplayed({timeout: 3000});
        expect(err).toEqual(true);
    });





    // afterEach(() => {
    //     browser.reloadSession()
    // });

});
