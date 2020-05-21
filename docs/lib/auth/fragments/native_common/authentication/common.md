The AWS Cognito Auth Plugin along with the CLI provides different ways in which a developer can authenticate a user into an app. Lets see the simplest use case first ie authenticate a user with username password.

## Goal
User AWS Cognito Auth plugin to register and authenticate a user. 

## Prerequisites

<inline-fragment platform="ios" src="~/lib/auth/fragments/ios/getting_started/10_preReq.md"></inline-fragment>
<inline-fragment platform="android" src="~/lib/auth/fragments/android/getting_started/10_preReq.md"></inline-fragment>

A user should exists in the backend before we can signIn. You can create a user by following the register a user guide.

## SignIn with username password

### Provisioning backend

Should have followed the steps in getting started guide [TODO add link]()

### SignIn 

Implement an UI to get the username and password from the user. After the user enter the username and password you can start the signIn flow by calling the following method:

<inline-fragment platform="ios" src="~/lib/auth/fragments/ios/authentication/username_password/10_signIn.md"></inline-fragment>

After this step signIn flow is complete and you will see the following in your console window:

```bash
Sign in succeeded
```

## SignIn with a prebuild WebUI

### Provisioning backend

### SignIn 

## SignIn with another auth provider

### Provisioning backend


<amplify-block-switcher>
<amplify-block name="Login with Amazon">
[Todo:]
</amplify-block>
<amplify-block name="Sign in with Apple">
[Todo:]
</amplify-block>
<amplify-block name="Facebook Login">
[Todo:]
</amplify-block>
<amplify-block name="Google Sign-In">
[Todo:]
</amplify-block>
</amplify-block-switcher>

### SignIn 

## SignIn with custom auth flow
<!--
<inline-fragment platform="ios" src="~/sdk/auth/fragments/ios/custom-auth-flow.md"></inline-fragment>
<inline-fragment platform="android" src="~/sdk/auth/fragments/android/custom-auth-flow.md"></inline-fragment>
-->