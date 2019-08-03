<script>
  import { fade } from "svelte/transition";
  import { roomsFilter } from "../../components/_stores.js";
  import Button from "../../components/__button.svelte";

  var classToggle = false;

  function inc_guest() {
    $roomsFilter.guests.n == 10
      ? ($roomsFilter.guests.n = 10)
      : ($roomsFilter.guests.n += 1);
  }
  function red_guest() {
    $roomsFilter.guests.n == 1
      ? ($roomsFilter.guests.n = 1)
      : ($roomsFilter.guests.n -= 1);
  }
</script>

<style>
  .filter-button {
    display: none;
  }
  nav {
    font-size: 0.7rem;
    display: flex;
    margin-bottom: 2rem;
  }
  nav > * {
    border: 1px solid #000;
    padding: 0.5rem;
    line-height: 1.2;
  }
  section {
    flex-grow: 1;
  }
  input,
  label {
    display: inline-block;
  }
  ul,
  li {
    list-style: circle;
  }
  ul {
    padding-left: 20px;
  }
</style>

<div class="filter-body {classToggle ? 'active' : ''}" transition:fade>
  <div class="filter-button" on:click={() => (classToggle = !classToggle)}>
    <i class="fas fa-tasks" />
  </div>
  <nav>
    <div class="filter">
      <div class="guests">
        <h4>Guests</h4>
        <Button on:click={red_guest}>-</Button>
        <input type="number" bind:value={$roomsFilter.guests.n} />
        <Button on:click={inc_guest}>+</Button>
      </div>
      <br />
      <input
        id="filter_n_guests"
        type="checkbox"
        bind:checked={$roomsFilter.guests.larger} />
      <label for="filter_n_guests">Show larger rooms</label>
      <h4>Availability</h4>
      <input
        id="filter_availability"
        type="checkbox"
        bind:checked={$roomsFilter.unavailable} />
      <label for="filter_availability">Show unavailable</label>
    </div>
    <div class="sort">
      <h4>Sort by</h4>
      <Button on:click={() => ($roomsFilter.sort = '')}>Reset</Button>
      <br />
      <input
        id="filter_sort_price"
        type="radio"
        value="price"
        name="filter_sort"
        bind:group={$roomsFilter.sort} />
      <label for="filter_sort_price">price</label>
      <br />
      <!-- <input
        id="filter_sort_id"
        type="radio"
        value="id"
        name="filter_sort"
        bind:group={$roomsFilter.sort} />
      <label for="filter_sort_id">id</label>
      <br /> -->
      <input
        id="filter_sort_people"
        type="radio"
        value="people"
        name="filter_sort"
        bind:group={$roomsFilter.sort} />
      <label for="filter_sort_people">number of guests</label>
    </div>
    <div class="view">
      <h4>View</h4>
      <input
        id="filter_view_list"
        type="radio"
        value="list"
        name="filter_view"
        bind:group={$roomsFilter.view} />
      <label for="filter_view_list">
        <i class="fas fa-th-list" />
        list
      </label>
      <br />
      <input
        id="filter_view_cards"
        type="radio"
        value="cards"
        name="filter_view"
        bind:group={$roomsFilter.view} />
      <label for="filter_view_cards">
        <i class="fas fa-grip-horizontal" />
        cards
      </label>
    </div>
    <section>
      <h4>Data</h4>
      <ul>
        <li>$roomsFilter.guests.n {$roomsFilter.guests.n}</li>
        <li>$roomsFilter.larger {$roomsFilter.guests.larger}</li>
        <li>$roomsFilter.unavailable {$roomsFilter.unavailable}</li>
        <li>$roomsFilter.sort {$roomsFilter.sort}</li>
        <li>$roomsFilter.view {$roomsFilter.view}</li>
      </ul>
    </section>
  </nav>
</div>
