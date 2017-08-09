import { SunnysidePage } from './app.po';

describe('sunnyside App', () => {
  let page: SunnysidePage;

  beforeEach(() => {
    page = new SunnysidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
