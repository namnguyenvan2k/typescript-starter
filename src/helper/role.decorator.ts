import { SetMetadata } from '@nestjs/common';
import { ROLES, ROLE_KEY } from './role.enum';

export const Roles = (...roles: ROLES[]) => SetMetadata(ROLE_KEY, roles);
