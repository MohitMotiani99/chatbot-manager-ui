import {ScenarioManagerActionType} from "../action-types/scenario-manager.actiontype";


export function inputEditSC(editSC){
	return {type:ScenarioManagerActionType.EDIT_SC_IN,
			scenarioEditted:editSC
	};
}

export function inputSCName(SCName){
	return {type:ScenarioManagerActionType.SC_NAME_IN,
			scenarioName:SCName
	};
}

export function inputSCId(SCId){
	return {type:ScenarioManagerActionType.SC_ID_IN,
			scenarioId:SCId
	};
}

export function inputSCStrat(SCStrat){
	return {type:ScenarioManagerActionType.SC_STRAT_IN,
			scenarioStrat:SCStrat
	};
}

export function inputSCLOB(SCLOB){
	return {type:ScenarioManagerActionType.SC_LOB_IN,
			scenarioLOB:SCLOB
	};
}

export function inputMSISDN(msisdn){
	return {type:ScenarioManagerActionType.IS_MSISDN_IN,
			reqMSISDN:msisdn === true? 1:2
	};
}

export function inputFB(feedback){
	return {type:ScenarioManagerActionType.IS_FB_IN,
			reqFeedback:feedback === true? 1:2
	};
}

export function inputResp(resp){
	return {type:ScenarioManagerActionType.SC_RESP_IN,
			scenarioResp:resp
	};
}

export function inputRemovalScenario(remSC){
	return {type:ScenarioManagerActionType.SC_REMOVE,
			scenarioRemove:remSC
	};
}

export function saveScenario(obj){
	return {type:ScenarioManagerActionType.SAVE_SC,
			actionObj:{
			reqMSISDN:obj.reqMSISDN,
			reqFeedback:obj.reqFeedback,
			scenarioId:obj.scenarioId,
			scenarioStrat:obj.scenarioStrat,
			scenarioResp:obj.scenarioResp,
			scenarioLOB:obj.scenarioLOB,
			scenarioName:obj.scenarioName
			}
	};
}

export function loadScenario(obj){
	return {type:ScenarioManagerActionType.LOAD_SC,
			scenarioEditted:obj.scenarioEditted
	};
}

export function removeScenario(obj){
	return {type:ScenarioManagerActionType.REMOVE_SC,
			scenarioEditted:obj.scenarioEditted
	};
}
