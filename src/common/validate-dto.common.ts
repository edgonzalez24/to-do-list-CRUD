import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export async function validateDto(dtoClass: any, body: any) {
  const dtoInstance = plainToInstance(dtoClass, body);
  const errors = await validate(dtoInstance);

  if (errors.length > 0) {
    const messages = errors.map(err => Object.values(err.constraints || {})).flat();
    throw new Error(messages.join(", "));
  }

  return dtoInstance;
}
