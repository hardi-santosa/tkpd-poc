const assert = require('assert')

describe('Doc webdriver.io page', () => {
    it('should have the right home title', () => {
        browser.url('https://webdriver.io/docs/gettingstarted.html')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Getting Started · WebdriverIO')
    })
    it('should test something A', () => {
       
    })
    it('should test something B', () => {
        
    })
    it('should test something C', () => {
        
    })
})