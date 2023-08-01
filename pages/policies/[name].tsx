import "tailwindcss/tailwind.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  //access query parameters of current url using useRouter hook
  const { query } = router.query;
  return (
    <div className="bg-gray-100 py-4">
      <NavBar />
      <h2 className="text-2xl  mb-8">policies Search Results for {query}</h2>
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
