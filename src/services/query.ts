import gql from "graphql-tag";





export const STRATEGIES_SELECT_FRONTEND_DATA_LOCAL = gql`
    query StrategiesSelectQuery {
        strategies @client
    }
`;
