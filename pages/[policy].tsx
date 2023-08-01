import "tailwindcss/tailwind.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Analysis from "@/components/Analysis";
import { useRouter } from "next/router";
import { NextPage } from "next";
import SideBar from "@/components/SideBar";
import Head from "next/head";

const Policy: NextPage = () => {
  const router = useRouter();
  const pathname = router.asPath;
  const segments = pathname.split("/");
  const query = segments[segments.length - 1];

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Quper</title>
      </Head>
      <NavBar />
      <div className="flex">
        <div className="hidden lg:block w-60 h-screen bg-base-200">
          <SideBar />
        </div>
        <div className="w-full lg:w-auto px-4 py-8 mx-auto">
          <Analysis name={query} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
