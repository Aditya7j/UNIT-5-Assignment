import { INCREMENT_COUNTER,DECREMENT_COUNTER  } from "./action";
const init_store = {
    count:0,
}
export const reducer = (store=init_store,{type,payload})=>{
    if(type===INCREMENT_COUNTER){
        return  {...store,count:store.count + payload}
    }
    if(type===DECREMENT_COUNTER ){
        return {...store,count:store.count + payload}
    }
    else{
        return store
    } 
}

