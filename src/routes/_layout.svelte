<script>
  export let pageLogo = "LOGO_dark";
  import Breadcrumbs from "../components/breadcrumbs.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  {#if pageLogo}
    <img class="pageLogo" src="{pageLogo}.png" alt="{pageLogo} logo" />
  {/if}
  <Breadcrumbs />
  <slot />
</main>

<style lang="scss">
  main {
    position: relative;
    max-width: 56em;
    max-width: 70em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  // main {
  //   min-height: 100%;
  //   width: 100%;
  //   padding-top: 0.25rem;
  //   padding-bottom: 2rem;
  // }
  .pageLogo {
    position: absolute;
    top: 2em;
    right: 13em;
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    opacity: 0.15;
    z-index: -1;
  }
</style>
