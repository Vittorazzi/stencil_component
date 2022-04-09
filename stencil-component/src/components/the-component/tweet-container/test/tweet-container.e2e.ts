import { newE2EPage } from '@stencil/core/testing';

describe('tweet-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tweet-container></tweet-container>');

    const element = await page.find('tweet-container');
    expect(element).toHaveClass('hydrated');
  });
});
