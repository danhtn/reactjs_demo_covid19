import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            <MaterialTable
              icons={tableIcons}
              title="Basic Search Preview"
              columns={[
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                  title: 'Birth Place',
                  field: 'birthCity',
                  lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
              ]}
              data={[
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
              ]}
              options={{
                search: true,
                pageSize: 10
              }}
            />
          </Grid>
        </Container>
      </main>
    </div>
  );
}