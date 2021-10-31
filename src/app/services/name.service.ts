import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'                              // For lazy loading
})
export class NameService {                        // A service that reverses the passed in name and returns it
  returnName(name: string) {
    return name.split('').reverse().join('');
  }
}