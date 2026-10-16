import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormGroup} from '@angular/forms';
@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-login',
  styleUrl: '../auth-styles.css',
  templateUrl: './login.html',
})
export class Login {


  ngOnInit(): void {
    this.form = new FormGroup({

    })


  }
}
