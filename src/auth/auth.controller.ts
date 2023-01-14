import { Controller, Post, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login() {
    return /*this.authService.login(req.user)*/;
  }
}
