//Multiple state with React state.

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css'

// class Reactstate extends React.Component{
//   constructor(){
//     super();
//     this.state={Mywebsite:"Hello  my dears",Myname:"I'm Ramkumar R"}
//   }
//   change=()=>{
//     this.setState({Mywebsite:"www.ram.com"});
//     this.setState({Myname:"Apple"});
//   }
//   render(){
//     return<div class="text"><h1>{this.state.Mywebsite},{this.state.Myname}</h1>
//     <button type="button" onClick={this.change}>Click here</button>
//     </div>
//   }
// }

// // props..

// class Reactprops extends React.Component{
//   render(){
//     return<h1>Welcome to my page{this.props.Myweb}</h1>
//   }
// }


// //EventHandling

// class EventHandling extends React.Component{
//   constructor(){
//     super();
//     this.state={web:"I'm creating own Website"};
//   }
//   click=()=>{
//     this.setState({web:"Let' we start the course"});
//   }

//   render(){
//     return <div class='t2'>
//       <h1>{this.state.web}</h1>
//       <button type="button" onClick={this.click}>Click to change</button>
//     </div>
//   }
// }

// class Reactspro extends React.Component{
//   render(){
//     return(
//       <div>
//       <Reactstate/>
//       <Reactprops/>
//       ``<EventHandling/>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Reactspro />,document.getElementById("root"));



// const headingpage=["Home","About us","Services","Contact us","Products"];
// const menu=headingpage.map((headingpage)=>{
//   return <h1>{headingpage}</h1>
// });
// ReactDOM.render(<ul>{menu}</ul>,document.getElementById("root"));

// function Reacts(){
//   return(
//     <h1>Welcome Guys{this.props.Mywebpage}</h1>
//   )
// }
// ReactDOM.render(<Reacts />)

// import React ,{useState} from 'react';
// import ReactDOM from 'react-dom';

// function Welcome(){
//   const[count,setCount]=useState(10);
//   return(
//     <div>
//       <p>click{count}times</p>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   );
// }
// ReactDOM.render(<Welcome/>,document.getElementById("root"));


// import React,{useState,useEffect} from 'react';
// import ReactDOM from 'react-dom';
// function Example(){
//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     if(count<10){
//     setTimeout(()=>{
//       setCount(count =>count+1)
//     },100)
//   }
//   return clearInterval(setTimeout);
//   });
//   return(
//     // <div></div>
//     <h1>It's time to start: {count} </h1>
//   )
// }
// ReactDOM.render(<Example/>,document.getElementById("root"));
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Apidemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);// Wrap the single object in an array to use map later
        setLoading(false);
      })
      .catch(error => {
        console.error("If it is not loading it will be an error message");
        setLoading(false);
      });
  }, []); // Add dependency array to ensure useEffect runs only once

  if (loading) {
    return <p>Loading...</p>; // Added ellipsis for better readability
  }

  return (
    <div>
      <h1>List out the users in API</h1>
      <ul>
        {users.map(users => ( // Changed `Users` to `user` for correct variable naming
          <li key={users.id}>{users.name}</li> // Changed `name` to `title` to match the fetched data structure
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Apidemo />, document.getElementById("root"));
