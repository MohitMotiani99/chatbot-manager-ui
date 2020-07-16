import {HealthMainActionTypes} from "../action-types/health-main.actiontype";

const initialState={
    result:[]
};

export default function HealthMainReducer(state = initialState, action){
            console.log(action.type);
            console.log(action.result);

    switch(action.type){

        case HealthMainActionTypes.FILL_TABLE:
           /* var x;
            let temp=[];
            for(x in action.result){
                temp.push(x);
            }
            */
            return{
                ...state,
                 result:action.result
            };

        
        default :
            return state;            
    }
}
