import {ScenarioManagerActionType} from "../action-types/scenario-manager.actiontype";


const initialState={
	scenarioEditted:"",
	scenarioName:"",
	scenarioId:"",
	scenarioStrat:"",
	scenarioLOB:"",
	reqMSISDN:true,
	reqFeedback:true,
	scenarioResp:"",
	scenarioRemove:"",
	saveOK:true,
	loadOK:true,
	removeOK:true
};

export default function ScenarioManagerReducer(state=initialState,action){

	switch(action.type){

		case ScenarioManagerActionType.EDIT_SC_IN:
			return{
				...state,
				scenarioEditted:action.scenarioEditted
			};

		case ScenarioManagerActionType.SC_NAME_IN:
			return{
				...state,
				scenarioName:action.scenarioName
			};

		case ScenarioManagerActionType.SC_ID_IN:
			return{
				...state,
				scenarioId:action.scenarioId
			};

		case ScenarioManagerActionType.SC_STRAT_IN:
			return{
				...state,
				scenarioStrat:action.scenarioStrat
			};

		case ScenarioManagerActionType.IS_MSISDN_IN:
			return{
				...state,
				reqMSISDN:action.reqMSISDN
			};

		case ScenarioManagerActionType.IS_FB_IN:
			return{
				...state,
				reqFeedback:action.reqFeedback
			};

		case ScenarioManagerActionType.SC_RESP_IN:
			return{
				...state,
				scenarioResp:action.scenarioResp
			};

		case ScenarioManagerActionType.SC_REMOVE:
			return{
				...state,
				scenarioRemove:action.scenarioRemove
			};

		case ScenarioManagerActionType.SC_LOB_IN:
			return{
				...state,
				scenarioLOB:action.scenarioLOB
			};
		
		case ScenarioManagerActionType.SAVE_SC:
			let res =  fetch('http://localhost:8090/saveScenario', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   	scenario:{
                   		scenarioId:action.actionObj.scenarioId,
                   		scenarioName:action.actionObj.scenarioName,
                   		scenarioStrategy:action.actionObj.scenarioStrat,
                   		scenarioLob:action.actionObj.scenarioLOB,
                   		scenarioResponse:action.actionObj.scenarioResp,
                   		msisdnRequired:action.actionObj.reqMSISDN,
                   		feedbackRequired:action.actionObj.reqFeedback
                   	}
                })
            });

            let result =  res.json();

            if(result.status==200)
			return {
				...state,
				saveOK:true
			}

			else
				return{
					...state,
					saveOK:false
			}
			

         case ScenarioManagerActionType.LOAD_SC:
			res =  fetch('http://localhost:8090/loadScenario', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   	scenarioName:action.scenarioEditted
                })
            });

            result =  res.json();

            if(result.scenarioName==action.scenarioName && result.scenarioId!="")
			return {
				...state,
				scenarioName:result.scenarioName,
				scenarioId:result.scenarioId,
				scenarioStrat:result.scenarioStrategy,
				reqMSISDN:result.msisdnRequired,
				reqFeedback:result.feedbackRequired,
				scenarioResp:result.scenarioResponse
			}

			else
				return state;

			
		
		case ScenarioManagerActionType.REMOVE_SC:
			res =  fetch('http://localhost:8090/removeScenario', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   	scenarioName:action.scenarioEditted
                })
            });

            result = res.json();

           	return state;
			
				
		default :
			return state;
			
	}
}