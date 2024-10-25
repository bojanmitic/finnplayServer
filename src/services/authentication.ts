import { UnauthorizedError } from '../errors';
import { possibleUsers } from '../utils/possibleUsers';

export const authenticateUser = (username: string, password: string) => {
  const user = possibleUsers.find((user) => user.userName === username && user.password === password);
  if (!user) {
    throw new UnauthorizedError("Can't log in user");
  }
  return { ...user };
};
