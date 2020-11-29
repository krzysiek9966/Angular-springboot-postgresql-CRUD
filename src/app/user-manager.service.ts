import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(private http: HttpClient) {  }

  public getAll(){
    return this.http.get("http://localhost:8080/api/users/getAll");
  }

  public addUser(user: User){
    return this.http.post("http://localhost:8080/api/users/add", 
    user, 
    {responseType: 'text' as 'json'});
  }

  public deleteUser(username: string) {
    return this.http.delete(`http://localhost:8080/api/users/deleteByUsername?username=${username}`);
  }

}
