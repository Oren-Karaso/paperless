import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ToastService } from 'ng-uikit-pro-standard';
import { User } from './models/user/user.model';
import { HttpService } from './services/http.service';
import { NameService } from './services/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;
  gotResponse = true;                                               // Boolean dectated by server respopnse
  user!: User;                                                      // user that will be updated with the form's data                                  
  name! : string;                                                   // The name which we want to reverse and present

  constructor(private nameService: NameService, private httpService: HttpService) { }  // Services injection

  ngOnInit() {
    this.loginForm = new FormGroup({                                // connecting the template and the form property and setting validations
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
      }),
    });
  }

  sendData(data: User) {                                            // Method that deals with sending the data to the Http service
    this.httpService.postData(data);
    // this.toastrService.info('Success message');
    this.name = this.nameService.returnName(data.name);             // Also updates the name property
  }

  getData(user: User) {                                             // Retrieving data using the Http service, needs to be fixed
    this.httpService.getData(user).subscribe(data => {
      console.log(data.name, data.email);
      this.gotResponse = true;                                      // Also changing the value of the response property
    });
  }

  onSubmit() {                                                      // Form's submittion and data sending to local methods
    this.gotResponse = false;
    this.user = new User(
      this.loginForm.get('userData.username').value,
      this.loginForm.get('userData.email').value
    );
    // console.log(this.user);
    
    this.sendData(this.user);
    this.getData(this.user);
  }

}

