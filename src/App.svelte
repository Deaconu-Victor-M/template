<script>
  import Hero from "./lib/Hero.svelte";
  import Divider from "./lib/Divider.svelte";
  import QuestionCard from "./lib/QuestionCard.svelte";
  import FreeCard from "./lib/pricingCards/FreeCard.svelte";
  import ProCard from "./lib/pricingCards/ProCard.svelte";
  import ProPlusCard from "./lib/pricingCards/ProPlusCard.svelte";

  import TextReview from "./lib/TextReview.svelte";
  import VideoReview from "./lib/VideoReview.svelte";

  import Carousel from "./lib/Carousel.svelte";

  import profile1 from "/src/assets/images/profiles/profile1.webp";
  import profile2 from "/src/assets/images/profiles/profile2.webp";
  import profile3 from "/src/assets/images/profiles/profile3.webp";
  import profile4 from "/src/assets/images/profiles/profile4.avif";

  import buildWith from "/src/assets/images/apps/built-with-pmfmai.webp";

  import star from "./assets/svg/star.svg";
  import arrow from "/src/assets/svg/hand-drawn-arrow.svg";

  import paymentDashboard from "/src/assets/images/functionalities/payment-dashboard.png";
  import appHosting from "/src/assets/images/functionalities/app-hosting.jpeg";
  import design from "/src/assets/images/functionalities/design.png";
  import analytics from "/src/assets/images/functionalities/analytics.jpeg";
  import llm from "/src/assets/images/functionalities/llm.png";

  import xLogo from "/src/assets/svg/logos/x-logo.svg";
  import linkedinLogo from "/src/assets/svg/logos/linkedin-logo.svg";
  import facebookLogo from "/src/assets/svg/logos/fb-logo.svg";
  import { onMount } from "svelte";

  let scrolled = false;

  // Trigger the scroll event for the header
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

