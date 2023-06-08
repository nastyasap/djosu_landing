import React from "react";

import { Button, Img, Text } from "components";

const ThirdBlock: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro items-center justify-start p-[29px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start mb-[101px] mt-2 w-full">
          <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-full">
            <div className="flex flex-col gap-[9px] justify-start">
              <Text
                className="font-cardo italic md:ml-[0] ml-[221px] text-black_900_7f text-center tracking-[1.56px]"
                variant="body3"
              >
                All that We See
              </Text>
              <Text
                className="font-inter font-normal mr-[114px] text-black_900 text-center"
                variant="body5"
              >
                in the World is Design
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[173px] justify-start md:mt-0 mt-[23px] w-[55%] md:w-full">
              <Text
                className="font-normal font-sourcesanspro leading-[30.00px] md:ml-[0] ml-[177px] text-black_900 tracking-[0.80px] w-[77%] sm:w-full"
                variant="body11"
              >
                <>
                  DJOSU organized around different stages <br />
                  of user-friendly product development.
                </>
              </Text>
              <div className="flex flex-col items-center justify-start mr-[49px] w-[94%] md:w-full">
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-end justify-start mr-7 w-[97%] md:w-full">
                    <Text
                      className="font-inter text-black_900 text-center tracking-[1.56px]"
                      variant="body3"
                    >
                      We will
                    </Text>
                    <Text
                      className="font-inter font-normal md:mt-0 mt-6 text-black_900"
                      variant="body11"
                    >
                      Provide You with Opportunity to
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[249px] w-[65%] md:w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <Text
                        className="font-normal font-sourcesanspro text-black_900_7f"
                        variant="body11"
                      >
                        turn into
                      </Text>
                      <Text
                        className="font-normal font-sourcesanspro text-black_900_7f"
                        variant="body11"
                      >
                        into
                      </Text>
                    </div>
                    <Text
                      className="font-cardo font-normal italic sm:ml-[0] ml-[85px] sm:mt-0 mt-[18px] text-black_900 tracking-[2.24px]"
                      variant="body11"
                    >
                      Your
                    </Text>
                    <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[81px]">
                      <Text
                        className="font-inter font-normal text-black_900"
                        variant="body11"
                      >
                        Art Dreams
                      </Text>
                      <Text
                        className="font-inter font-normal text-black_900"
                        variant="body11"
                      >
                        Art Reality
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="bg-white_A700 flex flex-col h-[50px] items-center justify-start w-[50px]">
              <Img
                src="images/img_82.png"
                className="h-[50px] md:h-auto object-cover w-[50px]"
                alt="EightyTwo"
              />
            </div>
            <Img
              src="images/img_89111.png"
              className="h-[50px] md:h-auto md:ml-[0] ml-[11px] object-cover w-[50px]"
              alt="89111"
            />
            <div className="bg-white_A700 flex flex-col h-[52px] items-center justify-start md:ml-[0] ml-[13px] w-[52px]">
              <Img
                src="images/img_comp11.png"
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                alt="compEleven"
              />
            </div>
            <div className="bg-white_A700 flex flex-col h-[52px] items-center justify-start md:ml-[0] ml-[11px] w-[52px]">
              <Img
                src="images/img_8911.png"
                className="h-[50px] md:h-auto object-cover w-[50px]"
                alt="8911"
              />
            </div>
            <div className="flex md:flex-1 flex-row gap-1.5 items-start justify-center md:ml-[0] ml-[626px] md:mt-0 mt-[7px] pr-4 w-[12%] md:w-full">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                size="lgIcn"
                variant="icbFillBlack900"
              >
                <Img src="images/img_arrowright.svg" alt="arrowright" />
              </Button>
              <Text
                className="font-normal font-sourcesanspro italic mt-0.5 text-black_900_7f text-center"
                variant="body16"
              >
                All works
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-1.5 items-start justify-center md:ml-[0] ml-[172px] md:mt-0 mt-[7px] sm:pr-5 pr-[29px] w-[14%] md:w-full">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                size="lgIcn"
                variant="icbFillBlack900"
              >
                <Img src="images/img_arrowright.svg" alt="arrowright_One" />
              </Button>
              <Text
                className="font-inter font-normal italic mt-[3px] text-black_900_7f text-center"
                variant="body16"
              >
                All services
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ThirdBlock };
