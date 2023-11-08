import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-100vh mt-16 ">
      <div className="flex flex-col justify-center items-center p-4 border-2 border-separate rounded-xl shadow-md">
        <h1 className="text-3xl font-bold font-serif m-8">Login...</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
