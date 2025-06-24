import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav';
import { Routing } from './components/routing';
import { Endshop } from './components/Endshop.jsx';




function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>

    <Nav></Nav>
  

    <Routing></Routing>
    </BrowserRouter>
   </Provider>  
    </div>
  );
}
export default App;




