import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmisoraModule } from './emisora/emisora.module';
import { EmisoraService } from './services/emisora/emisora.service';

@Module({
  imports: [EmisoraModule, HttpModule, ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, EmisoraService]
})
export class AppModule {}
