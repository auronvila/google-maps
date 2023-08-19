export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      clickableIcons: true,
      zoom: 4,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
