import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard/profile',
    authorizationParams: {
      connection: undefined,
      prompt: 'login',
    },
  }),
  signup: handleLogin({
    returnTo: '/dashboard/profile',
    authorizationParams: {
      screen_hint: 'signup',
      prompt: 'login',
    },
  }),
});

export const dynamic = 'force-dynamic';
