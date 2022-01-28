import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
function App() {
  let todos = [
    {
    sno:1 ,
    title: 'Go to the mall',
    desc: 'in the Mall buy this stuff'
  },
  {
    sno:2 ,
    title: 'Go to the market',
    desc: 'in the market buy this stuff'
  },
  {
    sno:3 ,
    title: 'Go to the shop',
    desc: 'in the shop buy this stuff'
  }
]
  return (
   <>
    <Header title="My Todos List"/>
    <Todos todos = {todos}/>
    <Footer/>
   </>
  );
}

export default App;
