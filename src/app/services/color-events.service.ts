import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ColorEventsService {

  private colorCode = new Subject<string>();
  constructor() { }

  setColorCode(color: string) {
    this.colorCode.next(color);
  }

  getColorCode() {
    return this.colorCode.asObservable();
  }

}
