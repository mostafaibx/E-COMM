import { useParams } from "react-router";
import Button from "../UI/Button";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { useGetProductByIdQuery } from "../Store/ProductSlice";

const ProductPage = () => {
  const { productId } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(productId || "");

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="flex flex-col md:flex-row justify-around my-12 px-20">
          <ImageGallery {...data.images} />
          <div>
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-8">Description: {data.description}</p>
            <p className="text-2xl font-bold mb-2">Price: ${data.price}</p>
            <p className={`text-lg bg-yellow-300 rounded-xl w-fit p-2 mb-4`}>
              Rating: {data.rating}
            </p>

            <div className="flex flex-col justify-between px-40">
              <Button color="primary" onClick={() => {}}>
                to Cart
              </Button>
              <Button color="secondary" onClick={() => {}}>
                to Favorite
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
