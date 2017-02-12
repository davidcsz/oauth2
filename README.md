# OAuth2

OAuth 2.0 through Node.

## Functions

* `formAuthorzationUri`
    * Returns a Promise that resolves to a complete authorization URL that you can redirect to.
    * Accepts an object in the following format:

```javascript
{
    client: {
        id: 'SOME-CLIENT-ID',
        secret: 'SOME-SECRET'
    },
    uri: {
        authorization: 'https://someoauth.com/auth',
        token: 'https://someoauth.com/token'
        redirect: 'https://mywonderfulapp.com'
    },
    scope: 'SOME SCOPE HERE',
    responseType: 'RESPONSE-TYPE-IF-ANY'
}
```

* `getAccessToken`
    * Returns a Promise that resolves to an object containing the response from the token request.
    * Accepts an object in the following format:

```javascript
{
    client: {
        id: 'SOME-CLIENT-ID',
        secret: 'SOME-SECRET'
    },
    uri: {
        authorization: 'https://someoauth.com/auth',
        token: 'https://someoauth.com/token'
        redirect: 'https://mywonderfulapp.com'
    },
    scope: 'SOME SCOPE HERE',
    code: 'AUTHORIZATION-CODE'
}
```