<script>
  import { roomsFilter } from "../../../components/stores.js";
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

<style lang="scss">
  .filter-button {
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
    line-height: 3rem;
    text-align: center;
    color: #dfdbdb;
    background: #443941;
    cursor: pointer;
    position: absolute;
    bottom: 100%;
    right: 0;
  }
  .filter-body {
    position: absolute;
    top: 5rem;
    z-index: 500;
    white-space: nowrap;
    line-height: 2.2;

    right: 0.5rem;
    // @media (min-width: 1000px) {
    // }
    @media (min-width: 1680px) {
      left: -3rem;
    }

    &.active {
      nav {
        max-height: 90vh;
        max-width: 50vw;
        opacity: 1;
      }
    }
    nav {
      margin: 0 0 0 auto;
      transition: all 0.4s;
      padding: 1rem 2.5rem;
      color: #a19d9d;
      background: rgba(68, 57, 65, 0.95);
      opacity: 0;
      max-height: 0;
      max-width: 0;
      overflow: hidden;
      display: block;
      float: right;
    }
  }
  input,
  label {
    cursor: pointer;
    display: inline-block;
  }
  input {
    &[type="number"] {
      width: 4rem;
    }
    &[name="filter_view"] {
      display: none;

      & + label {
        color: #a19d9d;
      }
    }
    &:checked + label {
      color: #dfdbdb;
    }
  }
  label {
    i {
      margin-right: 0.5em;
    }
  }
  h4 {
    margin: 0.15em 0 0.25em -0.5rem;
    color: #dfdbdb;
  }
</style>

<div class="filter-body {classToggle ? 'active' : ''}">
  <div class="filter-button" on:click={() => (classToggle = !classToggle)}>
    <i class="fas fa-tasks" />
  </div>
  <nav>
    <h4>Guests</h4>
    <button on:click={red_guest}>-</button>
    <input type="number" bind:value={$roomsFilter.guests.n} />
    <button on:click={inc_guest}>+</button>
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
    <h4>Sort by</h4>
    <input
      id="filter_sort_name"
      type="radio"
      value="name"
      name="filter_sort"
      bind:group={$roomsFilter.sort} />
    <label for="filter_sort_name">name</label>
    <br />
    <input
      id="filter_sort_price"
      type="radio"
      value="price"
      name="filter_sort"
      bind:group={$roomsFilter.sort} />
    <label for="filter_sort_price">price</label>
    <br />
    <input
      id="filter_sort_guests"
      type="radio"
      value="guests"
      name="filter_sort"
      bind:group={$roomsFilter.sort} />
    <label for="filter_sort_guests">number of guests</label>
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
  </nav>
</div>
