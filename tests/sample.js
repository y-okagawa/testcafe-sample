import {Selector} from 'testcafe';

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;


test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .takeScreenshot()
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!')
        .takeScreenshot();
});
