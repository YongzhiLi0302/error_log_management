import React, { Component } from 'react';
import { MDBBtn, MDBDataTable, MDBCollapse  } from 'mdbreact';
import Service from '../Service';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class ErrorLog extends Component {
    constructor (props) {
        super(props);
        this.state={
            totalCount: null,
            collapseID: "",
            columns: [
                {
                    label: "ID",
                    field: "error",
                },
                {
                    label: "Description",
                    field: "description"
            
                },
                {
                    label: "Flow",
                    field: "flow",
                    width: 80
                },
                {
                    label: "Type",
                    field: "type",
                    width: 80
                },
                {
                    label: "Emergency",
                    field: "emergency",
                    width: 100,
                },
                {
                    label: "Actions",
                    field: "actions",
                    width: 200,
                }
            ],
            rows: [],
        };
        this.refreshErrors = this.refreshErrors.bind(this);
        this.refreshTotalCount = this.refreshTotalCount.bind(this);
        this.rowAddActions = this.rowAddActions.bind(this);
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
        Service.retrieveAllErrors()
            .then(response => {
                this.rowAddActions(response.data);
            })
    }

    rowAddActions(data) {
        data = data.map((row) => {
            return (
                [row.id, row.description, row.flow, row.errorType, row.emergency, 
                    <DropdownButton id="dropdown-basic-button" title="Actions">
                        <Dropdown.Item href="#/action-1">Submit Treatment</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Mark as Read</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Send Email to Flow Manager</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Send Email to Flow Provider</Dropdown.Item>
                    </DropdownButton>
                    
                ]
            )
        }
        );
        this.setState({rows: data});
    }

    refreshTotalCount() {
        Service.getErrorsTotalCount()
            .then(response => {
                this.setState({totalCount: response.data});
            })
    }

    // toggleCollapse = collapseID => () => {
    //     this.setState(prevState => ({
    //       collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    //     }));
    // }


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