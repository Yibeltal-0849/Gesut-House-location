import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}
  readonly baseUrl = '../assets/images';

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Keba Guest House',
      city: 'Yeka',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/6ZeDgRam68dUThhk7',
      photos: [
        `${this.baseUrl}/keba1.jpg`,
        `${this.baseUrl}/keba2.jpg`,
        `${this.baseUrl}/keba3.jpg`,
      ],

      availableUnits: 4,
      wifi: true,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: true,
    },
    {
      id: 1,
      name: 'Victoria Hotel Apartment',
      city: 'Nifas Silk-Lafto',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/tcteQCSoKx4cqGZq5',
      photos: [
        `${this.baseUrl}/victoria1.jpg`,
        `${this.baseUrl}/victoria3.jpg`,
        `${this.baseUrl}/victoria2.jpg`,
      ],
      availableUnits: 0,
      wifi: false,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: false,
    },
    {
      id: 2,
      name: 'Bole Guest House',
      city: 'Bole',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/DdGYm44J3neNAGAM7',
      photos: [
        `${this.baseUrl}/bole.jpg`,
        `${this.baseUrl}/bole1.jpg`,
        `${this.baseUrl}/bole2.jpg`,
      ],
      availableUnits: 1,
      wifi: true,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: false,
    },
    {
      id: 3,
      name: 'Kefetew Guest House',
      city: 'Bole',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/rnC1g6rhBk8kbLWJ9',
      photos: [
        `${this.baseUrl}/ketefew.jpg`,
        `${this.baseUrl}/ketefew2.jpg`,
        `${this.baseUrl}/ketefew3.jpg`,
      ],
      availableUnits: 2,
      wifi: true,
      laundry: false,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: true,
    },
    {
      id: 4,
      name: 'Avi Guest House',
      city: 'Nifas Silk-Lafto',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/FX7Pv3DC7mGejMHX7',
      photos: [
        `${this.baseUrl}/avi.jpg`,
        `${this.baseUrl}/avi2.jpg`,
        `${this.baseUrl}/avi3.jpg`,
      ],
      availableUnits: 1,
      wifi: true,
      laundry: false,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: true,
    },
    {
      id: 5,
      name: 'FBK Guest House',
      city: 'Bole',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/2hYubjkSbkavhveF9',
      photos: [
        `${this.baseUrl}/FBK.jpg`,
        `${this.baseUrl}/FBK2.jpg`,
        `${this.baseUrl}/FBK3.jpg`,
      ],
      availableUnits: 3,
      wifi: true,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: true,
      nearTransport: false,
    },
    {
      id: 6,
      name: 'Vamos Guest House',
      city: 'Lideta',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/QDZiL7bAFV7mztby9',
      photos: [`${this.baseUrl}/vavos.jpg`],
      availableUnits: 5,
      wifi: true,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: true,
      nearTransport: false,
    },
    {
      id: 7,
      name: 'Sport Guesthouse',
      city: 'Yeka',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/dEkodXTh9KUYkdep7',
      photos: [
        `${this.baseUrl}/sport.jpg`,
        `${this.baseUrl}/sport2.jpg`,
        `${this.baseUrl}/sport3.jpg`,
      ],
      availableUnits: 7,
      wifi: true,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: true,
    },
    {
      id: 8,
      name: 'Miheret Guest House',
      city: 'Yeka',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/kPhshzm94vYo5Gg17',
      photos: [
        `${this.baseUrl}/mihiret.jpg`,
        `${this.baseUrl}/mihiret2.jpg`,
        `${this.baseUrl}/mihiret3.jpg`,
      ],
      availableUnits: 10,
      wifi: false,
      laundry: false,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: true,
    },
    {
      id: 9,
      name: 'Wib Guesthouse',
      city: 'Yeka',
      state: 'Addiss Ababa',
      location: 'https://maps.app.goo.gl/yUJeZyioMsDYVPjS9',
      photos: [
        `${this.baseUrl}/wib.jpg`,
        `${this.baseUrl}/wib2.jpg`,
        `${this.baseUrl}/wib3.jpg`,
      ],
      availableUnits: 6,
      wifi: true,
      laundry: true,
      breakfastIncluded: true,
      PetFriendly: false,
      nearTransport: true,
    },
  ];

  // form
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
