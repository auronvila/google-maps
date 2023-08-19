import { faker } from "@faker-js/faker";
import { Markable } from "./CustomMap";

export class Company implements Markable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.catchPhrase = faker.company.catchPhrase();
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