<main class="flex flex-col items-center bg-primary-50 overflow-x-clip">
  <!--! ========= HEADER ========= -->
  <header style="transition: max-height 0.15s ease-out;"
    class="sticky top-0 z-50 flex flex-row items-center justify-center w-full {scrolled
      ? 'bg-primary-50 bg-opacity-90  backdrop-blur-lg'
      : 'bg-transparent'}"
  >
    <div class="flex flex-col w-full max-w-screen px-9 ">
      <div
        class="flex flex-row items-center justify-between w-full py-3 "
      >
        <a href="#hero" class="">
          <span
            class="text-2xl font-bold text-transparent font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >Pmfm.ai</span
          >
        </a>
        <nav class="flex flex-row items-center gap-8 font-semibold font-neue">
          <button
            on:click={() => {
              const topBar = document.getElementById("top-bar");
              topBar.classList.toggle("hidden");
              topBar.classList.toggle("flex");
              
            }}
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
          <a
            href="#login"
            class="hidden text-lg transition-all duration-300 ease-in-out text-black/80 tablet_landscape:block hover:font-bold hover:text-black"
            >Log In</a
          >
          <a
            href="#signup"
            class="hidden py-3 text-lg leading-none text-white rounded-full px-7 bg-gradient-to-br from-primary-500 to-primary-400 tablet_landscape:block hover:ring-2 hover:shadow-glow hover:shadow-primary-500/20 hover:ring-primary-500 hover:ring-offset-2 group transform font-medium gap-2 items-center justify-center w-full pb-[12px] text-center text-nowrap tablet_landscape:w-auto hover:font-semibold transition-all duration-300 ease-in-out"
            >Sign Up</a
          >
        </nav>
      </div>
      <div id="top-bar" class="flex-row items-center justify-end hidden w-full gap-4 pb-3 font-semibold font-neue ">
        <a
            href="#login"
            class="text-lg transition-all duration-300 ease-in-out text-black/80 hover:font-bold hover:text-black"
            >Log In</a
          >
          <a
            href="#signup"
            class="py-3 text-lg leading-none text-white rounded-full px-7 bg-gradient-to-br from-primary-500 to-primary-400 hover:ring-2 hover:shadow-glow hover:shadow-primary-500/20 hover:ring-primary-500 hover:ring-offset-2 group transform font-medium gap-2 items-center justify-center pb-[12px] text-center text-nowrap tablet_landscape:w-auto hover:font-semibold transition-all duration-300 ease-in-out"
            >Sign Up</a
          >
      </div>
    </div>
  </header>

  <div class="w-full *:max-w-screen flex flex-col items-center">
    <div class=" h-[50px] tablet_landscape:h-[100px]"></div>

    <!--! ========= HERO ========= -->
    <Hero />

    <Divider />

    <!--! ========= FEATURES ========= -->
    <section
      class="flex flex-col items-center w-full gap-10 px-4 py-3 laptop:gap-16 tablet:px-9"
    >
      <!--? -------- Title -------- -->
      <div class="flex flex-col items-center w-full gap-4">
        <h2
          class="text-[calc(7vw)] tablet_landscape:text-5xl font-semibold text-center font-neue text-nowrap"
        >
          Everything you need to start <br />
          <div
            class="bg-[url('/src/assets/svg/gradient-bg-text.svg')] bg-no-repeat bg-center bg-contain w-min tablet_landscape:py-6 px-4 inline-block"
          >
            <span class="text-white">earning from AI</span>
          </div>
        </h2>
        <p
          class="text-lg text-center tablet:text-xl tablet_landscape:px-20 text-black/60"
        >
          Pmfm.ai comes with everything you need to create and launch your
          custom AI chatbot app without code in minutes.
        </p>
      </div>
      <!--? -------- Features -------- -->
      <div class="grid w-full grid-cols-2 gap-3 *:laptop:max-h-[360px]">
        <!--? -------- Feature 1 -------- -->
        <div
          class="flex flex-col-reverse items-start justify-between w-full col-span-2 gap-6 px-4 py-4 transition-all duration-300 shadow-inner group laptop:items-end laptop:flex-row bg-grey-100 rounded-t-medium laptop:rounded-t-big laptop:rounded-b-regular rounded-b-small tablet_landscape:py-8 tablet_landscape:px-10 overflow-clip"
        >
          <div class="flex flex-col gap-2 tablet:gap-4">
            <h3
              class="text-2xl font-semibold tablet:text-4xl font-neue text-nowrap"
            >
              Payment <br class="hidden laptop:block" />Dashboard
            </h3>
            <p class="text-base text-black/60">
              You can link your bank account or debit card, and track all <br
                class="hidden desktop:block"
              />your earnings in one place with Stripe.
            </p>
          </div>
          <img
            src={paymentDashboard}
            alt="app screenshot"
            class="group-hover:scale-[85%] transition-all duration-300 ease-in-out laptop:scale-90 laptop:top-8 rounded-regular laptop:-right-36 shadow-big max-w-[549px] border-[0.5px] self-end w-full"
          />
        </div>

        <!--? -------- Feature 2 -------- -->
        <div
          class="flex flex-col-reverse items-end justify-between w-full col-span-2 gap-6 px-4 py-4 shadow-inner group tablet_landscape:gap-0 tablet_landscape:col-span-1 rounded-bl-medium laptop:rounded-bl-big bg-grey-100 laptop:rounded-regular rounded-small tablet_landscape:py-8 tablet_landscape:px-10 overflow-clip"
        >
          <div class="flex flex-col gap-2 tablet:gap-4">
            <h3
              class="text-2xl font-semibold tablet:text-4xl font-neue text-nowrap"
            >
              App <br class="hidden desktop:block" />Hosting
            </h3>
            <p class="text-base text-black/60">
              Gain valuable insights about your customers and conversations
              using our analytics platform.
            </p>
          </div>
          <img
            src={appHosting}
            alt="app screenshot"
            class="group-hover:scale-95 transition-all duration-300 ease-in-out laptop:top-8 rounded-regular laptop:-right-36 shadow-big max-w-[400px] border-[0.5px] self-end w-full tablet_landscape:-mb-7 -mr-20"
          />
        </div>
        <!--? -------- Feature 3 -------- -->
        <div
          class="flex flex-col items-start justify-between w-full col-span-2 gap-6 px-4 py-4 shadow-inner group tablet_landscape:col-span-1 bg-grey-100 laptop:rounded-regular rounded-small tablet_landscape:py-8 tablet_landscape:px-10 overflow-clip"
        >
          <div class="flex flex-col gap-2 tablet:gap-4">
            <h3
              class="text-2xl font-semibold tablet:text-4xl font-neue text-nowrap"
            >
              Design
            </h3>
            <p class="text-base text-black/60">
              Use our collection of open-sourced themes <br
                class="hidden desktop:block"
              />to build your AI app.
            </p>
          </div>
          <img
            src={design}
            alt="app screenshot"
            class="group-hover:scale-95 transition-all duration-300 ease-in-out laptop:top-8 rounded-regular laptop:-right-36 shadow-big max-w-[549px] border-[0.5px] self-end w-full"
          />
        </div>

        <!--? -------- Feature 4 -------- -->
        <div
          class="flex flex-col-reverse items-end justify-between w-full col-span-2 gap-6 px-4 py-4 shadow-inner group laptop:col-span-1 rounded-bl-medium laptop:rounded-bl-big bg-grey-100 laptop:rounded-regular rounded-small tablet_landscape:py-8 tablet_landscape:px-10 overflow-clip"
        >
          <div class="flex flex-col items-end gap-2 tablet:gap-4">
            <h3
              class="text-2xl font-semibold tablet:text-4xl font-neue text-nowrap"
            >
              Analytics
            </h3>
            <p class="text-base text-end text-black/60">
              Gain valuable insights about your customers and conversations
              using our analytics platform.
            </p>
          </div>
          <img
            src={analytics}
            alt="app screenshot"
            class="group-hover:scale-95 transition-all duration-300 ease-in-out laptop:top-8 rounded-regular laptop:-right-36 shadow-big max-w-[400px] border-[0.5px] self-start w-full"
          />
        </div>
        <!--? -------- Feature 5 -------- -->
        <div
          class="flex flex-col-reverse items-start justify-between w-full col-span-2 gap-6 px-4 py-4 shadow-inner group laptop:col-span-1 rounded-b-medium laptop:rounded-br-big bg-grey-100 laptop:rounded-regular rounded-small tablet_landscape:py-8 tablet_landscape:px-10 overflow-clip"
        >
          <div class="flex flex-col gap-2 tablet:gap-4">
            <h3
              class="text-2xl font-semibold tablet:text-4xl font-neue text-nowrap"
            >
              LLMs
            </h3>
            <p class="text-base text-black/60">
              Use different models from OpenAI, Anthropic, etc. <br
                class="hidden desktop:block"
              />to build your apps.
            </p>
          </div>
          <img
            src={llm}
            alt="app screenshot"
            class="group-hover:scale-95 transition-all duration-300 ease-in-out laptop:top-8 rounded-regular laptop:-right-36 shadow-big max-w-[500px] border-[0.5px] self-end w-full"
          />
        </div>
      </div>
    </section>

    <Divider />

    <section
      class="flex flex-col items-center w-full gap-10 px-4 laptop:gap-16 tablet:px-9"
    >
      <!--? -------- Title -------- -->
      <div class="flex flex-row items-center justify-between w-full gap-4">
        <h2
          class="text-2xl font-semibold leading-none tablet:text-3xl tablet_landscape:text-5xl font-neue text-nowrap"
        >
          Built with <br class="block laptop:hidden" />Pmfm.ai
        </h2>
        <a
          href="#signup"
          class="px-7 py-3 pt-4 text-lg tablet:text-xl leading-none text-white rounded-full tablet_landscape:text-2xl tablet_landscape:py-7 tablet_landscape:px-14 tablet_landscape:pt-8 font-neue bg-gradient-to-br from-primary-500 to-primary-400 hover:ring-2 hover:shadow-glow hover:shadow-primary-500/20 hover:ring-primary-500 hover:ring-offset-2 group transform font-medium gap-2 items-center justify-center pb-[12px] text-center text-nowrap tablet_landscape:w-auto hover:font-semibold transition-all duration-300 ease-in-out"
          >Try for Yourself</a
        >
      </div>
      <Carousel />
    </section>

    <Divider />

    <!--! ========= REVIEWS ========= -->
    <section
      class="flex flex-col items-center w-full gap-10 px-4 laptop:gap-16 tablet:px-9"
    >
      <!--? -------- Title -------- -->
      <div class="flex flex-row items-center justify-between w-full gap-7">
        <h2
          class="text-2xl font-semibold leading-none tablet:text-3xl tablet_landscape:text-5xl font-neue tablet:text-nowrap"
        >
          Hear what others <br class="hidden tablet:block" />have to say
        </h2>
        <p
          class="text-2xl font-semibold leading-none tablet:text-3xl tablet_landscape:text-5xl font-neue text-nowrap"
        >
          <span
            class="text-4xl font-extrabold leading-none text-transparent tablet:text-5xl tablet_landscape:text-7xl font-neue text-nowrap bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >500+</span
          > <br />creators
        </p>
      </div>
      <!--? ======== Reviews ======== -->
      <div
        class="w-full gap-10 columns-1 tablet_landscape:columns-2 laptop:columns-3 desktop:gap-20 *:my-8"
      >
        <!--? -------- Review Text -------- -->
        <TextReview
          profile={profile1}
          name="Darren Coxion"
          title="Founder Coxion AI"
          review="Thus far been hugely impressed with what Pay Me For My AI offer. I've used their bots with ease inside my CourseBots revision guides and they are a huge value add. I like how I can add them to a subdomain of my website. Really helpful. Keep up the good work!"
        />
        <!--? -------- Review Text -------- -->
        <TextReview
          profile={profile2}
          name="Darren Coxion"
          title="Founder Coxion AI"
          review="Thus far been hugely impressed with what Pay Me For My AI offer. I've used their bots with ease inside my CourseBots revision guides and they are a huge value add. I like how I can add them to a subdomain of my website. Really helpful. Keep up the good work!"
        />
        <!--? -------- Review Text -------- -->
        <TextReview
          profile={profile4}
          name="Braxom"
          title="Founder"
          review="No cap - the most accommodating and helpful support I've had with a vendor EVER. Would give 6 stars"
        />

        <!--? -------- Review Video -------- -->
        <VideoReview
          thumbnail="/src/assets/images/Thumbnail.webp"
          name="Vinita Temmert"
          title="AI App Creator"
          review="We had the idea up and running within days and the first person who tried it instantly said how can I pay you! And they invested $97 straight away. Idea to payment just like that!"
        />
        <!--? -------- Review Text -------- -->
        <TextReview
          profile={profile3}
          name="Ben"
          title="Founder, Logodalle"
          review="Aditya has created an amazing platform for chatbot and saas creators. I use pmfm.ai to host chatbots on my own subdomains and would highly recommend it. Initial setup was easy and the built-in analytics have helped me fine-tune my products. Great discord server filled with other builders in the space as well."
        />
        <!--? -------- Review Text -------- -->
        <TextReview
          profile={profile4}
          name="Ben"
          title="Founder, Logodalle"
          review="Aditya has created an amazing platform for chatbot and saas creators. I use pmfm.ai to host chatbots on my own subdomains and would highly recommend it. Initial setup was easy and the built-in analytics have helped me fine-tune my products. Great discord server filled with other builders in the space as well."
        />
      </div>
    </section>

    <Divider />

    <!--! ========= FAQ ========= -->
    <section
      class="flex flex-col items-center w-full gap-10 px-4 py-3 laptop:gap-16 tablet:px-9"
    >
      <!--? -------- Title -------- -->
      <div class="flex flex-col items-center w-full tablet_landscape:gap-4">
        <h2
          class="text-2xl font-semibold leading-none tablet:text-3xl tablet_landscape:text-5xl font-neue tablet:text-nowrap"
        >
          FAQ
        </h2>
        <p
          class="text-lg text-center tablet:text-xl tablet_landscape:px-20 text-black/60"
        >
          Frequently asked questions
        </p>
      </div>
      <div
        class="flex flex-col items-center justify-center w-full transition-all"
      >
        <!--? -------- Questions -------- -->
        <QuestionCard
          question="How can I create my AI app on Pmfm.ai?"
          answer="You will need to <a href='#login' class='font-bold underline transition-colors duration-200 ease-out underline-offset-2 hover:text-primary-500'>login</a> and then click on the 'Create App' button. A form will then open up where you can provide your app details. If you plan to monetize, you will need to connect your bank account or debit card with Stripe. Here is a <a href='https://www.youtube.com/watch?v=sslaqOvOM84&ab_channel=Pmfm_ai' target='_blank' class='font-bold underline transition-colors duration-200 ease-out underline-offset-2 hover:text-primary-500'>video</a> that explains the entire process step-by-step."
        />
        <QuestionCard
          question="Can I use my own website or subdomain?"
          answer="Absolutely! You can publish your app to your website or subdomain by making a simple DNS change. Once you've launched your app, you will see this option available in your dashboard."
        />
        <QuestionCard
          question="What models can I use to build my AI app on Pmfm.ai?"
          answer="We support AI models from OpenAI, Anthropic, Meta, Mistral, and Stability AI."
        />
        <QuestionCard
          question="Do I need an API Key?"
          answer="No, you don't need any API Key to build your app. We take care of all the API expenses so all you have to do is focus on your Pmfm.ai apps 😇"
        />
        <QuestionCard
          question="Can I embed the AI app on my own website?"
          answer="Yes, once you have created your app, you will see an option for embedding it to your own website on the dashboard. Embedding has certain limitations which is why we recommend using subdomains instead."
        />
        <QuestionCard
          question="Can I use my OpenAI Assistant for building the app?"
          answer="Yes, you can use your OpenAI assistant id to create your app. However, you will need to provide your OpenAI API key to make it work."
        />
        <QuestionCard
          question="Where can I see the payments received for my product?"
          answer="To access your connected Stripe account for payments, please <a href='#login' class='font-bold underline transition-colors duration-200 ease-out underline-offset-2 hover:text-primary-500'>login</a> to Pmfm.ai. From your dashboard, please click on the top right drop down menu with your name. You will find an option called 'Stripe Access'. Clicking on this will redirect you to your connected Stripe account."
        />
        <QuestionCard
          question="How do I access analytics and customer data for my app?"
          answer="App analytics can be viewed by clicking on the 'Analytics' button available once the app is live. Basic analytics like views, messages, payments, last message and customer are available for free. If you'd like to view all the customer and conversation data, you'll need to subscribe to the basic plan for <b>$15/mo</b> or the pro plan for <b>$35/mo</b>."
        />
        <QuestionCard
          question="How can I contact support?"
          answer="If you need help with Pmfm.ai or have any other questions, you can chat with us by clicking on the bottom-right widget, or submit a support ticket through the <a href='https://discord.com/invite/FnktGy3mkV' target='_blank' class='font-bold underline transition-colors duration-200 ease-out underline-offset-2 hover:text-primary-500'>discord</a>, or reach out to us at support@paymeformyai.com"
        />
      </div>
    </section>

    <Divider />

    <!--! ========= Email Me ========= -->
    <section
      class="flex flex-col items-center w-full gap-10 px-4 py-3 laptop:gap-16 tablet:px-9"
    >
      <!--? -------- Title -------- -->
      <div class="flex flex-col items-center w-full tablet_landscape:gap-4">
        <h2
          class="text-2xl font-semibold leading-none tablet:text-3xl tablet_landscape:text-5xl font-neue tablet:text-nowrap"
        >
          Still need help?
        </h2>
        <p
          class="text-lg text-center tablet:text-xl tablet_landscape:px-20 text-black/60"
        >
          Message me at <br />
          <a
            href="mailto:aditya@paymeformyai.com"
            class="flex flex-row items-end gap-2 leading-none text-transparent underline transition-all duration-300 group decoration-primary-400 underline-offset-2 bg-gradient-to-br opacity-70 hover:opacity-100 from-primary-500 to-primary-400 bg-clip-text hover:font-bold"
            >aditya@paymeformyai.com <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="transition-all duration-300 stroke-2 stroke-primary-500/70 group-hover:stroke-primary-500"
                d="M1.5 12L12.5 1M12.5 1H1.5M12.5 1V12"
              />
            </svg></a
          >
        </p>
      </div>
    </section>

    <Divider />

    <!--! ========= Pricing ========= -->
    <section
      class="flex flex-col items-center w-full gap-10 px-4 py-3 laptop:gap-16 tablet:px-9"
    >
      <!--? -------- Title -------- -->
      <div class="flex flex-col items-center w-full tablet_landscape:gap-4">
        <h2
          class="text-2xl font-semibold leading-none tablet:text-3xl tablet_landscape:text-5xl font-neue tablet:text-nowrap"
        >
          Pricing
        </h2>
        <p
          class="text-lg text-center tablet:text-xl tablet_landscape:px-20 text-black/60"
        >
          Try our product for <b>free</b> for <br /><span
            class="font-bold text-transparent bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >30 days</span
          >
        </p>
      </div>
      <!--? -------- Pricing Cards -------- -->
      <div
        class="grid w-full grid-cols-1 gap-4 mx-auto tablet_landscape:w-auto place-content-stretch tablet_landscape:grid-cols-2 laptop:grid-cols-3"
      >
        <!--* ~~~~ Free Tier ~~~~ -->
        <FreeCard />
        <!--* ~~~~ Pro Tier ~~~~ -->
        <ProCard />
        <!--* ~~~~ Pro Plus Tier ~~~~ -->
        <ProPlusCard />
      </div>
    </section>

    <Divider />

    <!--! ========= CTA Sign Up ========= -->

    <section
      class="flex flex-col items-center w-full px-4 laptop:gap-16 tablet:px-9"
    >
      <div
        class="flex flex-col items-center w-full gap-10 px-4 py-28 laptop:gap-16 tablet:px-9 rounded-medium laptop:rounded-big bg-gradient-to-br from-primary-500 to-primary-400"
      >
        <!--? -------- Title -------- -->
        <div class="flex flex-col items-center w-full gap-4">
          <h2
            class="text-2xl font-semibold leading-none text-center text-white tablet:text-3xl tablet_landscape:text-5xl font-neue tablet:text-nowrap"
          >
            Build your next AI SaaS
          </h2>
          <p
            class="text-lg leading-tight text-center tablet:text-xl tablet_landscape:px-20 text-white/60"
          >
            Use Pmfm.ai as your complete stack for your next AI business
          </p>
        </div>
        <a
          href="#signup"
          class="px-16 py-5 pt-6 text-lg leading-none transition-all duration-300 ease-in-out bg-white rounded-full tablet_landscape:block tablet_landscape:py-7 tablet_landscape:px-14 tablet_landscape:pt-8 hover:font-semibold hover:outline hover:outline-white hover:outline-offset-4 hover:scale-105"
        >
          <span
            class="text-2xl font-semibold text-transparent tablet:text-3xl font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
          >
            Sign Up
          </span></a
        >
      </div>
    </section>

    <Divider />

    <!--! ========= FOOTER ========= -->

    <footer class="flex flex-col w-full px-4 py-6 tablet:px-9 gap-28">
      <div class="flex flex-col justify-between gap-20 laptop:flex-row">
        <div class="flex flex-col items-start">
          <a
            href="#hero"
            class="text-2xl font-bold text-transparent tablet:text-3xl tablet_landscape:text-5xl text-start font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >Pmfm.ai</a
          >
          <p
            class="text-lg leading-tight text-start tablet:text-xl text-black/60 tablet:text-nowrap"
          >
            Pmfm.ai enables creators to launch and monetize <br
              class="hidden tablet:block"
            /> their custom AI apps without code.
          </p>
          <!--? -------- Socials -------- -->
          <div class="flex flex-row gap-4 mt-4">
            <a
              href="#x_account"
              class="p-2 transition-all duration-200 ease-in-out bg-gradient-to-br from-primary-500 to-primary-400 rounded-small hover:ring-2 hover:ring-primary-500 hover:ring-offset-2"
            >
              <img src={xLogo} alt="x-logo" />
            </a>
            <a
              href="#linkedin_account"
              class="p-2 transition-all duration-200 ease-in-out bg-gradient-to-br from-primary-500 to-primary-400 rounded-small hover:ring-2 hover:ring-primary-500 hover:ring-offset-2"
            >
              <img src={linkedinLogo} alt="linkedin-logo" />
            </a>
            <a
              href="#fb_account"
              class="p-2 transition-all duration-200 ease-in-out bg-gradient-to-br from-primary-500 to-primary-400 rounded-small hover:ring-2 hover:ring-primary-500 hover:ring-offset-2"
            >
              <img src={facebookLogo} alt="facebook-logo" />
            </a>
          </div>
        </div>
        <div
          class="grid items-start justify-start w-full grid-cols-2 gap-12 tablet:grid-cols-3 tablet:gap-6 tablet:justify-between tablet_landscape:w-3/4 laptop:w-1/2"
        >
          <div class="flex flex-col gap-3 tablet:">
            <h3
              class="text-xl font-semibold text-transparent text-start font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >
              Company
            </h3>
            <a href="#features" class="text-lg text-black/60 hover:text-black"
              >Blog</a
            >
            <a href="#pricing" class="text-lg text-black/60 hover:text-black"
              >Reddit</a
            >
            <a href="#faq" class="text-lg text-black/60 hover:text-black"
              >Affiliates</a
            >
          </div>
          <div class="flex flex-col col-span-1 gap-3">
            <h3
              class="text-xl font-semibold text-transparent text-start font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >
              Product
            </h3>
            <a href="#features" class="text-lg text-black/60 hover:text-black"
              >Github</a
            >
            <a href="#pricing" class="text-lg text-black/60 hover:text-black"
              >FAQs</a
            >
            <a href="#faq" class="text-lg text-black/60 hover:text-black"
              >Pricing</a
            >
          </div>
          <div class="flex flex-col gap-3 col-span-1 *:text-nowrap">
            <h3
              class="text-xl font-semibold text-transparent text-start font-neue bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text"
            >
              Resources
            </h3>
            <a href="#features" class="text-lg text-black/60 hover:text-black"
              >Discord Support</a
            >
            <a href="#pricing" class="text-lg text-black/60 hover:text-black"
              >Public Roadmap</a
            >
            <a href="#faq" class="text-lg text-black/60 hover:text-black"
              >YouTube</a
            >
          </div>
        </div>
      </div>
      <p class="text-center">
        Copyright © 2024 RentParcel Technologies Inc. All rights reserved. <br
        />

        <a
          href="#da"
          class="underline transition-all ease-in-out text-bold hover:font-bold"
          >Terms</a
        >
        ・
        <a
          href="#da"
          class="underline transition-all ease-in-out text-bold hover:font-bold"
          >Privacy</a
        >
      </p>
    </footer>
  </div>
</main>
