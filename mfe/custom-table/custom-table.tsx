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
          { field: "id" },
          { field: "name" },
          { field: "dob" },
          { field: "job title" },
          { field: "contact no" }
        ],
      rowData: [
          { id: 1, name: "Abhishek R", dob: "11/08/1997", "job title": "Software Developer", "contact no": "8877676666"},
          { id: 2, name: "Rahul A", dob: "19/04/1999", "job title": "Frontend Developer", "contact no": "8875676666"},
          { id: 3, name: "Ajay S", dob: "21/03/1995", "job title": "Devops Engineer", "contact no": "8877947666"},
          { id: 4, name: "Ramesh R", dob: "03/05/1994", "job title": "Data Engineer", "contact no": "8870006666"},
          { id: 5, name: "Rajesh", dob: "13/09/1998", "job title": "Data Analyst", "contact no": "8877611366"},
          { id: 1, name: "Abhishek R", dob: "11/08/1997", "job title": "Software Developer", "contact no": "8877676666"},
          { id: 2, name: "Rahul A", dob: "19/04/1999", "job title": "Frontend Developer", "contact no": "8875676666"},
          { id: 3, name: "Ajay S", dob: "21/03/1995", "job title": "Devops Engineer", "contact no": "8877947666"},
          { id: 4, name: "Ramesh R", dob: "03/05/1994", "job title": "Data Engineer", "contact no": "8870006666"},
          { id: 5, name: "Rajesh", dob: "13/09/1998", "job title": "Data Analyst", "contact no": "8877611366"}
        ],
      defaultColDef: {
        editable: false,
        resizable: true,
        sortable: true,
        sort: 'desc',
        sortingOrder: ['desc','asc']
      },
      domLayout: "autoHeight",
      onGridReady: () => {
        this.setColumnSize();
      }
    }
    let eGridDiv: HTMLElement = document.getElementById('myGrid');
    new Grid(eGridDiv, this.gridOptions);
  }

  setColumnSize() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  /** Get Rid of shadow DOM */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="container full">
                  <div id="myGrid" class="ag-theme-material">
                  </div>
                </div>`;
  }
}
