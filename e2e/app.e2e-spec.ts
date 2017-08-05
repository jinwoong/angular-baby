import { AngularBabyPage } from './app.po';

describe('angular-baby App', () => {
  let page: AngularBabyPage;

  beforeEach(() => {
    page = new AngularBabyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
