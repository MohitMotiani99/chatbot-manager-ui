import {LoginActionType} from "../action-types/login.actiontype";

export function inputUser(userIn){
    return {type:LoginActionType.SET_QUERY,
            user: userIn
    };
}

export function inputPassword(passwordIn){
    return {type:LoginActionType.SET_BOT_INTENT,
            password: passwordIn
    };
}

export function loggedIn(isLoggedin){
    return {type:LoginActionType.LOGGED_IN,
            isLoggedIn: isLoggedin
    };
}

export function setJwt(Jwt){
    return {type:LoginActionType.SET_JWT,
            jwt:Jwt
    };
}


