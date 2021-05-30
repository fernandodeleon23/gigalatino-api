import { HttpModule, Module } from '@nestjs/common';
import { ItunesService } from 'src/services/itunes/itunes.service';
import { LastfmService } from 'src/services/lastfm/lastfm.service';
import { EmisoraController } from './emisora.controller';
import { EmisoraService } from 'src/services/emisora/emisora.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmisoraEntity } from './emisora.entity';

@Module({
  imports:[HttpModule],
  controllers: [EmisoraController],
  providers: [ItunesService, LastfmService, EmisoraService]
})
export class EmisoraModule {}
