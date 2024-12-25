import css from "./ImageCard.module.css";

const ImageCard = ({ small, regular, alt_description }) => {
  return (
    <div>
      <img className={css["img-card"]} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
