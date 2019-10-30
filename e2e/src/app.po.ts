import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath('/html/body/app-root/ng-component/div/header/div[1]/a/span')).getText() as Promise<string>;
  }
}
