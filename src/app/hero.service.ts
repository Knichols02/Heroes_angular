import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // returns the mock-heroes
  getHeroes(): Observable <Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
