import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


class ProcessTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [{
            headerName: "Process", field: "process"
          }, {
            headerName: "Status", field: "status"
          }, {
            headerName: "Number of Items", field: "items"
          },{
            headerName: "Information1", field: "info1"
          },{
            headerName: "Information2", field: "info2"
          }],
          rowData: [{
            process: "1", status: "OK", items: 35000, info1: "info1", info2: "info2"
          }, {
            process: "2", status: "KO", items: 32000, info1: "info1", info2: "info2"
          }, {
            process: "3", status: "OK", items: 72000, info1: "info1", info2: "info2"
          }, {
            process: "4", status: "OK", items: 72000, info1: "info1", info2: "info2"
          }, {
            process: "5", status: "KO", items: 79000, info1: "info1", info2: "info2"
          }],
            rowClassRules: {
                "process-failure": function(params) {
                    var status = params.data.status;
                    return status === "KO";
                  }
            }
        }
      }
    
    //   componentDidMount() {
    //     fetch('https://api.myjson.com/bins/15psn9')
    //         .then(result => result.json())
    //         .then(rowData => this.setState({rowData}))
    // }

      render() {
        return (
                <div className="container" style={{
                    display: "contents",
                    justifyContent: "center",
                    marginTop: "60px"
                  }}>
                      <div className="container" style={{
                    backgroundColor: "#F7F7F7",
                    marginTop: "30px",
                    justifyContent: "center",
                    border: "1px solid #F7F7F7",
                    height: "35px"
                }}/>
                <div className="container" style={{
                    padding: "30px",
                    justifyContent: "center",
                    border: "1px solid #F7F7F7",
                    height: "90px"
                    }}>
                    <h5 style={{
                        paddingLeft:"10px",
                        borderLeft: "5px solid #555555"
                    }}>Processes' States</h5>
                </div>

                <div style={{
                    height: '500px', 
                    justifyContent: "center",
                    margin: "auto",
                    border: "1px solid #f7f7f7"
                }}
                    className="ag-theme-material container"
                >
              
                    <AgGridReact 
                        enableColResize={true}
                        enableFilter={true}
                        pagination={true} 
                        paginationAutoPageSize={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        rowClassRules= {this.state.rowClassRules}
                        alignedGrids={'center'}
                        
                    >
                    </AgGridReact>
                </div>
            </div>
        
        );
      }
}

export default ProcessTable;