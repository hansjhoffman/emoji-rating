import { css, html, LitElement, property } from "lit-element";

class EmojiRating extends LitElement {
  @property({ type: String })
  private _emoji = "🤯";

  @property({ type: Number })
  private _max = 5;

  @property({ type: Number })
  private _value = 0;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .emoji {
        cursor: pointer;
        color: rgba(0, 0, 0, 0);
        text-shadow: 0 0 var(--emoji-rating-unselected-color, #444);
      }

      .emoji.active {
        color: rgba(0, 0, 0, 1);
      }

      .rating {
        display: flex;
        font-size: 3em;
      }
    `;
  }

  protected render() {
    const emojiList: string[] = [...this._emoji.repeat(this._max)];

    return html`
      <div role="range" class="rating">
        ${emojiList.map((emoji: string, idx: number) => this._renderEmoji(emoji, idx))}
      </div>
    `;
  }

  private _handleClick(event: MouseEvent) {
    const value: number = parseInt(event.target.dataset.idx, 10) + 1;

    if (value === this._value) {
      this._value = 0;
    } else {
      this._value = value;
    }
  }

  private _renderEmoji(emoji: string, idx: number) {
    const active: string = idx < this._value ? "active" : "";

    return html`
      <div class="emoji ${active}" data-idx="${idx}" @click="${this._handleClick}">
        ${emoji}
      </div>
    `;
  }
}

customElements.define("emoji-rating", EmojiRating);
