import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../Images/bannerbackground.png';
import logo from '../../Images/logo2.png';
import logo1 from '../../Images/logo.png';
import './Header.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import chif1 from '../../Images/Image/adult-blur-blurred-background-687824.png';
import chif2 from '../../Images/Image/chef-cook-food-33614.png';
import chif3 from '../../Images/Image/architecture-building-city-2047397.png';
import ShoppCart from '@material-ui/icons/ShoppingCart';



const Header = () => {
    return (

        <div  >
           <nav className="navbar"> 

                <img style={{ height: '35px', width: '120px', marginLeft: '50px' }} src={logo} alt="" />
                
                    <Link to="/cart">
                        <div className="navbar_cart">
                            <ShoppCart/>
                            <div className= "cart_count"><h3>1</h3></div>
                            
                        </div>
                    </Link>
            
                <input style = {{ float:'right',  backgroundColor: '#E51A4B', borderRadius: '10px',border:'none',height:'20px',width: '60px', marginRight: '50px' }} type="button" value="Sign up" />  

           </nav>


            <div className="header" style={{ backgroundImage: ` url(${Background})` }}>
                <br />
                <br />
                <h1 style={{ textAlign: 'center',  }}>Best food waiting for your belly </h1>

            </div>

            <div   >
                 <nav className = "nav" >

                     <li>
                     <Link to ="/breakfast">Breakfast</Link> 
                     </li>

                     <li>
                     <Link to ="/dinner">Dinner</Link>
                     </li>

                     <li>
                     <Link to ="/lunch">Lunch</Link>
                     </li>
                </nav>  
               
            </div>
          
          <br />
          <br />
            <footer  style={{ padding:'20px',  position: 'absolute' ,marginTop:'800px'}}>
                
          <h1>Why you choose us </h1>
          <p>Barton waited twently always repair in within we do. An delighted dffending Curiosity my is dashwoods at By prospoerous increasing surrounded.</p>


                   <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={chif1}/>
                            <Card.Body>
                            <Card.Title>Fast Delevery</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">see more...</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={chif2}/>
                            <Card.Body>
                            <Card.Title>A Good Auto Responder</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">see more...</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={chif3}/>
                            <Card.Body>
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">see more...</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>

                     
            </footer>
          

            <div className ="footer"  style={{  position: 'absolute' ,marginTop:'1700px'}}>

            
            <img style={{ height: '35px', width: '120px', marginLeft: '50px' }} src={logo1} alt="" />
            <small style={{color:'white', position: 'absolute', bottom: '8px',left: '16px',paddingLeft:'30px'}}>copyright &copy; 2020 online  food</small>
            </div>

        </div>

    );
};

export default Header;