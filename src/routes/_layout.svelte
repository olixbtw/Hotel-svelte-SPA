<script>
  import { navHeight } from "../components/_stores.js";
  import Breadcrumbs from "../components/breadcrumbs.svelte";
  import Nav from "../components/_Nav.svelte";
  import Footer from "../components/_Footer.svelte";
  import Arrow from "../components/topArrow.svelte";

  let pageLogo = "logo_dark";
  export let segment;

  import { onMount } from "svelte";
  var heightFix;
  onMount(() => {
    heightFix = $navHeight - 25;
  });
</script>

<style lang="scss">
  main {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    flex-grow: 1;
    // чтобы разрешить прицепить футер вниз страницы
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 56em;
    padding: 2.5rem 2rem 2rem;
    padding: calc(2rem + 25px) 2rem 2rem;
    margin: 0 auto;

    @media (max-width: 999px) {
      max-width: 45rem;
    }

    &::after {
      //заменить простой бекграунд чтобы можно спокойно использовать z-index:-1;
      position: absolute;
      z-index: -100;
      content: "";
      background-color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .pageLogo {
    position: absolute;
    top: 9em;
    right: 13em;
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    opacity: 0.1;
    z-index: -1;
  }

  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 25px; /* min-size, max-size */
    font-range: 500px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>

<Nav {segment} />

<div style="height:{heightFix}px;" />
<main>
  {#if pageLogo}
    <img class="pageLogo" src="{pageLogo}.svg" alt="{pageLogo} logo" />
  {/if}
  {#if segment !== 'login'}
    <Breadcrumbs {segment} />
  {/if}
  <slot />
</main>

<Footer />

<Arrow />
