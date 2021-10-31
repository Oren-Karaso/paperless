import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  key = 'cach-storage';                                                             // Local storage key

  constructor(private http: HttpClient, private storageService: StorageService) { } // Injecting the services

  postData(user: User) {                                                            // POST request using the user argument passed
    const restoredData = this.storageService.restore(this.key);
    console.log(restoredData);

                                                                                    // Duplicate data check and exit condition, needs to be fixed
    if (restoredData && user.name === restoredData.name && user.email === restoredData.email) {
      console.log('Duplicate data, server call canceled');
      return;
    }

    const url = 'http://httpbin.org/post';

    this.http.post(url, { user }).toPromise()                                       // Executing the POST request since the condition failed
      .then((user: User) => {
        this.storageService.store(this.key, user);                                  // Storing the new value in local storage
        console.log('New data has been stored in local storage:', user);
      });
  }

  getData(data: User): Observable<User> {                                           // Making a GET request, needs to be fixed
    const restoredData = this.storageService.restore(this.key);                     // Loading from local storage for check
    console.log('sent data is:', data);
    console.log('fetched data is:', restoredData);
                                                                                    // GET request exit condition
    if (restoredData && data.name === restoredData.name && data.email === restoredData.email) {
      console.log('Fetched from storage:', restoredData);
      return restoredData;
    }
                                                                                    // Making the GET request
    const url = 'http://httpbin.org/get';
    const res = this.http.get<User>(url);
    console.log('Fetched from server:', res);
    return res;
  }
}
