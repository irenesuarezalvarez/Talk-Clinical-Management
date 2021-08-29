import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ResetStyles, ProjectTheme } from "./utils/globalStyles";

import AuthProvider from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoute"; 
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/general/HomePage";
import SignupPage from "./pages/authentication/SignupPage";
import ListAllPatientsPage from "./pages/patients/List-All-Patients-Page";
import ListMyPatientsPage from "./pages/patients/List-my-patients";
import CreatePatientPage from "./pages/patients/Create-Patient-Page";
import DetailsPage from "./pages/patients/Details-Patient-Page";
import EditPatientPage from "./pages/patients/Edit-Patient-Page"
import HistoryPage from "./pages/patients/Clinical-History-Page";
import Calendar from "./pages/general/Calendar";


function App() {
  return (
    <AuthProvider>
      <Router>
      <ThemeProvider theme={ProjectTheme}>
        <ResetStyles />
        <Navbar/>
        <Switch>
       
          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route path="/signup">
            <SignupPage/>
          </Route>
          
          <Route path="/patients">
            <ListAllPatientsPage/>
          </Route>

          <Route path="/createpatient">
            <CreatePatientPage/>
          </Route>

          <PrivateRoute path="/mypatients">
            <ListMyPatientsPage/>
          </PrivateRoute>

          <PrivateRoute path="/details/:id">
            <DetailsPage/>
          </PrivateRoute>
{/* REMOVED PRIVATE */}
          <Route path="/edit/:id">
            <EditPatientPage/>
          </Route>
{/* REMOVED PRIVATE */}
          <Route path="/sessions/:id">
            <HistoryPage/>
          </Route>

          <Route path="/calendar">
            <Calendar/>
          </Route>
     

        </Switch>

      </ThemeProvider>
    </Router>

    </AuthProvider>
  );
}

export default App;
