import dynamic from 'next/dynamic';
import dataset from '../../staticData/staticQueryData.json';
const findMap = dataset.data.allAdminMaps.edges.find((mapItem) => mapItem.node.title === 'Mapa na naslovnici');

const MapComponent = dynamic(() => import('./MapComponent'));

export default function MapSection() {
  return (
    <section
      id='MAP_SECTION'
      className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl relative lg:h-[690px] h-[369px]'
    >
      <MapComponent accessToken={findMap?.node.adminMapsField.mapboxTokenAdminMaps!} mapDataset={findMap} />
    </section>
  );
}
