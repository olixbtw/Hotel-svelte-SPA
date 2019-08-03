<script>
  import * as sapper from "@sapper/app";
  export let type = "default";
  export let href = false;

  function hrefChange() {
    if (href) sapper.goto(href);
  }
</script>

<button class={type} on:click on:click={hrefChange}>
  <slot />
</button>

<style>
  button {
    /* display: inline-block; */
    /* background-color: red; */
    background-color: rgba(255, 165, 0, 0.5);
    padding: 0.5rem 1.5rem;
  }
</style>
