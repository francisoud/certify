import { CertifyPage } from './app.po';

describe('certify App', function() {
  let page: CertifyPage;

  beforeEach(() => {
    page = new CertifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('certify works!');
  });
});
