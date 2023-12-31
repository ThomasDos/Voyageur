import { ExecutionContext, createParamDecorator } from '@nestjs/common';

const getCurrentUserByContext = (ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentUserByContext(ctx),
);
