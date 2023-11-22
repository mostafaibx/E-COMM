import SignupForm from "../components/Signup/SignupForm";

const SignUpPage = () => {
  return (
    <div className="flex justify-center mt-16 ">
      <div className="flex flex-col h-10/12 w-11/12 justify-between items-center p-4 border-2 border-separate rounded-xl shadow-md">
        <h1 className="text-4xl font-bold font-sans mt-8">Signup...</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
