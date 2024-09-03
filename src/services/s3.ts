import { S3 } from '@aws-sdk/client-s3';

import config from 'src/config';

const s3Client = new S3({
  region: config.bucket_region,
  credentials: {
    accessKeyId: config.media_access_key,
    secretAccessKey: config.media_secret_key,
  },
  endpoint: config.env === 'development' ? config.media_endpoint : undefined,
  forcePathStyle: config.env === 'development' ? true : undefined,
});

export default s3Client;
