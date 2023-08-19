import { faker } from "@faker-js/faker";

export class User {
  name: string;
  // here the object is not being created it is just being initialized and when we want to set a value for lat, lng
  // we need to create the object if we log it the value will be undefined.
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    //explanation in line 5
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  content(): string {
    return `<div>
              <h1>Developer Information</h1>
              <h2 style="justify-content: center; display: flex">Name: Auron Vila</h2>
                <h3 style="justify-content: center; display: flex">
                  <a href="https://github.com/auronvila">gitHub</a>
                </h3>
             </div>`;
  }
}
