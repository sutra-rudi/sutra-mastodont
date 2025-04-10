import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import parse from 'html-react-parser';
import slugify from 'slugify';

interface NewsSection {
  currentLang: string;
  newsList: any[];
}

export default function NewsSection({ currentLang, newsList }: NewsSection) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='max-w-[1440px] px-4 mx-auto'>
        <h2 className=' text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
          Novosti
        </h2>
        <div className='flex flex-wrap items-start justify-center gap-4'>
          {newsList.map((news) => {
            const isEngMistake = currentLang === UserLanguage.eng;
            return (
              news.node.introNews.istaknutoNaNaslovnici &&
              news.node.introNews.statusNovosti && (
                <a
                  key={news.node.databaseId}
                  href={`/${currentLang}/news/${slugify(
                    news.node.sadrzajHrFields.naslovSadrzajHr + `-${news.node.databaseId}`,
                    {
                      ...slugifyOptions,
                    }
                  )}`}
                >
                  <article className='p-4 max-w-[350px]'>
                    <div className='h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden'>
                      <picture>
                        <img
                          className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 aspect-auto'
                          src={
                            news.node.introNews.naslovnaSlika
                              ? news.node.introNews.naslovnaSlika.node.sourceUrl
                              : 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                          }
                          alt='blog'
                        />
                      </picture>
                      <div className='p-6'>
                        <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                          {news.node.introNews.kategorija.edges[0].node.name}
                        </h2>
                        <h1 className='title-font text-lg font-medium text-gray-600 mb-3'>
                          {
                            news.node[`sadrzaj${l}Fields`]?.[
                              `${isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`}`
                            ]
                          }
                        </h1>

                        {news.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`] ? (
                          <div className='line-clamp-4 leading-relaxed mb-3'>
                            {parse(news.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`])}
                          </div>
                        ) : (
                          <div className='line-clamp-4 leading-relaxed mb-3'>
                            {parse(news.node[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`])}
                          </div>
                        )}
                        <div className='flex items-center flex-wrap '>
                          <button className='bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg'>
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}
