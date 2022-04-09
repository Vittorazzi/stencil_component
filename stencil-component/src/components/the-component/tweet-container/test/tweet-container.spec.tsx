import { newSpecPage } from '@stencil/core/testing';
import { TweetContainer } from '../tweet-container';

describe('tweet-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TweetContainer],
      html: `<tweet-container></tweet-container>`,
    });
    expect(page.root).toEqualHtml(`
      <tweet-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tweet-container>
    `);
  });
});
