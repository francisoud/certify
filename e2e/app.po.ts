export class CertifyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('certify-app h1')).getText();
  }
}
