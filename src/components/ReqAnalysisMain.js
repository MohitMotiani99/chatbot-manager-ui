import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { ReqAnalysisActionType } from "../action-types/req-analysis.actiontype";
import { inputEncrypted, inputDecrypted } from "../actions/req-analysis.action";
import * as ReqAna from "../actions/req-analysis.action"
import Base64 from 'crypto-js/enc-base64';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75ch',
      height: 1000
    },
  },

  box1: {
    height: 100,
    position: "relative",
    top: -300,
    left: 30
  },

  box2: {
    height: 100,
    position: "relative",
    top: -100,
    left: 40
  },

  Encrypt: {
    position: "relative",
    top: -302,
    left: 70,
    textTransform: "capitalize"
  },

  Decrypt: {
    position: "relative",
    top: 20,
    left: -5,
    textTransform: "capitalize"
  },

  heading: {
    position: "relative",
    top: -300,
    left: -130,
    fontFamily: "Segoe UI"
  },
  line: {
    position: "relative",
    top: -300,
    width: 900,
    left: 375,
    height: 2,
    backgroundColor: "black"
  }
}));

function InputTextField(props) {
  const classes = useStyles();
  const handleChange = (action, input) => {
    switch (action) {
      case "ENCRYPT_IN":
        props.dispatch(ReqAna.inputEncrypted(input));
        break;

      case "DECRYPT_IN":
        props.dispatch(ReqAna.inputDecrypted(input));
        break;



    }
  };

  function encryptdata() {
    var encrypted = props.encrypted;
    var CryptoJS = require("crypto-js");
    var base64Key = "dHJhaW51c19hdXRoUGxheQ==";
    var key = CryptoJS.enc.Base64.parse(base64Key);
    var encryptedData = CryptoJS.AES.encrypt(encrypted, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    console.log(encryptedData.toString());
    props.dispatch(ReqAna.inputDecrypted(encryptedData.toString()));
  }

  function decryptdata() {

    var decrypted = props.decrypted;
    var CryptoJS = require("crypto-js");
    var base64Key = "dHJhaW51c19hdXRoUGxheQ==";
    var key = CryptoJS.enc.Base64.parse(base64Key);
    var decryptedData = CryptoJS.AES.decrypt(decrypted, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    console.log(decryptedData.toString(CryptoJS.enc.Utf8));
    props.dispatch(ReqAna.inputEncrypted(decryptedData.toString(CryptoJS.enc.Utf8)));
  }

  

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={12} sm={6}>
          <Typography variant="h3" className={classes.heading}>
            Encrypt/Decrypt Chatbot Data
        </Typography>
          <Divider className={classes.line} />
        </Grid>
        <Grid item md={12} sm={6}>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField multiline rows={10} className={classes.box1}
              label="Enter Text to be Encrypted" variant="filled"
              value={props.encrypted}
              onChange={(e) => handleChange("ENCRYPT_IN", e.target.value)}
            />
            <br />
            <TextField multiline rows={10}
              className={classes.box2}
              id="outlined-basic"
              label="Enter Text to be Decrypted"
              variant="filled"
              value={props.decrypted}
              onChange={(e) => handleChange("DECRYPT_IN", e.target.value)}
            />
          </form>
        </Grid>
        <Grid item md={12} sm={6}>

          <Button className={classes.Encrypt} variant="contained" color="secondary" onClick={encryptdata} >
            Encrypt
    </Button>
          <Button className={classes.Decrypt} variant="contained" color="secondary" onClick={decryptdata}>
            Decrypt
    </Button>
        </Grid>

        <span style={{ position: "relative", top: 250 }}>&nbsp;&nbsp;</span>
      </Grid>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    encrypted: state.reqAnalysis.encrypted,
    decrypted: state.reqAnalysis.decrypted,
  };
}


export default connect(mapStatetoProps)(InputTextField);