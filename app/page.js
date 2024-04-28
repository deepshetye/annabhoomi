"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const reviews = [
  {
    name: "Swarang Gaikar",
    review: "The Best Flours in the market",
    description:
      "I never though I will be switiching to millets but the quality these guys provide is the best.",
  },
  {
    name: "Swarang Gaikar",
    review: "The Best Flours in the market",
    description:
      "I never though I will be switiching to millets but the quality these guys provide is the best.",
  },
  {
    name: "Swarang Gaikar",
    review: "The Best Flours in the market",
    description:
      "I never though I will be switiching to millets but the quality these guys provide is the best.",
  },
  {
    name: "Swarang Gaikar",
    review: "The Best Flours in the market",
    description:
      "I never though I will be switiching to millets but the quality these guys provide is the best.",
  },
];

export default function Home() {
  const [selectedReview, setSelectedReview] = useState(0);

  const keenSlider = new KeenSlider(
    "#keen-slider",
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    },
    []
  );
  useEffect(() => {
    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

    keenSliderPreviousDesktop.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
  }, []);

  return (
    <main className="w-[92%] mx-auto">
      <div className="bg-slate-200 my-10 p-20">
        <div className="grid grid-cols-2">
          <img
            src="homepagecardimage.png"
            className="w-[90%] object-cover max-h-[350px]"
          />
          <div className="flex justify-center flex-col w-[90%] ml-auto">
            <div className="text-right text-3xl">
              What we do, in simple words , not to sell them things but keep our
              purpouse in front of them and tell them what we are good at.
            </div>
            <div className="text-right text-3xl mt-5 font-semibold">
              ~ Team AnnaBhoomi
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 bg-white rounded-full mx-auto"></div>
            <div className="text-center items-center inline-flex span mt-2">
              4.5 <FaStar className="ml-2" />
            </div>
            <div className="text-center items-center inline-flex span">
              Google Review
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 bg-white rounded-full mx-auto"></div>
            <div className="text-center items-center inline-flex span mt-2">
              4.5 <FaStar className="ml-2" />
            </div>
            <div className="text-center items-center inline-flex span">
              Google Review
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 bg-white rounded-full mx-auto"></div>
            <div className="text-center items-center inline-flex span mt-2">
              4.5 <FaStar className="ml-2" />
            </div>
            <div className="text-center items-center inline-flex span">
              Google Review
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 bg-white rounded-full mx-auto"></div>
            <div className="text-center items-center inline-flex span mt-2">
              4.5 <FaStar className="ml-2" />
            </div>
            <div className="text-center items-center inline-flex span">
              Google Review
            </div>
          </div>
        </div>

        {/* <img className="w-full" src="backgroundcard.jpeg" /> */}
      </div>

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto w-fit text-slate-800 relative text-4xl font-semibold">
            CATEGORIES
            <div className="absolute top-1.5 left-2 text-slate-300 -z-10">
              CATEGORIES
            </div>
          </div>

          <ul class="mt-8 grid grid-cols-1 lg:grid-cols-3">
            <li>
              <a href="#" class="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  class="aspect-video w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">Flour / Atta</h3>

                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  class="aspect-video w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">Spices</h3>

                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  class="aspect-video w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">
                    Sugar Alternates
                  </h3>

                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="my-10 mt-14 flex flex-col ">
        <div className="relative overflow-visible text-slate-800 mx-auto text-4xl font-semibold">
          MOST LOVED PRODUCTS
          <div className="absolute whitespace-nowrap top-1.5 left-2 text-slate-300 -z-10">
            MOST LOVED PRODUCTS
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col">
        <div className="relative overflow-visible text-slate-800 mx-auto text-4xl font-semibold">
          EMPOWER YOUR FOOD JOURNEY
          <div className="absolute whitespace-nowrap top-1.5 left-2 text-slate-300 -z-10">
            EMPOWER YOUR FOOD JOURNEY
          </div>
        </div>

        <section class="bg-gray-50 mt-10">
          <div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
              <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Don't just take our word for it...
                </h2>

                <p class="mt-4 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas veritatis illo placeat harum porro optio fugit a
                  culpa sunt id!
                </p>

                <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                  <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                  >
                    <svg
                      class="size-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="-mx-6 lg:col-span-2 lg:mx-0">
                <div id="keen-slider" class="keen-slider">
                  <div class="keen-slider__slide">
                    <a
                      href="#"
                      class="relative block overflow-hidden rounded-lg border bg-white border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                      <div class="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                            Why Millets are better than normal rice and wheat?
                          </h3>

                          <p class="mt-1 text-xs font-medium text-blue-600">
                            Click To Read More
                          </p>
                        </div>

                        <div class="hidden sm:block sm:shrink-0">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            class="size-16 rounded-lg object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div class="mt-4">
                        <p class="text-pretty text-sm text-gray-500">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. At velit illum provident a, ipsa maiores
                          deleniti consectetur nobis et eaque.
                        </p>
                      </div>

                      <dl class="mt-6 flex gap-4 sm:gap-6">
                        <div class="flex flex-col-reverse">
                          <dt class="text-sm font-medium text-gray-600">
                            Published
                          </dt>
                          <dd class="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div class="flex flex-col-reverse">
                          <dt class="text-sm font-medium text-gray-600">
                            Reading time
                          </dt>
                          <dd class="text-xs text-gray-500">3 minute</dd>
                        </div>
                      </dl>
                    </a>
                  </div>
                  <div class="keen-slider__slide">
                    <a
                      href="#"
                      class="relative block overflow-hidden rounded-lg border bg-white border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                      <div class="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                            Building a SaaS product as a software developer
                          </h3>

                          <p class="mt-1 text-xs font-medium text-gray-600">
                            By John Doe
                          </p>
                        </div>

                        <div class="hidden sm:block sm:shrink-0">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            class="size-16 rounded-lg object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div class="mt-4">
                        <p class="text-pretty text-sm text-gray-500">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. At velit illum provident a, ipsa maiores
                          deleniti consectetur nobis et eaque.
                        </p>
                      </div>

                      <dl class="mt-6 flex gap-4 sm:gap-6">
                        <div class="flex flex-col-reverse">
                          <dt class="text-sm font-medium text-gray-600">
                            Published
                          </dt>
                          <dd class="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div class="flex flex-col-reverse">
                          <dt class="text-sm font-medium text-gray-600">
                            Reading time
                          </dt>
                          <dd class="text-xs text-gray-500">3 minute</dd>
                        </div>
                      </dl>
                    </a>
                  </div>
                  <div class="keen-slider__slide">
                    <a
                      href="#"
                      class="relative block overflow-hidden rounded-lg border bg-white border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                      <div class="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                            Building a SaaS product as a software developer
                          </h3>

                          <p class="mt-1 text-xs font-medium text-gray-600">
                            By John Doe
                          </p>
                        </div>

                        <div class="hidden sm:block sm:shrink-0">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            class="size-16 rounded-lg object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div class="mt-4">
                        <p class="text-pretty text-sm text-gray-500">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. At velit illum provident a, ipsa maiores
                          deleniti consectetur nobis et eaque.
                        </p>
                      </div>

                      <dl class="mt-6 flex gap-4 sm:gap-6">
                        <div class="flex flex-col-reverse">
                          <dt class="text-sm font-medium text-gray-600">
                            Published
                          </dt>
                          <dd class="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div class="flex flex-col-reverse">
                          <dt class="text-sm font-medium text-gray-600">
                            Reading time
                          </dt>
                          <dd class="text-xs text-gray-500">3 minute</dd>
                        </div>
                      </dl>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                class="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  class="size-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                class="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="mb-6 mt-14 flex flex-col ">
        <div className="relative overflow-visible text-slate-800 mx-auto text-4xl font-semibold">
          WHAT OUR CUSTOMERS SAY
          <div className="absolute whitespace-nowrap top-1.5 left-2 text-slate-300 -z-10">
            WHAT OUR CUSTOMERS SAY
          </div>
        </div>

        {/* <div class="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
          <div class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div class="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div class="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                  illo est quia obcaecati neque quibusdam eius accusamus error
                  officiis atque voluptates magnam!
                </p>
              </blockquote>
            </div>

            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div class="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div class="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  mollitia rerum quo unde neque atque molestias quas pariatur!
                  Sint, maxime?
                </p>
              </blockquote>
            </div>

            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div class="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div class="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit esse delectus, maiores fugit, reiciendis culpa
                  inventore sint accusantium libero dolore eos quasi a ex
                  aliquam molestiae. Tenetur hic delectus maxime.
                </p>
              </blockquote>
            </div>

            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div class="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div class="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, fuga?
                </p>
              </blockquote>
            </div>

            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div class="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div class="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate officia natus blanditiis rerum incidunt ex autem
                  repudiandae doloribus eveniet quia? Culpa commodi quae atque
                  perspiciatis? Provident, magni beatae saepe porro aspernatur
                  facere neque sunt possimus assumenda perspiciatis aperiam
                  quisquam animi libero voluptatem fuga. Repudiandae, facere?
                  Nemo reprehenderit quas ratione quis.
                </p>
              </blockquote>
            </div>
          </div>
        </div> */}

        <div className="w-[65%] mx-auto mt-8">
          <div className="shadow-xl border p-8 rounded-xl">
            <div className="flex justify-between">
              <div className="text-lg font-medium">
                {reviews[selectedReview].review}
              </div>

              <div className="flex gap-1.5">
                <FaStar className="text-yellow-500" size={20} />
                <FaStar className="text-yellow-500" size={20} />
                <FaStar className="text-yellow-500" size={20} />
                <FaStar className="text-yellow-500" size={20} />
                <FaStar size={20} />
              </div>
            </div>

            <div className="text-lg text-slate-700 mt-1">
              {reviews[selectedReview].description}
            </div>

            <div className="text-lg text-slate-700 mt-4">
              ~ {reviews[selectedReview].name}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  selectedReview === index ? "bg-slate-700" : "bg-slate-300"
                }`}
                onClick={() => setSelectedReview(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
