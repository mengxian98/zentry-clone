import { BiSolidGame } from "react-icons/bi";
import IconProvider from "./shared/IconProvider";
import Bento from "./shared/Bento";

const Features = () => {
  return (
    <div className="w-full bg-black px-10 md:px-18 lg:px-28 xl:px-40">
      <div className="font-circular-web text-blue-75 pt-18 pb-12 lg:pt-24 lg:pb-16">
        <h4 className="text-base xl:text-lg">Explore the Zentry Universe</h4>
        <p className="text-sm/5 xl:text-base/5.5 w-4/5 md:w-1/2 xl:w-1/3 mt-2 opacity-[0.4]">
          Immerse yourself in a world of ancient magic, mythical creatures, and
          forgotten realms. Forge your legend through epic battles and legendary
          quests - where adventures await at every corner.
        </p>
      </div>
      <div>
        <div className="h-[45vh] lg:h-[60vh]">
          <Bento
            title="Radiant"
            description="A visually stunning journey through a luminous world filled with vibrant landscapes, magical powers, and awe-inspiring creatures."
            backgroundSrc="./videos/feature-1.mp4"
            isComingSoon
            containerClass="border-zinc-800"
          />
        </div>
        <div className="grid grid-rows-3 gap-y-5 my-5 h-[135vh] md:grid-cols-2 md:grid-rows-2 md:gap-10 md:my-10 md:h-[90vh]">
          <Bento
            title="Zigma"
            description="Cutting-edge NFT innovation grants you true ownership of the stories you shape."
            backgroundSrc="./videos/feature-2.mp4"
            isComingSoon
            containerClass="border-zinc-800 md:row-span-2"
          />
          <Bento
            title="Nexus"
            description="Players and AI collaborate to compete in an ever-evolving universe."
            backgroundSrc="./videos/feature-3.mp4"
            isComingSoon
            isSiteLaunched
            containerClass="border-zinc-800"
          />
          <Bento
            title="Azul"
            description="Meet Azul, your loyal AI companion - guiding you through enchanted realms to conquer epic puzzles."
            backgroundSrc="./videos/feature-4.mp4"
            isComingSoon
            containerClass="border-zinc-800"
          />
        </div>
        <div className="grid grid-rows-2 gap-5 h-[70vh] sm:grid-rows-none sm:grid-cols-2 sm:h-[32vh] md:gap-10 xl:h-[45vh]">
          <div className="h-full relative special-font font-zentry bg-violet-300 text-black text-6xl leading-12 xl:text-7xl xl:leading-16 border-transparent rounded-lg p-8">
            <p>
              M<b>o</b>re
            </p>
            <p>
              Co<b>m</b>ing
            </p>
            <p>
              S<b>o</b>on.
            </p>
            <div className="absolute right-5 bottom-5 rotate-345">
              <IconProvider value={{ size: "3rem" }}>
                <BiSolidGame />
              </IconProvider>
            </div>
          </div>
          <Bento backgroundSrc="./videos/feature-5.mp4" autoPlayBackground />
        </div>
      </div>
    </div>
  );
};

export default Features;
