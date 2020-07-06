import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaratonaLives } from './maratona-lives.models';
import { MaratonaLivesService } from './maratona-lives.service';

@Controller('maratona')
export class MaratonaLivesController {
    constructor (private maratonaLivesService: MaratonaLivesService){}

    @Get()
    index(): Promise<MaratonaLives[]>{
        return this.maratonaLivesService.findAll();
    }

    @Post('create')
    async create(@Body() maratonaData: MaratonaLives): Promise<any> {
        return this.maratonaLivesService.create(maratonaData);
    }
}
