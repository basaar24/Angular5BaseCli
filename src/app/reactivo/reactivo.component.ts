import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorEventsService } from "../services/color-events.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit, OnDestroy {

  color: string;
  getColorSubscription: Subscription;
  constructor(private _colorEventService: ColorEventsService) { }

  ngOnInit() {
    this.getColorSubscription = this._colorEventService
      .getColorCode()
      .subscribe(x => this.color = x);
  }

  ngOnDestroy() {
    this.getColorSubscription.unsubscribe();
  }
}
