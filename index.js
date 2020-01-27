const Clubhouse = require('clubhouse-lib');
const process = require('process');

const { CLUBHOUSE_API_TOKEN } = process.env;

const client = Clubhouse.create(CLUBHOUSE_API_TOKEN);
client.listProjects().then(console.log);