import { useState } from "react";

const ImageGallery = (images: string[]) => {
  /*   const dummyImgs = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://i.dummyjson.com/data/products/7/1.jpg",
    "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/7/3.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://i.dummyjson.com/data/products/3/1.jpg",
  ];
 */
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex mx-4 max-h-80">
      <div className="overflow-y-scroll">
        {Object.values(images).map((item) => (
          <img
            className="w-20 h-20 rounded-2xl m-0 object-cover"
            src={item}
            alt="tree"
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>
      <img
        className="w-80 h-80 rounded-2xl m-0 object-scale-down mx-4"
        src={selectedImage}
        alt="tree"
      />
    </div>
  );
};

export default ImageGallery;
