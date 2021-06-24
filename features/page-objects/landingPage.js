
import { Page } from './basePage'

export class LandingPage extends Page {
    getSuccessMessage() {
        return this.browser.$('#messages > div.text-success')
    }

    openPage() {
        this.browser.url('https://demos.mqtt.cool/chat/')
    }
}