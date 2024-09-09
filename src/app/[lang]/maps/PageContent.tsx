'use client';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import Loading from '@/app/loading';
interface MapsPageContent {
  pageContent: any;
}

const PageContent = ({ pageContent }: MapsPageContent) => {
  const [mapsLoadingState, setMapsLoadingState] = React.useState({
    admin: true,
  });

  const adminMapContainer = React.useRef<any>(null);
  const adminMap = React.useRef<any>(null);

  const contShorthand = pageContent[0].node;

  // console.log('ADMIN MAPE', contShorthand);

  React.useEffect(() => {
    if (!contShorthand || adminMap.current) return;

    const adminLat = Number(contShorthand.adminMapLokacijaIzCmsSustava.mapsLatitude);
    const adminLng = Number(contShorthand.adminMapLokacijaIzCmsSustava.mapsLongitude);

    adminMap.current = new mapboxgl.Map({
      container: adminMapContainer.current,
      style:
        contShorthand.adminMaps.mapboxStylesheetAdminMaps ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: contShorthand.adminMaps.mapboxTokenAdminMaps,
      center: [adminLng, adminLat],
      zoom: contShorthand.adminMaps.mapboxZoomAdminMaps,
      maxZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomIn,
      minZoom: contShorthand.mapsCentarMapeKoordinate.maxZoomOut,
      cooperativeGestures: true,
      pitch: contShorthand.mapsCentarMapeKoordinate.pitchNagib ?? undefined,
      bearing: contShorthand.mapsCentarMapeKoordinate.bearing ?? undefined,
    });

    adminMap.current.setCenter([adminLng, adminLat]);
    adminMap.current.flyTo({ adminLng, adminLat });

    function rotateCamera(timestamp: any) {
      const speed = contShorthand.mapsCentarMapeKoordinate.rotationSpeed;
      if (speed) {
        adminMap.current.rotateTo((timestamp / speed) % 360, { duration: 0 });
        requestAnimationFrame(rotateCamera);
      }
    }

    if (contShorthand.adminMapsAktivatorSpecijalnihMapboxSkripti.animateMapCameraAroundAPoint) rotateCamera(0);

    const geoJSON = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            description: contShorthand.adminMapLokacijaIzCmsSustava.popUpPorukaKojaSeIspisujeKlikomNaTockuNaMapi,
            textBy: contShorthand.adminMapLokacijaIzCmsSustava.imeLokacijeKojaSeIspisujeUMapi,
            imgSource: contShorthand.adminMapLokacijaIzCmsSustava.ikonaIliSlikaNaMapi.node.sourceUrl,
            iconSize: [40, 40],
          },
          geometry: {
            type: 'Point',
            coordinates: [adminLng, adminLat],
          },
        },

        contShorthand.adminMapLokacijaIzCmsSustava.lokacija2 && {
          type: 'Feature',
          properties: {
            description:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2
                .porukaKojaSeIspisujeZaDodatnuLokaciju,
            iconSize: [40, 40],
            // textBy:
            //   contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2
            //     .porukaKojaSeIspisujeZaDodatnuLokaciju,
            imgSource:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.dodajIkonuIliSliku.node.sourceUrl,
          },
          geometry: {
            type: 'Point',
            coordinates: [
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.mapsLongitudeDodatneLokacije,
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju2.mapsLatitudeDodatneLokacije,
            ],
          },
        },
        contShorthand.adminMapLokacijaIzCmsSustava.lokacija3 && {
          type: 'Feature',
          properties: {
            description:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3
                .porukaKojaSeIspisujeZaDodatnuLokaciju,
            iconSize: [40, 40],
            // textBy:
            //   contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3
            //     .porukaKojaSeIspisujeZaDodatnuLokaciju,
            imgSource:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.dodajIkonuIliSliku.node.sourceUrl,
          },
          geometry: {
            type: 'Point',
            coordinates: [
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.mapsLongitudeDodatneLokacije,
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju3.mapsLatitudeDodatneLokacije,
            ],
          },
        },
        contShorthand.adminMapLokacijaIzCmsSustava.lokacija4 && {
          type: 'Feature',
          properties: {
            description:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4
                .porukaKojaSeIspisujeZaDodatnuLokaciju,
            iconSize: [40, 40],
            // textBy:
            //   contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4
            //     .porukaKojaSeIspisujeZaDodatnuLokaciju,
            imgSource:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.dodajIkonuIliSliku.node.sourceUrl,
          },
          geometry: {
            type: 'Point',
            coordinates: [
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.mapsLongitudeDodatneLokacije,
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju4.mapsLatitudeDodatneLokacije,
            ],
          },
        },
        contShorthand.adminMapLokacijaIzCmsSustava.lokacija5 && {
          type: 'Feature',
          properties: {
            description:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5
                .porukaKojaSeIspisujeZaDodatnuLokaciju,
            imgSource:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.dodajIkonuIliSliku.node.sourceUrl,
            iconSize: [40, 40],
            // textBy:
            //   contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5
            //     .porukaKojaSeIspisujeZaDodatnuLokaciju,
          },
          geometry: {
            type: 'Point',
            coordinates: [
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.mapsLongitudeDodatneLokacije,
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju5.mapsLatitudeDodatneLokacije,
            ],
          },
        },
        contShorthand.adminMapLokacijaIzCmsSustava.lokacija6 && {
          type: 'Feature',
          properties: {
            description:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6
                .porukaKojaSeIspisujeZaDodatnuLokaciju,
            iconSize: [40, 40],
            // textBy:
            //   contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6
            //     .porukaKojaSeIspisujeZaDodatnuLokaciju,
            imgSource:
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.dodajIkonuIliSliku.node.sourceUrl,
          },
          geometry: {
            type: 'Point',
            coordinates: [
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.mapsLongitudeDodatneLokacije,
              contShorthand.adminMapLokacijaIzCmsSustava.podaciZaAktiviranuLokaciju6.mapsLatitudeDodatneLokacije,
            ],
          },
        },
      ],

      layout: {
        'icon-size': 0.05,
      },
    };

    adminMap.current.on('style.load', () => {
      geoJSON.features.forEach((marker) => {
        if (marker) {
          const el = document.createElement('div');
          const width = marker.properties.iconSize[0];
          const height = marker.properties.iconSize[1];
          el.className = 'marker-custom';
          el.style.backgroundImage = `url(${marker.properties.imgSource})`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = '100%';
          el.style.display = 'block';
          el.style.border = 'none';
          el.style.borderRadius = '50%';
          el.style.cursor = 'pointer';
          el.style.padding = '0';

          const textDiv = document.createElement('div');
          textDiv.className = 'marker-text';
          textDiv.textContent = marker.properties.textBy ?? '';
          marker.properties.textBy && el.appendChild(textDiv);

          var html = `<div className="!bg-blue-300"><p>${marker.properties.description}</p></div>`;

          var customPopUp = new mapboxgl.Popup({
            anchor: 'bottom', // To show popup on top
            offset: { bottom: [0, -10] }, // To prevent popup from over shadowing the marker.
            closeOnClick: false, // To prevent close on mapClick.
          }).setHTML(html); // You can set any valid HTML.

          new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(adminMap.current).setPopup(customPopUp);

          el.addEventListener('mouseover', () => customPopUp.addTo(adminMap.current));
          el.addEventListener('mouseleave', () => customPopUp.remove());
        }
      });

      setMapsLoadingState((_prev) => {
        return { ..._prev, admin: false };
      });
    });
    adminMap.current.resize();
    return () => {
      if (adminMap.current) {
        adminMap.current.remove();
        adminMap.current = null;
      }
    };
  }, [contShorthand]);

  ////////////////////////////////////////

  return (
    <div>
      <div className='max-w-[1440px] mx-auto my-0'>
        <h2 className='w-full text-5xl font-medium text-center my-8'>Admin mapa</h2>
        {contShorthand.adminMapLokacijaIzCmsSustava && (
          <div className='relative'>
            <h2>{contShorthand.adminMaps.nazivMape}</h2>
            {mapsLoadingState.admin && <Loading />}
            <div
              className={`min-h-[400px] w-full ${
                mapsLoadingState.admin ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-700`}
              ref={adminMapContainer}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageContent;
