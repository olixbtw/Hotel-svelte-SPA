<script>
  import * as sapper from "@sapper/app";
  export let type = "default";
  export let href = false;

  function hrefChange() {
    if (href) sapper.goto(href);
  }
</script>

<style lang="scss">
  button {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
    border: 2px solid;
    transition: all 0.4s ease-in-out;
    // border-radius: 1px;

    color: #eb9a21;
    color: #dcb03f;
    color: #2172eb;
    color: #eb5757;
    color: #cfcfcf;
    color: #f2f2f2;
    color: #27ae60;
    color: #444b57;
    color: #9f9f9f;
  }

  button {
    border-color: #ccc;
    color: #444b57;
    background-color: #f2f2f2;
  }
  button:active {
    background-color: #cfcfcf;
  }

  button:focus {
    border-color: #9f9f9f;
  }

  .active {
    background: orange;
    color: #f2f2f2;
  }
  .disabled {
  }
  .succes {
  }
  .controls {
  }
</style>

<button class={type} on:click on:click={hrefChange}>
  <slot />
</button>
