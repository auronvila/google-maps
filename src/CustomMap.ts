export interface Markable {
  content(): string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mark.location.lat,
        lng: mark.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mark.content(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
