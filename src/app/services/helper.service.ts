import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HelperService {
  messageEmitter = new BehaviorSubject<string>('');

  setMessage(message: string) {
    this.messageEmitter.next(message);
  }

  getMessage(): Observable<string> {
    return this.messageEmitter.asObservable();
  }
}
