import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router'; // File-level import for routing

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: ` <section class="listing">
    <img
      class="listing-photo"
      [src]="housingLocation.photos[0]"
      alt="Exterior photo of {{ housingLocation.name }}"
    />
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">
      {{ housingLocation.city }}, {{ housingLocation.state }},
      <a href="{{ housingLocation.location }}">show on map</a>
    </p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>`,
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
