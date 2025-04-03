import Marquee from 'react-fast-marquee';
import dataset from '../../staticData/staticQueryData.json';

const findKaruselData = dataset.data.allSlikeGalerijaKarusel.edges.find(
  (list) => list.node.title === 'Naslovnica – Karusel slika'
);

const filterImages = Object.values(findKaruselData?.node.photoGallery30pcs!).filter((val) => val);
export default function BaseCaruselSection() {
  return (
    <section className='lg:-mt--desktop---4xl md:-mt--tablet---4xl '>
      <Marquee>
        {filterImages.map((im) => (
          <picture key={im?.node.id}>
            <img
              src={im?.node.sourceUrl}
              alt={`Image - ${im?.node.id}`}
              width={300}
              height={290}
              loading='eager'
              fetchPriority='high'
              className='object-cover object-center block m-0 p-0 aspect-square w-full max-w-[300px] lg:max-h-[290px] max-h-[223px]'
            />
          </picture>
        ))}
      </Marquee>
    </section>
  );
}
