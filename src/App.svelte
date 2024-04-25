<script>
  import profile1 from "/src/assets/images/profiles/profile1.webp";
  import profile2 from "/src/assets/images/profiles/profile2.webp";
  import profile3 from "/src/assets/images/profiles/profile3.webp";
  import profile4 from "/src/assets/images/profiles/profile4.avif";

  import buildWith from "/src/assets/images/apps/built-with-pmfmai.webp";

  import star from "./assets/svg/star.svg";
  import arrow from "/src/assets/svg/hand-drawn-arrow.svg";
  import { onMount } from "svelte";

  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<main class="bg-primary-50 *:max-w-screen flex flex-col items-center">
  <!--! ========= HEADER ========= -->
  <header
    class="sticky top-0 z-50 flex flex-row items-center justify-between w-full px-9 py-3 {scrolled
      ? 'bg-white bg-opacity-90  backdrop-blur-lg'
      : 'bg-transparent'}"
  >
    <a href="#hero" class="">
      <span
        class="text-2xl font-bold text-transparent font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
        >Pmfm.ai</span
      >
    </a>
    <nav class="flex flex-row items-center gap-8 font-semibold font-neue">
      <button
        on:click={() => console.log("clicked")}
        id="menuBtn"
        class="group h-4 w-6 flex flex-col items-end justify-between tablet_landscape:hidden select-none py-[3px] *:transition-all *:transform *:duration-300"
      >
        <div
          class="h-[2px] group-hover:h-[2.2px] w-full bg-black rounded-full group-hover:-translate-y-[2px] group-hover:rotate-5"
        ></div>
        <div
          class="h-[2px] group-hover:h-[2.2px] w-full bg-black rounded-full group-hover:translate-y-[3px] group-hover:-rotate-3"
        ></div>
      </button>
      <a href="#login" class="hidden text-lg tablet_landscape:block">Log In</a>
      <a
        href="#signup"
        class="hidden py-3 text-lg leading-none text-white rounded-full px-7 bg-gradient-to-br from-primary-500 to-primary-400 tablet_landscape:block"
        >Sign Up</a
      >
    </nav>
  </header>
  <div class=" h-[50px] tablet_landscape:h-[100px]"></div>
  <!--! ========= HERO ========= -->
  <section
    class="flex flex-col items-center justify-between w-full h-full gap-12 px-4 py-3 tablet:px-9 laptop:items-end laptop:flex-row"
  >
    <!--? ========= Text Block ========= -->
    <div class="flex flex-col items-center gap-12 laptop:items-start">
      <h1
        class="text-[calc(9vw)] tablet_landscape:text-[calc(7vw)] laptop:text-[calc(5vw)] desktop:text-7xl font-semibold text-center leading-none font-neue laptop:text-start flex-nowrap text-nowrap"
      >
        <div
          class="inline-block px-3 pt-1 mb-2 leading-none border rounded-full tablet:px-5 tablet_landscape:border-2 border-primary-500"
        >
          <span
            class="text-transparent bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >MONETIZE</span
          >
        </div>
        YOUR AI<br />
        <div
          class="inline-block px-5 pt-1 leading-none rounded-full bg-gradient-to-br from-primary-500 to-primary-400"
        >
          <span class="text-white">APP</span>
        </div>
        IN MINUTES
      </h1>
      <p
        class="text-lg text-center tablet:text-xl laptop:text-start text-balance"
      >
        Pmfm.ai enables creators to launch and monetize <br
          class="hidden tablet_landscape:block"
        />
        their custom AI apps without code. <br /> <br /> Start by building an AI
        app. Publish the app <br class="hidden tablet_landscape:block" />
        to your website with in-built authentication.
        <br class="hidden tablet_landscape:block" />
        Monetize it by connecting your Stripe. White-label it
        <br class="hidden tablet_landscape:block" />
        with your own brand. Retain complete control
        <br class="hidden tablet_landscape:block" /> over analytics and revenue as
        your app scales.
      </p>
      <!--? -------- CTA Buttons -------- -->
      <div
        class="space-y-4 text-xl font-semibold tablet:flex tablet:space-y-0 tablet:space-x-4 font-neue"
      >
        <a
          href="#hero"
          class="inline-flex font-medium gap-2 items-center justify-center w-full px-10 pt-4 pb-[12px] text-center text-white transition-all duration-300 transform rounded-full bg-gradient-to-br from-primary-500 to-primary-400 text-nowrap sm:w-auto hover:font-semibold"
        >
          <svg
            class="mb-[3px]"
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.21989 7.2138C8.28846 6.9167 8.71154 6.91669 8.78011 7.2138C9.5328 10.4755 11.9978 13.0708 15.2164 13.9904L15.9049 14.1871C16.2196 14.277 16.2196 14.723 15.9049 14.8129L15.2164 15.0096C11.9978 15.9292 9.5328 18.5245 8.78011 21.7862C8.71154 22.0833 8.28846 22.0833 8.21989 21.7862C7.4672 18.5245 5.00219 15.9292 1.78361 15.0096L1.09512 14.8129C0.780434 14.723 0.780433 14.277 1.09512 14.1871L1.78361 13.9904C5.00219 13.0708 7.4672 10.4755 8.21989 7.2138Z"
              fill="white"
            />
            <path
              d="M15.3847 2.4998C15.4129 2.37746 15.5871 2.37746 15.6153 2.4998C15.9253 3.84283 16.9403 4.91151 18.2656 5.29016L18.5491 5.37116C18.6786 5.40818 18.6786 5.59182 18.5491 5.62884L18.2656 5.70984C16.9403 6.08849 15.9253 7.15717 15.6153 8.5002C15.5871 8.62254 15.4129 8.62254 15.3847 8.5002C15.0747 7.15717 14.0597 6.08849 12.7344 5.70984L12.4509 5.62884C12.3214 5.59182 12.3214 5.40818 12.4509 5.37116L12.7344 5.29016C14.0597 4.91151 15.0747 3.84283 15.3847 2.4998Z"
              fill="white"
            />
            <path
              d="M8.45057 0.2142C8.46267 0.16177 8.53733 0.16177 8.54943 0.2142C8.68226 0.789786 9.11726 1.24779 9.68525 1.41007L9.80674 1.44478C9.86228 1.46065 9.86228 1.53935 9.80674 1.55522L9.68525 1.58993C9.11726 1.75221 8.68226 2.21021 8.54943 2.7858C8.53733 2.83823 8.46267 2.83823 8.45057 2.7858C8.31774 2.21021 7.88274 1.75221 7.31475 1.58993L7.19326 1.55522C7.13772 1.53935 7.13772 1.46065 7.19326 1.44478L7.31475 1.41007C7.88274 1.24779 8.31774 0.789786 8.45057 0.2142Z"
              fill="white"
            />
          </svg>

          Start AI app
        </a>
        <a
          href="#hero"
          class="inline-flex items-center justify-center w-full gap-2 px-10 pt-2 pb-[4px] text-center text-transparent transition-all duration-300 transform border rounded-full gap bg-gradient-to-br from-primary-500 to-primary-400 border-primary-500 bg-clip-text text-nowrap sm:w-auto hover:font-semibold"
        >
          <svg
            class="my-3 tablet:my-0 mb-[15px] tablet:mb-[3px]"
            width="30"
            height="17"
            viewBox="0 0 30 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1077 5.98148C22.1077 5.98148 22.4501 7.1656 22.4501 8.5C22.4501 9.8344 22.1077 11.0185 22.1077 11.0185C21.0803 14.1667 19.3044 17 15.7752 17H6.40115C2.87198 17 0 14.3598 0 11.1154V5.88462C0 2.64023 2.87198 0 6.40115 0H15.7752C19.3044 0 21.25 2.92794 22.1077 5.98148ZM28.7183 2.92794C27.9331 2.54217 26.9843 2.58527 26.2489 3.03904L23.8199 4.72222C23.6222 4.84384 23.5026 5.04786 23.5026 5.26624C23.5026 5.26624 23.8155 7.23202 23.8199 8.5C23.8244 9.81442 23.5026 11.8531 23.5026 11.8531C23.5026 12.0715 23.6207 12.2755 23.8199 12.3972L26.2475 13.9597C26.6515 14.2081 27.1167 14.3335 27.5833 14.3335C27.9716 14.3335 28.3613 14.2473 28.7183 14.0721C29.5092 13.685 30 12.9331 30 12.1092V4.89076C30 4.06691 29.5092 3.31502 28.7183 2.92794Z"
              fill="url(#paint0_linear_8_514)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_514"
                x1="0"
                y1="0"
                x2="30.4832"
                y2="0.915763"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F04941" />
                <stop offset="1" stop-color="#F55C30" />
              </linearGradient>
            </defs>
          </svg>
          Book a call
        </a>
      </div>
      <!--? ========= Ratings ========= -->
      <div class="flex flex-col items-center gap-2 laptop:flex-row">
        <div class="flex -space-x-8 overflow-hidden">
          <img
            src={profile1}
            alt="David"
            class="inline-block border-2 rounded-full pointer-events-none w-14 h-14 aspect-square border-primary-50"
          />
          <img
            src={profile2}
            alt="Alex"
            class="inline-block border-2 rounded-full pointer-events-none w-14 h-14 aspect-square border-primary-50"
          />
          <img
            src={profile3}
            alt="Ali"
            class="inline-block border-2 rounded-full pointer-events-none w-14 h-14 aspect-square border-primary-50"
          />
          <img
            src={profile4}
            alt="Ali"
            class="inline-block border-2 rounded-full pointer-events-none w-14 h-14 aspect-square border-primary-50"
          />
        </div>
        <div class="flex flex-col items-center gap-2 laptop:items-start">
          <!--? -------- Star Rating -------- -->
          <div class="flex flex-row gap-1">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <p
            class="text-lg text-center tablet:text-xl laptop:text-start text-black/60"
          >
            Trusted by over <b>500+</b> creators
          </p>
        </div>
      </div>
    </div>
    <!--? ========= Illustration ========= -->
    <div
      class="w-full tablet:max-w-[500px] laptop:aspect-square bg-grey-100 rounded-medium tablet:rounded-big relative flex flex-col laptop:justify-end justify-start laptop:items-end py-4 tablet:py-8 px-4 tablet:px-10 gap-6 overflow-clip"
    >
      <div class="flex flex-row items-start w-full gap-5 tablet:gap-10">
        <p class="text-xl font-semibold tablet:text-3xl font-neue text-nowrap">
          Built with <br /> Pmfm.ai
        </p>
        <img
          src={arrow}
          alt="hand drawn arrow"
          class="w-20 rotate-180 tablet:w-fit laptop:rotate-0 -scale-x-100 laptop:scale-x-100"
        />
      </div>
      <img
        src={buildWith}
        alt="app screenshot"
        class="bottom-0 laptop:scale-90 laptop:absolute laptop:top-8 rounded-medium laptop:-right-36 shadow-big"
      />
    </div>
  </section>

  <div class=" h-[50px] tablet_landscape:h-[100px]"></div>

  <!--! ========= FEATURES ========= -->
  <section class="flex flex-col items-center w-full px-4 py-3 tablet:px-9">
    <!--? -------- Title -------- -->
    <div class="flex flex-col items-center w-full gap-4">
      <h2
        class="text-[calc(7vw)] tablet_landscape:text-5xl font-semibold text-center font-neue text-nowrap"
      >
        Everything you need to start <br />
        <div
          class="bg-[url('/src/assets/svg/gradient-bg-text.svg')] bg-no-repeat bg-contain bg-center w-min tablet_landscape:py-5 px-4 inline-block"
        >
          <span class="z-20 text-white">earning from AI</span>
        </div>
      </h2>
      <p
        class="text-lg text-center tablet:text-xl tablet_landscape:px-20 text-black/60"
      >
        Pmfm.ai comes with everything you need to create and launch your custom
        AI chatbot app without code in minutes.
      </p>
    </div>
    <!--? -------- Features -------- -->
  </section>

  <div class=" h-[50px] tablet_landscape:h-[100px]"></div>
</main>
