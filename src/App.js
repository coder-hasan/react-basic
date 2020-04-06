import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name : "Dr. Mahfuzur Rahman",
    job : "Singer"  
  }

  var person2 = {
    name : "Mahmudul Hasan ",
    job : "Programmer"  
  }

  const learner = ['Nafiz Imtiyaz', 'Sakhawat Hossain', 'Mahmud'];

  const products = [
    {name: "Photoshop", price: "$90.9"},
    {name: "illustrator", price: "$60.5"},
    {name: "PDF Reader", price: "$9.2"},
  ]
  const learnerName = learner.map(learner => learner)
  const productName = products.map(product => product.name);
  console.log(productName)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {learner.map(learner => <li>{learner}</li>)}
          {products.map(products => <li>{products.name}</li>)}
        </ul>
        {products.map(pd => <Products product={pd}></Products>)}
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>

        <Person name={learner[0]} job="Django"></Person>
        <Person name={learner[1]} job="ML"></Person>
        <Person name={learner[2]} job="MERN"></Person>
        <h5>I know {person.name} & {person2.name}</h5>
        <h5>He is a {person.job} & {person2.job}</h5>
        <p>My first React Paragraph</p>
      </header>
    </div>
  );
}

function Users(props){
  const [users, settusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => settusers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(props){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(count + 1)
  // }
  // const handleIncrease = () => setCount(count + 1)
  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Products(props){

  const productStyle = {
    boeder: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left"
  }
  const {name , price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: "1px solid #fff",
    color: "lightblue",
    margin: "10px"
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Learning {props.job}</p>
    </div>
  );
}

export default App;
