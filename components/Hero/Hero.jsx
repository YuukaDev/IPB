import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";

export default function Hero() {
  return (
    <Swiper
      effect="fade"
      grabCursor={true}
      draggable={true}
      autoplay={{
        autoplay: true,
        delay: 5000,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        type: "bullets",
      }}
      modules={[Pagination, Autoplay, EffectFade]}
      className="mySwiper h-full md:w-full md:p-0 md:m-0"
    >
      <SwiperSlide>
        <div className="bg-hero-1 w-full h-landingHero bg-no-repeat bg-cover bg-bottom text-heroColor">
          <div className="w-full h-hero flex justify-center items-center flex-col">
            <p className="text-md uppercase font-medium height leading-5 tracking-heroWide">
              New Trending
            </p>
            <h1 className="mt-5 text-3xl tracking-heroWide leading-7 font-normal">
              Forza Horizon 5
            </h1>
            <div className="mt-6">
              <Link passHref href="/">
                <button className="font-normal tracking-widest bg-transparent uppercase hover:bg-white text-white hover:text-black py-3 px-5 border border-white transition-all">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-hero-2 w-full h-landingHero bg-no-repeat bg-cover bg-bottom text-heroColor">
          <div className="w-full h-hero flex justify-center items-center flex-col">
            <p className="text-md uppercase font-medium height leading-5 tracking-heroWide">
              New Trending
            </p>
            <h1 className="mt-5 text-3xl tracking-heroWide leading-7 font-normal">
              Risk of Rain 2: Survivors of the Void
            </h1>
            <div className="mt-6">
              <Link href="/">
                <button className="font-normal tracking-widest bg-transparent uppercase hover:bg-white text-white hover:text-black py-3 px-5 border border-white transition-all">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-hero-3 w-full h-landingHero bg-no-repeat bg-cover bg-bottom text-heroColor">
          <div className="w-full h-hero flex justify-center items-center flex-col">
            <p className="text-md uppercase font-medium height leading-5 tracking-heroWide">
              New Trending
            </p>
            <h1 className="mt-5 text-3xl tracking-heroWide leading-7 font-normal">
              Hollow Knight
            </h1>
            <div className="mt-6">
              <Link href="/">
                <button className="font-normal tracking-widest bg-transparent uppercase hover:bg-white text-white hover:text-black py-3 px-5 border border-white transition-all">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
