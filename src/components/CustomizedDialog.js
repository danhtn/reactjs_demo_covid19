import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


class CustomizedDialog extends React.Component {
  render() {
    const { classes, detailData, isOpenDialog, handleClose } = this.props;
    const contentElements = Object.keys(detailData).map((column) => {
      return (
        <React.Fragment>
          <ListItem button>
            <ListItemText primary={`${column}: ${detailData[column]}`} />
          </ListItem>
          <Divider />
        </React.Fragment>
      )
    });

    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth={'sm'}
          aria-labelledby="customized-dialog-title"
          open={isOpenDialog}>
          <DialogTitle id="customized-dialog-title"
          >
            Details dialog
          </DialogTitle>
          <DialogContent dividers>
            <List component="nav" className={classes.content} aria-label="mailbox folders">
              {contentElements}
            </List>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              color="primary"
              onClick={() => {
                handleClose()
              }}
            >
              Close
          </Button>
          </DialogActions>
        </Dialog>
      </div >
    );
  }
}

export default withStyles(styles)(CustomizedDialog)