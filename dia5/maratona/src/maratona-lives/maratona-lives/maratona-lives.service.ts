import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MaratonaLives } from './maratona-lives.models';

@Injectable()
export class MaratonaLivesService {
    constructor(
        @InjectRepository(MaratonaLives)
        private maratonaLivesRepository: Repository<MaratonaLives>,
    ){    }
    
    async findAll(): Promise<MaratonaLives[]>{
        return await this.maratonaLivesRepository.find();
    }

    async create(maratonaLives: MaratonaLives): Promise<MaratonaLives> {
        return await this.maratonaLivesRepository.save(maratonaLives);
    }
}
