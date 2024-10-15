import Image from 'next/image';
import React from 'react';

interface CardImage {
  imageSource: string;
  altText?: string;
  width?: number;
  height?: number;
  isOverlay: boolean;
  roundedTl?: string;
  roundedTr?: string;
  roundedBl?: string;
  roundedBr?: string;
}

const CardImage = ({
  imageSource,
  altText,
  width,
  height,
  isOverlay,
  roundedBl,
  roundedBr,
  roundedTl,
  roundedTr,
}: CardImage) => {
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
      className={`object-cover object-center block w-full h-full ${roundedBl && roundedBl} ${roundedBr && roundedBr} ${
        roundedTl && roundedTl
      } ${roundedTr && roundedTr}`}
    />
  );
};

export default CardImage;
