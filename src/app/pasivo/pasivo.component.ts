import { Component, OnInit } from '@angular/core';
import { ColorEventsService } from "../services/color-events.service";

@Component({
  selector: 'app-pasivo',
  templateUrl: './pasivo.component.html',
  styleUrls: ['./pasivo.component.css']
})
export class PasivoComponent implements OnInit {
  
  color: string;
  constructor(private _colorEventService: ColorEventsService) { }

  ngOnInit() {
  }

  onChangeColor() {
    this._colorEventService.setColorCode(this.color);
  }
}
