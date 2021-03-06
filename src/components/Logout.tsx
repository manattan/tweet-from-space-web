import * as React from "react";
import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import "../App.css";
import firebase from "../auth/Firebase";
import Actions from "../store/actions";
import { UserState } from "../store/reducers";
import { Appstate } from "../store/main";

const Auth = firebase.auth();

interface UserActions {
  updateUserId: (v: string) => Action<string>;
  updateUserName: (v: string) => Action<string>;
}

type userProps = UserState & UserActions;

class Logout extends React.Component<userProps> {
  render() {
    return (
      <span className="button" onClick={this.logout}>
        Logout
      </span>
    );
  }

  logout() {
    Auth.signOut()
      .then(() => {
        this.props.updateUserId(" ");
        this.props.updateUserName(" ");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
      .catch((err) => {
        console.error(err);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      });
  }
}

function mapStateToProps(appState: Appstate) {
  return Object.assign({}, appState.user);
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    updateUserId: (v: string) => dispatch(Actions.updateUserId(v)),
    updateUserName: (v: string) => dispatch(Actions.updateUserName(v)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
