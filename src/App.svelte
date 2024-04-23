<script>
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

<main class="bg-primary-50">
  <!-- ========= HEADER ========= -->
  <header
    class="sticky top-0 z-50 flex flex-row items-center justify-between w-full px-5 py-3 tablet:px-9 laptop:px-20 {scrolled
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

  <!-- ========= HERO ========= -->
  <section class="w-full px-5 py-3 tablet:px-9 laptop:px-20">
    <h1 class="font-semibold text-8xl font-neue"><div class="inline-block h-24 px-5 pt-1 border-2 rounded-full border-primary-500"><span class="text-transparent bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text">MONETIZE</span> </div> YOUR AI<br /><div class="inline-block h-24 px-5 pt-1 rounded-full bg-gradient-to-br from-primary-500 to-primary-400"><span class="text-transparent text-white ">APP</span> </div>  IN MINUTES</h1>
    <p>
      Pmfm.ai enables creators to launch and monetize their custom AI apps
      without code. <br /> <br /> Start by building an AI app. Publish the app to
      your website with in-built authentication. Monetize it by connecting your Stripe. White-label it
      with your own brand. Retain complete control over analytics and revenue as
      your app scales.
    </p>
  </section>
</main>
