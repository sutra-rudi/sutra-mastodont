import Image from 'next/image';
import React from 'react';

interface CardImage {
  imageSource: string;
  altText?: string;
  width?: number;
  height?: number;
  isOverlay: boolean;
}

const CardImage = ({ imageSource, altText, width, height, isOverlay }: CardImage) => {
  if (width || height) {
    return (
      <Image
        src={imageSource}
        width={width}
        height={height}
        alt={altText ?? 'Default alt text'}
        className={`object-cover object-center block ${isOverlay && 'rounded-xl-vanjski-okvir-total'}`}
      />
    );
  }
  return (
    <Image
      fill
      src={imageSource}
      alt={altText ?? 'Default alt text'}
      className={`object-cover object-center block w-full h-full ${isOverlay && 'rounded-xl-vanjski-okvir-total'}`}
    />
  );
};

export default CardImage;
