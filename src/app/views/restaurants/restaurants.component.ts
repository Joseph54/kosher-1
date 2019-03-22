import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
// import {RestaurantService} from '../../models/services/restaurant.service';
import {KosherApiService} from '../../models/services/kosher-api.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  // region Values
  rests: Restaurant[] = [];
  columns: number;
  // endregion

  // region DefaultMethods
  // instantiates the restaurant service.
  constructor(private restaurantService: KosherApiService) { }

  ngOnInit() {
    this.getRestaurants();
  }
  // endregion

  // region Service Getters
  getRestaurants(): void {
    // subscribes to the observable of restaurants.
    this.restaurantService.getRestaurants().subscribe(res => {
      this.rests = res;
    });
  }
  // endregion

}
