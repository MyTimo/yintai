const DetailReducer = (state=[],action)=>{
	switch(action.type){
		case "Detail_type":	

			return action.payload;
/*		case "Fens":
			return action.payloads;*/
		case "lazyLoad":
			var newState = [...state];
			for(var i = 0;i < action.payload.length;i ++){
				newState.push(action.payload[i])
			}
			return newState;

		case 'Sort':
			var newState = [];
			for(var i = 0;i < action.payload.length;i ++){
				newState.push(action.payload[i])
			}
			return newState;

		default:
			return state;
	}
}

export default DetailReducer;