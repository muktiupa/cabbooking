import React from 'react';

const PhotoGallery = () => {
  const photos = ['/photo1.jpg', '/photo2.jpg', '/photo3.jpg'];
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt="Car" className="rounded-md" />
      ))}
    </div>
  );
};

export default PhotoGallery;
