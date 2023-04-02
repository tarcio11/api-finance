import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  private transactions: TransactionEntity[] = [];

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = new TransactionEntity(
      createTransactionDto.value,
      createTransactionDto.title,
      createTransactionDto.type,
    );
    this.transactions.push(transaction);
    return transaction;
  }

  findAll() {
    return this.transactions;
  }

  findOne(id: string) {
    return this.transactions.find((transaction) => transaction.id === id);
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const transaction = this.transactions.find(
      (transaction) => transaction.id === id,
    );
    if (transaction) {
      transaction.setValue(updateTransactionDto.value);
      transaction.setTitle(updateTransactionDto.title);
    }
    return transaction;
  }

  remove(id: string) {
    const transaction = this.transactions.find(
      (transaction) => transaction.id === id,
    );
    if (transaction) {
      this.transactions = this.transactions.filter(
        (transaction) => transaction.id !== id,
      );
    }
    return transaction;
  }

  findByType(type: string) {
    return this.transactions.filter((transaction) => transaction.type === type);
  }
}
