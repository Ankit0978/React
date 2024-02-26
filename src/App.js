// import './App.css';
// import Item from './Components/Item';
// import Apple from './Components/Apple';
// import ItemDate from './Components/ItemDate';
// import Cards from './Components/Cards';
// import ab from './Components/ab'

//  import React , {useState} from 'react';
//  import Item25 from "./Components/Item25";
//  import Itemmfg from "./Components/Itemmfg";
//  import Name from "./Components/Name";

//  import Practice1 from "./Components/Practice1"
//  import NewProduct from "./Components/NewProduct";
//  import ProductForm from "./Components/ProductForm";
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


// function App (props) {
//  let response = [
//     {
//       id:"p1",
//       title:"Maggi",
//       amount: 450,
//       itemDate: "20",
//       itemMonth: "Sep",
//       itemYear: "2023",
//       itemName : "Ankit",
//       itempractice: "render",
//     },
//     {
//       id:"p2",
//       title:"Chocoloate",
//       amount: 150,
//       itemDate: "30",
//       itemMonth: "Jul",
//       itemYear: "2021",
//       itemName : "Anshul"
//     },
//     {
//       id:"p3",
//       title:"Biscuit",
//       amount: 350,
//       itemDate: "25",
//       itemMonth: "Aug",
//       itemYear: "2024",
//       itemName : "Arun"
//     },
//   ];


//   // let[title, setTitle] =  useState(props.title)
//   // let title = props.title

//   let [title,setTitle] = useState(props.title)

//   function clickHandler() {
//     //  title = "Popcorn"
//      setTitle("Popcorn")
//     // let title = "bornvita"

//     // let newArr = resp.map((val,idx) => {
//     //    if(val.id === id){
//     //      val.title = title;
//     //      return val;
//     //    }
//     //    return val;
//     // })
//     // let title = "Popcorn"
//      console.log("This button is clicked")

//     //  setResponse(...newArr);
    
//   }

//   // const (title, setTitle) = 

//   function printProductData(data){
//     console.log("I am inside App.js ")
//     console.log(data)
//   }

// return (

//   <div className = "Body" >
//   <div className="styles"> <Item25 id = {response[0].id} title = {response[0].title} amount = {response[0].amount} ></Item25> 
//     <Itemmfg itemDate = {response[0].itemDate} itemMonth = {response[0].itemMonth} itemYear = {response[0].itemYear}></Itemmfg>
//     <Name itemName = {response[0].itemName}></Name>
//     <Practice1 itempractice = {response[0].itempractice}></Practice1>
//     <button onClick={clickHandler}>Add to cart</button>
//     <h2>{title}</h2>
//     <NewProduct pranay = {printProductData} />

//     </div>
   
//    <div className="styles1">
//    <Item25 id = {response[1].id} title = {response[1].title} amount = {response[1].amount} ></Item25> 
//     <Itemmfg itemDate = {response[1].itemDate} itemMonth = {response[1].itemMonth} itemYear = {response[1].itemYear}></Itemmfg>
//     <Name itemName = {response[1].itemName}></Name>
//     <button onClick={clickHandler}>Add to cart</button>
//     <h3>{title}</h3>

    
//    </div>
//     <div className ="style3">
//     <Item25 id = {response[2].id} title = {response[2].title} amount = {response[2].amount} >Hello ji mein aapka third children</Item25> 
//     <Itemmfg itemDate = {response[2].itemDate} itemMonth = {response[2].itemMonth} itemYear = {response[2].itemYear}></Itemmfg>
//     <Name itemName = {response[2].itemName}></Name>
//     <button onClick={clickHandler}>Add to cart</button>
//     <h4>{title}</h4>

//     </div>


    
//   </div>
// );

// }

// export default App;

import React from "react"
import  "./App.css";
import DashboardComponent from "./Components/Ecommerce";
// import Item24 from "./Components/Item24"
// import React from "react";
// import ItemDate2 from "./Components/ItemDate2";
// import Card24 from "./Components/Card24"
// import NewProduct24 from "./Components/NewProduct24";

// // import Productform24 from "./Components/Productform24";

function App (){
//   // const item2Date = "31"

//   const response = [
//     {
//       itemname : "Das",
//       itemday : "1",
//       itemmonth : "Jan",
//       itemyear : "2000"

//     },
//     {
//       itemname : "Bees",
//       itemday : "2",
//       itemmonth : "Feb",
//       itemyear : "2001"

//     },
//     {
//       itemname : "Tees",
//       itemday : "3",
//       itemmonth : "Mar",
//       itemyear : "2002"

//     },
  

//   ]
  // return (
    // <div>
    // {/* <Card24>
    // <NewProduct24/>

//     <Item24 name = {response[0].itemname}></Item24>
//       Hello ji mein hun aapka first item
//       <ItemDate2 day ={response[0].itemday} month = {response[0].itemmonth} year = {response[0].itemyear}></ItemDate2>
//       <Item24 name = {response[1].itemname}></Item24>
//       <ItemDate2 day ={response[1].itemday} month = {response[1].itemmonth} year = {response[1].itemyear}></ItemDate2>
//       <Item24 name = {response[2].itemname}></Item24>
//       <ItemDate2 day ={response[2].itemday} month = {response[2].itemmonth} year = {response[2].itemyear}></ItemDate2>
//       <div className="App">Hello Jee</div>

//       {/* <Productform24></Productform24> */}
//       {/* </Card24> */}

//        */}
//     </div>
//   )
// }
return (
  <div>
    {/* // DashboardComponent.js */}

<DashboardComponent></DashboardComponent>


  </div>
)

}

export default App;
