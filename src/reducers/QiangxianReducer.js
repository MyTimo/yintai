const QiangxianReducer = (state=[],action)=>{
	switch(action.type){
		case "Qiangxian_type":	

			return action.payload;
/*		case "Fens":
			return action.payloads;*/
		default:
			return state;
	}
}

export default QiangxianReducer;