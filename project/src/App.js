
import { Header } from "./components/Header";
import { Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { ChatsPage } from "./pages/Chats";
import { MessagePage } from "./pages/Message";
import { Comments } from "./pages/Comments";
import {Start} from "./pages/Start";
import {Post} from "./pages/Post";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {SignUp} from "./pages/SignUp";
import {Login} from "./pages/Login";
import React, {useEffect} from "react";
import {getIsAuth, initAuthAction} from "./store/user";
import {PublicRoute} from "./hocs/PublicRoute";
import {PrivateRoute} from "./hocs/PrivateRoute";





export const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(initAuthAction)
  },[])
const isAuth= useSelector(getIsAuth)
  return (
    <div >
        <Header />
        <Switch>
          <PublicRoute auth={isAuth}  exact path="/">
            <Home />
          </PublicRoute>
          <PrivateRoute auth={isAuth} path="/chats">
            <ChatsPage />
          </PrivateRoute>
          <Route path='/cards/:chatId'>
           <MessagePage/>
          </Route>
          <PrivateRoute auth={isAuth} exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PublicRoute auth={isAuth} exact path="/signup">
            <SignUp />
          </PublicRoute>
          <PublicRoute auth={isAuth} exact path="/login">
            <Login />
          </PublicRoute>

            <Switch>
              <PrivateRoute auth={isAuth} path="/post/:postId" component={Post}/>
              <PrivateRoute auth={isAuth} path="/comments/:postId" component={Comments}/>
              <PrivateRoute auth={isAuth} path="/" component={Start}/>
            </Switch>

          <Route>
            <h3>Page not found</h3>
          </Route>
        </Switch>

    </div>
  );
}




