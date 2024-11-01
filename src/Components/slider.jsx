import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css"; // Ensure your CSS handles additional styles if needed
import Manglum from "../assets/images/Manglum.jpg";
import Abhi from "../assets/images/Abhishek.jpg";
import Nancy from "../assets/images/Nancy.jpg";
import Nitin from "../assets/images/Nitin.jpg";
import Satyendra from "../assets/images/Satyendra.jpg";
import Reena from "../assets/images/Reena.jpg";
import Palak from "../assets/images/Palak.jpg";
import Ujjwal from "../assets/images/Ujjwal.jpg";
import Viru from "../assets/images/Viru.jpg";
import p from "../assets/images/p.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SlideBar = () => {
  return (
    <>
      <section className="bg-[#111]">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper !py-14 drop-shadow-[0_0px_60px_rgba(58,130,246,0.7)] cursor-grab"
        >
          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full  md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Manglum}
                alt="Subh Manglum"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Subh Manglum is my best friend in college. He’s always teasing
                  me and somehow creates a new problem every time, but honestly,
                  he’s a really great guy. Despite his constant worries and
                  mischief, he’s someone I can always count on, and that makes
                  him special to me.
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Shubh Mangalam Singh
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat similar structure for other slides */}

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Abhi}
                alt="Abhishek Chauby"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Abhishek Chauby is my roommate, and we can’t go a day without
                  fighting. It’s almost like a routine now! He loves teasing me,
                  and honestly, I enjoy annoying him back. We call him "Pandit
                  Ji" with affection because he’s the one who handles all our
                  prayers and rituals too!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Abhishek Chauby
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Pharma, 3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Nancy}
                alt="Nancy Singh"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Nancy Singh, known as "Choti Don," is a bit intimidating to
                  all our friends, but she’s got a heart of gold. Everyone’s
                  scared of her tough side, yet she cares for everyone with
                  genuine affection. Plus, she loves to tease us all, adding a
                  fun twist to our friendship!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Nancy Singh
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          {/* Continue adding other slides in a similar manner */}

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Nitin}
                alt="Nitin Maurya"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Nitin Maurya is always up to something, usually breaking or
                  messing with things! He loves to talk and isn’t afraid to say
                  whatever’s on his mind, no matter the consequences. His
                  roommate has pretty much lost all trust in him, but that just
                  adds to Nitin's chaotic charm!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Nitin Kumar Maurya
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          {/* Add remaining slides similarly... */}

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Satyendra}
                alt="Satyendra Singh"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Satyendra Singh is a gym lover with a serious weakness for
                  pizza! He enjoys sharing knowledge and will jump at any chance
                  to teach us something new. He’s like the caring little brother
                  of our group, always looking out for everyone and ensuring we
                  stay informed and motivated.
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Satyendra Yadav
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Reena}
                alt="Reena Yadav"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Reena Yadav is my sister, and she’s a bit of a mystery to me!
                  One moment, she’s incredibly friendly, showering me with
                  affection, and the next, she’s totally ignoring me like I
                  don’t exist. It can be frustrating at times, but I know she
                  has a good heart and truly cares for me. I enjoy teasing her;
                  it’s all in good fun! Plus, she’s a little timid, which makes
                  our interactions even more entertaining. I wouldn’t change a
                  thing about her!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Reena Yadav
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, 3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Palak}
                alt="Palak"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Palak is one of my good friends who’s always there to support
                  me. She keeps me updated on everything happening in college,
                  which is super helpful! We often comment on each other’s
                  statuses and stories on social media, which keeps our
                  connection alive. Even though we don’t chat much outside of
                  that, I really appreciate her friendship!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Palak Jaiswal
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={p}
                alt="Placeholder"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Prathum Raj is all about two things: sleeping and gaming! If
                  he doesn’t get food, he acts like he’s on the verge of
                  collapse. Despite his dramatic food reactions, he’s a great
                  friend and always helps me out with my subjects. His support
                  makes studying a lot more manageable and fun!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Prathum Raj
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Ujjwal}
                alt="Ujjwal"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Ujjwal is our hostel friend, and everyone affectionately calls
                  him "Chacha." He has this funny habit of hiding his stuff,
                  which makes him a prime target for our teasing! Despite that,
                  he’s genuinely a great guy, and we all enjoy having him
                  around. His personality adds a fun vibe to our group!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Ujjwal Chauhan
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Pharma,3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#111] rounded-lg">
            <div className="flex flex-col md:flex-row items-center max-w-full p-6 md:p-9">
              <img
                className="shrink-0 h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full drop-shadow-[0_0px_60px_rgba(58,130,246,0.6)]"
                src={Viru}
                alt="Viru"
              />
              <div className="testimonial-text ml-0 md:ml-6 text-left pt-4 md:pt-16 text-white z-10 font-[Nunito]">
                <p>
                  Viru is my roommate from second year, but he’s hardly ever in
                  the room! He’s usually lost in his own world and has a knack
                  for showing up late. The good part is he always brings food
                  when he does come back, which makes up for his absence. It’s a
                  fun dynamic!
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-2xl lg:text-4xl">
                  Viru Yadav
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  B.Tech, CSE 3rd Year
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default SlideBar;
