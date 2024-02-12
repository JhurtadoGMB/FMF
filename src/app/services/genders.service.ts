import { Injectable } from '@angular/core';
import { genders } from "../data/generos";
@Injectable({
  providedIn: 'root'
})
export class GendersService {

  gender = genders;
  constructor() { }

  getGenders(){
    return this.gender;
  }
}
