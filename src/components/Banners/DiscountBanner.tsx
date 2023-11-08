import { updateCountDown } from "../../util/functions";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";

const DiscountBanner = () => {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds } = updateCountDown(
        "2023-12-31 23:59:59"
      );
      setCountDown({ days, hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-100vh h-80 bg-slate-500 flex justify-around align-center ">
      <div className="flex flex-col justify-center items-center">
        <p>Last Chance Sale</p>
        <p>Unbeatable deals on everything you need.</p>
        <Button color="primary" onClick={() => {}}>
          Shop Now
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-35 mx-4 border-t-2 border-white text-xl font-bold">
          <div className="text-center border-r-2 border-white p-4 mt-6 w-32">
            <h1>{countDown.days}</h1>
            <p>DAYS</p>
          </div>
          <div className="text-center border-r-2 border-white p-4 mt-6 w-32">
            <h1>{countDown.hours}</h1>
            <p>HOURS</p>
          </div>
          <div className="text-center border-r-2 border-white p-4 mt-6 w-32">
            <h1>{countDown.minutes}</h1>
            <p>MINUTES</p>
          </div>
          <div className="text-center p-4 mt-6 w-32">
            <h1>{countDown.seconds}</h1>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
