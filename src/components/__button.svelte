<script>
  import * as sapper from "@sapper/app";
  export let type = "default";
  export let href = false;

  function hrefChange() {
    if (href) sapper.goto(href);
  }
</script>

<style>
  button {
    background-color: rgba(255, 165, 0, 0.5);
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }
  .disabled {
    cursor: initial;
    opacity: 0.9;
    pointer-events: none;
    background: red;
  }
</style>

<button class={type} on:click on:click={hrefChange}>
  <slot />
</button>
