import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schema';
import { Model } from 'mongoose';
import { CreateCatDto, UpdateCatDto } from './dto';
import mongodb from 'mongodb';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async delete(id: string): Promise<{}> {
    return this.catModel.findByIdAndDelete(id);
  }

  async getElement(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async update(updateCatDto: UpdateCatDto): Promise<[]> {
    const { id, ...body } = updateCatDto;
    return this.catModel.findByIdAndUpdate(updateCatDto.id, body);
  }
}
