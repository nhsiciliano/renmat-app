import AccordionInfo from "@/components/AccordionInfo";
import Hero from "@/components/Hero";
import TabRegister from "@/components/TabRegister";

export default function Home() {
  return (
    <div className="p-5 sm:px-10 md:px-20 bg-blue-50">
      <Hero />
      <AccordionInfo />
      <TabRegister />
    </div>
  );
}
