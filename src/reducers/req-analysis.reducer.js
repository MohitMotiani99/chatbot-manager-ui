import {ReqAnalysisActionType} from "../action-types/req-analysis.actiontype";
const initialState={
    encrypted:"",
    decrypted:"",
   

};

export default function ReqAnalysisReducer(state = initialState, action){

    switch(action.type){

        case ReqAnalysisActionType.SET_ENCRYPTED:
            return{
                ...state, encrypted:action.encrypted
            };

        case ReqAnalysisActionType.SET_DECRYPTED:
            return{
                ...state, decrypted:action.decrypted
            };

       

        default:
            return state;
  
    }
    
}

