<script>
  // The apps that will be shown in the top carousel
  import vinobot from "/src/assets/images/apps/Vinbot.webp";
  import logodalle from "/src/assets/images/apps/LogoDalle.webp";
  import openToWork from "/src/assets/images/apps/OpenToWork.webp";
  import productScan from "/src/assets/images/apps/ProductScan.webp";
  import claude from "/src/assets/images/apps/Claude.webp";
  import aiTravelPlanner from "/src/assets/images/apps/AITravelPlanner.webp";
  const appsTop = [
    {
      appName: "Vinobot",
      link: "https://vinobot.justben.fyi/",
      linkName: "vinobot.justben.fyi",
      image: vinobot,
    },
    {
      appName: "Logodalle",
      link: "https://logodalle.shop/",
      linkName: "logodalle.shop",
      image: logodalle,
    },
    {
      appName: "OpenToWork",
      link: "https://pmfm.ai/OpenToWork",
      linkName: "pmfm.ai/OpenToWork",
      image: openToWork,
    },
    {
      appName: "Vinobot",
      link: "https://vinobot.justben.fyi/",
      linkName: "vinobot.justben.fyi",
      image: vinobot,
    },
  ];

  // The apps that will be shown in the bottom carousel
  const appsBottom = [
    {
      appName: "ProductScan",
      link: "https://pmfm.ai/ProductScan",
      linkName: "pmfm.ai/ProductScan",
      image: productScan,
    },
    {
      appName: "Claude",
      link: "https://pmfm.ai/claude",
      linkName: "pmfm.ai/claude",
      image: claude,
    },
    {
      appName: "AITrevelPlanner",
      link: "https://travelplanner.gptbotdirectory.com/",
      linkName: "travelplanner.gptbotdirectory.com",
      image: aiTravelPlanner,
    },
    {
      appName: "ProductScan",
      link: "https://pmfm.ai/ProductScan",
      linkName: "pmfm.ai/ProductScan",
      image: productScan,
    },
  ];
  // this will only show on the phone version to also showcase the first and last apps for both carousels
  const appsPhone = [
    {
      appName: "OpenToWork",
      link: "https://pmfm.ai/OpenToWork",
      linkName: "pmfm.ai/OpenToWork",
      image: openToWork,
    },
    {
      appName: "ProductScan",
      link: "https://pmfm.ai/ProductScan",
      linkName: "pmfm.ai/ProductScan",
      image: productScan,
    },
  ];

  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Resolves an issue where there's some conflict in the way gsap exports their modules, and the way vite/kit handles imports
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  export { gsap } from "gsap";
  export { ScrollTrigger };

  // Showcase scrub app animation
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#cardR",
      {
        x: -200,
      },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#carrousel",
          start: "top 100%",
          end: "bottom 00%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      "#cardL",
      {
        x: -200,
      },
      {
        x: -550,
        duration: 1,
        scrollTrigger: {
          trigger: "#carrousel",
          start: "top 100%",
          end: "bottom 0%",
          scrub: 1,
        },
      }
    );
  });

  // hover animations
  let buttonClicked = false;

  function handleClick() {
    buttonClicked = !buttonClicked;
  }
</script>

