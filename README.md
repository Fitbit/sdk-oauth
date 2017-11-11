# sdk-oauth

A sample application which uses the Settings API [OAuth
component](https://dev.fitbit.com/reference/settings-api/#oauth-button), and the
[Fitbit Web API](https://dev.fitbit.com/reference/web-api/quickstart/) to query
sleep data.

## Usage

1. You must first register a Web Application on
   [dev.fitbit.com](https://dev.fitbit.com/apps/new) to get an OAuth ID and
   secret. Configure the application as:

- OAuth 2.0 Application Type: **Server**
- Callback URL:
  **https://app-settings.fitbitdevelopercontent.com/simple-redirect.html**

2. Enter your **OAuth 2.0 Client ID** and **Client Secret** into
   `settings/index.jsx`

3. After installing the project from Fitbit Studio, you need to login to the
   Fitbit Web API using the settings page within the Fitbit mobile application.

   ***Fitbit mobile app > Ionic > Developer menu > your app > Settings***

Read more in the [Reference
documentation](https://dev.fitbit.com/reference/#overview).
