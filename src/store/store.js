import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import BotManagerReducer from '../reducers/bot-manager.reducer';
import TrainedDataReducer from '../reducers/trained-data.reducer';
import LoginReducer from '../reducers/login.reducer';
import ScenarioManagerReducer from '../reducers/scenario-manager.reducer';
import ReqAnalysisReducer from '../reducers/req-analysis.reducer';
import TopBarReducer from "../reducers/top-bar.reducer"
import HealthMainReducer from "../reducers/health-main.reducer.js";

const initialState = {};
const middleware  = [thunk]

const rootReducer= combineReducers({

    botManager:  BotManagerReducer,
    trainedData: TrainedDataReducer,
    login: LoginReducer,
    scenarioManager: ScenarioManagerReducer,
    reqAnalysis: ReqAnalysisReducer,
    topBar:TopBarReducer,
    health: HealthMainReducer,

});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
)
    
export default store;