<div id="carrousel" class="flex flex-col w-full gap-4 tablet:ap-10 tablet_landscape:gap-16">
  <!--? -------- Carrousel -> Right -------- -->
  <div class="flex flex-row items-center flex-shrink-0 w-full tablet:gap-4 laptop:gap-14">
    <!-- Creates a for loop that shows 5 apps -->
    {#each appsTop as { appName, link, linkName, image }}
      <a
        id="cardR"
        class="flex flex-col flex-shrink-0 gap-4 p-5 group hover:bg-black/5 rounded-regular tablet_landscape:rounded-medium"
        href={link}
        target="_blank"
      >
        <div class="flex flex-row items-center justify-between gap-3 px-1">
          <!--* ~~~~ Text ~~~~ -->
          <div class="flex flex-col items-start">
            <h3
              class="text-2xl font-semibold tablet_landscape:text-3xl font-neue"
            >
              {appName}
            </h3>
            <p class="text-lg tablet_landscape:text-xl text-black/60">
              {linkName}
            </p>
          </div>
          <!--* ~~~~ LinkButton ~~~~ -->
          <div
            class="flex items-center justify-center p-5 border-[1.5px] border-black rounded-full aspect-square size-min group-hover:bg-black ease-in-out transition duration-300"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke-black group-hover:stroke-white group-hover:stroke-2"
                d="M1.5 12L12.5 1M12.5 1H1.5M12.5 1V12"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
        <img
          src={image}
          alt="app screenshot"
          class="max-h-[200px] laptop:max-h-[300px] rounded-regular tablet_landscape:rounded-medium shadow-big"
        />
      </a>
    {/each}
  </div>

  <!--? -------- Carrousel <- Left -------- -->
  <div class="flex flex-row items-center flex-shrink-0 w-full tablet:gap-4 laptop:gap-14">
    <!-- Creates a for loop that shows 5 apps -->
    {#each appsBottom as { appName, link, linkName, image }}
      <a
        id="cardL"
        class="flex flex-col flex-shrink-0 gap-4 p-5 group hover:bg-black/5 rounded-regular tablet_landscape:rounded-medium"
        href={link}
        target="_blank"
      >
        <div class="flex flex-row items-center justify-between gap-3 px-1">
          <!--* ~~~~ Text ~~~~ -->
          <div class="flex flex-col items-start">
            <h3
              class="text-2xl font-semibold laptop:text-3xl font-neue"
            >
              {appName}
            </h3>
            <p class="text-lg truncate max-w-[220px] laptop:max-w-fit laptop:text-xl text-black/60">
              {linkName}
            </p>
          </div>
          <!--* ~~~~ LinkButton ~~~~ -->
          <div
            class="flex items-center justify-center p-5 border-[1.5px] border-black rounded-full aspect-square size-min group-hover:bg-black ease-in-out transition duration-300"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke-black group-hover:stroke-white group-hover:stroke-2"
                d="M1.5 12L12.5 1M12.5 1H1.5M12.5 1V12"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
        <img
          src={image}
          alt="app screenshot"
          class="max-h-[200px] laptop:max-h-[300px] rounded-regular tablet_landscape:rounded-medium shadow-big"
        />
      </a>
    {/each}
  </div>

  <div class="flex flex-row items-center flex-shrink-0 w-full tablet:hidden tablet:gap-4 laptop:gap-14">
    <!-- Creates a for loop that shows 5 apps -->
    {#each appsPhone as { appName, link, linkName, image }}
      <a
        id="cardR"
        class="flex flex-col flex-shrink-0 gap-4 p-5 group hover:bg-black/5 rounded-regular tablet_landscape:rounded-medium"
        href={link}
        target="_blank"
      >
        <div class="flex flex-row items-center justify-between gap-3 px-1">
          <!--* ~~~~ Text ~~~~ -->
          <div class="flex flex-col items-start">
            <h3
              class="text-2xl font-semibold tablet_landscape:text-3xl font-neue"
            >
              {appName}
            </h3>
            <p class="text-lg tablet_landscape:text-xl text-black/60">
              {linkName}
            </p>
          </div>
          <!--* ~~~~ LinkButton ~~~~ -->
          <div
            class="flex items-center justify-center p-5 border-[1.5px] border-black rounded-full aspect-square size-min group-hover:bg-black ease-in-out transition duration-300"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke-black group-hover:stroke-white group-hover:stroke-2"
                d="M1.5 12L12.5 1M12.5 1H1.5M12.5 1V12"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
        <img
          src={image}
          alt="app screenshot"
          class="max-h-[200px] laptop:max-h-[300px] rounded-regular tablet_landscape:rounded-medium shadow-big"
        />
      </a>
    {/each}
  </div>
</div>
