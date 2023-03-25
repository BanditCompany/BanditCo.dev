import { BarkleIcon } from "../assets/icons/BarkleIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { BanditCoLogo } from "../assets/logos/BanditCo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <BanditCoLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  BanditCo
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
              BanditCo Software Development: Pioneering open-source AI and fostering community connections!
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://barkle.chat/@BanditCo"
                >
                  <BarkleIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/banditco_"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.instagram.com/banditco.dev"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="https://barkle.chat/@Avunite" aria-label="" >
                      Avunite
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="https://barkle.chat/" aria-label="" >
                      Barkle
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="https://banditco.dev/jobs" aria-label="" >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300" href="mailto:support@banditco.dev" aria-label="" >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023 BanditCo.
          </p>
        </div>
      </div>
    </footer>
  );
};