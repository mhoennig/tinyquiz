import { TinyquizPage } from './app.po';

describe('tinyquiz App', function() {
  let page: TinyquizPage;

  beforeEach(() => {
    page = new TinyquizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
