import Image from "next/image";
import StartImg from "../../../public/images/star.svg";
import StartImg2 from "../../../public/images/star2.svg";
import { FC } from "react";

interface IProps {
  rate: number;
}
const Rate: FC<IProps> = ({ rate }) => {
  return (
    <div className="flex flex-row justify-start space-x-1 items-center content-center">
      {Array.from({ length: 5 }, (_, idx) => {
        if (idx + 1 <= rate) {
          return <Image className="w-4" key={idx} src={StartImg} alt="start" />;
        }
        return <Image className="w-4" key={idx} src={StartImg2} alt="start" />;
      })}
    </div>
  );
};

export default Rate;
