require('dotenv').config()

const config = {
    GRAPH_API_URL: 'https://api.thegraph.com/subgraphs/name/aave/protocol-multy-raw',
    BIT_QUERY_URL: 'https://graphql.bitquery.io',
    DECIMALS: 1e27,
    SECONDS_YEAR: 3.154e+7,
    dbHost: process.env.DB_HOST || 'localhost'
};
export default config;
