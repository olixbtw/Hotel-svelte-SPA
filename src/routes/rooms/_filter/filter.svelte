<script>
  import { fade } from "svelte/transition";
  import { roomsFilter } from "../../../components/_stores.js";
  import Button from "../../../components/__button.svelte";

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
    color: #b4b4b4;
    background: #444b57;
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
      color: #b4b4b4;
      // #444b57
      background: rgba(68, 75, 87, 0.9);
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
        color: #cfcfcf;
      }
    }
    &:checked + label {
      color: #f2f2f2;
    }
  }
  label {
    i {
      margin-right: 0.5em;
    }
  }
  h4 {
    margin: 0.15em 0 0.25em -0.5rem;
    color: #f2f2f2;
  }
  // .list-STYLED-FILTER {
  //   .filter-button {
  //     display: none;
  //   }
  //   nav {
  //     font-size: 0.7rem;
  //     display: flex;
  //     margin-bottom: 2rem;
  //   }
  //   nav > * {
  //     border: 1px solid #444b57;
  //     padding: 0.5rem;
  //     line-height: 1.2;
  //   }
  //   section {
  //     flex-grow: 1;
  //   }
  //   input,
  //   label {
  //     display: inline-block;
  //   }
  //   ul,
  //   li {
  //     list-style: circle;
  //   }
  //   ul {
  //     padding-left: 20px;
  //   }
  // }
  input[name="filter_sort_order"] {
    display: none;
  }
  label[for="filter_sort_order"] {
    color: #f2f2f2;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
  }
  section {
    position: relative;
  }
</style>

<svelte:window on:scroll={() => (classToggle = false)} />

<div class="filter-body {classToggle ? 'active' : ''}" transition:fade>
  <div class="filter-button" on:click={() => (classToggle = !classToggle)}>
    <i class="fas fa-tasks" />
  </div>
  <nav>
    <section class="filter">
      <div class="guests">
        <h4>Guests</h4>
        <Button on:click={red_guest} type="controls">-</Button>
        <input type="number" bind:value={$roomsFilter.guests.n} />
        <Button on:click={inc_guest} type="controls">+</Button>
      </div>
      <input
        id="filter_n_guests"
        type="checkbox"
        bind:checked={$roomsFilter.guests.larger} />
      <label for="filter_n_guests">Show larger rooms</label>
      <h4>Дополнительные удобства</h4>
      <input
        id="filter_amenities"
        type="checkbox"
        bind:checked={$roomsFilter.amenities[1]} />
      <label for="filter_amenities">Утюг</label>
      <input
        id="filter_amenities"
        type="checkbox"
        bind:checked={$roomsFilter.amenities[0]} />
      <label for="filter_amenities">Wifi</label>
      <input
        id="filter_amenities"
        type="checkbox"
        bind:checked={$roomsFilter.amenities[2]} />
      <label for="filter_amenities">Завтрак в постель</label>
    </section>
    <section class="sort">
      <h4>Sort by</h4>
      <Button on:click={() => ($roomsFilter.sort = '')} type="controls">
        <i class="fas fa-sync-alt" />
        Reset
      </Button>
      <br />
      {#if $roomsFilter.sort}
        <input
          id="filter_sort_order"
          type="checkbox"
          name="filter_sort_order"
          bind:checked={$roomsFilter.reverse} />
        {#if $roomsFilter.reverse}
          <label for="filter_sort_order" transition:fade>
            <i class="fas fa-sort-amount-up-alt" />
          </label>
        {:else}
          <label for="filter_sort_order" transition:fade>
            <i class="fas fa-sort-amount-down-alt" />
          </label>
        {/if}
      {/if}

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
    </section>
    <section class="view">
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
    </section>
    <!-- <section>
      <h4>Data</h4>
      <ul>
        <li>$roomsFilter.guests.n {$roomsFilter.guests.n}</li>
        <li>$roomsFilter.larger {$roomsFilter.guests.larger}</li>
        <li>$roomsFilter.unavailable {$roomsFilter.unavailable}</li>
        <li>$roomsFilter.sort {$roomsFilter.sort}</li>
        <li>$roomsFilter.view {$roomsFilter.view}</li>
      </ul>
    </section> -->
  </nav>
</div>
