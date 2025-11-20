import React from "react";
import Anime_component from "./Anime_component";
import Erfan from "../img/erfan.jpg";

const Testimonials = () => {
  return (
    <div id="anime" className="flex flex-col gap-2">
      <div className="flex flex-col items-center text-center gap-2 pb-5">
        <div className="flex items-center justify-center w-40 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
          <span>Testimonials</span>
        </div>
        <span className="text-4xl font-semibold">
          Don't just take our words
        </span>
        <span className="text-slate-500">
          Hear what our users say about us. We're always looking for ways to
          improve. If you <br /> have a positive experience with us, leave a
          review.
        </span>
      </div>
      <div className=" mx-auto w-full max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0  h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
        <div className="animeOfComents flex gap-5 transform-gpu min-w-[200%] pt-10 pb-5">
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
        </div>
        <div className="absolute right-0 top-0  h-full w-20 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
      </div>
      <div className=" mx-auto w-full max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0  h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
        <div className="animeOfComents animeReverse flex gap-5 transform-gpu min-w-[200%] pt-10 pb-5">
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
          <Anime_component
            image={Erfan}
            FullName="Briar Martin"
            Email="@averywrites"
          >
            Radiant made undercutting all of our competitors an absolute breeze.
          </Anime_component>
        </div>
        <div className="absolute right-0 top-0  h-full w-20 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonials;
