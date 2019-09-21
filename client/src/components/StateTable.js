import React from 'react';
import {Component} from 'react';
import Service from '../Service';

class StateTable extends Component {
    constructor(props) {
        super(props);
        this.state= {
            activeProcess: null,
            failedProcess: null,
            totalItems: null,
            itemsLastHour: 10,
            itemsLastDay: 10,
        }
        this.refreshTotalItems = this.refreshTotalItems.bind(this);
        this.refreshActiveProcess = this.refreshActiveProcess.bind(this);
        this.refreshFailedProcess = this.refreshFailedProcess.bind(this);
    }

    componentDidMount() {
       this.refreshTotalItems();
       this.refreshActiveProcess();
       this.refreshFailedProcess();
    }

    componentDidUpdate() {
        this.refreshTotalItems();
        this.refreshActiveProcess();
        this.refreshFailedProcess();
    }

    refreshTotalItems() {
        Service.getTotalItems()
            .then(response => {
                this.setState({totalItems: response.data});
            })
    }

    refreshActiveProcess() {
        Service.getActiveProcessCount()
            .then(response => {
                this.setState({activeProcess: response.data});
            })
    }

    refreshFailedProcess() {
        Service.getFailedProcessCount()
            .then(response => {
                this.setState({failedProcess: response.data});
            })
    }

    render (){
        return(
        <div className="container" style={{
                display: "block",
                justifyContent: "center",
                marginTop: "60px",
                width: "80%"
              }}>
            <div className="row">
                <div className="col-6" style={{
                    textAlign: "left",
                    padding: "8px",
                    height: "40px",
                    backgroundColor: "#3F51B5",
                    color: "#ffffff"
                }}>Processes' State</div>
                <div className="col-6" style={{
                    textAlign: "left",
                    padding: "8px",
                    height: "40px",
                    backgroundColor: "#65C982",
                    color: "#ffffff"
                }}>Queue's State</div>
                <div className="col-3" style={{
                    textAlign: "left",
                    padding: "15px",
                    paddingTop:"30px",
                    height: "140px",
                    color: "#000000",
                    border: "1px solid #EEEEEE"
                }}> 
                <h6 style={{color: "#555555"}}>Active Processes</h6>
                <h2><b style={{
                    padding: "30px",
                    color: '#259B24'
                    }}>
                    {this.state.activeProcess}
                    </b></h2>
                </div>
                
                <div className="col-3" style={{
                    textAlign: "left",
                    padding: "15px",
                    paddingTop:"30px",
                    height: "140px",
                    color: "#000000",
                    border: "1px solid #EEEEEE"
                }}>
                <h6 style={{color: "#555555"}}>Failed Processes</h6>
                <h2><a href="/Log" style={{
                    padding: "30px",
                    color: '#E51C23'
                    }}>
                    <b>{this.state.failedProcess}</b>
                    </a></h2>
                </div>
                
                <div className="col-2" style={{
                    textAlign: "left",
                    padding: "15px",
                    paddingTop:"30px",
                    height: "140px",
                    color: "#000000",
                    border: "1px solid #EEEEEE"
                }}>
                    <h6 style={{color: "#555555"}}>Total Items</h6>
                    <h2><b style={{
                    padding: "10px"
                    }}>
                    {this.state.totalItems}
                    </b></h2>
                    </div>
                    <div className="col-2" style={{
                    textAlign: "left",
                    padding: "15px",
                    paddingTop:"30px",
                    height: "140px",
                    color: "#000000",
                    border: "1px solid #EEEEEE"
                }}>
                    <h6 style={{color: "#555555"}}>Items Processed</h6>
                    <h2><b style={{
                    padding: "10px"
                    }}>
                    {this.state.itemsLastHour}
                    </b></h2>
                    <p style={{
                        textAlign: "right",
                        fontSize: "15px",
                        color: "#555555"
                    }}>in Last Hour</p>
                    </div>
                <div className="col-2" style={{
                    textAlign: "left",
                    padding: "15px",
                    paddingTop:"30px",
                    height: "140px",
                    color: "#000000",
                    border: "1px solid #EEEEEE"
                }}>
                    <h6 style={{color: "#555555"}}>Items Processed</h6>
                    <h2><b style={{
                    padding: "10px"
                    }}>
                    {this.state.itemsLastDay}
                    </b></h2>
                    <p style={{
                        textAlign: "right",
                        fontSize: "15px",
                        color: "#555555"
                    }}>on Last Day</p>
                    </div>
                    
            </div>
        </div>

        );
    }
}

export default StateTable;
