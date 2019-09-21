import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Service from '../Service';


class ProcessTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [{
            headerName: "Process", field: "processId"
          }, {
            headerName: "Status", field: "status"
          }, {
            headerName: "Number of Items", field: "numberOfItems"
          },{
            headerName: "Information1", field: "information1"
          },{
            headerName: "Information2", field: "information2"
          }],
          rowData: [],
          rowClassRules: {
              "process-failure": function(params) {
                  var status = params.data.status;
                  return status === "KO";
                }
          }
        };
        this.refreshFlows = this.refreshFlows.bind(this);
      }
    
    componentDidMount() {
        this.refreshFlows();
    }

    componentDidUpdate() {
      this.refreshFlows();
    }

    refreshFlows() {
      Service.retrieveAllProcesses()
          .then(response => {
              this.setState({rowData: response.data});
          })
    }
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