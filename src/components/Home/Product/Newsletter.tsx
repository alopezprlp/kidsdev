import { gilda } from "@/utils/fonts";
import Form from "./NewsLetter/Form";

const Newsletter = () => {
  return (
    <div className="px-2 py-6 mb-4 mt-10 w-full bg-[#F1755C] h-64 flex flex-col justify-center items-center">
      <h1 className={`text-4xl text-center mt-2 text-white ${gilda.className}`}>
        Join Our Newsletter
      </h1>
      <Form />
    </div>
  );
};

export default Newsletter;
