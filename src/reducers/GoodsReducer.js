const GoodsReducer = (state={slider:[]},action)=>{
	switch (action.type){
		case "Show_goods":
			return action.payload;
		default :
			return state
	}
}

export default GoodsReducer;