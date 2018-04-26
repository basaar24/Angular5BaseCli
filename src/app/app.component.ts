import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PracticeComponent } from "./practice/practice.component";
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; 
  isLoading = false;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService
      .getIsLoadingEvent()
      .subscribe(x => this.isLoading = x);
  }
}

export const routes: Routes = [
  { 
    path: '', 
    component: MainComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  {
    path: 'practice',
    component: PracticeComponent
  }
];
