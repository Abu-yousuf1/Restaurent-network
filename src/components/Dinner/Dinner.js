
import React from 'react';
import DinnerDet from './DinnerDet';
import Row from 'react-bootstrap/Row';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';

const Dinner = (props) => {
    const {dinnerList} = props;
    return (
        <div>
        <Row>
          
            {
               dinnerList.map(pd => <DinnerDet product ={pd}></DinnerDet>)
            }

        </Row>
            
            <Box display="flex" justifyContent="center"  paddingTop="50px">    <Button  variant="contained" color="primary">CheckOut Your Food</Button></Box>
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        dinnerList: state.dinnerList
    }
}

export default connect(mapStateToProps)(Dinner);