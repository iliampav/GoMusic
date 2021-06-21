import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import SeachPage from '../components/seachpage/SearchPage';
  
  export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SeachPage />
                </Route >
            </Switch>
        </Router>
    )
  }