import React from "react";

import { Img, Text } from "components";

const FirstBlock: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-sourcesanspro h-[768px] relative w-full items-center justify-start sm:px-5">
          <video autoPlay muted loop className="absolute bg-cover bg-no-repeat" style={{zIndex: -1}}>
            <source src="video/firstBlock.mp4" type="video/mp4"/>
          </video>
          <div className="absolute flex flex-col md:gap-10 gap-[375px] h-max inset-[0] justify-center m-auto w-[90%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="mb-[11px] text-shadow-ts text-white_A700"
                as="h1"
                variant="h1"
              >
                <span className="md:text-5xl text-white_A700 text-8xl font-sourcesanspro text-left font-semibold">
                  Design
                </span>
              </Text>
              <Text
                className="sm:mt-0 mt-[11px] text-shadow-ts text-white_A700"
                as="h1"
                variant="h1"
              >
                <span className="md:text-5xl text-white_A700 text-8xl font-sourcesanspro text-left font-semibold">
                  Develop
                </span>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[468px] text-shadow-ts text-white_A700"
              as="h1"
              variant="h1"
            >
              <span className="md:text-5xl text-white_A700 text-8xl font-sourcesanspro text-left font-semibold">
                Production
              </span>
            </Text>
          </div>
        </div>
    </>
  );
};

export { FirstBlock };
