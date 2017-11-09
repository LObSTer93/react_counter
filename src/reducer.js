export default (prevState = 0, action) => {
	if(action.type === 'INCREMENT'){
		return prevState+1;
	}else if(action.type === 'DECREMENT') {
		return prevState-1;
	}else{
		return prevState;
	}
}