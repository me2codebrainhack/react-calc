import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const buttonClick = (buttonValue, inputString) => {
      if(inputString === 'Invalid Input' || inputString == '0' ){
          inputString = '';
      }
      let resultString = '';
      if(buttonValue !== '='){
          resultString = inputString + buttonValue;
      }else {
          try{
            resultString = eval(inputString);
          } catch(err){
              resultString = 'Invalid Input';
          }
      }
      return resultString;
  };

function Calc() {
    const classes = useStyles();
    const [inputString,setInputString] = useState('');

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{marginTop:'20px',marginBottom:'10px'}}>
                        <TextField value={inputString}></TextField>
                    </Paper>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='7' onClick={() => setInputString(buttonClick('7',inputString)) }>7</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='8' onClick={() => setInputString(buttonClick('8',inputString)) }>8</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='9' onClick={() => setInputString(buttonClick('9',inputString)) }>9</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='/' onClick={() => setInputString(buttonClick('/',inputString)) }>/</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='4' onClick={() => setInputString(buttonClick('4',inputString)) }>4</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='5' onClick={() => setInputString(buttonClick('5',inputString)) }>5</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='6' onClick={() => setInputString(buttonClick('6',inputString)) }>6</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='*' onClick={() => setInputString(buttonClick('*',inputString)) }>*</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='1' onClick={() => setInputString(buttonClick('1',inputString)) }>1</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='2' onClick={() => setInputString(buttonClick('2',inputString)) }>2</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='3' onClick={() => setInputString(buttonClick('3',inputString)) }>3</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='-' onClick={() => setInputString(buttonClick('-',inputString)) }>-</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='0' onClick={() => setInputString(buttonClick('0',inputString)) }>0</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='.' onClick={() => setInputString(buttonClick('.',inputString)) }>.</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='=' onClick={() => setInputString(buttonClick('=',inputString)) }>=</button></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}><button value='+' onClick={() => setInputString(buttonClick('+',inputString)) }>+</button></Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ marginTop: '20px', marginBottom: '10px' }}>
                            <button onClick={() => setInputString('') }>Reset Value</button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
      </div>
            
    );
};

export default Calc;