
//components
import Brands from "./Brands";
import CarSlider from "./CarSlider";

export default function Cars() {
  return (
  <section className="h-screen flex items-center" id="cars">
    <div className="container mx-auto">
      <Brands/>
      <CarSlider/>
    </div>
   </section>
  );
}
