<script>
  import star from "../assets/svg/star.svg";
  export let profile;
  export let name;
  export let title;
  export let review;
</script>

<div class="inline-block w-full">
  <div class="flex flex-col w-full gap-4">
    <div class="flex flex-row items-center justify-start gap-5">
      <img
        src={profile}
        alt="Ali"
        class="inline-block object-cover rounded-full pointer-events-none w-14 h-14 aspect-square"
      />
      <div class="flex flex-col items-start">
        <h3 class="text-2xl font-semibold leading-none font-neue">{name}</h3>
        <p class="text-lg text-black/60">{title}</p>
      </div>
    </div>
    <div class="flex flex-row gap-1">
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
    <p class="text-lg text-black/60">
      {review}
    </p>
  </div>
</div>
