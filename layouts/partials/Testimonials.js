import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = ({ testimonials }) => {
  return (
    testimonials.frontmatter.enable === true && (
      <section id="reviews" className="testimonials py-24">
        <div className="mx-auto max-w-[1660px] px-4">
          <div className="mb-20 text-center">
            {markdownify(
              testimonials.frontmatter.title,
              "h2",
              "font-medium mb-4"
            )}
            {markdownify(
              testimonials.frontmatter.subtitle,
              "p",
              "text-light-secondary"
            )}
          </div>

          <div className="testimonials-slider-wrapper relative">
            <Image
              className="absolute -left-20 top-[28%] -z-20 hidden -translate-y-1/2 translate-x-[-40%] md:block xl:translate-x-[15%]"
              src="/images/testimonials/layer-1.svg"
              alt="layer-1"
              width={411}
              height={414}
            />
            <Image
              className="absolute -left-[10px] top-[calc(28%_+_64px)] z-30 hidden -translate-y-1/2 translate-x-[-40%] md:block xl:translate-x-[15%]"
              src="/images/testimonials/layer-2.svg"
              alt="layer-2"
              width={398}
              height={396}
            />
            <div className="relative z-10">
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loopedSlides={2}
                centeredSlides={true}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  991: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {testimonials.frontmatter.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-2xl bg-dark-quaternary">
                      <div
                        className={`bg-[url("/images/testimonials/bg.svg")] bg-cover bg-center px-6 py-7 lg:px-10`}
                      >
                        <p className="mb-8 text-xl font-semibold">
                          {item.quote}
                        </p>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Image
                              className="h-16 w-16 rounded-lg"
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="flex-grow-1 ml-4">
                            <p className="text-base font-semibold text-light-primary">
                              {item.name}
                            </p>
                            <p className="text-sm text-secondary-600">
                              {item.designation}
                            </p>
                            <p className="text-sm text-light-secondary">
                              {item.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Testimonials;
