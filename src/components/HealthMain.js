import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as HealthMainActions from "../actions/health-main.action"


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





function createData(Bot_Name,status, DT, AI, AutoSuggest,welcomeConfig) {
  return { Bot_Name,status, DT, AI, AutoSuggest,welcomeConfig };
}

const rows = [
  
];

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
    position :"relative",
    left:400,
    top:-250
  },
  headline: {
    position: "relative",
    top: -285,
    left:-200,
  },
  line :{
    position:"relative",
    top: -300,
    width: 900,
    left: 383,
    height: 2,
    backgroundColor:"black"
  }
});



function CustomizedTables(props) {
  const classes = useStyles();

  //%%%%%%%%%%%%%%%%%%%
  async function healthCheck(){
            let res =  await fetch('http://10.5.205.104:8080/trainer/getHealthCheckStatus', {
              method: 'get',
              headers: {
                  'Accept': '*/*',
              },
            });
            //let resulty=[{"DT":"DOWN","welcomeConfig":"UP","AI":"DOWN","name":"Payments Bank","AutoSuggest":"UP","status":"UP"},{"DT":"UP","welcomeConfig":"UP","AI":"UP","name":"Postpaid","AutoSuggest":"UP","status":"UP"},{"DT":"UP","welcomeConfig":"UP","AI":"UP","name":"Prepaid","AutoSuggest":"UP","status":"UP"},{"DT":"UP","welcomeConfig":"UP","AI":"UP","name":"HR","AutoSuggest":"DOWN","status":"UP"},{"DT":"UP","welcomeConfig":"UP","AI":"UP","name":"Postpaid Siebel","AutoSuggest":"UP","status":"UP"}];

            let resultx = await res.json();
            props.dispatch(HealthMainActions.fillTable(resultx));
            console.log('Success');
            //console.log(props.result);

  }
  //{console.log(result)}

  return (
        <div>
    <Typography  variant="h3" gutterBottom className={classes.headline}>
        Health Check Status
    </Typography>


    <Divider className={classes.line}/>

    <TableContainer component={Paper} className={classes.table}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bot Name</StyledTableCell>
            <StyledTableCell align="right">Bot Satus</StyledTableCell>
            <StyledTableCell align="right">DT</StyledTableCell>
            <StyledTableCell align="right">AI</StyledTableCell>
            <StyledTableCell align="right">Elastic Search</StyledTableCell>
            <StyledTableCell align="right">Configuration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.result.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.DT}</StyledTableCell>
              <StyledTableCell align="right">{row.AI}</StyledTableCell>
              <StyledTableCell align="right">{row.AutoSuggest}</StyledTableCell>
              <StyledTableCell align="right">{row.welcomeConfig}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button style={{textTransform:"capitalize",position:"relative",top:70,left:400}} variant="contained" color="primary" disableElevation 
    onClick={healthCheck}>
      Refresh
    </Button>

    </div>

  );
}
function mapStatetoProps(state){
  return{
    result:state.health.result,
  };
}

export default connect(mapStatetoProps)(CustomizedTables)