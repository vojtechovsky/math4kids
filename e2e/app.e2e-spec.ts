import {Math4kidsPage} from './app.po';

describe('math4kids App', function () {
  let page: Math4kidsPage;

  beforeEach(() => {
    page = new Math4kidsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
