import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia  } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@material-ui/core/Box';
import { Col } from 'react-bootstrap';

const useStyles = makeStyles ((theme)=> ({
  root: {
    
    padding: 5,
  },
  media: {
   height:170,
   width:170,
  
  },
  border:{
    marginBottom:5,
  }
 
  
 
}));

 
 const LunchDet = (props) => {
    const classes = useStyles();



 
    const {name, image, price }= props.product;

  
    
   
 
 return(
  <Col  md={4} className={classes.border} className="itemBox text-center ">
         <Card className={classes.root}   > 
                <CardActionArea>
                <Box display="flex" justifyContent="center">  <CardMedia className={classes.media} image={require("../../Images/lunch/" + image +".png").default} alt="" /> </Box> 
                <CardContent>{name}</CardContent>         
               <IconButton> <AttachMoneyIcon />: {price}  </IconButton>         
                </CardActionArea>              
            </Card>
          </Col>
               
 )
 
  };
 
 export default LunchDet;