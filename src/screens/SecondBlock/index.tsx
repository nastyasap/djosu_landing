import React from "react";

import { Text } from "components";

const SecondBlock: React.FC = () => {
  return (
    <>
      <div
        className="relative flex flex-col font-inter h-[768px] items-center justify-start sm:px-5 w-full"
      >
        <video autoPlay muted loop className="absolute bg-cover bg-no-repeat" style={{zIndex: -1}}>
          <source src="video/secondBlock.mp4" type="video/mp4"/>
        </video>
        <div className="flex flex-col items-end justify-start mb-0.5 w-[94%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Text
              className="font-sourcesanspro text-shadow-ts text-white_A700"
              variant="body30"
            >
              Build
            </Text>
            <Text
              className="font-dmserifdisplay italic md:mt-0 mt-[136px] text-shadow-ts text-white_A700"
              variant="body30"
            >
              with
            </Text>
            <Text
              className="font-sourcesanspro md:ml-[0] ml-[283px] md:mt-0 mt-[57px] text-shadow-ts text-white_A700"
              variant="body30"
            >
              us
            </Text>
            <Text
              className="font-dmserifdisplay italic mb-[72px] md:ml-[0] ml-[35px] md:mt-0 mt-[180px] text-shadow-ts text-white_A700"
              variant="body30"
            >
              best
            </Text>
            <div className="flex flex-col h-[100px] items-center justify-start md:ml-[0] ml-[200px] md:mt-0 mt-[317px] w-[100px]">
              <div className="flex flex-col h-[100px] items-center justify-start p-6 sm:px-5 w-[100px]">
                <div className="flex flex-col items-center justify-start mb-[21px] mt-2">
                  <Text
                    className="font-bold font-inter text-white_A700"
                    variant="body21"
                  >
                    Order
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[100px] items-center justify-start mt-[19px] w-[100px]">
            <div className="flex flex-col h-[100px] items-center justify-start p-6 sm:px-5 w-[100px]">
              <div className="flex flex-col items-center justify-start mb-[21px] mt-2">
                <Text
                  className="font-bold font-inter text-white_A700"
                  variant="body21"
                >
                  Order
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[66%] md:w-full">
            <Text
              className="font-sourcesanspro text-shadow-ts text-white_A700"
              variant="body30"
            >
              products
            </Text>
            <div className="flex flex-col h-[100px] items-center justify-start sm:mt-0 mt-[18px] w-[100px]">
              <div className="flex flex-col h-[100px] items-center justify-start p-6 sm:px-5 w-[100px]">
                <div className="flex flex-col items-center justify-start mb-[21px] mt-2">
                  <Text
                    className="font-bold font-inter text-white_A700"
                    variant="body21"
                  >
                    Order
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SecondBlock };
