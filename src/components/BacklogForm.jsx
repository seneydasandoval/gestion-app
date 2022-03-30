import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


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

});
const useStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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

export default function BacklogForm(props) {
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen(false);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open} fullWidth={'md'}
      maxWidth={'md'}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Backlog
      </DialogTitle>
      <DialogContent dividers>


        <Grid container spacing={3} xs={12} style={{ padding: 20 }}>

          <div className={classes.root1}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField id="standard-basic" label="Proyecto" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField id="standard-basic" label="Sprint" fullWidth />
              </Grid>
            </Grid>
          </div>
        </Grid>

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}