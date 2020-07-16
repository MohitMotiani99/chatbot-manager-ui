import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    position: 'absolute',
    top: 300,
    left: 570,
    color :"blue",
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={3} >      <Typography variant="h4" component="h2" gutterBottom> 
        Manage Your Bots Here
      </Typography>
      </Grid>
      </Grid>
    </div>
  );
}