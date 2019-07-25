<script>
  import { pageActive } from "./../stores.js";
  // export let pageLogo = false;
  export let pageLogo = "favicon";
  //until i wont fild logos for every page and connect them

  import Contact from "./../pages/about/contacts.svelte";
  import Gallery from "./../pages/about/gallery.svelte";
  import Info from "./../pages/about/info.svelte";

  import Booking from "./../pages/services/booking.svelte";
  import Appartments from "./../pages/services/search.svelte";
  import Services from "./../pages/services/services.svelte";

  import Registration from "./../pages/registration.svelte";
  import Room from "./../pages/room.svelte";

  import Breadcrumbs from "./breadcrumbs.svelte";
</script>

<main>
  {#if pageLogo}
    <img class="pageLogo" src="assets/{pageLogo}.png" alt="{pageLogo} logo" />
  {/if}
  <Breadcrumbs />
  {#if $pageActive == 'Main'}
    Home Page
  {:else if $pageActive == 'Login'}
    <Registration />
  {:else if $pageActive == 'Contact'}
    <style>
      /*  pin map inside this component to the bottom  */
      main {
        display: flex;
        flex-direction: column;
      }
    </style>
    <Contact />
  {:else if $pageActive == 'Gallery'}
    <Gallery />
  {:else if $pageActive == 'About'}
    <Info />
  {:else if $pageActive == 'Services'}
    <Services />
  {:else if $pageActive == 'Booking'}
    <Booking />
  {:else if $pageActive == 'Appartments'}
    <Appartments />
  {:else if $pageActive == 'Room'}
    <Room />
  {/if}
  <!-- <Room /> -->
</main>

<style lang="scss">
  .pageLogo {
    position: absolute;
    top: 2em;
    right: 13em;
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    opacity: 0.19;
    z-index: -1;
  }
  main {
    min-height: 100%;
    width: 100%;
    padding-top: 0.25rem;
    padding-bottom: 2rem;
  }
</style>
