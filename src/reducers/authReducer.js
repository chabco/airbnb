export default (state = [], action) => {
    if(action.type === "signUp"){
        // I care about this action!
        console.log(action.payload.data)
        return action.payload.data
    }
    return state;
}