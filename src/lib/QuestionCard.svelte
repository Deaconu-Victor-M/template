<script>
    export let question;
    export let answer;
     let buttonClicked = false;

    function handleClick() {
      buttonClicked = !buttonClicked;
    }
</script>

<div
  class="flex flex-col items-start justify-start w-full group max-w-[1045px] hover:bg-black/5 transition duration-300 ease-in-out rounded-regular group"
>
  <button
    on:click={() => handleClick()}
    class="flex flex-row items-center justify-between w-full gap-5 py-3 px-7"
  >
    <p
      class="text-lg font-semibold tablet_landscape:text-xl text-start"
    >
      {question}
    </p>
    <div
      class="flex group items-center justify-center p-3 tablet_landscape:p-5 border-[1.5px] group-hover:bg-black border-black rounded-full aspect-square size-min {buttonClicked
        ? 'bg-black'
        : ''}"
    >
      <svg
        class="transition-transform duration-300 transform {buttonClicked
          ? 'rotate-90'
          : ''}"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="transition-colors duration-300 stroke-black group-hover:stroke-white {buttonClicked
            ? 'stroke-white'
            : 'stroke-black'}"
          d="M0.863478 7.99866L7.5232 7.99933L14.1829 7.99999M14.1829 7.99999L7.5 1.5M14.1829 7.99999L7.5 14.5"
          stroke-width="1.5"
        />
      </svg>
    </div>
  </button>
  <p class="px-7 pb-5 text-black/70 text-lg tablet_landscape:text-xl text-start {buttonClicked ? '' : 'hidden'}">
    {@html answer}
  </p>
</div>
