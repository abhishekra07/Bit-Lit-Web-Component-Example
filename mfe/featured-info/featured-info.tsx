import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

import './featuredinfo.css';

@customElement("featured-info")
export class FeaturedInfo extends LitElement {

  /** Get Rid of shadow DOM */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="featured">
                  <div class="featuredItem">
                    <span class="featuredTitle">Revanue</span>
                    <div class="featuredMoneyContainer">
                      <span class="featuredMoney">$2,415</span>
                      <span class="featuredMoneyRate">
                        -11.4 
                      </span>
                    </div>
                    <span class="featuredSub">Compared to last month</span>
                  </div>
                  <div class="featuredItem">
                    <span class="featuredTitle">Sales</span>
                    <div class="featuredMoneyContainer">
                      <span class="featuredMoney">$4,415</span>
                      <span class="featuredMoneyRate">
                        -1.4 
                      </span>
                    </div>
                    <span class="featuredSub">Compared to last month</span>
                  </div>
                  <div class="featuredItem">
                    <span class="featuredTitle">Cost</span>
                    <div class="featuredMoneyContainer">
                      <span class="featuredMoney">$2,225</span>
                      <span class="featuredMoneyRate">
                        +2.4 
                      </span>
                    </div>
                    <span class="featuredSub">Compared to last month</span>
                  </div>
                </div>`;
  }
}
