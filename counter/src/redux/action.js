export const INCREMENT_COUNTER = "ADD_COUNT";
export const DECREMENT_COUNTER = "REDUCE_COUNT"
export const addCount = ()=>{
    return {
        type:INCREMENT_COUNTER,
        payload:1,        
    }
}
export const reduceCount = ()=>{
    return {
        type:DECREMENT_COUNTER,
        payload:-1   
    }
}
