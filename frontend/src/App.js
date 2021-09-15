import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/dashboard";
import CreateStudent from "./pages/Create/create-student";
import SingleStudent from "./pages/Student/singleStudent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/create-student" component={CreateStudent} exact />
      <Route path="/student/edit/:id" component={SingleStudent} exact />
    </BrowserRouter>
  );
}

export default App;
