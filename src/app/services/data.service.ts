import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Data pass for diferents componenets
  chatActive$ = new EventEmitter();
  chatInfo$ = new EventEmitter();
  countChat$ = new EventEmitter();
  userId$ = new EventEmitter();
  messages$ = new EventEmitter();

  constructor() { }
}
