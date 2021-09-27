import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import UnderConstruction from "./pages/under-construction/under-construction.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
    <Route />;
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }
  render() {
    const loggedIn = this.state.currentUser;
    //console.log(loggedIn)
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path="/asis-clothing/" component={Homepage} />
          <Route exact path="/asis-clothing/shop" component={Shop} />
          <Route
            exact
            path="/asis-clothing/signin"
            component={SignInAndSignUpPage}
          >
            {loggedIn ? <Redirect to="/asis-clothing/" /> : <SignInAndSignUpPage />}
          </Route>
          <Route
            path="/asis-clothing/under-construction/"
            component={UnderConstruction}
          />
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

/*
<Route exact path="/asis-clothing/hats" component={UnderConstruction} />
<Route exact path="/asis-clothing/jackets" component={UnderConstruction} />
<Route exact path="/asis-clothing/sneakers" component={UnderConstruction} />
<Route exact path="/asis-clothing/mens" component={UnderConstruction} />
<Route exact path="/asis-clothing/womens" component={UnderConstruction} />
<Route exact path="/asis-clothing/contact" component={UnderConstruction} />
*/
