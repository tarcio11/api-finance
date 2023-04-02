import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccountModule } from './create-account/create-account.module';
import { TransactionModule } from './transaction/transaction.module';
@Module({
  imports: [CreateAccountModule, TransactionModule],
  providers: [AppService],
})
export class AppModule {}
