import { AuthCredentials } from "@domain";


export const mockedAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2023-10-07T12:08:50.433+00:00',
  refleshToken: 'refresh-token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    username: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl: 'fake-url',
    isOnline: false,
    fullName: 'Maria Julia',
  },
};