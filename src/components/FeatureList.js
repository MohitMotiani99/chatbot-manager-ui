import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BotManager from "./BotManager";
import ScenarioManager from "./ScenarioManager";
import TrainBot from "./TrainBot";
import HealthMain from "./HealthMain";
import TrainedDat from "./TrainedDat";
import ReqAnalysisMain from "./ReqAnalysisMain";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Router>
    <div className={classes.root}>
      <List component="nav" style={{"zIndex": 100}} aria-label="main mailbox folders">
      <Link to={'/BotManager'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Bot Manager" />
        </ListItem>
        </Link>
        
        <Link to={'/TrainedDat'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Trained Data" />
        </ListItem>
        </Link>
       
        <Link to={'/ScenarioManager'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Scenario Manager" />
        </ListItem>
        </Link>

      

  

        <Link to={'/TrainBot'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Train Bot" />
        </ListItem>
        </Link>

       

        

        <Link to={'/ReqAnalysisMain'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Request Analysis" />
        </ListItem>
        </Link>

        <Link to={'/HealthMain'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText className={classes.text} primary="Health Status" />
        </ListItem>
        </Link>
      </List>
      
    </div>


          <Switch>

              <Route exact path='/ScenarioManager' component={ScenarioManager} />
              <Route exact path='/BotManager' component={BotManager} />
              <Route exact path='/TrainedDat' component={TrainedDat} />
              <Route exact path='/TrainBot' component={TrainBot} />
              <Route exact path='/HealthMain' component={HealthMain} />
              <Route exact path='/ReqAnalysisMain' component={ReqAnalysisMain} />
          </Switch>

    </Router>
  );
}