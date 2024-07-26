import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;

  ngOnInit() {
    this.isFetching.set(true);
    const subscribtion = this.placesService.loadUserPlaces().subscribe({
      complete: () => {
        this.isFetching.set(false);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscribtion = this.placesService
      .addPlaceToUserPlaces(selectedPlace.id)
      .subscribe({
        next: (responseData) => console.log(responseData),
      });

    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
    });
  }
}
