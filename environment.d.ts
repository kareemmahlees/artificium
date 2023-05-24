declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;
      AWS_BUCKET_NAME: string;
      AWS_BUCKET_REGION: string;
      AWS_ACCESS_KEY_ID: string;
      AWS_ACCESS_SECRET: string;
    }
  }
}

export {};
