import React, { Component } from 'react'
import ObjectState from './components/ObjectState'
import Synchronisation from './components/Synchronisation'

export default class EBSManagement extends Component {
    render() {
        return (
            <div>
                <ObjectState/>
                <Synchronisation/>
            </div>
        )
    }
}
