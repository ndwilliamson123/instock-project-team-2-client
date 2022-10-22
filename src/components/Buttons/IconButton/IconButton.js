import "./IconButton.scss";

export default function IconButton({ image, onClick, alt}) {
  return (
    <button onClick={onClick} className="icon-button" >
      <img src={image} alt={alt}></img>
    </button>
  );
}
