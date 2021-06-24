import { NavigationTest } from '../test-objects/navigationTest'
import { MqttCoolTest } from '../test-objects/MqttCoolTest'
import { pages } from './pages'

export class Tests {
    constructor(pages) {
        this.navigationTest = new NavigationTest(pages)
        this.MqttCoolTest = new MqttCoolTest(pages)
    }
}

const tests = new Tests(pages)
export { tests }