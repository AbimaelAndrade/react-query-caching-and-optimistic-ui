import { Page } from "../components";

export const ViewProduct = () => {
  return (
    <Page>
      {/* <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative"> */}
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src="https://pngimg.com/uploads/raincoat/raincoat_PNG53.png"
                className="w-full relative z-10"
                alt=""
              />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">
                Mens's Ragged <br />
                Waterproof Jacket
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos,
                voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas
                id quo porro dolorum facilis...{" "}
                <a
                  href="#"
                  className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                >
                  MORE <i className="mdi mdi-arrow-right"></i>
                </a>
              </p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  59
                </span>
                <span className="text-2xl leading-none align-baseline">
                  .99
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Page>
  );
};
