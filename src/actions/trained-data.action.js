import {TrainedDataActionType} from "../action-types/trained-data.actiontype";

export function inputQuery(queryIn){
    return {type:TrainedDataActionType.SET_QUERY,
            query: queryIn
    };
}

export function inputBotIntent(intIn){
    return {type:TrainedDataActionType.SET_BOT_INTENT,
            botIntent: intIn
    };
}

export function inputBotScenario(scIn){
    return {type: TrainedDataActionType.SET_BOT_SCENARIO,
            botScenario: scIn
    };
}

export function setResult(resultval){
    return {type: TrainedDataActionType.SET_RESULT,
            result:resultval
    };
}

export function setScList(resultval){
    return {type: TrainedDataActionType.SET_SCLIST,
            scList:resultval
    };
}

export function setInList(resultval){
    return {type: TrainedDataActionType.SET_INLIST,
            inList:resultval
    };
}

export function setScDList(resultval){
    return {type: TrainedDataActionType.SET_SCDLIST,
            scDList:resultval
    };
}

export function setIntent(){
    return{
        type:TrainedDataActionType.SET_INTENT,
    }
}

export function setBulkIntent(objval){
    return{
        type:TrainedDataActionType.SET_BINTENT,
        obj:objval
    }
}

//FINAL
export function addScenario(obj){
    return{
        type:TrainedDataActionType.ADD_SCENARIO,
        scenario:obj
    }
}
//FINAL
export function remoScenario(val){
    return{
        type:TrainedDataActionType.REM_SCENARIO,
        remScenario:val
    }
}
