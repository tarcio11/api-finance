import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
import { CreateCreateAccountDto } from './dto/create-create-account.dto';
import { UpdateCreateAccountDto } from './dto/update-create-account.dto';

@Controller('accounts')
export class CreateAccountController {
  constructor(private readonly createAccountService: CreateAccountService) {}

  @Post()
  create(@Body() createCreateAccountDto: CreateCreateAccountDto) {
    return this.createAccountService.create(createCreateAccountDto);
  }

  @Get()
  findAll() {
    return this.createAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createAccountService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCreateAccountDto: UpdateCreateAccountDto,
  ) {
    return this.createAccountService.update(id, updateCreateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createAccountService.remove(id);
  }
}
