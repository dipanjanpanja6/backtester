const fs = require("fs");
const path = require("path");

const envFile = `
REACT_APP_REALM_APP_ID=
REACT_APP_REALM_GRAPHQL_URL=
`;

fs.writeFileSync(path.join(process.cwd(),".env"),envFile);
