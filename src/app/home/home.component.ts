import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carName = '';
  newStyle = 'color:#fff;background:magenta';

  cars = [{ name: 'honda' }, { name: 'pegeout' }];
  constructor(private homeService: HomeService) {}

  addCar(e: Event) {
    console.log((e.target as HTMLButtonElement).innerText);
    const newCar = { name: this.carName };
    if (this.carName.trim() !== '') {
      this.cars.push(newCar);
      this.carName = '';
    }
  }
  onHandleChange(e: Event) {
    const { value } = <HTMLInputElement>e.target;
    this.carName = value;
  }
}
