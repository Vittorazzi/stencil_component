import { Component, Host, h, Prop } from '@stencil/core';
import { TweetContainer } from './tweet-container/tweet-container';

@Component({
  tag: 'the-component',
  styleUrl: 'the-component.css',
  shadow: true,
})

export class TheComponent {

  @Prop() tituloTag: string;

  render() {
    return (
      <Host>
        <div class="container" >
          <h1>O que estão dizendo sobre {this.tituloTag}</h1>
          <tweet-container></tweet-container>
        </div>
      </Host>
    );
  }

}
