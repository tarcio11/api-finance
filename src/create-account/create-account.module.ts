import { Module } from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
import { CreateAccountController } from './create-account.controller';

@Module({
  controllers: [CreateAccountController],
  providers: [CreateAccountService],
})
export class CreateAccountModule {}
