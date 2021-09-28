export default class ConfigService {
  static NODE_ENV = process.env.NODE_ENV;
  
  static KEYS = {
    PORT: 'PORT'
  }

  static get(name) {
    return process.env[name];
  }
}