import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store(key: string, data: User) {                                  // Storing data in local storage
    localStorage.setItem(key, JSON.stringify(data));
  }

  restore(key: string) {                                            // loading data from local storage
    return JSON.parse(localStorage.getItem(key)) || null;
  }

}
