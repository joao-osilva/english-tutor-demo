import 'next-auth';

declare module '@auth0/nextjs-auth0' {
  interface User {
    credits: number;
  }

  interface Session {
    user: User;
  }
}
