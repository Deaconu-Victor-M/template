<script>
  import profile1 from "/src/assets/images/profiles/profile1.webp";
  import profile2 from "/src/assets/images/profiles/profile2.webp";
  import profile3 from "/src/assets/images/profiles/profile3.webp";
  import profile4 from "/src/assets/images/profiles/profile4.avif";

  import buildWith from "/src/assets/images/apps/built-with-pmfmai.webp";

  import star from "/src/assets/svg/star.svg";
  import arrow from "/src/assets/svg/hand-drawn-arrow.svg";

  import { onMount } from "svelte";

  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Resolves an issue where there's some conflict in the way gsap exports their modules, and the way vite/kit handles imports
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  export { gsap } from "gsap";
  export { ScrollTrigger };

  let rotatingText1;
  let rotatingText2;
  let container;
  let words = ["MONETIZE", "PUBLISH", "BRAND", "DEPLOY", "CREATE", "LAUNCH"];
  let index = 0;

  onMount(() => {
    rotateText(rotatingText1);

    setInterval(() => {
      rotateText(index % 2 == 0 ? rotatingText1 : rotatingText2);
    }, 2000); // Change the text every 2 seconds
  });

  function rotateText(rotatingText) {
    index = (index + 1) % words.length;
    if (rotatingText) {
      rotatingText.textContent = words[index];
    }

    // Set the width of the container to match the width of the text
    if (container && rotatingText) {
      container.style.width = `${rotatingText.offsetWidth}px`;
    }

    if (rotatingText) {
      gsap.fromTo(
        rotatingText,
        {
          yPercent: 120,
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        rotatingText,
        {
          yPercent: 0,
        },
        {
          yPercent: -120,
          duration: 1,
          ease: "power2.in",
          delay: 1,
        }
      );
    }
  }
  onMount(() => {
    window.addEventListener("resize", adjustContainerSize);
  });

  function adjustContainerSize() {
    if (rotatingText1 && rotatingText2) {
      const textWidth = Math.max(
        rotatingText1.offsetWidth,
        rotatingText2.offsetWidth
      );
      container.style.width = `${textWidth}px`;
    }
  }
</script>

<section
  id="hero"
  class="relative flex flex-col items-center justify-between w-full h-full gap-12 px-4 py-3 tablet:px-9 laptop:items-end laptop:flex-row"
>
  <svg
      class="absolute -top-80  -left-44  h-[315px] w-[665px] select-none -z-10 blur-3xl rounded-full -rotate-6"
      width="667"
      height="316"
      viewBox="0 0 667 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="333.162" cy="157.649" rx="332.916" ry="157.5" class=" fill-primary-500/10" />
    </svg>
    <svg
      class="absolute -bottom-52 -left-20  h-[315px] w-[665px] select-none blur-3xl -z-10 rounded-full -rotate-6 scale-125"
      width="667"
      height="516"
      viewBox="0 0 667 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="333.162" cy="157.649" rx="332.916" ry="157.5" class=" fill-primary-500/10" />
    </svg>
    <svg
      class="absolute -bottom-10 -left-72 h-[315px] w-[665px] select-none blur-3xl -z-10 rounded-full -rotate-6 scale-50"
      width="667"
      height="516"
      viewBox="0 0 667 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="333.162" cy="157.649" rx="332.916" ry="157.5" class=" fill-primary-400/15" />
    </svg>
  <!--? ========= Text Block ========= -->
  <div class="flex flex-col items-center gap-12 laptop:items-start">

    <h1
      class="text-[calc(9vw)] tablet_landscape:text-[calc(7vw)] laptop:text-[calc(5vw)] desktop:text-7xl font-semibold text-center leading-none font-neue laptop:text-start flex-nowrap text-nowrap"
    >
      <div
        class="flex flex-row items-center gap-1 tablet:gap-2 tablet_landscape:gap-4"
      >
        <div
          class="inline-block px-3 mb-2 border rounded-full tablet_landscape:mb-4 overflow-clip tablet:px-5 tablet_landscape:border-2 border-primary-500"
        >
          <div
            bind:this={container}
            style="transition: width 700ms;"
            class="inline-block mt-2 tablet:mt-3 text-center relative h-[1em] leading-none align-middle"
          >
            <span
              bind:this={rotatingText1}
              id="rotatingText1"
              class="absolute top-0 left-0 leading-none text-transparent rotatingText bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
              >MONETIZE</span
            >

            <span
              bind:this={rotatingText2}
              id="rotatingText2"
              class="absolute top-0 left-0 leading-none text-transparent rotatingText bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            ></span>
          </div>
        </div>
        YOUR AI
      </div>
      <div
        class="inline-block px-3 pt-2 leading-none rounded-full tablet:px-5 bg-gradient-to-br from-primary-500 to-primary-400"
      >
        <span class="text-white">APP</span>
      </div>
      IN MINUTES
    </h1>
    <p
      class="text-lg text-center tablet:text-xl laptop:text-start text-balance"
    >
      Pmfm.ai enables <b>creators</b> to launch and <b>monetize</b>
      <br class="hidden tablet_landscape:block" />
      their custom AI <b>apps</b> without code. <br /> <br /> Start by building
      an AI app. Publish the <b>app</b>
      <br class="hidden tablet_landscape:block" />
      to your <b>website</b> with in-built authentication.
      <br class="hidden tablet_landscape:block" />
      <b>Monetize</b> it by connecting your Stripe. <b>White-label</b> it
      <br class="hidden tablet_landscape:block" />
      with your own brand. Retain complete control
      <br class="hidden tablet_landscape:block" /> over <b>analytics</b> and
      <b>revenue</b> as your app scales.
    </p>
    <!--? -------- CTA Buttons -------- -->
    <div
      class="space-y-4 text-xl tablet:flex tablet:space-y-0 tablet:space-x-4 font-neue"
    >
      <a
        href="#hero"
        class="inline-flex hover:ring-2 hover:shadow-glow hover:shadow-primary-500/20 hover:ring-primary-500 hover:ring-offset-2 group transform font-medium gap-2 items-center justify-center w-full px-10 pt-4 pb-[12px] text-center text-white rounded-full bg-gradient-to-br from-primary-500 to-primary-400 text-nowrap tablet_landscape:w-auto hover:font-semibold transition-all duration-300 ease-in-out"
      >
        <svg
          class="mb-[3px] overflow-visible"
          width="19"
          height="23"
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="group-hover:animate-jump group-hover:animate-delay-0"
            d="M8.21989 7.2138C8.28846 6.9167 8.71154 6.91669 8.78011 7.2138C9.5328 10.4755 11.9978 13.0708 15.2164 13.9904L15.9049 14.1871C16.2196 14.277 16.2196 14.723 15.9049 14.8129L15.2164 15.0096C11.9978 15.9292 9.5328 18.5245 8.78011 21.7862C8.71154 22.0833 8.28846 22.0833 8.21989 21.7862C7.4672 18.5245 5.00219 15.9292 1.78361 15.0096L1.09512 14.8129C0.780434 14.723 0.780433 14.277 1.09512 14.1871L1.78361 13.9904C5.00219 13.0708 7.4672 10.4755 8.21989 7.2138Z"
            fill="white"
          />
          <path
            class="group-hover:animate-delay-75 group-hover:animate-jump"
            d="M15.3847 2.4998C15.4129 2.37746 15.5871 2.37746 15.6153 2.4998C15.9253 3.84283 16.9403 4.91151 18.2656 5.29016L18.5491 5.37116C18.6786 5.40818 18.6786 5.59182 18.5491 5.62884L18.2656 5.70984C16.9403 6.08849 15.9253 7.15717 15.6153 8.5002C15.5871 8.62254 15.4129 8.62254 15.3847 8.5002C15.0747 7.15717 14.0597 6.08849 12.7344 5.70984L12.4509 5.62884C12.3214 5.59182 12.3214 5.40818 12.4509 5.37116L12.7344 5.29016C14.0597 4.91151 15.0747 3.84283 15.3847 2.4998Z"
            fill="white"
          />
          <path
            class="group-hover:animate-delay-100 group-hover:animate-jump"
            d="M8.45057 0.2142C8.46267 0.16177 8.53733 0.16177 8.54943 0.2142C8.68226 0.789786 9.11726 1.24779 9.68525 1.41007L9.80674 1.44478C9.86228 1.46065 9.86228 1.53935 9.80674 1.55522L9.68525 1.58993C9.11726 1.75221 8.68226 2.21021 8.54943 2.7858C8.53733 2.83823 8.46267 2.83823 8.45057 2.7858C8.31774 2.21021 7.88274 1.75221 7.31475 1.58993L7.19326 1.55522C7.13772 1.53935 7.13772 1.46065 7.19326 1.44478L7.31475 1.41007C7.88274 1.24779 8.31774 0.789786 8.45057 0.2142Z"
            fill="white"
          />
        </svg>

        Start AI app
      </a>
      <a
        href="#hero"
        class="inline-flex hover:shadow-glow hover:shadow-primary-500/20 relative group items-center justify-center w-full gap-2 px-10 pt-2 pb-[4px] text-center transition-all duration-300 transform ring-1 hover:ring-2 rounded-full text-nowrap tablet_landscape:w-auto ring-primary-500 hover:ring-offset-2 hover:border-0 hover:bg-gradient-to-br from-primary-500 to-primary-400"
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
            class="transition-colors duration-300 ease-in-out group-hover:fill-primary-50 fill-[url(#paint0_linear_8_514)]"
            d="M22.1077 5.98148C22.1077 5.98148 22.4501 7.1656 22.4501 8.5C22.4501 9.8344 22.1077 11.0185 22.1077 11.0185C21.0803 14.1667 19.3044 17 15.7752 17H6.40115C2.87198 17 0 14.3598 0 11.1154V5.88462C0 2.64023 2.87198 0 6.40115 0H15.7752C19.3044 0 21.25 2.92794 22.1077 5.98148ZM28.7183 2.92794C27.9331 2.54217 26.9843 2.58527 26.2489 3.03904L23.8199 4.72222C23.6222 4.84384 23.5026 5.04786 23.5026 5.26624C23.5026 5.26624 23.8155 7.23202 23.8199 8.5C23.8244 9.81442 23.5026 11.8531 23.5026 11.8531C23.5026 12.0715 23.6207 12.2755 23.8199 12.3972L26.2475 13.9597C26.6515 14.2081 27.1167 14.3335 27.5833 14.3335C27.9716 14.3335 28.3613 14.2473 28.7183 14.0721C29.5092 13.685 30 12.9331 30 12.1092V4.89076C30 4.06691 29.5092 3.31502 28.7183 2.92794Z"
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
        <span
          class="font-semibold text-transparent transition-all duration-300 ease-in-out group-hover:font-bold group-hover:text-white bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
        >
          Book a call
        </span>
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
          <img src={star} alt="star" class="select-none" draggable="false" />
          <img src={star} alt="star" class="select-none" draggable="false" />
          <img src={star} alt="star" class="select-none" draggable="false" />
          <img src={star} alt="star" class="select-none" draggable="false" />
          <img src={star} alt="star" class="select-none" draggable="false" />
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
    class="w-full tablet:max-w-[500px] laptop:aspect-square bg-grey-100 rounded-medium laptop:rounded-big relative flex flex-col laptop:justify-end justify-start laptop:items-end py-4 tablet_landscape:py-8 px-4 tablet_landscape:px-10 gap-6 overflow-clip"
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
      class="bottom-0 laptop:scale-90 laptop:absolute laptop:top-8 rounded-regular tablet_landscape:rounded-medium laptop:-right-36 shadow-big"
    />
  </div>
</section>
