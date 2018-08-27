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
  userState = UserStateType;
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
    let id = '';
    let password = '';
    let creationDate: Date;
    let cancellationDate: Date;
    let lastActivityDate: Date;
    let userState: '';

    this.userForm = new FormGroup({
      'id': new FormControl({value: id, disabled: this.user != null}, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'password': new FormControl(password, Validators.required),
      'creationDate': new FormControl(creationDate, Validators.required),
      'cancellationDate': new FormControl(cancellationDate, Validators.required),
      'lastActivityDate': new FormControl(lastActivityDate, Validators.required),
      'userState': new FormControl(userState, Validators.required)
    });
  }

}
