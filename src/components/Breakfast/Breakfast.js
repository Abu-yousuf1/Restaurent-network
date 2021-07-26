import React from 'react';
import BreakfastDet from './BreakfastDet';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';


const Breakfast = (props) => {
    const { breakfastList } = props;
    
    return (
        <div>
        <Row>
          
            {
               breakfastList.map(pd => <BreakfastDet product ={pd}></BreakfastDet>)
            }

        </Row>
            
            <Box display="flex" justifyContent="center" paddingTop="50px">    <Button  variant="contained" color="primary">CheckOut Your Food</Button></Box>
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        breakfastList: state.breakfastList
    }
}

export default connect(mapStateToProps)(Breakfast);