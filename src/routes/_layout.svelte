<script>
  export let segment;

  import { reservedRoom } from "../data/_stores.js";

  import { onMount } from "svelte";
  onMount(() => {
    if (window.localStorage.getItem("roomsBooked"))
      $reservedRoom = JSON.parse(localStorage.getItem("roomsBooked"));
  });
</script>

<style lang="scss">
  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 19px; /* min-size, max-size */
    font-range: 500px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>

<slot />
