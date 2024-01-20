// import './App.css';
// import Item from './Components/Item';
// import Apple from './Components/Apple';
// import ItemDate from './Components/ItemDate';
// import Cards from './Components/Cards';
// import ab from './Components/ab'

 import React from 'react';
//  import  from "./Components./Item";

import Item1 from "./Components/Item1";
// import Item2 from './Components/Item2';
// import Item3 from "./Components/Item3";
import Itemdate1 from './Components/ItemDate1';

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

function App () {

  const secondItemname = "Saurabh"
  const firstName = "Arpit"
  const thirdName = "Ayush"
  return(
    <div>
    <Item1 name = {firstName}></Item1>
    <Itemdate1 day = "19" month ="July" year = "1996"></Itemdate1>
   {/* <Item2></Item2> */}
   <Item1 name = {secondItemname}></Item1>
   <Itemdate1 day = "20" month ="January" year = "2000"></Itemdate1>

   <Item1 name = {thirdName}></Item1>

   {/* <Item3></Item3> */}
   <Itemdate1 day = "26" month ="September" year = "1994"></Itemdate1>
    {/* <p>This is an Item</p> */}
    </div>
  
  );

  
 

  
}



export default App;

