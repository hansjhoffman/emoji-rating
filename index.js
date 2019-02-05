var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement, property } from "lit-element";
class EmojiRating extends LitElement {
    constructor() {
        super();
        this._emoji = "🤯";
        this._max = 5;
        this._value = 0;
    }
    static get styles() {
        return css `
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
    render() {
        const emojiList = [...this._emoji.repeat(this._max)];
        return html `
      <div role="range" class="rating">
        ${emojiList.map((emoji, idx) => this._renderEmoji(emoji, idx))}
      </div>
    `;
    }
    _handleClick(event) {
        const value = parseInt(event.target.dataset.idx, 10) + 1;
        if (value === this._value) {
            this._value = 0;
        }
        else {
            this._value = value;
        }
    }
    _renderEmoji(emoji, idx) {
        const active = idx < this._value ? "active" : "";
        return html `
      <div class="emoji ${active}" data-idx="${idx}" @click="${this._handleClick}">
        ${emoji}
      </div>
    `;
    }
}
__decorate([
    property({ type: String })
], EmojiRating.prototype, "_emoji", void 0);
__decorate([
    property({ type: Number })
], EmojiRating.prototype, "_max", void 0);
__decorate([
    property({ type: Number })
], EmojiRating.prototype, "_value", void 0);
customElements.define("emoji-rating", EmojiRating);
//# sourceMappingURL=index.js.map