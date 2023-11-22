import Header from "../components/header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className=" h-screen m-10 ">
        <div className=" p-6 bg-red-700 bg-opacity-50 rounded-xl h-9/12">
          <h1 className="text-3xl font-mono font-bold mb-4">
            Error Occured...
          </h1>
          <h4 className="text-xl font-mono ">Couldn't find the page!!!!</h4>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
