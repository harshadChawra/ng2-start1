import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message = "Hello";
    users: User[] = [
    {id:25, name : 'Harshad', username : 'Hchawra'},
    {id:1, name : 'John', username:'Cenation'},
    {id:17, name : 'Brock', username:'Lesnar'}
];
activeUser: User;

selectUser(user){
    this.activeUser=user;
    console.log(this.activeUser);
}
}