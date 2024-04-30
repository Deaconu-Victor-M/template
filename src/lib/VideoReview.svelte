<script>
    export let thumbnail;
    export let name;
    export let title;
    export let review = "";

</script>

<!--? -------- Review Video -------- -->
<div class="inline-block w-full">
  <div class="flex flex-col w-full gap-4">
  <div
    class="bg-no-repeat bg-center bg-cover rounded-regular aspect-[1280/720] flex flex-row items-end pb-3" style="background-image: url({thumbnail});"
  >
    <div class="flex flex-row items-center justify-between w-full px-4">
      <div class="flex flex-col items-start">
        <h3 class="text-xl text-white">{name}</h3>
        <p class="text-sm text-white/60">{title}</p>
      </div>
      <svg
        width="15"
        height="18"
        viewBox="0 0 15 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.5 16.6018 0.5 15.0622L0.5 2.93782C0.5 1.39822 2.16667 0.435971 3.5 1.20577L14 7.26795Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
  <p class="text-lg text-black/60">
    {review}
  </p>
</div>
</div>
