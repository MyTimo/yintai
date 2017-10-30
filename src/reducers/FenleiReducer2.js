 const FenleiReducer2 = (state={lis4:[]},action)=>{
	switch(action.type){
		case "Fens":
		console.log(action.payload)

			return action.payload;
		default:
			return state;
	}
}

export default FenleiReducer2