import React,{useEffect} from 'react';
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
import { ScenarioManagerActionType } from "../action-types/scenario-manager.actiontype";
import { connect } from "react-redux";
import * as ScenarioManager from "../actions/scenario-manager.action";
import * as TrainedData from "../actions/trained-data.action";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 30,
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
      left: -540,
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
      top: -90,
      left: -180,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: -90,
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
    height: 30,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
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
    padding: '5px 20px',
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
  
  function InputTextField(props) {

    const classes = useStyles();
    useEffect(() => {
    if(props.scList.length==0 && props.scDList.length==0){
      let temp2=[];
      fetch(`http://10.5.205.104:8080/trainer/getBotScenarios/${props.botName}`)
        .then(res=>res.json())
        .then(res=>{
          for(var x in res){
            if(!res[x].scenario) {
              continue;
            }
            temp2.push(res[x].scenario.scenarioName);
          }
          props.dispatch(TrainedData.setScList(temp2));
  
          props.dispatch(TrainedData.setScDList(res));
        });
    }
  },[props.botName]);
    const handleChange = (action,input) => {
      switch(action){
        case "SCEDIT_IN" :  
          props.dispatch(ScenarioManager.inputEditSC(input));
          break;
  
        case "SC_NAME" :
          props.dispatch(ScenarioManager.inputSCName(input));
          break;   
        
  
        case "ID_IN" :
          props.dispatch(ScenarioManager.inputSCId(input));
          break; 
        case "STRAT_IN" :  
          props.dispatch(ScenarioManager.inputSCStrat(input));
          break;
  
        case "LOB_IN" :
          props.dispatch(ScenarioManager.inputSCLOB(input));
          break; 
        case "MSISDN_IN" :  
          props.dispatch(ScenarioManager.inputMSISDN(input));
          break;
  
        case "FB_IN" :
          props.dispatch(ScenarioManager.inputFB(input));
          break;  
        case "RESP_IN" :  
          props.dispatch(ScenarioManager.inputResp(input));
          break;
  
        case "REMSC_IN" :
          props.dispatch(ScenarioManager.inputRemovalScenario(input));
          break;                       
     
        }
      };

      async function saveScenario(){
        let res = await fetch(`http://10.5.205.104:8080/trainer/saveScenario`, {
          method: 'post',
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                scenarioName:props.scenarioName,
                scenarioId:props.scenarioId,
                scenarioStrategy:props.scenarioStrat,
                scenarioResponse:props.scenarioResp,
                msisdnRequired:props.reqMSISDN,
                feedbackRequired:props.reqFeedback,
                scenarioLob:props.scenarioLOB,
          })
      });
      props.dispatch(TrainedData.addScenario(
        {
                scenarioName:props.scenarioName,
                scenarioId:props.scenarioId,
                scenarioStrategy:props.scenarioStrat,
                scenarioResponse:props.scenarioResp,
                msisdnRequired:props.reqMSISDN,
                feedbackRequired:props.reqFeedback,
                scenarioLob:props.scenarioLOB,
        }));
      let result = await res.json();


}

    async function loadScenario(){
      var sc;
      fetch(`http://10.5.205.104:8080/trainer/getAllScenarios`)
        .then(res=>res.json())
        .then(res=>{

          for(sc in res){
            if(res[sc].scenarioName==props.scenarioEditted)
            {
              props.dispatch(ScenarioManager.inputSCName(res[sc].scenarioName));
              props.dispatch(ScenarioManager.inputSCId(res[sc].scenarioId));
              props.dispatch(ScenarioManager.inputSCStrat(res[sc].scenarioStrategy));
              props.dispatch(ScenarioManager.inputSCLOB(res[sc].scenarioLob));
              props.dispatch(ScenarioManager.inputMSISDN(res[sc].msisdnRequired.toString()));
              props.dispatch(ScenarioManager.inputFB(res[sc].feedbackRequired.toString()));
              props.dispatch(ScenarioManager.inputResp(res[sc].scenarioResponse));
              break;
            }
          }

        });

  }

  async function remScenario(){
    let res = await fetch(`http://10.5.205.104:8080/trainer/removeScenario?name=${props.scenarioRemove}`, {
              method: 'get'
              
          });


      let result =await res.json();  
      if(result==true){
        props.dispatch(TrainedData.remoScenario(props.scenarioRemove));
      }
                alert("Scenario Removed");      
    
  }



    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading}>
              Manage Scenario
            </Typography>
    
            <Divider className={classes.line}/>
        

        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            
              
            
            
                <div className= "field">  
                
                <p> <div className="field1" style={{ position: "relative", left:2, top:-10 }} >Select Scenario to Edit:  </div> </p>
                <div className="block">
                <FormControl variant="filled" className={classes.formControl}>
                
                <Select style={{width:200, height:48, position: "relative", left:425, top:-70}}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={props.scenarioEditted}
                onChange={(e)=>handleChange("SCEDIT_IN",e.target.value)}
                >
                          {
                props.scList.map((scName) => (
                  <option value={scName}>{scName}</option>
                  // <MenuItem  value={scName} >
                  //   {scName}
                  // </MenuItem>
              ))}
                </Select>
                </FormControl>
                   </div>
                
                
                </div>
                <p><div className="field1" style={{ position: "relative", left:25, top:-10}}> Enter Scenario Name: </div></p>
            <CSSTextField size="small" style={{height: 30, position: "relative", left:330, top:-61}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.scenarioName}
                    onChange={(e)=>handleChange("SC_NAME",e.target.value)}
                  />
            
              
            
            
            <p><div className="field1" style={{ position: "relative", left:25, top:-35}}> Enter Scenario ID: </div></p>
            <CSSTextField size="small" style={{height: 30, position: "relative", left:330, top:-85}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.scenarioId}
                    onChange={(e)=>handleChange("ID_IN",e.target.value)}
                  />
            
              
              </div>
            
              <p><div className= "field1" style={{ position: "relative", left:27, top:-60}}> Select Scenario Strategy: 
              </div></p>
              <div className="block"> 

              <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
              <FormControl variant="filled" className={classes.formControl}>
              <Select style={{width:205, height: 48, position: "relative", left:1090, top:-120}}
                native
                value={props.scenarioStrat}
                onChange={(e)=>handleChange("STRAT_IN",e.target.value)}
                inputProps={{
                  name: 'lob',
                  id: 'filled-lob-native-simple',
                }}
              >
                      <option value={"DTScenario"}>DTScenario</option>
                      <option value={"FAQScenario"}>FAQScenario</option>
                      <option value={"SwitchScenario"}>SwitchScenario</option>
              </Select>
              </FormControl>
              </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:-90}}> Select Scenario LOB:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <FormControl variant="filled" className={classes.formControl}>
                    <Select style={{width:205, height: 48, position: "relative", left:1090, top:-149}}
                      native
                      value={props.scenarioLOB}
                      onChange={(e)=>handleChange("LOB_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"PostPaid"}>Postpaid</option>
                      <option value={"PrePaid"}>Prepaid</option>
                      <option value={""}>DTH</option>
                      <option value={"Telemedia"}>Telemedia</option>
                      <option value={"HR"}>HR</option>
                      <option value={"PaymentsBank"}>PaymentsBank</option>
                    </Select>
                    </FormControl>
                    </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:-120}}> MSISDN Required:  </div> </p>
              <div className="block"> 

                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <FormControl variant="filled" className={classes.formControl}>
                    <Select style={{width:205, height: 48, position: "relative", left:1090, top:-177}}
                      native
                      value={props.reqMSISDN}
                      onChange={(e)=>handleChange("MSISDN_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>True</option>
                      <option value={2}>False</option>
                    </Select>
                    </FormControl>
                  </div>
                  <p> <div className="field1" style={{ position: "relative", left:30, top:-140}}> Feedback Required:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <FormControl variant="filled" className={classes.formControl}>
                    <Select style={{width:205, height: 48, position: "relative", left:1090, top:-205}}
                      native
                      value={props.reqFeedback}
                      onChange={(e)=>handleChange("FB_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>True</option>
                      <option value={2}>False</option>
                    </Select>
                    </FormControl>
                      <p> <div className = "field1" style={{ position: "relative", left:-352, top:-125}} >Enter Scenario Response: </div></p>
                        <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        
                      <div className="block"> 
                      
                          <CSSTextField size="small" style={{width:205, height: 48, position: "relative", left:23, top:-195}}
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                          value={props.scenarioResp}
                    onChange={(e)=>handleChange("RESP_IN",e.target.value)}
                        />
                        </div>

                      

                              
                    </div>
            


            

            
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:540, top:-150}}
            onClick={saveScenario}>
                Save
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:540, top:-150}} onClick={loadScenario}>
                Load
            </BootstrapButton>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Remove Scenario
            </Typography>
        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <div className= "field1">  
            
                <br /> <br />
                <p> <div className="field1" style={{ position: "relative", left:-120, top:-200}}> Select Scenario to Delete:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <FormControl variant="filled" className={classes.formControl}>
                    <Select style={{width:205, height: 48, position: "relative", left:420, top:-250}}
                      native
                      value={props.scenarioRemove}
                      onChange={(e)=>handleChange("REMSC_IN",e.target.value)}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      {
                        // <option value={"True"}>True</option>
                props.scList.map((scName) => (
                  <option value={scName}>{scName}</option>
                  // <MenuItem  value={scName} >
                  //   {scName}
                  // </MenuItem>
              ))}
                    </Select>
                    </FormControl>
                        </div>
            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:450, top:-190}}
            onClick={remScenario}>
                Delete Scenario
            </BootstrapButton>
            </div>
            </div>
      </FormControl>
        </div>
    );
  }

  function mapStateToProps(state) {
    return{
      scenarioEditted:state.scenarioManager.scenarioEditted,
      scenarioName:state.scenarioManager.scenarioName,
      scenarioId:state.scenarioManager.scenarioId,
      scenarioStrat:state.scenarioManager.scenarioStrat,
      scenarioLOB:state.scenarioManager.scenarioLOB,
      reqMSISDN:state.scenarioManager.reqMSISDN,
      reqFeedback:state.scenarioManager.reqFeedback,
      scenarioResp:state.scenarioManager.scenarioResp,
      scenarioRemove:state.scenarioManager.scenarioRemove,
      scList:state.trainedData.scList,
      scDList:state.trainedData.scDList,
      botName:state.topBar.botName
    };
}
  
  export default connect(mapStateToProps)(InputTextField);