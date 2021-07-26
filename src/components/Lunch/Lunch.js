import React from 'react';
import LunchDet from './LunchDet';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';


const Lunch = (props) => {
    const { lunchList } = props;
    
    
    return (
        <div>
        <Row>
          
            {
              lunchList.map(pd => <LunchDet product ={pd}></LunchDet>)
            }

        </Row>
            
          <Box display="flex" justifyContent="center"  paddingTop="50px">    <Button  variant="contained" color="primary">CheckOut Your Food</Button></Box>
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        lunchList: state.lunchList
    }
}

export default connect(mapStateToProps)(Lunch);