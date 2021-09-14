import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/dashboard" component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
