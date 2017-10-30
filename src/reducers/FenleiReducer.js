 const FenleiReducer = (state=[],action)=>{
	switch(action.type){
		case "Fen":	

			return action.payload;
/*		case "Fens":
			return action.payloads;*/
		default:
			return state;
	}
}

export default FenleiReducer