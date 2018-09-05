import React, { Component } from 'react';

export default class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.GoogleAuth;
    this.SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
  }

  handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
  }

  initClient() {
    // Retrieve the discovery document for version 3 of Google Drive API.
    // In practice, your app can retrieve one or more discovery documents.
    const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

        // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      'discoveryDocs': [discoveryUrl],
      'clientId': 'YOUR_CLIENT_ID',
      'scope': this.SCOPE
    }).then(function() {
      this.GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      this.GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = this.GoogleAuth.currentUser.get();
      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#sign-in-or-out-button').click(function() {
        handleAuthClick();
      }); 
      $('#revoke-access-button').click(function() {
        revokeAccess();
      }); 
    });
  }

  handleAuthClick() {
    if (this.GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked 'Sign out' button.
      this.GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      this.GoogleAuth.signIn();
    }
  }

  revokeAccess() {
    this.GoogleAuth.disconnect();
  }

  setSigninStatus(isSignedIn) {
    var user = this.GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(this.SCOPE);
    if (isAuthorized) {
      $('#sign-in-or-out-button').html('Sign out');
      $('#revoke-access-button').css('display', 'inline-block');
      $('#auth-status').html('You are currently signed in and have granted ' +
          'access to this app.');
    } else {
      $('#sign-in-or-out-button').html('Sign In/Authorize');
      $('#revoke-access-button').css('display', 'none');
      $('#auth-status').html('You have not authorized this app or you are ' +
          'signed out.');
    }
  }

  updateSigninStatus(isSignedIn) {
    setSigninStatus();
  }

  render() {
    return(
      <div>
        <button id="sign-in-or-out-button"
          style="margin-left: 25px">Sign In/Authorize</button>
        <button id="revoke-access-button"
          style="display: none; margin-left: 25px">Revoke access</button>
        <div id="auth-status" style="display: inline; padding-left: 25px"></div><hr />


      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script async defer src="https://apis.google.com/js/api.js" 
        onload="this.onload=function(){};handleClientLoad()" 
        onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>

      </div>
    )
  }

}
