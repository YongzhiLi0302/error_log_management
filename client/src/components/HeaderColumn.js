import React, {Component} from 'react';

class HeaderColumn extends Component {
    render(){
     return (<div className="hcol">{this.props.label}</div>); 
    } 
  }

  export default HeaderColumn;