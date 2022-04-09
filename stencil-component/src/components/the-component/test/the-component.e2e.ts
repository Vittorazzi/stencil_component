import { newE2EPage } from '@stencil/core/testing';

describe('the-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<the-component></the-component>');

    const element = await page.find('the-component');
    expect(element).toHaveClass('hydrated');
  });
});
