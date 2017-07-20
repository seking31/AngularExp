import { IntroApPage } from './app.po';

describe('intro-ap App', function() {
  let page: IntroApPage;

  beforeEach(() => {
    page = new IntroApPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
