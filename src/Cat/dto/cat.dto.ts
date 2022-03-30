import { string } from 'joi';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export type UpdateCatDto = Omit<CreateCatDto, ''> & {
  id: string;
};

export class GetElementCatDto {
  id: string;
}
