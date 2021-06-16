const fs = require("fs");
const path = require("path");

const envFile = `
REACT_APP_FIREBASE_CONFIG={}
REACT_APP_FIREBASE_AUTH_EMULATOR_URL=http://localhost:9099
REACT_APP_FIREBASE_STORAGE_HOST=localhost
REACT_APP_FIREBASE_STORAGE_PORT=9199
`;

fs.writeFileSync(path.join(process.cwd(),".env"),envFile);
