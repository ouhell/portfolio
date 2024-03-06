declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER: string;
      EMAIL_PASSWORD: string;
      EMAIL_RECEIVER: string;
    }
  }
}

export {};
