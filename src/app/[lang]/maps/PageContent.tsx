'use client';
import React from 'react';
import mapboxgl from 'mapbox-gl';
interface MapsPageContent {
  pageContent: any;
}

const PageContent = ({ pageContent }: MapsPageContent) => {
  console.log('PAGI CONT', pageContent);

  const adminMapContainer = React.useRef<any>(null);
  const adminMap = React.useRef<any>(null);
  //
  const location2 = React.useRef<any>(null);
  const location2Map = React.useRef<any>(null);
  //
  const location3 = React.useRef<any>(null);
  const location3Map = React.useRef<any>(null);
  //
  const location4 = React.useRef<any>(null);
  const location4Map = React.useRef<any>(null);
  //
  const location5 = React.useRef<any>(null);
  const location5Map = React.useRef<any>(null);
  //
  const location6 = React.useRef<any>(null);
  const location6Map = React.useRef<any>(null);

  const contShorthand = pageContent[0].node;

  React.useEffect(() => {
    if (adminMap.current) return;

    const adminLat = Number(contShorthand.adminMapLokacijaIzCmsSustava.mapsLatitude);
    const adminLng = Number(contShorthand.adminMapLokacijaIzCmsSustava.mapsLongitude);

    const imagePath = contShorthand.adminMapLokacijaIzCmsSustava.ikonaIliSlikaNaMapi;

    adminMap.current = new mapboxgl.Map({
      container: adminMapContainer.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [adminLng, adminLat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      cooperativeGestures: true,
    });

    adminMap.current.setCenter([adminLng, adminLat]);
    adminMap.current.flyTo({ adminLng, adminLat });

    const rotateCamera = (timestamp: any) => {
      adminMap.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    };

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    adminMap.current.on('style.load', () => {
      if (imagePath) {
        adminMap.current.loadImage(imagePath.node.sourceUrl, (error: any, image: any) => {
          if (error) {
            console.error('Error loading image:', error);
          } else {
            adminMap.current.addImage('custom-icon', image);

            adminMap.current.addLayer({
              id: 'custom-icon-layer',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [adminLng, adminLat],
                      },
                    },
                  ],
                },
              },
              layout: {
                'icon-image': 'custom-icon',
                'icon-size': 0.15,
              },
            });
          }
        });
      }
    });
  }, [contShorthand]);

  ////////////////////////////////////////

  React.useEffect(() => {
    if (location2Map.current) return;

    if (!contShorthand.adminMapLokacijaIzCmsSustava.lokacija2) return;

    const lat = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.mapsLatitudeDodatneLokacije
    );
    const lng = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.mapsLongitudeDodatneLokacije
    );

    const imagePath = contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.dodajIkonuIliSliku;

    location2Map.current = new mapboxgl.Map({
      container: location2.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [lng, lat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      cooperativeGestures: true,
    });

    location2Map.current.setCenter([lng, lat]);
    location2Map.current.flyTo({ lng, lat });

    const rotateCamera = (timestamp: any) => {
      location2Map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    };

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    location2Map.current.on('style.load', () => {
      if (imagePath) {
        location2Map.current.loadImage(imagePath.node.sourceUrl, (error: any, image: any) => {
          if (error) {
            console.error('Error loading image:', error);
          } else {
            location2Map.current.addImage('custom-icon', image);

            location2Map.current.addLayer({
              id: 'custom-icon-layer',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [lng, lat],
                      },
                    },
                  ],
                },
              },
              layout: {
                'icon-image': 'custom-icon',
                'icon-size': 0.15,
              },
            });
          }
        });
      }
    });
  }, [contShorthand]);

  React.useEffect(() => {
    if (location3Map.current) return;

    if (!contShorthand.adminMapLokacijaIzCmsSustava.lokacija3) return;

    const lat = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.mapsLatitudeDodatneLokacije
    );
    const lng = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.mapsLongitudeDodatneLokacije
    );

    const imagePath = contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.dodajIkonuIliSliku;

    location3Map.current = new mapboxgl.Map({
      container: location3.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [lng, lat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      cooperativeGestures: true,
    });

    location3Map.current.setCenter([lng, lat]);
    location3Map.current.flyTo({ lng, lat });

    const rotateCamera = (timestamp: any) => {
      location3Map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    };

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    location3Map.current.on('style.load', () => {
      if (imagePath) {
        location3Map.current.loadImage(imagePath.node.sourceUrl, (error: any, image: any) => {
          if (error) {
            console.error('Error loading image:', error);
          } else {
            location3Map.current.addImage('custom-icon', image);

            location3Map.current.addLayer({
              id: 'custom-icon-layer',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [lng, lat],
                      },
                    },
                  ],
                },
              },
              layout: {
                'icon-image': 'custom-icon',
                'icon-size': 0.15,
              },
            });
          }
        });
      }
    });
  }, [contShorthand]);

  React.useEffect(() => {
    if (location4Map.current) return;

    if (!contShorthand.adminMapLokacijaIzCmsSustava.lokacija4) return;

    const lat = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.mapsLatitudeDodatneLokacije
    );
    const lng = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.mapsLongitudeDodatneLokacije
    );

    const imagePath = contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.dodajIkonuIliSliku;

    location4Map.current = new mapboxgl.Map({
      container: location4.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [lng, lat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      cooperativeGestures: true,
    });

    location4Map.current.setCenter([lng, lat]);
    location4Map.current.flyTo({ lng, lat });

    const rotateCamera = (timestamp: any) => {
      location4Map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    };

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    location4Map.current.on('style.load', () => {
      if (imagePath) {
        location4Map.current.loadImage(imagePath.node.sourceUrl, (error: any, image: any) => {
          if (error) {
            console.error('Error loading image:', error);
          } else {
            location4Map.current.addImage('custom-icon', image);

            location4Map.current.addLayer({
              id: 'custom-icon-layer',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [lng, lat],
                      },
                    },
                  ],
                },
              },
              layout: {
                'icon-image': 'custom-icon',
                'icon-size': 0.15,
              },
            });
          }
        });
      }
    });
  }, [contShorthand]);

  React.useEffect(() => {
    if (location5Map.current) return;

    if (!contShorthand.adminMapLokacijaIzCmsSustava.lokacija5) return;

    const lat = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.mapsLatitudeDodatneLokacije
    );
    const lng = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.mapsLongitudeDodatneLokacije
    );

    const imagePath = contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.dodajIkonuIliSliku;

    location5Map.current = new mapboxgl.Map({
      container: location5.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [lng, lat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      cooperativeGestures: true,
    });

    location5Map.current.setCenter([lng, lat]);
    location5Map.current.flyTo({ lng, lat });

    const rotateCamera = (timestamp: any) => {
      location5Map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    };

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    location5Map.current.on('style.load', () => {
      if (imagePath) {
        location5Map.current.loadImage(imagePath.node.sourceUrl, (error: any, image: any) => {
          if (error) {
            console.error('Error loading image:', error);
          } else {
            location5Map.current.addImage('custom-icon', image);

            location5Map.current.addLayer({
              id: 'custom-icon-layer',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [lng, lat],
                      },
                    },
                  ],
                },
              },
              layout: {
                'icon-image': 'custom-icon',
                'icon-size': 0.15,
              },
            });
          }
        });
      }
    });
  }, [contShorthand]);

  React.useEffect(() => {
    if (location6Map.current) return;

    if (!contShorthand.adminMapLokacijaIzCmsSustava.lokacija6) return;

    const lat = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.mapsLatitudeDodatneLokacije
    );
    const lng = Number(
      contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.mapsLongitudeDodatneLokacije
    );

    const imagePath = contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.dodajIkonuIliSliku;

    location6Map.current = new mapboxgl.Map({
      container: location6.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [lng, lat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      cooperativeGestures: true,
    });

    location6Map.current.setCenter([lng, lat]);
    location6Map.current.flyTo({ lng, lat });

    const rotateCamera = (timestamp: any) => {
      location6Map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    };

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    location6Map.current.on('style.load', () => {
      if (imagePath) {
        location6Map.current.loadImage(imagePath.node.sourceUrl, (error: any, image: any) => {
          if (error) {
            console.error('Error loading image:', error);
          } else {
            location6Map.current.addImage('custom-icon', image);

            location6Map.current.addLayer({
              id: 'custom-icon-layer',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [lng, lat],
                      },
                    },
                  ],
                },
              },
              layout: {
                'icon-image': 'custom-icon',
                'icon-size': 0.15,
              },
            });
          }
        });
      }
    });
  }, [contShorthand]);

  return (
    <div>
      <div className='max-w-[1440px] mx-auto my-0'>
        <div className='relative'>
          <h2>{contShorthand.adminMaps.nazivMape}</h2>
          <div className='min-h-[400px] w-full ' ref={adminMapContainer}></div>
        </div>
        <h2 className='w-full text-5xl font-medium text-center my-8'>Dodatne lokacije</h2>
        <div className='w-full grid grid-cols-1 gap-8'>
          {contShorthand.adminMapLokacijaIzCmsSustava.lokacija2 && (
            <div className='relative'>
              <h2>{contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.nazivLokacije}</h2>
              <div className='min-h-[400px] w-full ' ref={location2}></div>
            </div>
          )}
          {contShorthand.adminMapLokacijaIzCmsSustava.lokacija3 && (
            <div className='relative'>
              <h2>{contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.nazivLokacije}</h2>
              <div className='min-h-[400px] w-full ' ref={location3}></div>
            </div>
          )}
          {contShorthand.adminMapLokacijaIzCmsSustava.lokacija4 && (
            <div className='relative'>
              <h2>{contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.nazivLokacije}</h2>
              <div className='min-h-[400px] w-full ' ref={location4}></div>
            </div>
          )}
          {contShorthand.adminMapLokacijaIzCmsSustava.lokacija5 && (
            <div className='relative'>
              <h2>{contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.nazivLokacije}</h2>
              <div className='min-h-[400px] w-full ' ref={location5}></div>
            </div>
          )}
          {contShorthand.adminMapLokacijaIzCmsSustava.lokacija6 && (
            <div className='relative'>
              <h2>{contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.nazivLokacije}</h2>
              <div className='min-h-[400px] w-full ' ref={location6}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
