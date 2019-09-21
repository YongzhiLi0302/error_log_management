import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const flow = [
    { label: "All", value: 0},
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 }];

  const errorType = [
      { label: "All", value: 0},
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 }];

class ObjectState extends Component {
    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
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
                    border: "1px solid #F7F7F7",
                    height: "auto",
                }}>
                    <h5 style={{
                        paddingLeft:"10px",
                        borderLeft: "5px solid #555555"
                    }}>Object State</h5>

                    
                    <span style={{padding: "10px", display:"flex"}}> 
                        <h6 style={{ paddingTop: "15px"}}>Order: </h6>
                        <Select className="mt-2 col-md-2 col-offset-4" options={flow} defaultValue={{ label: "All", value: 0}} onChange={this.handleChange} autoFocus={true} />
                    
                        <h6 style={{
                            paddingLeft: "40px",
                            paddingTop: "15px"
                        }}>Product: </h6>
                        <Select className="mt-2 col-md-2 col-offset-4" options={errorType} defaultValue={{ label: "All", value: 0}} onChange={this.handleChange} autoFocus={true} />

                        <h6 style={{
                            paddingLeft: "40px",
                            paddingTop: "15px"
                        }}>Customer: </h6>
                        <Select className="mt-2 col-md-2 col-offset-4" options={errorType} defaultValue={{ label: "All", value: 0}} onChange={this.handleChange} autoFocus={true} />

                        <h6 style={{
                            paddingLeft: "40px",
                            paddingTop: "15px"
                        }}>Type: </h6>
                        <button type="button" className="btn btn-light" style={{margin: "5px"}}>All</button>
                        <button type="button" className="btn btn-danger" style={{margin: "5px"}}>A</button>
                        <button type="button" className="btn btn-success" style={{margin: "5px"}}>B</button>
                        <button type="button" className="btn btn-secondary" style={{margin: "5px"}}>C</button>
                    </span>
                        <hr/>
                    <div className="row" style={{justifyContent:"space-around"}}>
                        <div className="col-3" style={{
                            textAlign: "left",
                            padding: "15px",
                            paddingTop:"30px",
                            height: "140px",
                            }}>
                            <h6 style={{color: "#555555"}}>Value: </h6>
                            <h2><b style={{
                                padding: "30px",
                                color: '#3F51B5',
                                }}>
                                    Value
                            </b></h2>
                        </div>

                            <div className="col-3" style={{
                                textAlign: "left",
                                padding: "15px",
                                paddingTop:"30px",
                                height: "140px"
                            }}>
                                <h6 style={{color: "#555555"}}>Date Last Seen: </h6>
                                <h2><b style={{
                                    padding: "30px",
                                    color: '#3F51B5'
                                    }}>
                                    Date
                                </b></h2>
                            </div>
                            
                            <div style={{
                                textAlign: "left",
                                padding: "15px",
                                paddingTop:"30px",
                                height: "140px",
                            }}>
                                <h6 style={{color: "#555555"}}>State of Last Process: </h6>
                                <h2><b style={{
                                    padding: "30px",
                                    color: '#3F51B5'
                                    }}>
                                    STATE
                                </b></h2>
                            </div>
                        </div>
                </div>
            </div>  
            
        )
    }
}

export default ObjectState;