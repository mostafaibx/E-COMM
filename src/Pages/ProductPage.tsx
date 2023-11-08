import Button from "../UI/Button";
import ImageGallery from "../components/ImageGallery/ImageGallery";

const ProductPage = () => {
  return (
    <div className="flex">
      <ImageGallery />
      <div>
        <h1>Product title</h1>
        <p>
          Product description: Lorem ipsum dolor sit amet consectetur
          adipisicing elit
        </p>
        <p>Price: 1000</p>
        <p>Rating: 5</p>
        <Button color="primary" onClick={() => {}}>
          to Cart
        </Button>
        <Button color="secondary" onClick={() => {}}>
          to Favorite
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
