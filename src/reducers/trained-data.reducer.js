import {TrainedDataActionType} from "../action-types/trained-data.actiontype";

const initialState={
    query:"",
    botIntent:"",
    botScenario:"",
    result:[],
    scList:[],
    inList:[],
    scDList:[]

};

export default function TrainedDataReducer(state = initialState, action){

    switch(action.type){

        case TrainedDataActionType.SET_QUERY:
            return{
                ...state, query:action.query
            };

        case TrainedDataActionType.SET_BOT_INTENT:
            return{
                ...state, botIntent:action.botIntent
            };

        case TrainedDataActionType.SET_BOT_SCENARIO:
            return{
                ...state, botScenario:action.botScenario
            };

        case TrainedDataActionType.SET_RESULT:
            return{
                ...state, result:action.result
            };

        case TrainedDataActionType.SET_SCLIST:
            return{
                ...state, scList:action.scList
            };

        case TrainedDataActionType.SET_INLIST:
            return{
                ...state, inList:action.inList
            };

        case TrainedDataActionType.SET_SCDLIST:
            return{
                ...state, scDList:action.scDList ? action.scDList : []
            };

        case TrainedDataActionType.SET_INTENT:
            let temp={};
            console.log("state.botScenario --- ", state.botScenario)
            console.log("state.botIntent --- ", state.botIntent)
            for(var x in state.scDList){
                if(state.scDList[x].scenario && state.scDList[x].scenario.scenarioName===state.botScenario)
                {
                    temp=state.scDList[x];
                    break;
                }
            }
            for(var x in state.scDList){
             if(state.scDList[x].label===state.botIntent)
                {
                    state.scDList[x].scenario=temp.scenario;
                    break;
                }   
            }
            return state;
//FORECHANGE
        case TrainedDataActionType.SET_BINTENT:
            let flag1=0,flag2=0,flag3=0;
            temp={};
            for(var x in state.scDList){
                if(state.scDList[x].scenario && state.scDList[x].scenario.scenarioName===action.obj.scenario.scenarioName)
                {
                    temp=state.scDList[x];
                    break;
                }
            }
            for(var x in state.scDList){
                if(state.scDList[x].label===action.obj.label)
                {
                    state.scDList[x].scenario=action.obj.scenario;
                    flag1=1;break;
                }   
            }
            for(var x in state.scList){
                if(action.obj.scenario && state.scList[x]===action.obj.scenario.scenarioName)
                {
                    
                    flag2=1;break;
                }
            }
            for(var x in state.inList){
                if(state.inList[x]===action.obj.label)
                {
                    flag3=1;break;
                }
            }
            if(flag1!=1)
            state.scDList.push(action.obj);
            if(flag2!=1)
            state.scList.push(action.obj.scenario && action.obj.scenario.scenarioName);
            if(flag3!=1)
            state.inList.push(action.obj.label);

            return state;

//FINAL
        case TrainedDataActionType.ADD_SCENARIO:
            if(!action.scenario) {
                return state
            }
            temp=[];
            let temp2=action.scenario;
            temp2.id=action.scenario.scenarioId;
            temp2.scenarioKey=action.scenario.scenarioId+"-"+action.scenario.scenarioName;
            temp.scenario=temp2;
            temp.id="null";
            temp.label="null";
            temp.sampleCount="0";
            state.scDList.push(temp);
            state.scList.push(state.action.scenarioName);
            return state;

//FINAL
       case TrainedDataActionType.REM_SCENARIO:
            for(var x in state.scDList){
                if(state.scDList[x].scenario && state.scDList[x].scenario.scenarioName!=action.remScenario)
                    continue;
                else if(state.scDList[x].scenario)
                    state.scDList[x].scenario.scenarioName=state.scDList[x].scenario.scenarioId="null"
            }
            temp2=[];
            for(var x in state.scList){
                if(state.scList[x]!=action.remScenario)
                    temp2.push(state.scList[x])
            }
            return{
                ...state,
                scList:temp2,
            };


        /*
        case TrainedDataActionType.GENERATE:
            return state;


        case TrainedDataActionType.MAP:
            
            return state;
        */

        default:
            return state;
  
    }
    
}