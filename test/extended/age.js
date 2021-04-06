import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Age field', () => {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function(){

        it.skip('TC-067 Age field placeholder = "Hero\'s age', function (){
            let elem = $(sel.age);
            expect(elem).toHaveElementProperty('placeholder', exp.agePlaceholder)
        });
    });

    describe('Positive cases', function() {

        xit('TC-068 Age field accepts one digit', function () {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('1');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        xit('TC-069 Age field accepts 12 digits', function() {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('99999999999');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        xit('TC-070 Age field accepts random digits', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue(Math.trunc(Math.random() * (98) + 1));
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        xit('TC-071 Age field accepts 0 before the number', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('0' + Math.trunc(Math.random() * (98) + 1));
            browser.pause(2000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        xit('TC-072 Age field accepts space before the number', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue(' ' + Math.trunc(Math.random() * (98) + 1));
            browser.pause(2000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        xit('TC - 073 By clicking up on the spin, the value should increase by 1, when Age field empty', function() {
            browser.refresh();
            $(sel.spinner).click();
            expect($(sel.age).getValue()).toEqual('1');
        });

        xit('TC - 074 By clicking up on the spin, the value should increase by 1, when Age field not empty', function() {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerUp).click();
            expect($(sel.age).getValue()).toEqual('2');
        });

        xit('TC - 075 By clicking down on the spin, the value should decrease by 1, when Age field not empty', function() {
            browser.refresh();
            const input = $(sel.age);
            $(sel.spinnerDown).click();
            expect($(sel.age).getValue()).toEqual('1');
        });

        xit('Tc-076 Copy-paste functionality', function(){
            browser.refresh();
            $(sel.name).setValue('2134');
            $(sel.name).doubleClick();
            $(sel.name).keys('Command', 'c');
            $(sel.age).click();
            $(sel.age).keys('Command', 'v');
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

    });

    describe('Negative cases', function(){

        xit('TC-077 Click down on the spin, when Age field is empty', function(){
            browser.refresh();
            $(sel.spinnerDown).click();
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        xit('TC-078 Click down on the spin, when Age field value is "1"', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerDown).click();
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        xit('TC-079 Click up on the spin, when Age field value is 999999999999', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('999999999999');
            $(sel.spinnerUp).click();
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        xit('TC-080 13 digits in Age field', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('7777777777777');

            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        xit('TC-081 Age field doesn\'t accepts letters', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('abc');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        xit('TC-082 Age field doesn\'t accepts Uppercase letters', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('ABC');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        xit('TC-083 Age field doesn\'t accepts special symbols', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('@\\]^_`{|~');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(true);
        });

        // it('TC-084 Age field doesn\'t accepts bad symbols', function(){
        //     browser.refresh();
        //     const input = $(sel.age);
        //     input.setValue('♣ ☺ ♂');
        //     browser.pause(2000);
        //     const err = $(sel.ageFieldError).isDisplayed();
        //     expect(err).toEqual(true);
        // });

        // it('TC-085 Age field doesn\'t accepts line feed symbols', function(){
        //     browser.refresh();
        //     const input = $(sel.age);
        //     input.setValue('^M" /  "\n" /  "\r"');
        //     browser.pause(2000);
        //     const err = $(sel.ageFieldError).isDisplayed();
        //     expect(err).toEqual(true);
        // });

        // it('TC-086 Age field doesn\'t accepts russian letters', function(){
        //     browser.refresh();
        //     const input = $(sel.age);
        //     input.setValue('фбвгд');
        //     browser.pause(2000);
        //     const err = $(sel.ageFieldError).isDisplayed();
        //     expect(err).toEqual(true);
        // });



        xit('TC-087 Error appears when the Age field left empty', function () {
            const input = $(sel.age);
            input.setValue('1');
            $(sel.age).keys('Backspace');
            const err = $(sel.ageFieldError).waitForDisplayed({timeout: 3000});
            expect(err).toEqual(true);
        });

    });

    afterEach(() => {
        browser.refresh()
    });

});
