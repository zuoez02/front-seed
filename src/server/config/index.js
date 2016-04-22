import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
let configPath = process.env.CONFIG_PATH || path.join(__dirname, '..', '..', '..', 'config', 'config.yml');
let config = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
let env = process.env.NODE_ENV || 'development';

// set default config
config.port = config.port || 3000

export default {
    env : env,
    port : config.port,
}