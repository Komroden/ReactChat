import { Header } from "./components/Header";
import { Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { CollectionsPage } from "./pages/Chats";
import { CardPage } from "./pages/Message";
import { Provider } from "react-redux";
import { store } from "./store";



export const App = () => {
  return (
    <div >
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chats">
            <CollectionsPage />
          </Route>
          <Route path='/cards/:collectionId'>
           <CardPage/>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route>
            <h3>Page not found</h3>
          </Route>
        </Switch>
      </Provider>


    </div>
  );
}



