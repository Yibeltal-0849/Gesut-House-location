export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  location: string;
  photos: string[];
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  breakfastIncluded: boolean;
  PetFriendly: boolean;
  nearTransport: boolean;
}
