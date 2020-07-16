const environment = {
    baseURL: "http://localhost:3000"
};

if(process.env.REACT_APP_ENV === "staging"){
    environment.baseURL = "https://sta.frontend.com";

}