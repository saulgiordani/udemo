import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { User, UserStateType } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  userStates: string[] = ['INITIAL', 'ACTIVE', 'BLOCK', 'CANCELLED'];
  userForm: FormGroup;

  constructor(private userService: UserService) { }

  onLoad() {
    this.user = this.userService.loadUser(+this.userForm.value['id']);
    this.userForm.setValue(this.user);
  }

  onSave() {
    this.userService.saveUser(this.userForm.value);
  }

  onReset() {
    this.userForm.reset();
    this.user = null;
  }

  onDelete() {
    this.userService.deleteUser(this.user.id);
    this.onReset();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      'id': new FormControl({value: null, disabled: this.user != null}, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'password': new FormControl('', Validators.required),
      'creationDate': new FormControl(null, Validators.required),
      'cancellationDate': new FormControl(null, Validators.required),
      'lastActivityDate': new FormControl(null, Validators.required),
      'userState': new FormControl('', Validators.required)
    });
  }

}
