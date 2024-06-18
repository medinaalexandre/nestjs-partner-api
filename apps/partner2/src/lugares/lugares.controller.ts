import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugar } from './request/criar-lugar';
import { AtualizarLugar } from './request/atualizar-lugar';

@Controller('eventos/:eventId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugarRequest: CriarLugar,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({
      name: criarLugarRequest.nome,
      eventId,
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(@Param('eventId') eventId: string, @Param('spotId') spotId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
    @Param('eventId') eventId: string,
    @Param('id') spotId: string,
    @Body() atualizarLugarRequest: AtualizarLugar,
  ) {
    return this.spotsService.update(eventId, spotId, {
      name: atualizarLugarRequest.nome,
    });
  }

  @Delete(':spotId')
  remove(@Param('eventId') eventId: string, @Param('id') spotId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
