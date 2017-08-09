import { HttptestPage } from './app.po';

describe('httptest App', function() {
  let page: HttptestPage;

  beforeEach(() => {
    page = new HttptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
