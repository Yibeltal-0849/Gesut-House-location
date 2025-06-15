import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="currentPhoto"
        alt="Photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          <span class="location-text"
            >{{ housingLocation?.city }}, {{ housingLocation?.state }}</span
          >
          <span class="map-link"
            ><a href="{{ housingLocation?.location }}">show on map</a></span
          >
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
          <li>Breakfast included: {{ housingLocation?.breakfastIncluded }}</li>
          <li>Near public transport: {{ housingLocation?.nearTransport }}</li>
          <li>Pet Friendly: {{ housingLocation?.PetFriendly }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  currentPhoto: string = '';
  private photoIndex: number = 0;
  private intervalId: any;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);

    if (this.housingLocation?.photos?.length) {
      this.currentPhoto = this.housingLocation.photos[0];
      this.startSlideshow();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      if (!this.housingLocation) return;

      this.photoIndex =
        (this.photoIndex + 1) % this.housingLocation.photos.length;
      this.currentPhoto = this.housingLocation.photos[this.photoIndex];
    }, 3000); // 3 seconds
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
