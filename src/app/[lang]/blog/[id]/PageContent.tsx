'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon, FaRedditAlien as RedditIcon } from 'react-icons/fa';
import { FaRegFileLines as FileIcon } from 'react-icons/fa6';
import { BsPaperclip as PaperClipIcon } from 'react-icons/bs';
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';
import toast from 'react-hot-toast';

interface BlogPageContent {
  content: any;
  global: any;
  gallery: any;
  files: any;
  tags: any;
  author: any;
  intro: any;
  category: any[];
}
const PageContent = ({ content, global, gallery, files, tags, author, intro, category }: BlogPageContent) => {
  console.log('GGG', category);

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);

    toast.success('Poveznica kopirana!');
  }
  const prepareContent: any[] = Object.values(content);

  const prepareGallery = Object.values(gallery);

  const prepareTags =
    tags &&
    tags.split(', ').map((singleTag: string) => {
      return `#${singleTag.trim()}`;
    });

  const downloadFile = async (url: any, fileName: any) => {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include', // Dodajte ovu liniju ako je potrebno
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error while downloading file:', error));
  };

  console.log('WWW', window.location);

  return (
    <article className='mx-auto my-0 py-8 lg:px-0 px-4'>
      <div className='w-full max-w-[1140px] mx-auto my-0 text-center'>
        <p className='text-base text-accent font-medium flex items-center justify-center gap-1'>
          <span>{author.node.name}</span>
          <span className='w-1 h-1 bg-accent rounded-full block'></span>
          <span>{dayjs(global.datum).format('DD.MM.YYYY')}</span>
        </p>
      </div>
      <h2 className='text-5xl font-bold max-w-sutraBlogTestMaxWidth mx-auto my-0 text-almost-black text-balance text-center'>
        {prepareContent[1]}
      </h2>
      <div className='prose prose-p:text-xl prose-p:text-secondary-dark line-clamp-1 w-full max-w-[40%] mx-auto  text-center my-4'>
        {parse(intro)}
      </div>
      <div className='w-full max-w-[1140px] mx-auto my-0 text-center pt-6 pb-12'>
        {category.map((cat) => {
          return (
            <span className=' bg-accent/10 text-accent px-3 py-1 rounded-[36px]' key={cat.catName}>
              {cat.catName}
            </span>
          );
        })}
      </div>
      <div className='w-full h-[250px] max-w-[1140px] mx-auto my-0 min-h-[640px] relative'>
        <Image
          src={global.naslovnaSlika.node.sourceUrl}
          alt='blog banner image'
          className='block object-cover object-center aspect-video'
          fill
        />
      </div>
      <div className='mt-4 prose max-w-sutraBlogTestMaxWidth mx-auto my-0 '>
        <div className='text-primary-dark/50 line-clamp-4 w-full mx-auto  my-4'>{parse(intro)}</div>
        <div className='w-full bg-almost-black/5 h-px'></div>
        {parse(prepareContent[2])}
      </div>
      <div className='flex flex-wrap w-full max-w-sutraBlogTestMaxWidth mx-auto gap-2'>
        {prepareGallery.map((galImage: any) => {
          return (
            galImage && (
              <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
                <Image
                  src={galImage.node.sourceUrl ?? 'https://placehold.co/400.png'}
                  alt='gallery image'
                  fill
                  className='object-cover object-center aspect-auto block'
                />
              </div>
            )
          );
        })}
      </div>
      <div className='w-full flex items-center justify-start max-w-sutraBlogTestMaxWidth mx-auto mt-4 mb-6 gap-1 text-base text-almost-black font-normal cursor-pointer '>
        <button
          onClick={() => downloadFile(files.file.node.mediaItemUrl, files.fileName)}
          className='flex items-center border rounded-sutraCardTagBorderRadius border-accent/50 px-2 py-1 text-accent/70  hover:text-accent transition-all ease-in-out'
        >
          <PaperClipIcon /> <span>Preuzmi {files.fileName}</span>
        </button>
      </div>
      <div className='flex gap-1 w-full max-w-sutraBlogTestMaxWidth mx-auto my-4'>
        {prepareTags &&
          prepareTags.map((singTag: string) => {
            return (
              <span
                className='border rounded-sutraCardTagBorderRadius border-accent/50 px-2 py-1 text-accent/70 cursor-pointer hover:text-accent transition-all ease-in-out'
                key={singTag}
              >
                {singTag}
              </span>
            );
          })}
      </div>

      <div className='w-full max-w-sutraBlogTestMaxWidth mx-auto bg-almost-black/10 h-px my-10'></div>
      {typeof window !== 'undefined' && window && (
        <div className='w-full max-w-sutraBlogTestMaxWidth mx-auto flex items-center gap-4 justify-center'>
          <div
            className='flex items-center gap-1 rounded-sutraCardTagBorderRadius border border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black px-4 py-2 cursor-pointer'
            onClick={copyToClip}
          >
            <FileIcon /> <span>Copy link</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-sutraCardTagBorderRadius border cursor-pointer border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black flex items-center justify-center w-9 h-9'>
              <FacebookShareButton url={String(window.location)}>
                <FacebookIcon />
              </FacebookShareButton>
            </div>
            <div className='rounded-sutraCardTagBorderRadius border cursor-pointer border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black flex items-center justify-center w-9 h-9'>
              <TwitterShareButton url={String(window.location)}>
                <TwitterIcon />
              </TwitterShareButton>
            </div>

            <div className='rounded-sutraCardTagBorderRadius border cursor-pointer border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black flex items-center justify-center w-9 h-9'>
              <RedditShareButton url={String(window.location)} className=''>
                <RedditIcon />
              </RedditShareButton>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default PageContent;
