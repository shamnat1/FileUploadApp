const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
// const app = require('../../server')

const rootURL = 'http://localhost:8080/'
const d = new Builder().forBrowser('chrome').build()
const waitUntilTime = 20000
let driver, el, actual, expected
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

async function getElementById(id) {
    const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}
async function getElementByXPath(xpath) {
    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

it('waits for the driver to start', () => {
    return d.then(_d => {
        driver = _d
    })
})

it('initialises the context', async () => {

    await driver.switchTo().newWindow('tab');
    await driver.get(rootURL)
})