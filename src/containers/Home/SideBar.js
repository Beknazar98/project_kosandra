import React, { useContext } from 'react';
import { Grid, Paper, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../contexts/ClientContext';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))

const SideBar = () => {
    const {getProducts,filterProductsByPrice} = useContext(clientContext)
    const classes = useStyles();
    const history = useHistory()

    function fetchProducts(params,value){
        let search = new URLSearchParams(history.location.search)
        search.set(params,value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts()
    }

    function reset(){
        history.push('/')
        getProducts()
    }


    function filterByPrice(value){
        filterProductsByPrice(value)
    }


    return (
        <>
            <Grid 
            // item md={5} 
            container justify="center" className="filer_pd" 
            >
                <Paper className={classes.paper}>
                    <Grid component="fieldset">
                        <FormControl>
                        
                            <FormLabel component="legend">price</FormLabel>
                            <RadioGroup onChange={(e) => filterByPrice(e.target.value)} aria-label="price" name="price1">
                                <FormControlLabel value='15000' control={<Radio />} label="15000" />
                                <FormControlLabel value="30000" control={<Radio />} label="30000" />
                                <FormControlLabel value="40000" control={<Radio />} label="40000" />
                                <FormControlLabel value="60000" control={<Radio />} label="60000" />
                                <FormControlLabel value="100000" control={<Radio />} label="100000" />
                            </RadioGroup>
                            <button onClick={reset}>reset</button>
                        </FormControl>
                
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default SideBar;