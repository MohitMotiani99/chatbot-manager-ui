import {TopBarActionTypes} from "../action-types/top-bar.actiontype";

export function inputBot(value){
    return {type: TopBarActionTypes.SELECT_BOT,
            botName: value
    };
}

export function addBot(value){
    return {type: TopBarActionTypes.SELECT_BOT,
            bot:value
    };
}

export function removeBot(value){
    return {type: TopBarActionTypes.SELECT_BOT,
            bot: value
    };
}