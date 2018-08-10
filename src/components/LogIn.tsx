import * as React from 'react';
//Material UI
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField } from '../../node_modules/@material-ui/core';

const styles = (theme: Theme) => createStyles({
   root: {
      color: 'white'
   },
   login: {
      paddingTop: '10rem'
   },
   inputSection: {
      margin: 30
   },
   input: {
      marginBottom: 20,
      minWidth: 300
   },
   button: {
      margin: theme.spacing.unit,
   },
   btn: {
      alignItems: 'center'
   }
});

type LogInProps = WithStyles<typeof styles>

const LogIn = (props: LogInProps) => {
   const { classes } = props;

   return (
      <Grid className={classes.login} container spacing={16} direction='column' alignItems='center'>
         <Grid item xs={12}>
            <Typography
               variant="display3"
               gutterBottom color="secondary"
               align="center"
               classes={{ root: classes.root }}
            >
               Balam
            </Typography>
         </Grid>
         <Grid item xs={12} md={4} alignItems='center'>
            <Card>
               <CardHeader>
               </CardHeader>
               <CardContent>
                  <div className={classes.inputSection}>
                     <TextField
                        id="email"
                        label="Email"
                        margin="dense"
                        className={classes.input}
                     />
                     <TextField
                        id="password"
                        label="Password"
                        margin="dense"
                        className={classes.input}
                     />
                  </div>
               </CardContent>
               <CardActions className={classes.btn}>
                  <div className={classes.btn}>
                     <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                     >
                        Log in
                     </Button>
                  </div>
               </CardActions>
            </Card>
         </Grid>
      </Grid>
   )
}
export default withStyles(styles)(LogIn);
