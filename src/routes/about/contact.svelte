<script>
  import Map from "./_map.svelte";
  import address from "./../../data/address.js";
</script>

<style>
  section {
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>Pris - Контакты</title>
</svelte:head>

<div class="contact-body">
  <h1>Контакты</h1>

  <section>
    Тел:
    <a href="tel:{address.phone}">{address.phone}</a>

    <br />
    Email:
    <a href="mailto:{address.email}">{address.email}</a>
    <address>
      Address: {address.country}, {address.city}
      <br />
      {address.street} {address.building} street, {address.index}
    </address>
  </section>
  <hr />
  <section>
    <h2>Отзывы и комментарии гостей</h2>
    <span>Марина Томашевская</span>
    <br />
    <span>Менеджер по работе с гостями</span>
    <br />
    Тел:
    <a href="tel:+38 044 597 90 30">+38 044 597 90 30</a>
    <br />
    Email:
    <a href="mailto:comments@mail.com">comments@mail.com</a>
    <br />
  </section>
</div>

<Map />
