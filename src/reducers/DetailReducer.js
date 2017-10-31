const DetailReducer = (state=[],action)=>{
	switch(action.type){
		case "Detail_type":	

			return action.payload;
/*		case "Fens":
			return action.payloads;*/
		default:
			return state;
	}
}

export default DetailReducer