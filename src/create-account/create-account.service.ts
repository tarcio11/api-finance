import { Injectable } from '@nestjs/common';
import { CreateCreateAccountDto } from './dto/create-create-account.dto';
import { UpdateCreateAccountDto } from './dto/update-create-account.dto';
import { CreateAccountEntity } from './entities/create-account.entity';

@Injectable()
export class CreateAccountService {
  private accounts: CreateAccountEntity[] = [];

  create(createCreateAccountDto: CreateCreateAccountDto) {
    const createAccount = new CreateAccountEntity(
      createCreateAccountDto.email,
      createCreateAccountDto.password,
    );
    this.accounts.push(createAccount);
    return createAccount;
  }

  findAll() {
    return this.accounts;
  }

  findOne(id: string) {
    return this.accounts.find((createAccount) => createAccount.id === id);
  }

  update(id: string, updateCreateAccountDto: UpdateCreateAccountDto) {
    const createAccount = this.accounts.find((account) => account.id === id);
    if (createAccount) {
      createAccount.setEmail(updateCreateAccountDto.email);
      createAccount.setPassword(updateCreateAccountDto.password);
    }
    return createAccount;
  }

  remove(id: string) {
    const createAccount = this.accounts.find((account) => account.id === id);
    if (createAccount) {
      this.accounts = this.accounts.filter(
        (account) => account.id !== createAccount.id,
      );
    }
    return createAccount;
  }
}
