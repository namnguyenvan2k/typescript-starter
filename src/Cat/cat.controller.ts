import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpException,
  HttpStatus,
  UsePipes,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from 'src/helper/role.decorator';
import { ROLES } from 'src/helper/role.enum';
import { ValidationPipe } from 'src/helper/validationPipe';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto';
import { Cat } from './interface';
import { CreateCatSchema } from './schema';

@Controller()
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(ROLES.ADMIN)
  @UsePipes(new ValidationPipe(CreateCatSchema))
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Cat[]> {
    // throw new HttpException('Permission denied', HttpStatus.FORBIDDEN);

    return this.catsService.findAll();
  }
}
