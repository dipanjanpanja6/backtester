import realm from "./realm";
import {ApolloClient, HttpLink, InMemoryCache, makeVar} from "@apollo/client";
import gql from "graphql-tag";
const graphqlUri = process.env.REACT_APP_REALM_GRAPHQL_URL as string;

interface ComboStrategy {
    indicator: String
    operand: String
    operator: String
}

export const strategiesVar = makeVar<string>("");
export const instrumentsVar = makeVar<string[]>([]);
export const comboStrategyVar = makeVar<ComboStrategy[]>([{indicator:"",operand:"",operator:""}]);


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
export const typeDefs = gql`
    extend type Query {
        strategies: Int!
    }
`;

const client = new ApolloClient({
    typeDefs,
    link: new HttpLink({
        uri: graphqlUri,
        fetch: async (uri, options) => {
            const accessToken = await getValidAccessToken();
            (options!.headers as any)["Authorization"] = `Bearer ${accessToken}`;
            return fetch(uri, options);
        },
    }),

    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    strategies: {
                        read(){
                            return strategiesVar()
                        }
                    },
                    comboStrategies: {
                        read(){
                            return comboStrategyVar()
                        }
                    }
                }
            }
        }
    }),
});

export default client
