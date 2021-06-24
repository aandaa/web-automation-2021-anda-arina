import { pages } from '../support/pages'

export class NavigationTest {
    openPageAndSeeMessage() {
        pages.user1.landingPage.openPage()
        pages.user2.landingPage.openPage()
        pages.user1.landingPage.getSuccessMessage.waitForDisplayed()
        pages.user2.landingPage.getSuccessMessage.waitForDisplayed()
    }
}