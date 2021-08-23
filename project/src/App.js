import { Header } from "./components/Header";
import { Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";
import { Posts } from "./pages/Posts";

export const App = () => {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chats">
          <Chats />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>

    </div>
  );
}



