interface Markable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        clickableIcons: true,
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mark: Markable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mark.location.lat,
        lng: mark.location.lng,
      },
    });
  }
}
