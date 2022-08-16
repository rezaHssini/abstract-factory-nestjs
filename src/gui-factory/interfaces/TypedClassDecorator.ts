import { Type } from '@nestjs/common';

export type TypedClassDecorator<T> = (target: Type<T>) => void;
