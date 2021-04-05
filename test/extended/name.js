import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Name field', function () {

    before('Open App', function () {
        browser.url('');
    });

    xit('TC-028 Name field placeholder = "Hero\'s name', function (){
        let elem = $(sel.name);
        expect(elem).toHaveElementProperty('placeholder', exp.namePlaceholder)
    });
     xit('TC-029 The cursor blinks in field', function (){
        $(sel.name).click();
         let is = $(sel.name).isFocused();
         expect(is).toEqual(true);
     });
     xit('TC-030 Name field frame turns from grey to blue when hover the field', function (){
         $(sel.name).moveTo();
         const isEnabled = $(sel.name).isEnabled();
         expect(isEnabled).toEqual(true);
     });
     xit('TC-031 Name field frame turns color after clicking on it', function (){
         $(sel.name).click();
         const isEnabled = $(sel.name).isEnabled();
         expect(isEnabled).toEqual(true);
     });
    xit('TC-032 Name field accepts one symbol', function (){
        browser.url('');
        $(sel.name).setValue('a');
        browser.pause(1000);
        const err = $('.ant-form-item-explain-error').isDisplayed();
        expect(err).toEqual(false);
    });

    xit('TC-033 Name field accepts 70 symbols', function (){
        browser.refresh();
        $(sel.name).setValue('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
        browser.pause(1000);
        const err = $('.ant-form-item-explain-error').isDisplayed();
        expect(err).toEqual(false);
    });
    xit('TC-034 Name field accepts letters', function () {
        browser.refresh();
        $(sel.name).setValue('ABCDEFGHIKLMNOPQRSTVXYZ');
        browser.pause(1000);
        const err = $('.ant-form-item-explain-error').isDisplayed();
        expect(err).toEqual(false);
    });
    xit('TC-035 Name field accepts Lowercase letters', function () {
        browser.refresh();
        $(sel.name).setValue('focus');
        browser.pause(1000);
        const err = $('.ant-form-item-explain-error').isDisplayed();
        expect(err).toEqual(false);
    });




});
