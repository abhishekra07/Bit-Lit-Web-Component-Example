import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { Grid, GridOptions }  from 'ag-grid-community';

import './custom-table.css';

@customElement("custom-table")
export class CustomTable extends LitElement {

  gridOptions: GridOptions = {};

  firstUpdated(changedProperties) {
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
        ],
      defaultColDef: {
        editable: false,
        resizable: true
      },
      domLayout: "autoHeight"
    }
    let eGridDiv: HTMLElement = document.getElementById('myGrid');
    new Grid(eGridDiv, this.gridOptions);
  }

  /** Get Rid of shadow DOM */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="container">
                  <div id="myGrid" style="width:100%;" class="ag-theme-material">
                  </div>
                </div>`;
  }
}
