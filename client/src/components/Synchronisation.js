import React, { Component } from 'react'

class Synchronisation extends Component {
    render() {
        return (
    
            <div>
                <div className="container" style={{
                    backgroundColor: "#65C982",
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
                    }}>Synchronisation</h5>

                    <form>
                    <div className="form-row align-items-center" style={{padding: "20px"}}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label id="inputObjectId">Object ID</label>
                                <input type="text" className="form-control" id="inputObjectId" placeholder="Enter Object ID..."></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label id="objectType">Object Type</label>
                                <select id="objectType" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>Order</option>
                                    <option>Product</option>
                                    <option>Customers</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <button type="synchronize" className="btn btn-primary mb-2">Synchronize</button>
                            </div>
                        </div>
                    </div>
                    </form>
                    
            
                </div>  
            </div>
            
        )
    }
}
export default Synchronisation;