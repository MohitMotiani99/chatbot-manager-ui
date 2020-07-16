import {ReqAnalysisActionType} from "../action-types/req-analysis.actiontype";

export function inputEncrypted(encrval){
    return {type:ReqAnalysisActionType.SET_ENCRYPTED,
            encrypted: encrval
    };
}

export function inputDecrypted(decrval){
    return {type:ReqAnalysisActionType.SET_DECRYPTED,
            decrypted: decrval
    };
}



