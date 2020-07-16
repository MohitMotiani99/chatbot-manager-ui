import React,{useEffect,useState} from 'react';
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
import { TrainedDataActionType } from "../action-types/trained-data.actiontype"
import * as TrainedData from "../actions/trained-data.action"
//import { TrainedDataActionType } from "../../Action-Types/trained-data.actiontype"
//import * as TrainedData from "../../Actions/trained-data.action"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import readXlsxFile from 'read-excel-file'




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    float: "left",
    height: 30,
    alignItems: "left",
    position: "relative",
    top: 10,
    left: -430,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  heading: {
    position: "relative",
    top: -5,
    left: -545,
    fontFamily: "Segoe UI"
  },
  line: {
    position: "relative",
    top: -5,
    width: 900,
    left: -250,
    height: 3,
    backgroundColor: "black"
  },
  heading1: {
    position: "relative",
    top: 220,
    left: -90,
    fontFamily: "Segoe UI"
  },
  line1: {
    position: "relative",
    top: 220,
    width: 900,
    left: 180,
    height: 3,
    backgroundColor: "black"
  },
  heading4: {
    position: "relative",
    top: 150,
    left: -100,
    fontFamily: "Segoe UI"
  },
  line4: {
    position: "relative",
    top: 150,
    width: 900,
    left: 180,
    height: 2,
    backgroundColor: "black"
  },
  heading3: {
    position: "relative",
    top: 100,
    left: 135,
    fontFamily: "Segoe UI"
  },
  line3: {
    position: "relative",
    top: 105,
    width: 900,
    left: 170,
    height: 2,
    backgroundColor: "black"
  },
  field1: {
    position: "relative",
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
    padding: '10px 0px',
    position: 'relative',
    top: -70,
    left: 1,
    height: 20,
    fill: 'white',
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
  const [counter,setCounter]=useState(1);
useEffect(() => {

        
    /*fetch(`http://10.5.205.104:8080/trainer/getAllScenarioNames`)
      .then(res=>res.json())
      .then(res=>props.dispatch(TrainedData.setScList(res)));
    */

   apiCall();

    // let temp=[];
    //   let temp2=[];
    // fetch(`http://10.5.205.104:8080/trainer/getBotScenarios/${props.botName}`)
    //   .then(res=>res.json())
    //   .then(res=>{
    //     for(var x in res){
    //       if(!res[x].scenario) {
    //         continue;
    //       }
    //       temp.push(res[x].label);
    //       temp2.push(res[x].scenario.scenarioName);
    //     }
    //     props.dispatch(TrainedData.setInList(temp));
    //     props.dispatch(TrainedData.setScList(temp2));

    //     props.dispatch(TrainedData.setScDList(res));
    //   });

      //setScDetail([{"id":"5c18be0c3b228558728778a4","label":"abuse","scenario":{"id":"5b0bcf473b22857dcf7f1065","scenarioId":"5b0bce9c98a4edf346508a30","scenarioName":"Abuse","scenarioStrategy":"DTScenario","scenarioLob":"null","scenarioResponse":"","msisdnRequired":false,"feedbackRequired":true,"scenarioKey":"5b0bce9c98a4edf346508a30-Abuse"},"sampleCount":0}]);


},[props.botName]);

const apiCall = () => {
  let temp=[];
  let temp2=[];
fetch(`http://10.5.205.104:8080/trainer/getBotScenarios/${props.botName}`)
  .then(res=>res.json())
  .then(res=>{
    for(var x in res){
      if(!res[x].scenario) {
        continue;
      }
      temp.push(res[x].label);
      temp2.push(res[x].scenario.scenarioName);
    }
    props.dispatch(TrainedData.setInList(temp));
    props.dispatch(TrainedData.setScList(temp2));

    props.dispatch(TrainedData.setScDList(res));
  });
}


  const handleChange = (action, input) => {
    switch (action) {
      case "QUERY_IN":
        props.dispatch(TrainedData.inputQuery(input));
        break;

      case "INTENT_IN":
        props.dispatch(TrainedData.inputBotIntent(input));
        break;

      case "SC_IN":
        props.dispatch(TrainedData.inputBotScenario(input));
        break;

    }
  };


  async function genIntents() {
      
    let res = await fetch(`http://10.5.205.104:8080/trainer/getBotIntentJson/${props.botName}?query=${props.query}`, {
      method: 'get'
    });
    console.log("hey");
    let result = await res.json();
    //let result=[{"scenarioName":"yyyyyyyyyyyyy","score":"444444444"},{"scenarioName":"kkkkkkkkkkk","score":"444444444"}];
    props.dispatch(TrainedData.setResult(result));


    //console.log(result);

  };

  async function mapIntents() {
    let intentMapp = new Map();
    intentMapp[props.botIntent] = props.botScenario;
        let formData=new FormData();
    formData.append(props.botIntent,props.botScenario);

    let payload = {
      [props.botIntent]: props.botScenario
    }

    console.log("props.botIntent --- ", props.botIntent);
    console.log("props.botScenario --- ", props.botScenario)
    let res = await fetch(`http://10.5.205.104:8080/trainer/mapBotIntent/${props.botName}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
            body: JSON.stringify(payload)

    });

    let result = await res.json();


    if (result.resultMessage == "Saved")
      { 
        props.dispatch(TrainedData.setIntent());
        apiCall();
      }
    else
      console.log("nope");

    console.log(result);

  }
//////NEW CHANGES
  async function mapIntentsBulk(){
      let formData = new FormData();
                const myInput = document.getElementById('contained-button-file');
                formData.append('file', myInput.files[0]);

    let res=await fetch(`http://10.5.205.104:8080/trainer/mapBotIntentByFile/${props.botName}`,{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: formData

    });

    let result= await res.json();
    

      readXlsxFile(myInput.files[0]).then((rows) => {
        for(var row in rows){
          if(row[0]!="AI Intent"){
          console.log(row);
          props.dispatch(TrainedData.setBulkIntent({
            id:null,
            label:row[0],
            scenario:{
              id:row[2],
              scenarioId:row[2],
              scenarioName:row[1],
              scenarioStrategy:row[3],
              scenarioLob:row[7],
              scenarioResponse:row[4],
              msisdnRequired:row[5],
              feedbackRequired:row[6]
            },
            sampleCount:"0"
          }))
        }
        }
      })


       /* if(result.resultMessage==="Saved")
          console.log("Success");
        else
          console.log("Fail");
        */
}

  return (
    <div className="forms">
      <Typography variant="h3" className={classes.heading}>
        Check Bot Intent
            </Typography>

      <Divider className={classes.line} />



      <FormControl variant="outlined" className={classes.formControl}>
        <div className="ManageBot">

          <div className="field" style={{ position: "relative", left: 2, top: 20 }}>
            <p><div className="field1" >
              Enter User Query Text:
                </div>
            </p>
            <div className="block"><CSSTextField size="small" style={{ height: 10, position: "relative", left: -200, top: -60 }}
              id="filled-secondary"
              variant="filled"
              color="secondary"
              value={props.query}
              onChange={(e) => handleChange("QUERY_IN", e.target.value)}
            /> </div>
          </div>

          <Typography variant="h3" className={classes.heading3}>
            Map Intent to Scenario
                </Typography>

          <Divider className={classes.line3} />


          <div id="singleUpload" style={{display:"block"}}>

          <div className="field" style={{ position: "relative", left: 2, top: 150 }}>
            <p> <div className="field1" style={{ position: "relative", left: 2, top: -55 }} >Select Bot Intent:  </div> </p>
            <div className="block"><Select style={{ position: "relative", left: 2, top: -95, height:48, marginLeft: -150 }}
              id="filled-secondary"
              variant="filled"
              value={props.botIntent}
              onChange={(e) => handleChange("INTENT_IN", e.target.value)}
            > 
            {

                props.inList.map((inName) => (
                  <option  value={inName} >
                    {inName}
                  </option>
            ))}

            </Select>
            </div>


          </div>
          <form className={classes.root} noValidate autoComplete="off">
            <div className="field" style={{ position: "relative", left: 1, top: 170 }}>

              <p> <div className="field1" style={{ position: "relative", left: 5, top: -90 }}> Select Scenario:  </div> </p>
              <div className="block"> <Select style={{position: "relative", left: 2, top: -135, height:48 }}
                id="filled-secondary"
                variant="filled"
                value={props.botScenario}
                onChange={(e) => handleChange("SC_IN", e.target.value)}
              >
              {
                props.scList.map((scName) => (
                  <option value={scName} >
                    {scName}
                  </option>
              ))}
          </Select>
              </div>
            </div>
          </form>
          </div>


      





          <br />
          <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{ position: "relative", left: 315, top: -220 }}
            onClick={genIntents}>
            Generate
            </BootstrapButton>
          <div style={{ position: "relative", left: 420, top: -350 }}>
            {
              props.result.map((row) => (
                <><div style={{ left: 500, top: 500 }}>{row.scenarioName}      &emsp;  &emsp; &emsp;    {row.score}</div><br /></>
              ))
            }
          </div>

            <br />
            <div className="DeleteBot">
            <Typography variant="h3" className={classes.heading4}>
              Map Bulk Intents
            </Typography>

            <Divider className={classes.line4} />
          
      <div className={classes.root} id="bulkUpload" style={{  position:"relative", left:-140, top:200}}>
           <input
           
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <br />
          
        <BootstrapButton style={{position:"relative",left:475,top:-30}} variant="contained" color="primary" component="span"
        onClick={mapIntentsBulk}>
          Upload
        </BootstrapButton>
        
        </div>
          
          <br />
          <div className="DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Trained Data View
            </Typography>

            <Divider className={classes.line1} />
          </div>
            <BootstrapButton id ="map" variant="contained" color="primary" disableRipple className={classes.margin} style={{ position: "relative", left: 330, top: -100 }}
              onClick={mapIntents}>
              Map
            </BootstrapButton>
            <br /> <br /> <br /> <br /> <br />

            <br />
            <br />
          </div>

    <TableContainer component={Paper} style={{position:"relative",left:180, top:100}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SNo</StyledTableCell>
            <StyledTableCell align="right">Bot Intent</StyledTableCell>
            <StyledTableCell align="right">Scenario</StyledTableCell>
            <StyledTableCell align="right">Scenario Id</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Login</StyledTableCell>
            <StyledTableCell align="right">FeedBack</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.scDList && Array.isArray(props.scDList) && props.scDList.map((row) => (
              row.scenario && <StyledTableRow key={row.label}>
              <StyledTableCell component="th" scope="row">
                {counter}
              </StyledTableCell>
              <StyledTableCell align="right">{row.label}</StyledTableCell>
              <StyledTableCell align="right">{row.scenario.scenarioName}</StyledTableCell>
              <StyledTableCell align="right">{row.scenario.scenarioId}</StyledTableCell>
              <StyledTableCell align="right">{row.scenario.scenarioStrategy}</StyledTableCell>
              <StyledTableCell align="right">{row.scenario.msisdnRequired.toString()}</StyledTableCell>
              <StyledTableCell align="right">{row.scenario.feedbackRequired.toString()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>
      </FormControl>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    query: state.trainedData.query,
    botIntent: state.trainedData.botIntent,
    botScenario: state.trainedData.botScenario,
    botName: state.topBar.botName,
    result:state.trainedData.result,
    scList:state.trainedData.scList,
    inList:state.trainedData.inList,
    scDList:state.trainedData.scDList
  };
}


export default connect(mapStatetoProps)(InputTextField);