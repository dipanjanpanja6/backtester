const fs = require("fs");
const path = require("path");

const envFile = `
REACT_APP_FIREBASE_CONFIG={}
REACT_APP_AUTH_EMULATOR_URL=http://localhost:9090
`;

fs.writeFileSync(path.join(process.cwd(),".env"),envFile);
