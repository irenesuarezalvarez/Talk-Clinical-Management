import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


import Signup from "./pages/authentication/Signup";
import Login from "./pages/authentication/Login";
import Navbar from "./components/layouts/Navbar";
import Create from "./pages/patients/Create-new-patient";
import ListAllPatients from "./pages/patients/List-all-patients"
import ListMyPatients from "./pages/patients/List-my-patients";
import Edit from "./pages/patients/Edit-new-patient"
import History from "./pages/patients/Clinical-history";
import Home from "./pages/general/Home";

function App() {
  return (
    <Router>
      <ThemeProvider theme={ProjectTheme}>
        <ResetStyles />
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>
          
          <Route path="/patients">
            <ListAllPatients/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <Route path="/mypatients">
            <ListMyPatients/>
          </Route>

          <Route path="/edit/:id">
            <Edit/>
          </Route>

          <Route path="/sessions/:id">
            <History/>
          </Route>
       

        </Switch>

      </ThemeProvider>
    </Router>
  );
}

export default App;
