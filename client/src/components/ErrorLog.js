import React, { Component } from 'react';
import { MDBBtn, MDBDataTable, MDBCollapse  } from 'mdbreact';
import ErrorsService from '../ErrorsService';


class ErrorLog extends Component {
    constructor (props) {
        super(props);
        this.state={
            totalCount: null,
            collapseID: "",
            columns: [
                {
                    label: "Error ID",
                    field: "error",
                },
                {
                    label: "Description",
                    field: "description",
                    width: 200,
                },
                {
                    label: "Flow",
                    field: "flow",
                    width: 100
                },
                {
                    label: "Error Type",
                    field: "type",
                    width: 100
                },
                {
                    label: "Emergency Level",
                    field: "emergency",
                    width: 100,
                }
            ],
            rows: [],
        };
        this.refreshErrors = this.refreshErrors.bind(this);
        this.refreshTotalCount = this.refreshTotalCount.bind(this);
    }

    componentDidMount() {
        this.refreshErrors();
        this.refreshTotalCount();
    }
    componentDidUpdate() {
        this.refreshErrors();
        this.refreshTotalCount();
    }

    refreshErrors() {
        ErrorsService.retrieveAllErrors()
            .then(response => {
                this.setState({rows: response.data});
            })
    }

    refreshTotalCount() {
        ErrorsService.getErrorsTotalCount()
            .then(response => {
                this.setState({totalCount: response.data});
            })
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }


    render() {
        return (
            <div>
                <div className="container" style={{
                    backgroundColor: "#3F51B5",
                    marginTop: "30px",
                    justifyContent: "center",
                    border: "1px solid #F7F7F7",
                    height: "35px"
                }}/>
                <div className="container" style={{
                    padding: "30px",
                    justifyContent: "center",
                    border: "1px solid #F7F7F7",
                    height: "110px"
                }}>
                    <h5 style={{
                        paddingLeft:"10px",
                        borderLeft: "5px solid #555555"
                    }}>Unread Errors</h5>
                    <p style={{
                        paddingLeft:"16px", fontSize: "14px"}}>Total Count: {this.state.totalCount}</p>
                </div>

{/* // Here starts the table */}
                <div className="container" style={{
                    justifyContent: "center",
                    padding: "30px",
                    borderLeft: "1px solid #f7f7f7",
                    borderRight: "1px solid #f7f7f7"
                }}>
                <MDBDataTable 
                hover
                pagination = "true" 
                columns = {this.state.columns}
                rows = {this.state.rows}
                />
{/* <>
                        <MDBBtn
                            color="primary"
                            onClick={this.toggleCollapse("basicCollapse")}
                            style={{ marginBottom: "1rem" }}
                        >
                            COLLAPSE BUTTON
                            </MDBBtn>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </MDBCollapse>
                            </>  */}
                
                </div>
                </div>
                 
        )
    }
}
export default ErrorLog;