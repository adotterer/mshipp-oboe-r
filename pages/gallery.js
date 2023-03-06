import { useState } from "react";
import FeatureModal from "../components/FeatureModal";

const galleryImgs = [
  {
    src: "https://mshippoboe.s3.us-west-1.amazonaws.com/image_5_phil_orch_section_1.jpg",
  },
  {
    src: "https://mshippoboe.s3.us-west-1.amazonaws.com/image_9_phil_orch4.jpeg",
  },
  {
    src: "https://mshippoboe.s3.us-west-1.amazonaws.com/image.jpeg",
  },
  {
    src: "https://mshippoboe.s3.us-west-1.amazonaws.com/image_7_phil_orch_section_2.jpg",
  },
  {
    src: "https://mshippoboe.s3.us-west-1.amazonaws.com/beethoven_octet_temple.jpg",
  },
  //
];
const Gallery = () => {
  const [featuredImg, setFeaturedImg] = useState(null);
  const modalClose = () => setFeaturedImg(null);
  return (
    <>
      <div className="container">
        <ul id="gallery">
          {galleryImgs.map((image) => {
            return (
              <li
                key={image.src}
                onClick={() => setFeaturedImg(image)}
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div id="dummy"></div> <div id="element"></div>
              </li>
            );
          })}
        </ul>
      </div>
      {featuredImg && (
        <FeatureModal modalClose={modalClose}>
          <img src={featuredImg.src} />
        </FeatureModal>
      )}
    </>
  );
};

export default Gallery;
