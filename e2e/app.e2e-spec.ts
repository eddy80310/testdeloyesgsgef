import { Testdeploy4Page } from './app.po';

describe('testdeploy4 App', function() {
  let page: Testdeploy4Page;

  beforeEach(() => {
    page = new Testdeploy4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
