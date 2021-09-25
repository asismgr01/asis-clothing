import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch, Link } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async(user) => {

      createUserProfileDocument(user);
      //this.setState({ currentUser: user });
      /*
      if (this.state.currentUser) {
        console.log(this.state.currentUser.uid);
      }*/
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }
  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path="/asis-clothing/" component={Homepage} />
          <Route exact path="/asis-clothing/shop" component={Shop} />
          <Route exact path="/asis-clothing/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

/*
When we give component(component={Homepage}) as props in Route component,
that component has access to object{
  history,location,match
}
For more:- https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14974356#search
*/
