import React ,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  borderTopLeftRadius: '1px solid #cdcdcd',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    display: 'flex'
  },
  paper2:{
    
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    display: 'flex'
  },
  control: {
    padding: theme.spacing(2),
  },
  textfieldStyle:{
    width: '80%',
    marginLeft: '10%',
    marginTop: '20px'
  }
}));

function App(){
  const classes = useStyles();
  const [len1,setLen1] = useState();
  const [len2,setLen2] = useState();
  const [quan1,setQuan1] = useState();
  const [quan2,setQuan2] = useState();
  const [min,setMin] = useState()
 
  var total1 = null
  var total2 = null

  //var rem = null


  function cal(){
   
   
    total1 = len1 * quan1
    var totalR1 = (total1 / 12)
  
    var r1 =  Math.ceil(totalR1)
    
    total2 = len2 * quan2
    var totalR2 = (total2 / 12)
    
    var r2 =  Math.floor(totalR2) - totalR2
  
    setMin(Math.ceil(totalR2 + r1))
  
  }

    return (
      
      <Container maxWidth="md" style={{backgroundColor: '#fff'}}>
      <Grid container  spacing={1}>
        <Grid xs={6} item>
          <div className={classes.paper} >
        
            <div style={{width: '100%'}}>
            <TextField className={classes.textfieldStyle} onChange={e => setLen1(e.target.value)} type="number" id="outlined-search" label="length 1" type="search" variant="outlined" />
            <TextField className={classes.textfieldStyle} onChange={e => setQuan1(e.target.value)} type="number" id="outlined-search" label="quantity 1" type="search" variant="outlined" />
            <TextField className={classes.textfieldStyle} onChange={e => setLen2(e.target.value)} type="number" id="outlined-search" label="length 2" type="search" variant="outlined" />
            <TextField className={classes.textfieldStyle} onChange={e => setQuan2(e.target.value)} type="number" id="outlined-search" label="quantity 2" type="search" variant="outlined" />
            <Button 
            variant="outlined" 
            color="primary" 
            style={{marginTop: '10px',marginLeft:'10%'}}
            onClick={() => cal()}
            >
        Calculate
      </Button>
            </div>
            
          </div>
        </Grid>
        <Grid xs={6} item>
          <div className={classes.paper2} >
            <div>
              <Typography variant='h5'>Minimum Needed Rebar: { min} </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      </Container>

    );
}

export default App;
