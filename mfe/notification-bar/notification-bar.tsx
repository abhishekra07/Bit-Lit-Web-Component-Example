import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './notificationbar.css';

@customElement("notification-bar")
export class NotificationBar extends LitElement {

  createRenderRoot() {
    return this;
  }

  @property()
  backgroundColor = '#5999ff'

  render() {
    return html`<div class="topbar" style="background-color: ${this.backgroundColor}">
                  <div class="topbarWrapper">
                    <div class="topLeft">
                      <span class="logo">Code-Labs</span>
                    </div>
                    <div class="topRight">
                      <div class="navigation-item">
                        Home
                      </div>
                      <div class="navigation-item">
                        Services
                      </div>
                      <div class="navigation-item">
                        About
                      </div>
                      <img src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-admin-rolls-glyph-black-icon-png-image_4008300.jpg" alt="" class="topAvatar" />
                    </div>
                  </div>
                </div>`;
  }
}
