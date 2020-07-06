import { Module } from '@nestjs/common';
import { MaratonaLivesService } from './maratona-lives/maratona-lives.service';
import { MaratonaLivesController } from './maratona-lives/maratona-lives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaLives } from './maratona-lives/maratona-lives.models';

@Module({
  imports: [
    TypeOrmModule.forFeature([MaratonaLives]),
  ],
  providers: [MaratonaLivesService],
  controllers: [MaratonaLivesController]
})
export class MaratonaLivesModule {}
