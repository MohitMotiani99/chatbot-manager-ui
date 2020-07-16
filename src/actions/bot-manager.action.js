import {BotManagerActionType} from "../action-types/bot-manager.actiontype";

export function inputBotName(name){
    return {type: BotManagerActionType.SET_BOT_NAME,
            botName: name
    };
}

export function inputBotToken(token){
    return {type: BotManagerActionType.SET_BOT_TOKEN,
            botToken: token
    };
}

export function inputBotStrategy(strategy){
    return {type: BotManagerActionType.SET_BOT_STRATEGY,
            botStrategy: strategy
    };
}

export function inputBotAlgorithm(algorithm){
    return {type: BotManagerActionType.SET_BOT_ALGORITHM,
            botAlgorithm: algorithm
    };
}

export function inputBotMsisdn(msisdn){
    return {type: BotManagerActionType.SET_BOT_MSISDN,
            botMsisdn: msisdn === true ? 1 : 2
    };
}

export function inputBotScore(score){
    return {type: BotManagerActionType.SET_BOT_SCORE,
            botScore: score
    };
}