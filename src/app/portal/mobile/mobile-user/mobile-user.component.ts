import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-user',
  templateUrl: './mobile-user.component.html',
  styleUrls: ['./mobile-user.component.css']
})
export class MobileUserComponent implements OnInit {
  mobileUserForm: FormGroup;

  constructor(private mobileService: MobileService) { }

  onSubmit() {
    console.log(this.mobileUserForm.value);
  }

  ngOnInit() {
    this.initMobileUserForm();
    this.formControlValueChanged();
  }

  private initMobileUserForm() {
    this.mobileUserForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'deviceId': new FormControl('', Validators.required),
      'mobilePassword': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'tokenChoice': new FormControl('', Validators.required),
      'phone': new FormControl('')
    });
  }

  formControlValueChanged() {
    const phoneControl = this.mobileUserForm.get('phone');
    this.mobileUserForm.get('tokenChoice').valueChanges.subscribe(
      (token: string) => {
        if (token === 'sms') {
          phoneControl.setValidators(Validators.required);
        }
      });
  }

}
