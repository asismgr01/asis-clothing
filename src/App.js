import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import UnderConstruction from "./pages/under-construction/under-construction.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import Monsters from "./components/monsters/monsters.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    <Route />;
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }
  render() {
    const loggedIn = this.props.currentUser;
    //console.log(loggedIn)
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/asis-clothing/" component={Homepage} />
          <Route exact path="/asis-clothing/shop" component={Shop} />
          <Route
            exact
            path="/asis-clothing/signin"
            component={SignInAndSignUpPage}
          >
            {loggedIn ? (
              <Redirect to="/asis-clothing/" />
            ) : (
              <SignInAndSignUpPage />
            )}
          </Route>
          <Route
            path="/asis-clothing/under-construction/"
            component={UnderConstruction}
          />
          <Route
            path="/asis-clothing/monsters/"
            component={Monsters}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
const mapsDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapsDispatchToProps)(App);

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
