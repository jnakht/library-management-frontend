import FictionBooks from "@/module/fictionBooks/fictionBooks";
import AuthorsSection from "@/module/globalComponents/AuthorsSection";
import OurServiceSection from "@/module/globalComponents/OurServiceSection";
import TrendingBookSection from "@/module/globalComponents/TrendingBookSection";
import Slider from "@/module/slider/Slider";


export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <TrendingBookSection></TrendingBookSection>
      <AuthorsSection></AuthorsSection>
      <FictionBooks></FictionBooks>
      <OurServiceSection></OurServiceSection>
    </div>
  );
}