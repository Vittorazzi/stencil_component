import { newSpecPage } from '@stencil/core/testing';
import { TheComponent } from '../the-component';

describe('the-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TheComponent],
      html: `<the-component></the-component>`,
    });
    expect(page.root).toEqualHtml(`
      <the-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </the-component>
    `);
  });
});
