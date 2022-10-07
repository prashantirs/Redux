export const callAddAction = () => async (dispatch)=>{
    //dispatching action  dispatch({});
    dispatch({
        type: 'increment',
    });
}
export const callSubAction = () => async (dispatch)=>{
    dispatch({
        type: 'decrement',
        payload: 5,
    });
}