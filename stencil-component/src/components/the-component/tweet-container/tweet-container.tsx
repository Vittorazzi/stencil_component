import { Component, Host, h, Prop } from '@stencil/core';
import { getAppStyleUrl } from '@stencil/core/testing/testing-utils';
import style from './tweet-container.css';

@Component({
  tag: 'tweet-container',
  styleUrl: 'tweet-container.css',
  shadow: true,
})
export class TweetContainer {

  @Prop() tweetsArr: {nomeProf: string, tweet: string, lastTweet: boolean}[] = [{
    nomeProf: "Usuario1",
    tweet: "Eu gosto de torrada",
    lastTweet: true
  },
  {
    nomeProf: "Usuario2",
    tweet: "Torrada é ruim pra cacete",
    lastTweet: false
  },
  {
    nomeProf: "Usuario3",
    tweet: "Pamonha",
    lastTweet: false
  }];

  render() {
    return (
      <Host>
        {this.tweetsArr.map((tweet, index) => 
          <div class={`tweet-container ${tweet.lastTweet === true ? 'tweet-container--last-tweet' : ''}`}>
            <h1 key={index}>{tweet.nomeProf}</h1>
            <span>{tweet.tweet}</span>
          </div>
          )}
      </Host>
    );
  }

}
