import { ROLES } from './role.enum';

export const ValidationRoles = (role: Array<ROLES>) => {
  const checkRole = role.find((i) => !Object.values(ROLES).includes(i));
  if (checkRole) {
    return false;
  }
  return true;
};
