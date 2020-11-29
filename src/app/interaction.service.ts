import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private subject = new Subject<any>();

  async sendChangeEvent(){
    await this.delay(10);
    this.subject.next();
  }

  getChangeEvent(): Observable<any>{
    return this.subject.asObservable();
  }

  private delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
