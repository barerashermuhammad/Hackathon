import BlueHeader from "@/components/blue header";
import Carausel from "@/components/caraousel";
import CardsText from"@/components/cards-text";
import Editors from "@/components/editorspick";
import Footer from "@/components/footer";
import GreenDiv from "@/components/greendiv";
// import Lastdiv from "@/components/lastdiv";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/products-card";
import Whitediv from "@/components/white-dic";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <CardsText/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Footer/>
           
    </div>
  )
}