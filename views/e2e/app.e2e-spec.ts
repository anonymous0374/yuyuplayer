import { PlayerPage } from './app.po';

describe('player App', () => {
  let page: PlayerPage;

  beforeEach(() => {
    page = new PlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
