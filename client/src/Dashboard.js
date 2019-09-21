import React, { Component } from 'react';
import Time from './components/Time';
import StateTable from './components/StateTable';
import ProcessTable from './components/ProcessTable';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Time />
                <StateTable />
                <ProcessTable />
            </div>
        )
    }
}
export default Dashboard;