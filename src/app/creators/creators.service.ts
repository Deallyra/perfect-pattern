import { Injectable } from '@angular/core';
import { Creator } from './creator.model';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  constructor() { }

  private creators: Creator[] = [
    new Creator(
      1, 'Vanessa Pouzet', 'Description Vanessa Pouzet', 
      [

      ]
    ),
    new Creator(
      2, 'Deer & Doe', 'Description Deer & Doe', 
      [
        
      ]
    )
  ];

  getCreators() {
    return this.creators.slice();
  }
}
