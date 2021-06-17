import realm from "./realm";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const graphqlUri = process.env.REACT_APP_REALM_GRAPHQL_URL as string;

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
    let accessToken = "";
    // Guarantee that there's a logged in user with a valid access token
    if (!realm.currentUser) {
        // If no user is logged in, log in an anonymous user. The logged in user will have a valid
        // access token.
    } else {
        // An already logged in user's access token might be stale. To guarantee that the token is
        // valid, we refresh the user's custom data which also refreshes their access token.
        await realm.currentUser.refreshCustomData();
        accessToken = realm.currentUser.accessToken!;
    }
    return accessToken
}

const client = new ApolloClient({
    link: new HttpLink({
        uri: graphqlUri,
        fetch: async (uri, options) => {
            const accessToken = await getValidAccessToken();
            console.log(options,accessToken);
            (options!.headers as any)["Authorization"] = `Bearer ${accessToken}`;
            return fetch(uri, options);
        },
    }),

    cache: new InMemoryCache(),
});

export default client
