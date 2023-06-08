import React from "react";
import { Img, Text } from "../../components";

const Header: React.FC = () => {
  return (
    <header className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-center justify-between mx-auto w-full">
      <Img
        src="images/img_13x81.png"
        className="md:flex-1 h-[63px] sm:h-auto md:ml-[0] ml-[18px] md:mt-0 my-0.5 object-cover w-[8%] md:w-full"
        alt="logo"
      />
      <div className="flex flex-col items-start justify-start md:ml-[0] md:mt-0 my-[19px]">
        <Text
          className="font-semibold text-blue_gray_900"
          variant="body17"
        >
          ABOUT
        </Text>
      </div>
      <div className="flex flex-col items-start justify-start md:ml-[0] md:mt-0 my-[19px]">
        <Text
          className="font-semibold text-blue_gray_900"
          variant="body17"
        >
          SERVICES
        </Text>
      </div>
      <div className="flex flex-col items-start justify-start md:ml-[0] md:mt-0 my-[19px]">
        <Text
          className="font-semibold text-blue_gray_900"
          variant="body17"
        >
          CASES
        </Text>
      </div>
      <div className="flex flex-col items-start justify-start md:ml-[0] mr-7 md:mt-0 my-[19px]">
        <Text
          className="font-semibold text-blue_gray_900"
          variant="body17"
        >
          CONTACTS
        </Text>
      </div>
    </header>
  );
};

export { Header };
