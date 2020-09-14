import React from 'react';
import clsx from 'clsx';
import _ from 'underscore';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { getSummaryData } from '../actions/Actions';
import { tableColumns } from '../configuration/TableColumns';
import SummaryTable from './SummaryTable';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      summaryData: []
    }
  }
  componentDidMount() {
    getSummaryData().then(response => {
      if (response?.status === 200) {
        this.analyzeData(response.data)
      }
    });
  }

  analyzeData = (rawData) => {
    const arrayColumns = _.pluck(tableColumns.summary, 'field');
    if (rawData && rawData.Countries) {
      const summaryData = rawData.Countries.map((element) => {
        const parsedObject = {}
        arrayColumns.forEach(field => {
          parsedObject[field] = element[field];
        });
        return parsedObject;
      });
      this.setState({ summaryData });
    }
  }

  render() {
    const { classes } = this.props;
    const { summaryData } = this.state;

    return (
      <div className={classes.root} >
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, false && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={clsx(classes.menuButton, false && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
          </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid item xs={12}>
              <SummaryTable summaryData={summaryData} />
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard)