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
    transition: all 0.25s ease-in-out;
    display: block;
    cursor: pointer;
    font-family: inherit;
    outline: none;
    border: 0.1rem solid;
    font-weight: 600;
    margin-bottom: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;

    &.big {
      padding: 1rem 3rem;
      font-size: 1.1rem;
    }
    &.small {
      padding: 0.5rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  button {
    color: #444b57;
    border-color: #d9d9d9;
    background-color: #f2f2f2;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    }
    &:focus {
      border-color: #9f9f9f;
    }
    &:active {
      box-shadow: 0 0 0 transparent;
      border-color: #afafaf;
      background-color: #dfdfdf;
    }
  }

  .active {
    color: #fff;
    background: #eb9a21;
    border-color: #eb9a21;
    &:focus {
      border-color: #6f6f7f;
    }
    &:active {
      border-color: #9f9f9f;
      background-color: rgba(235, 154, 33, 0.95);
    }
  }
  .success {
    color: #f2f2f2;
    background: #27ae60;
    border-color: #27ae60;
    &:focus {
      border-color: #6f6f7f;
    }
    &:active {
      border-color: #9f9f9f;
      background-color: rgba(39, 174, 96, 0.95);
    }
  }
  .disabled {
    pointer-events: none;
    color: #cfcfcf;
    background: #fff;
    border-color: #cfcfcf;
    &:focus {
      border-color: #9f9f9f;
    }
  }
  .controls {
    background: transparent;
    border-color: #e0e0e0;
    color: #fff;
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    &:focus {
      border-color: #cfcfcf;
    }
    &:active {
      border-color: #d0d0d0;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
</style>

<button class={type} on:click on:click={hrefChange}>
  <slot />
</button>
