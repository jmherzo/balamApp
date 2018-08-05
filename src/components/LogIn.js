import React from 'react';
//Ant Design
import { Input } from 'antd';
import 'antd/dist/antd.css';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
   root: {
      color: 'white'
   },
   login: {
      paddingTop: '10rem'
   },
   inputSection: {
      margin: 30,
      backgroundColor: 'red'
   },
   input: {
      marginBottom: 20
   },
   button: {
      margin: theme.spacing.unit,
   },
   btn: {
      textAlign: 'center'
   }
});

const LogIn = (props) => {
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
                  <Ty
               </CardHeader>
               <CardContent>
                  <Input size='large' className={classes.input} placeholder='Email Address' />
                  <Input size='large' className={classes.input} placeholder='Password' />
               </CardContent>
               <CardActions >
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

