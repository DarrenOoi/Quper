interface AnalysisProps {
  name: string;
}

const Analysis = ({ name }: AnalysisProps) => {
  return (
    <div className="container mx-auto mt-8 px-4 h-screen">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {name} Analysis Results
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg md:text-l text-center leading-relaxed">
            Our team has conducted a comprehensive analysis of various privacy
            policies from different companies and websites. The purpose of this
            analysis was to gain insights into how organizations handle user
            data, what information they collect, and how they ensure the
            protection of user privacy. The results of our analysis reveal
            crucial findings that shed light on the state of privacy practices
            in the digital world.
          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Analysis;
