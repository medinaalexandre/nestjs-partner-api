import { PartialType } from '@nestjs/mapped-types';
import { CriarLugar } from './criar-lugar';

export class AtualizarLugar extends PartialType(CriarLugar) {}
