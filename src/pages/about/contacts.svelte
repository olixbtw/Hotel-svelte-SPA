<script>
  import Map from "./../../parts/map.svelte";

  var address = {
    street: "Sechenova",
    building: "7a",
    index: "03127",
    city: "Kyiv",
    country: "Ukraine",
    phone: "0954501796",
    email: "example@mail.com"
  };
</script>

<div class="contact-body">
  <em>About section</em>

  <h1>Contacts</h1>
  <a href="tel:{address.phone}">{address.phone}</a>
  <!-- <br /> -->
  <a href="mailto:{address.email}">{address.email}</a>
  <address>
    {address.country}, {address.city}
    <br />
    {address.street} {address.building} street, {address.index}
  </address>
</div>
<Map />
