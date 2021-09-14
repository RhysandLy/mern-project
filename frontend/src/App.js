import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';

function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={Home} exact/>
    <Route path='/login' component={Login} exact/>
    <Route path='/register' component={Register} exact/>
    </BrowserRouter>
  );
}

export default App;
