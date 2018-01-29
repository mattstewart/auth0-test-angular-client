interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'YOUR_CLIENT_ID',
  domain: 'YOUR_AUTH0_DOMAIN.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
