import { useParams } from "react-router";
import Categories from "../components/Categories/Categories";
import Grid from "../components/Grid/Grid";
import SearchBar from "../components/Search/SearchBar";
import { useGetCategoryProductsQuery } from "../Store/CategotieSlice";

const ResultsPage = () => {
  const { catId } = useParams();
  const { data } = useGetCategoryProductsQuery(catId);

  return (
    <div>
      <SearchBar />
      <Categories />
      <Grid products={data} />
    </div>
  );
};

export default ResultsPage;
