import EventsCard from "../components/EventCards";
import Footer from "../components/Footer";



export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
     <EventsCard />
     <Footer />
      </div>
    </>
  );
}