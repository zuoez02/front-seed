import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
const configPath = process.env.CONFIG_PATH || path.join(__dirname, '..', '..'
    , '..', 'config', 'config.yml');
const config = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
const enviroment = process.env.NODE_ENV || 'development';

// set default config
config.port = config.port || 3000;

export default {
  env: enviroment,
  port: config.port,
};
