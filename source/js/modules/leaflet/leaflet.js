import L from '../../vendor/leaflet';

let initLeaflet = () => {
  const map = L.map('map', {scrollWheelZoom: false, dragging: false}).setView([55.0286301613192, 82.9282483391627], 14);
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  let myIcon = L.icon({
    iconUrl: 'img/svg/pin.svg',
    iconAnchor: [40, 70],
    iconSize: [70, 70],
  });

  L.marker([55.0286301613192, 82.9282483391627], {icon: myIcon}).addTo(map);
};

export {initLeaflet};
