import convict from 'convict';
import * as dotenv from 'dotenv';
dotenv.config();

const conf = convict({
  config: {
    port: { format: 'port', default: 4001, env: 'PORT' },
    env: {
      format: ['production', 'development', 'staging'],
      default: 'development',
      env: 'APP_ENV',
    },
    app_name: {
      format: 'String',
      default: 'agogochop-api',
      env: 'APP_NAME',
    },
    bucket_name: {
      format: 'String',
      default: '',
      env: 'MEDIA_BUCKET_NAME',
    },
    bucket_region: {
      format: 'String',
      default: '',
      env: 'MEDIA_BUCKET_REGION',
    },
    media_access_key: {
      format: 'String',
      default: '',
      env: 'MEDIA_ACCESS_KEY',
    },
    media_secret_key: {
      format: 'String',
      default: '',
      env: 'MEDIA_SECRET_KEY',
    },
    media_endpoint: {
      format: 'String',
      default: '',
      env: 'MEDIA_ENDPOINT',
    },
  },
});
conf.validate({ allowed: 'strict' });
export default conf.get('config');
