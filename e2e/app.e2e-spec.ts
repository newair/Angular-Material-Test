import { TableTestPage } from './app.po';

describe('table-test App', () => {
  let page: TableTestPage;

  beforeEach(() => {
    page = new TableTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
