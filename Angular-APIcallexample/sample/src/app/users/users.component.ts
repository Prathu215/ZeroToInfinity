import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private users: UsersService) {

   }
  usersList: any = [];
  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.users.getUsers().subscribe((response) => {
      console.log('response');
      console.log(response);
      this.usersList = response;
    }, (err) => {
      console.log('error is', err);
    });
    // this.users= users.get.{
    //   "https://jsonplaceholder.typicode.com/users"}
  }

}
