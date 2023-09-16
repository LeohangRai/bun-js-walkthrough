import usersData from '../../data/users.txt';
import { User } from '../interfaces/user.interface';

export function getUsersSeedData(): User[] {
  const users = usersData.split('\n');
  return users.reduce((acc: User[], curr: string) => {
    const [fullName, email] = curr.split(',');
    acc.push({
      fullName: fullName?.trim(),
      email: email?.trim(),
      username: fullName?.replace(' ', '_').replace(/\W/g, '').toLowerCase()
    });
    return acc;
  }, []);
}

export function getUsersSeedDataFormattedString(): string {
  const usersSeedData = getUsersSeedData();
  return usersSeedData.reduce((acc, curr, index) => {
    const { fullName, email, username } = curr;
    acc += `('${fullName}', '${email}', '${username}')${
      index < usersSeedData.length - 1 ? ',' : ''
    }`;
    return acc;
  }, '');
}
