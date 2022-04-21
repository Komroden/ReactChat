import { Header } from "./components/Header";
import { Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { ChatsPage } from "./pages/Chats";
import { MessagePage } from "./pages/Message";
import { Provider } from "react-redux";
import { store } from "./store";



export const App = () => {
  return (
    <div                       >
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home      />
          </Route>
          <Route path="/chats">
            <ChatsPage />
          </Route>
          <Route path='/cards/:chatId'>
           <MessagePage     />
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



