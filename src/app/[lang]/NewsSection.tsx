interface NewsSectionInterface {
  pageContent: any;
  lang: any;
}

const NewsSection = ({ pageContent, lang }: NewsSectionInterface) => {
  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Novosti</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4'></div>
    </section>
  );
};

export default NewsSection;
