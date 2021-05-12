import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { MessageService } from './message.service.spec';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // returns the mock-heroes
  getHeroes(): Observable <Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService : MessageService) { }
}
