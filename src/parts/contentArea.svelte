<script>
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

<Registration />
<hr />

<Team />
<hr />
<Gallery />
<hr />
<Contact />
<hr />

<Booking />
<hr />
<Room />
<hr />
<Search />
<hr />
<Services />
<hr />
