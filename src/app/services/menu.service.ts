import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _addWhiteBackground = new Subject();

  getAddWhiteBackground() {
    return this._addWhiteBackground.asObservable();
  }

  addWhiteBackground() {
    this._addWhiteBackground.next();
  }
}
