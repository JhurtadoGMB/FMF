import { Injectable } from '@angular/core';
import { nationalities } from "../data/nacionalidades";
@Injectable({
  providedIn: 'root'
})
export class NationalitiesService {
nationality = nationalities;
  constructor() { }

  getNationalities(){
    return this.nationality;
  }
}
