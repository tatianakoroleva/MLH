import sel from '../../data/selectors';
import exp from '../../data/expected.json';
describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function (){
            browser.url('');

        });

        it('TC-001 Page Title is MLH trial', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });
    });

    describe('Elements exist', function () {


        it('TC-002 Header is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });
        it('TC-003 Instruction is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });
        it('TC-004 Name field label is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let label  = $$(sel.requiredLabels)[0].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-005 Name field is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-006 Gender radio buttons label is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let label  = $$(sel.requiredLabels)[1].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-007.a Gender radio buttons is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let buttonHe  = $$(sel.radioButtons)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });
        it('TC-007.b Gender radio buttons is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let buttonShe  = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });
        it('TC-007.c Gender radio buttons is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let buttonIt  = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });
        it('TC-008 Age field label is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let label  = $$(sel.requiredLabels)[2].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-009 Age field is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let age  = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });
        it('TC-010 Story Type dropdown label is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let label  = $$(sel.requiredLabels)[3].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-011 Story Type dropdown is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let dropdown  = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });
        it('TC-012 Image field label is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let label  = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-013 Image field is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let image = $(sel.image).isDisplayed();
            expect(image).toEqual(true);
        });
        it('TC-014 Submit button is present', function () {
            browser.url('https://qa-apps.netlify.app/hero');
            let submit  = $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });
    });
});
