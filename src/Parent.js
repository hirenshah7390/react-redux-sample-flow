import React from 'react';
import Child from './Child';
import {connect} from 'react-redux';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter : 0};

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        var counter = this.props.counter + 1;
      return this.props.dispatch({type:"INCREMENT_COUNTER_VALUE", data : {counter: counter}});
    }

    render(){
        return(
            <Child 
              onclick = {this.onClick} 
              counter = {this.props.counter} 
            />
        );
    }
}

export default connect((state,props) => {
    return {
      counter : state.counter
    };
})(Parent);