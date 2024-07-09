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

  const contShorthand = pageContent[0].node;

  React.useEffect(() => {
    if (adminMap.current) return;

    console.log(contShorthand.adminMapLokacijaIzCmsSustava.mapsLatitude);

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
      cooperativeGestures: true,
    });

    adminMap.current.setCenter([adminLng, adminLat]);
    adminMap.current.flyTo({ adminLng, adminLat });
  }, [contShorthand]);

  return (
    <div>
      <div className='relative'>
        <h2>Admin mapa</h2>
        <div className='min-h-[400px] w-full ' ref={adminMapContainer}></div>
      </div>
    </div>
  );
};

export default PageContent;
