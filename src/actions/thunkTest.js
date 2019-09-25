// a test thunk
// what is a thunk?
// a thunk is a function that wrap an expression to delay its evaluation
export default() => {
    return waitASec
}

function waitASec(dispatch, getState) {
    console.log("waitASec is running!")
    setTimeout(() => {
        console.log("waitASec ran after 5 seconds")
        dispatch({
            type: "aThunkAction"
        })
    }, 5000);
}