import React from "react";
import "antd/dist/antd.css";
import { PlusIcon } from "../../assets/PlusIcon";
import { CloseIcon } from "../../assets/CloseIcon";

const FlipCard: React.FC = (props) => {
  const products = [
    {
      id: 1,
      text: "Question? Go ahead, give us a call.",
      href: "#",
      imageSrc: "https://i.ibb.co/1dsh9Kk/2022-03-11-TRK-Headset-1.jpg",
      imageAlt: "2022-03-11-TRK-Headset-1.jpg",
    },
    {
      id: 2,
      text: "Question? Go ahead, give us a call.",
      href: "#",
      imageSrc: "https://i.ibb.co/1dsh9Kk/2022-03-11-TRK-Headset-1.jpg",
      imageAlt: "2022-03-11-TRK-Headset-1.jpg",
    },
    {
      id: 3,
      text: "Question? Go ahead, give us a call.",
      href: "#",
      imageSrc: "https://i.ibb.co/1dsh9Kk/2022-03-11-TRK-Headset-1.jpg",
      imageAlt: "2022-03-11-TRK-Headset-1.jpg",
    },
    {
      id: 4,
      text: "Question? Go ahead, give us a call.",
      href: "#",
      imageSrc: "https://i.ibb.co/1dsh9Kk/2022-03-11-TRK-Headset-1.jpg",
      imageAlt: "2022-03-11-TRK-Headset-1.jpg",
    },
  ];
  const CARD_BACK_INFO =
    " Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. \n" +
    "                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n" +
    "                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. \n" +
    "                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n" +
    "";

  const CardText = (text: string) => {
    return (
      <text className={"absolute top-3 left-2 text-white text-3xl font-bold "}>
        {text}
      </text>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-[#5796B4] rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <div className="flex flex-col h-96">
                  <div className="m-4">
                    <text className="text-white text-3xl font-bold">
                      Lorem Ipsum ...
                    </text>
                  </div>
                  <div className="mt-8 ml-4">
                    <text className="text-white text-xl">{CARD_BACK_INFO}</text>
                  </div>
                  <div className="flex justify-end content-end mt-20 mr-1">
                    <CloseIcon />
                  </div>
                </div>

                {
                  //todo:umit make it component
                  <div className={"relative hover:rotate-90"}>
                    {CardText(product.text)}
                    {
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-96 object-center object-cover group-hover:opacity-75"
                      />
                    }
                    <div className={"absolute bottom-6 right-5"}>
                      <PlusIcon />
                    </div>
                  </div>
                }
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
