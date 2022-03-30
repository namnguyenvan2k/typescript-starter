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
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Roles } from 'src/helper/role.decorator';
import { ROLES } from 'src/helper/role.enum';
import { ValidationPipe } from 'src/helper/validationPipe';
import { CatsService } from './cat.service';
import { CreateCatDto, GetElementCatDto, UpdateCatDto } from './dto';
import { Cat } from './schema';
import {
  ValidateCreateCat,
  ValidateGetCat,
  ValidateUpdateCat,
} from './validation';

@Controller('/cat')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(ROLES.ADMIN)
  @UsePipes(new ValidationPipe(ValidateCreateCat))
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post('/get')
  @HttpCode(200)
  @UsePipes(new ValidationPipe(ValidateGetCat))
  async getElement(@Body() body: GetElementCatDto): Promise<Cat> {
    return this.catsService.getElement(body.id);
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string) {
    this.catsService.delete(id);
  }

  @Put()
  @HttpCode(200)
  @UsePipes(new ValidationPipe(ValidateUpdateCat))
  async update(@Body() updateCatDto: UpdateCatDto) {
    this.catsService.update(updateCatDto);
  }
}
