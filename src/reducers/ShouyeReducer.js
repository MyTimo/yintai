 const ShouyeReducer = (state=[],action)=>{
	switch(action.type){
		case "Repeat_Show":
			return action.payload;
		default:
			return state;
	}
}
export default ShouyeReducer;