import { useGetProductsQuery } from "../../Store/ProductSlice";
import { Product, ProductData } from "../../types";
import ProductCard from "../ProductCard/ProductCard";

const Grid = ({ products }: { products: ProductData }) => {
  const { data, isLoading } = useGetProductsQuery(1);

  const productsList = products ? products.products : data && data.products;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 py-2 px-20 lg:px-60">
      {!isLoading &&
        productsList.map((item: Product) => (
          <ProductCard key={item.id} {...item}></ProductCard>
        ))}
    </div>
  );
};

export default Grid;
