namespace NodeJS {
  interface ProcessEnv {
    AIRTABLE_API_KEY: string
    AIRTABLE_WORKSPACE: string
    ANALYZE: string
    FONTAWESOME_NPM_AUTH_TOKEN: string
    MY_SECRET_TOKEN: string
    FE_BASE_URL: string
    NODE_ENV: 'development' | 'production'
    CHROME_PATH: string
  }
}
