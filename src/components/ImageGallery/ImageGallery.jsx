import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <ul className={css["gallery-list"]}>
      {articles.map(({ alt_description, id, urls: { small, regular } }) => (
        <li
          key={id}
          onClick={() =>
            onImageClick({ modalImg: regular, altDescr: alt_description })
          }
        >
          <ImageCard
            small={small}
            regular={regular}
            description={alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
