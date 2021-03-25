import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/nav.js";
import Home from "./components/home/home.js";
import ProjectCard from "./components/projectcard/projectcard.js";
import Project from "./components/project/project.js";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import Contact from "./components/contact/contact.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      
      
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route exact path={'/'}>
        <Home />
        </Route>
        <Route exact path={'/project'}>
        <Project />
        </Route>
        <Route exact path={'/contact'}>
        <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>


    
  );
}

export default App;
