<script>
  import { pageActive } from "./../stores.js";

  import Contact from "./../pages/about/contacts.svelte";
  import Gallery from "./../pages/about/gallery.svelte";
  import Team from "./../pages/about/team.svelte";

  import Registration from "./../pages/registration.svelte";
  import Room from "./../pages/room.svelte";

  import Booking from "./../pages/services/booking.svelte";
  import Search from "./../pages/services/search.svelte";
  import Services from "./../pages/services/services.svelte";

  import Breadcrumbs from "./breadcrumbs.svelte";
</script>

<style lang="scss">
  :global(h1, h2) {
    margin: 0;
  }
</style>

<Breadcrumbs />
{#if $pageActive == 'Login'}
  Login
  <Registration />
{:else if $pageActive == 'About'}
  About (redirect page)
{:else if $pageActive == 'Contacts'}
  <Contact />
{:else if $pageActive == 'Gallery'}
  <Gallery />
{:else if $pageActive == 'Team'}
  <Team />
{:else if $pageActive == 'Services'}
  Services (redirect page)
{:else if $pageActive == 'Booking'}
  <Booking />
{:else if $pageActive == 'Search'}
  <Search />
{:else if $pageActive == 'Activities'}
  <Services />
{/if}
<!-- <Room /> -->
