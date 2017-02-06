const fetch = require('node-fetch');
const encode = require('./lib/encode.js');

/* appCredentials Object:
let appCredentials = {
    client: {
        id: 'CLIENT_ID',
        secret: 'CLIENT_SECRET'
    },
    uri: {
        authorization: 'https://someauthorization.com/url',
        token: 'https://api.sometoken.com/url',
        redirect: 'https://myimportantapp.com/redirect'
    },
    scope: 'some scope and shit',
    responseType: 'code'
}

*/

// oauth.authorizationCodeUri(appCredentials).then((url) => {});
exports.authorizationCodeUri = (appCredentials) => {
    return new Promise ((fulfill, reject) => {
        if (appCredentials.client.id === undefined) {
            reject('Not enough information to build authorization URL.');
        }
        if (appCredentials.responseType !== undefined) {
            fulfill(`${appCredentials.uri.authroization}?client_id=${encodeURI(appCredentials.client.id)}&response_type=${encodeURI(appCredentials.responseType)}&redirect_uri=${encodeURI(appCredentials.uri.redirect)}&scope=${appCredentials.scope}`);
        } else if (appCredentials.responseType === undefined) {
            fulfill(`${appCredentials.uri.authroization}?client_id=${encodeURI(appCredentials.client.id)}&redirect_uri=${encodeURI(appCredentials.uri.redirect)}&scope=${appCredentials.scope}`);
        }
    });
}

exports.getAccessToken = (authorizationCode, appCredentials) => {
    let authorizationHeader = encode.base64Encode(`${appCredentials.client.id}:${appCredentials.client.secret}`);

    fetch(appCredentials.uri.token, {
        method: 'POST',
        header: {
            'Authorization': `Basic ${authorizationHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `code=${authorizationCode}&grant_type=authorization_code&redirect_uri=${appCredentials.uri.redirect}`
    });
}