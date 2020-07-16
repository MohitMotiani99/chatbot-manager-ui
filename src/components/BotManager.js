import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import { BotManagerActionType } from "../action-types/bot-manager.actiontype";
import * as BotManagerActions from "../actions/bot-manager.action"
import * as TopBarActions from "../actions/top-bar.action"
import { TopBarActionTypes } from "../action-types/top-bar.actiontype";
import { sizing } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 20,
      alignItems: "left",
      position:"relative",
      top: 10,
      left: -420,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    heading :{
      position:"relative",
      top: -10,
      left: -590,
      fontFamily: "Segoe UI"
    },
    line :{
      position:"relative",
      top: -10,
      width: 900,
      left: -250,
      height: 2,
      backgroundColor:"black"
    },
    heading1 :{
      position:"relative",
      top: -40,
      left: -250,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: -40,
      width: 900,
      left: 180,
      height: 2,
      backgroundColor:"black"
    },
    field1 :{
      position:"relative",
      top: 1880,
      left: 10,
      
    },
  }));
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      position: 'relative',
      top: 45,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 170,
    height: 20,
    paddingTop: 1,
    paddingRight: 12,
    paddingBottom: 1,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const CSSTextField = withStyles({
  root: {
    width: 205,
    padding: '15px 2px',
    position: 'relative',
    top: -70,
    left: 1,
      },
  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      position: 'relative',
      top: 20,
      left: 330,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      align: 'center',
      backgroundColor: '#0367fc',
      borderColor: '#0367fc',
      
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
  
   function InputFields(props) {
    const classes = useStyles();

    const handleChange = (action,value) => {
            switch(action){
        case "SET_BOT_NAME":
      props.dispatch(BotManagerActions.inputBotName(value));
        break;

        case "SET_BOT_TOKEN":
      props.dispatch(BotManagerActions.inputBotToken(value));
        break;
      
        case "SET_BOT_STRATEGY":
      props.dispatch(BotManagerActions.inputBotStrategy(value));
        break;

        case "SET_BOT_ALGORITHM":
      props.dispatch(BotManagerActions.inputBotAlgorithm(value));
        break;

        case "SET_BOT_MSISDN" :
      props.dispatch(BotManagerActions.inputBotMsisdn(value));
        break;

        case "SET_BOT_SCORE":
      props.dispatch(BotManagerActions.inputBotScore(value));
        break;
    }

    };


    async function createBot(){

      let formData = new FormData();
                /*formData.append("botName",props.botName);
                formData.append("botAccessToken",props.botToken);
                formData.append("classifyStrategy",props.botStrategy);
                formData.append("algorithm",props.botAlgorithm);
                formData.append("botScore",props.botScore);
                formData.append("logMsisdn",props.botMsisdn);
                */
               let botProfile={
                    botName:props.botName,
                    botAccessToken:props.botToken,
                    classifyStrategy:props.botStrategy,
                    algorithm:props.botAlgorithm,
                    botScore:props.botScore,
                    logMsisdn:props.botMsisdn,
                }
                const myInput = document.getElementById('contained-button-file');
                formData.append("botProfile",botProfile);
                formData.append("trainFile",myInput.files[0]);

          let res = await fetch('http://10.5.205.104:8080/trainer/createNewBot', {
            method: 'post',
            headers: {
                'Accept': '/',
                'Content-Type': 'application/json'
            },
            body: formData,
        });

        let result =await  res.json();

        if(result.resultMessage=="Saved")
          props.dispatch(TopBarActions.addBot(props.botName));

        console.log(result.resultMessage);
}

async function loadBot(){
fetch(`http://10.5.205.104:8080/trainer/fetch/getBotProfiles?liveBots=true`)
.then(res=>res.json())
.then(res=>{
debugger;
for(var bot in res){
  if(res[bot].botName==props.selectedBot){
    props.dispatch(BotManagerActions.inputBotName(res[bot].botName));
    props.dispatch(BotManagerActions.inputBotToken(res[bot].botAccessToken));
    props.dispatch(BotManagerActions.inputBotStrategy(res[bot].classifyStrategy));
    props.dispatch(BotManagerActions.inputBotAlgorithm(res[bot].algorithm));
    props.dispatch(BotManagerActions.inputBotMsisdn(res[bot].logMsisdn));
    props.dispatch(BotManagerActions.inputBotScore(res[bot].botScore));
  }
}

});
}

    async function deleteBot(){
      let res = await fetch(`http://10.5.205.104:8080/trainer/deleteBot/${props.selectedBot}`, {
                method: 'get'
                
                
            });

            let result =await  res.json();

            if(result.resultMessage=="Saved")
              props.dispatch(TopBarActions.removeBot(props.selectedBot));

            console.log(result.resultMessage);
    }

    



    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading}>
              Manage Bot
            </Typography>
    
            <Divider className={classes.line}/>
        

        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            
              
            
            
                <div className= "field">  
                
                <p> <div className="field1" style={{ position: "relative", left:2, top:-25 }} >Enter Bot Name:  </div> </p>
                <div className="block"><CSSTextField size="small" height={40} style={{ position: "relative", left:2, top:-80}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                                        value={props.botName}
                    onChange={(e)=>handleChange("SET_BOT_NAME",e.target.value)}

                  /> </div>
                
                
                </div>
                
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                
                <p> <div className="field1" style={{ position: "relative", left:5, top:-45}}> Enter Bot Access Token:  </div> </p>
                <div className="block"> <CSSTextField size="small" style={{height: 20, position: "relative", left:2, top:-103,  paddin:20 }}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.botToken}
                    onChange={(e)=>handleChange("SET_BOT_TOKEN",e.target.value)}

                  />
                   </div>
                </div>
            </form>
            
            <p><div className="field1" style={{ position: "relative", left:25, top:-45}}> Enter Bot Strategy: </div></p>
            <FormControl variant="filled" className={classes.formControl}>
        
        <InputLabel htmlFor="filled-strategy-native-simple"></InputLabel>
        
        
            <Select style={{width:205, height: 48, position: "relative", left:1087, top:-107}}
              native
                            value={props.botStrategy}
                    onChange={(e)=>handleChange("SET_BOT_STRATEGY",e.target.value)}
              inputProps={{
                name: 'strategy',
                id: 'filled-strategy-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={"DEFAULT"}>Default</option>
              <option value={"EXTERNAL"}>External</option>
              <option value={"NATIVE"}>Native</option>
              <option value={"GRAPH"}>Graph</option>
            </Select>
            </FormControl>

              </div>
            
              <p><div className= "field1" style={{ position: "relative", left:27, top:-60}}> Enter Bot Algorithm Location: 
              </div></p>
              <div className="block"> 
              <FormControl variant="filled" className={classes.formControl}>

              <InputLabel htmlFor="filled-alg-native-simple"></InputLabel>
              <Select style={{width:205, height: 48, position: "relative", left:1087, top:-125}}
                native
                onChange={handleChange}
                inputProps={{
                  name: 'alg',
                  id: 'filled-alg-native-simple',
                }}
                value={props.botAlgorithm}
                    onChange={(e)=>handleChange("SET_BOT_ALGORITHM",e.target.value)}

              >
                <option aria-label="None" value="" />
                <option value={"postpaid-agent-2,db87c5ddba31ffcc0b308c48b2f9a2cf,default"}>PostPaid</option>
                <option value={2}>PrePaid</option>
                <option value={3}>DTH</option>
                <option value={4}>Telemedia</option>
                <option value={"test_bot.py"}>HR</option>
                <option value={"payments-bank-agent-2,5240347d4e19e7759f084bb883c395ae,default"}>PaymentsBank</option>
              </Select>
              </FormControl>
              </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:-75}}> Bot MSISDN Log:  </div> </p>
              <div className="block"> 
              <FormControl variant="filled" className={classes.formControl}>

                    <InputLabel htmlFor="filled-msisdn-native-simple"></InputLabel>
                    <Select style={{width:205, height: 48, position: "relative", left:1087, top:-143}}
                      native
                      onChange={handleChange}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                                            value={props.botMsisdn}
                    onChange={(e)=>handleChange("SET_BOT_MSISDN",e.target.value)}

                    >
                      <option aria-label="None" value="" />
                      <option value={1}>True</option>
                      <option value={2}>False</option>
                    </Select>
                    </FormControl>

                      <p> <div className = "field1" style={{ position: "relative", left:-355, top:-55}} >Enter Bot Classify Score: </div></p>
                        <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        
                      <div className="block"> 
                      
                          <CSSTextField size="small" style={{width:205, height: 20, position: "relative", left:2, top:-140}}
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                                                    value={props.botScore}
                    onChange={(e)=>handleChange("SET_BOT_SCORE",e.target.value)}

                        />
                                  </div>

                              
                              </div>
            


            

            
            <br />
            <div className={classes.root} style={{  position:"relative", left:-30, top:-40}}>
           <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            
          </label>
        
        </div>
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:330, top:-75}}
            onClick={createBot}>
                Save
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:330, top:-75}} onClick={loadBot}>
                Load
            </BootstrapButton>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Delete Bot
            </Typography>
        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <div className= "field1">  
            
                <br /> <br />
                

            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:350, top:-180}}
            onClick={deleteBot}>
                Delete Bot
            </BootstrapButton>
            </div>
            </div>
      </FormControl>
        </div>
    );
  }

  function mapStateToProps(state) {
    return {
      botName:state.botManager.botName,
      botToken:state.botManager.botAccessToken,
      botStrategy:state.botManager.botStrategy,
      botAlgorithm:state.botManager.botAlgorithm,
      botMsisdn: state.botManager.botMsisdn,
      botScore:state.botManager.botScore,
      selectedBot:state.topBar.botName,
    };
  }
  
  export default connect(mapStateToProps)(InputFields);