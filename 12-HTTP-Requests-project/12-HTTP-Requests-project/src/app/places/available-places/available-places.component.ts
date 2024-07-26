import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscribtion = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .pipe(
        map((responseData) => responseData.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('An error occurred!'));
        })
      )
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
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
    const subscribtion = this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({
        next: (responseData) => console.log(responseData),
      });

    // this.destroyRef.onDestroy(() => {
    //   subscribtion.unsubscribe();
    // });
  }
}
