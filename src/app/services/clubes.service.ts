import { Injectable } from '@angular/core';
import { clubes } from "../data/clubes";
@Injectable({
  providedIn: 'root'
})
export class ClubesService {

  club = clubes

  constructor() { }

  getClubes(){
    return this.club;
  }
}
