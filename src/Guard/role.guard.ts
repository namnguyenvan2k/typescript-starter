import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES, ROLE_KEY } from 'src/helper/role.enum';
import { ValidationRoles } from 'src/helper/validationRole';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<ROLES[]>(ROLE_KEY, context.getHandler());
    if (!roles) {
      return true;
    }
    return ValidationRoles(roles);
  }
}
