import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { Grid, GridOptions }  from 'ag-grid-community';

import './custom-table.css';

@customElement("custom-table")
export class CustomTable extends LitElement {

  gridOptions: GridOptions = {};

  firstUpdate(){
    this.gridOptions = {
      columnDefs: [
          { field: "make" },
          { field: "model" },
          { field: "price" }
        ],
      rowData: [
          { make: "Toyota", model: "Celica", price: 35000 },
          { make: "Ford", model: "Mondeo", price: 32000 },
          { make: "Porsche", model: "Boxter", price: 72000 }
        ]
    }
    let eGridDiv: HTMLElement = document.getElementById('myGrid');
    new Grid(eGridDiv, this.gridOptions);
  }

  /** Get Rid of shadow DOM */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div id="myGrid" style="height: 200px; width:500px;" class="ag-theme-material"></div>`;
  }
}
