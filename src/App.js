// import './App.css';
// import Item from './Components/Item';
// import Apple from './Components/Apple';
// import ItemDate from './Components/ItemDate';
// import Cards from './Components/Cards';
// import ab from './Components/ab'

 import React from 'react';
 import Item25 from "./Components/Item25";
 import Itemmfg from "./Components/Itemmfg";
//  import  from "./Components./Item";

// import Item1 from "./Components/Item1";
// import Item2 from './Components/Item2';
// import Item3 from "./Components/Item3";
// import Itemdate1 from './Components/ItemDate1';
// import Cards1 from "./Components/Cards1"
//  import Practice from "./Components/practice"
// import src from '*.avif';

// let title = {
// src:"https://i.imgur.com/MK3eW3As.jpg",
// alt:"Katherine Johnson"
// }

//  import Products from './Components/Products';

//  import practice from "./practice";
//  import Card from "./Components/Card";

// const products = [

//   {
//     id:"p1",
//     title:"Nirma",
//     amount: 100,
//     date: new Date(2021,8,10),
//     name:"Sona"
//   },
//   {
//     id:"p2",
//     title:"Surf Excel",
//     amount: 200,
//     date: new Date(2021,2,2),
//   },
//   {
//     id:"p3",
//     title:"Ghadi",
//     amount: 300,
//     date: new Date(2021,3,4),
//   },
//   {
//     id:"p4",
//     title:"Ariel",
//     amount: 400,
//     date: new Date(2021,5,4),
//   },
//  ]

//  const App = () => {
   

//    return(
//      <div>
//       <Products item = {products}/>
//       <ab name = {ab}/>
//      </div>
//    )
//  }




// import Avatar from './Components/practice';

// const App = () => {
 
//   return(
//     <div>
//       <Practice src="https://i.imgur.com/MK3eW3As.jpg"
//                 alt="Katherine Johnson" />
//       {/* <Practice></Practice> */}
//     </div>
    
//   )
// }

// export default App;

// function App () {

  // const response = [
  //   {
  //     itemName: "Ankit",
  //     itemDate: "20",
  //     itemMonth: "July",
  //     itemYear: "1997"
  //   },
  //   {
  //     itemName: "Shivam",
  //     itemDate: "19",
  //     itemMonth: "Aug",
  //     itemYear: "1996"
  //   },
  //   {
  //     itemName: "Ekaram",
  //     itemDate: "15",
  //     itemMonth: "Sep",
  //     itemYear: "1998"
  //   },
  // ]
  // return(
  //   <div>
  //   {/* <Cards1>
  //   <Item1 name = {response[0].itemName}>
  //     Hello ji mein hun aapka first children
  //   </Item1>
  //   <Itemdate1 day = {response[0].itemDate} month ={response[0].itemMonth} year = {response[0].itemYear}></Itemdate1>
  //  {/* <Item2></Item2> */}
  //  <Item1 name = {response[1].itemName}></Item1>
  //  <Itemdate1 day = {response[1].itemDate} month ={response[1].itemMonth} year = {response[1].itemYear}></Itemdate1>

  //  <Item1 name = {response[2].itemName}></Item1>

  //  {/* <Item3></Item3> */}
  //  <Itemdate1 day = {response[2].itemDate} month ={response[2].itemMonth} year = {response[2].itemYear}></Itemdate1>
  //   {/* <p>This is an Item</p> */}
    // </Cards1> */}
    // </div>
  
  // );

  //  this is a comment
 

  
// }



// export default App;


function App () {
  const response = [
    {
      id:"p1",
      title:"Maggi",
      amount: 450,
      itemDate: "20",
      itemMonth: "Sep",
      itemYear: "2023"
    },
    {
      id:"p2",
      title:"Chocoloate",
      amount: 150,
      itemDate: "30",
      itemMonth: "Jul",
      itemYear: "2021"
    },
    {
      id:"p3",
      title:"Biscuit",
      amount: 350,
      itemDate: "25",
      itemMonth: "Aug",
      itemYear: "2024"
    },
  ]



return (

  <div className = "Style4" >
  <div className="styles"> <Item25 id = {response[0].id} title = {response[0].title} amount = {response[0].amount} ></Item25> 
    <Itemmfg itemDate = {response[0].itemDate} itemMonth = {response[0].itemMonth} itemYear = {response[0].itemYear}></Itemmfg></div>
   
   <div className="styles1">
   <Item25 id = {response[1].id} title = {response[1].title} amount = {response[1].amount} ></Item25> 
    <Itemmfg itemDate = {response[1].itemDate} itemMonth = {response[1].itemMonth} itemYear = {response[1].itemYear}></Itemmfg>
   </div>
    <div className ="style3">
    <Item25 id = {response[2].id} title = {response[2].title} amount = {response[2].amount} ></Item25> 
    <Itemmfg itemDate = {response[2].itemDate} itemMonth = {response[2].itemMonth} itemYear = {response[2].itemYear}></Itemmfg>
    </div>
    
  </div>
);

}

export default App;
