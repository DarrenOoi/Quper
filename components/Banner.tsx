import { useRouter } from "next/router";
import { useState } from "react";

const Banner = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    router.push(`/${query}`);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="relative flex flex-col items-center text-black bg-cover bg-center py-20 rounded shadow-lg">
        <img
          src="/Privacy policy-amico.png"
          alt="Privacy Policy"
          width="300px"
          height="150px"
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <h2 className="text-4xl font-bold mb-8">
          Welcome to QuPer - Your Trusted Privacy Policy Analysing Tool
        </h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          Introducing QuPer - the comprehensive privacy policy analysing tool
          designed to simplify the process and help you stay compliant
          effortlessly.
        </p>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Input Privacy Policy URL"
          className="input input-bordered w-full max-w-xs"
        />
        <br></br>
        <br></br>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Banner;
