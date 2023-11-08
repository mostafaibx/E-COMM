import DiscountBanner from "../components/Banners/DiscountBanner";
import Categories from "../components/Categories/Categories";
import Grid from "../components/Grid/Grid";
import SearchBar from "../components/Search/SearchBar";

const Home = () => {
  return (
    <div>
      <DiscountBanner />
      <SearchBar />
      <Categories />
      <Grid />
    </div>
  );
};

export default Home;
