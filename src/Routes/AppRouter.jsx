import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import SearchPage from '../components/searchpage/SearchPage';
  import SearchResult from '../components/SearchResult/SearchResult';
  
  export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route >
                <Route path="/search">
                    <SearchResult />
                </Route >
            </Switch>
        </Router>
    )
  }