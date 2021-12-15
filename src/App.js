import './App.css';
import Header from './Mycomponents/Header';
import { Footer } from './Mycomponents/Footer';
import { Todos } from './Mycomponents/Todos';

function App() {
  let todos = [
    {
      srno : 1,
      title : 'Go to the store',
      description: 'Buy grocesseries'
    },
    {
      srno : 2,
      title : 'Go to the barbar',
      description: 'Cut ur hair'
    },
    {
      srno : 3,
      title : 'Go to CCD',
      description: 'Buy Latte'
    }
  ]
  return (
    <>
      <Header/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
