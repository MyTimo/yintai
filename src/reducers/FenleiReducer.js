 const ShouyeReducer = (state=[],action)=>{
	switch(action.type){
		case "Fen":			
			return action.payload;
		default:
			return state;
	}
}
export default ShouyeReducer;