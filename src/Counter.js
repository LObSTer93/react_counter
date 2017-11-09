import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{

	render(){
	    const {value, onIncrement, onDecrement} = this.props;
		return(
		    <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
    return {value: state};
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: ()=>
            dispatch({
                type: 'INCREMENT'
            }),
        onDecrement: ()=>
            dispatch({
                type: 'DECREMENT'
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)