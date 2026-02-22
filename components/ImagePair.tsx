import React from 'react';

interface ImagePairProps {
  image1: string;
  image2: string;
  alt1?: string;
  alt2?: string;
}

export function ImagePair({ image1, image2, alt1 = 'Image 1', alt2 = 'Image 2' }: ImagePairProps): React.ReactElement {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div 
        className="flex-1"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          aspectRatio: '16/9',
        }}
        role="img"
        aria-label={alt1}
      />
      <div 
        className="flex-1"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          aspectRatio: '16/9',
        }}
        role="img"
        aria-label={alt2}
      />
    </div>
  );
}
