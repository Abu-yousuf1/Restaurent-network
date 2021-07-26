import { CardActionArea } from "@material-ui/core";

const initialState={
     breakfastList : [
        {
         image: "breakfast1",
         name: 'Eggs Benedict',
         price: '6.99',
         id:'1'
        },
        {
           
            image:'breakfast2',
            name:'Breakfast sandwich ',
            price: '9.99',
            id:'2'
        },
        {
            image:'breakfast3',
            name: 'Baked Chiken',
            price:'10.99',
            id:'3'
        },
        {
            image:'breakfast4',
            name: 'Breakfast sandwich',
            price:'9.99',
            id:'4'
        },
        {
            image:'breakfast5',
            name: 'Full Breakfast Fried Egg Toast Brouch',
            price:'3.99',
            id:'5'
        },
        {
            image:'breakfast6',
            name: 'Toast Croissant Fried egg',
            price:'19.99',
            id:'6'
        },
    ],

    dinnerList:[
        {
            image: "dinner1",
            name: 'Baked Chiken',
            price: '9.99',
            id:'1'
           },
           {
            image: "dinner2",
            name: 'Lemony Salmon Piccata',
            price: '10.99',
            id:'2'
           },
           {
            image: "dinner3",
            name: 'Garlic Butter Baked Salmon ',
            price: '6.99',
            id:'3'
           },
           {
            image: "dinner4",
            name: 'French fries with cheese',
            price: '8.99',
            id:'4'
           },
           {
            image: "dinner5",
            name: 'Pork Tenderloin With Quinoa Pilaf',
            price: '12.99',
            id:'5'
           },
           {
            image: "dinner6",
            name: 'Salmon with Grapefruit and Lentil Salad',
            price: '9.99',
            id:'6'
           }
    ],
    
    lunchList:[
        {
            image: "lunch1",
            name: 'Beef Steak',
            price: '9.99',
            id:'1'
           },
           {
            image: "lunch2",
            name: 'Honey-Soy-Glazed Salmon with Peppers',
            price: '10.99',
            id:'2'
           },
           {
            image: "lunch3",
            name: 'Tarragon-Rubbed-Salmon',
            price: '6.99',
            id:'3'
           },
           {
            image: "lunch4",
            name: 'Belpuri with Beef',
            price: '8.99',
            id:'4'
           },
           {
            image: "lunch5",
            name: 'Fried Chicken Bento',
            price: '12.99',
            id:'5'
           },
           {
            image: "lunch6",
            name: 'Beef Steak',
            price: '9.99',
            id:'6'
           }
    ],
}

const cartReducers = (state = initialState, action ) =>{
    switch(action.type){

    default:
        return state;

    }
}
export default cartReducers;