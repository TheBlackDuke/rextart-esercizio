import { User } from './../interface/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'userIdPipe'})
export class userIdPipe implements PipeTransform {
  transform(value: number, users: User[] = [], username = false ): any {
    let userC;
    if(users)
     users.map( (user: any) => {
      if(user.id === value && !username) {
        userC = user.name
      } else if(username) {
        userC = user.username
      }
    })
    return userC;
  }
}
