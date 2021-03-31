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

    it('TC-068 Age field accepts one digit', function () {
        const input = $(sel.age);
        input.setValue('1');
        browser.pause(2000);
        const err = $(sel.ageFieldError).isDisplayed();
        expect(err).toEqual(false);
    });


})