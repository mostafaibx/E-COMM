import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import { textSlicer } from "../../util/functions";
import Button from "../../UI/Button";
import { Product } from "../../types";
import { useNavigate } from "react-router";

const ProductCard = ({ title, price, description, thumbnail, id }: Product) => {
  const navigate = useNavigate();

  const openProductHandler = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;
    navigate(`/products/${id}`);
  };

  return (
    <div
      onClick={openProductHandler}
      id={id.toString()}
      className="max-w-sm md:max-w-lg mx-auto md:mx-0 flex flex-col justify-between border-2 rounded-lg p-2"
    >
      <img src={thumbnail} alt={title} className="object-contain h-40" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p>Price: ${price}</p>
      <p className="text-md">{textSlicer(description)}</p>
      <div className="flex justify-between">
        <Button color="primary" onClick={() => {}}>
          <ShoppingCartIcon className="h-6 w-6" />
        </Button>
        <Button color="secondary" onClick={() => {}}>
          <HeartIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
