import FictionBooks from "@/module/fictionBooks/fictionBooks";
import TrendingBookSection from "@/module/globalComponents/TrendingBookSection";
import Slider from "@/module/slider/Slider";


export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <TrendingBookSection></TrendingBookSection>
      <FictionBooks></FictionBooks>
    </div>
  );
}