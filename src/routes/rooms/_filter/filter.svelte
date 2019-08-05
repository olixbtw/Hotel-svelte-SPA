<script>
  import { fade } from "svelte/transition";
  import { roomsFilter } from "../../../data/_stores.js";
  import Button from "../../../components/__button.svelte";

  var showFilter = false;

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
    color: #f2f2f2;
    background: #444b57;
    cursor: pointer;
    position: absolute;
    bottom: 100%;
    right: 0;
    box-shadow: -1px -2px 3px rgba(0, 0, 0, 0.2);
  }
  .filter-body {
    position: absolute;
    top: 5rem;
    z-index: 500;
    white-space: nowrap;
    right: 0.5rem;

    &.active {
      nav {
        max-height: 90vh;
        max-width: 50vw;
        opacity: 1;
        padding: 1rem 2.5rem;
        box-shadow: -2px 3px 4px rgba(0, 0, 0, 0.2);
      }
    }
    nav {
      line-height: 2;
      margin: 0 0 0 auto;
      transition: all 0.4s;
      color: #f2f2f2;
      // #444b57
      background: rgba(68, 75, 87, 0.98);
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
        color: #afafaf;
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
    color: #eb9a21;
  }

  section {
    position: relative;
  }
  .guests {
    :global(button) {
      display: inline-block;
    }
  }
  .filter_sort_order {
    input[name="filter_sort_order"] {
      display: none;
    }
    label[for="filter_sort_order"] {
      color: #f2f2f2;
      font-size: 1.5rem;
      position: absolute;
      top: 0;
      right: 0;
      &::before {
        display: none;
      }
    }
  }
  .view,
  .filter_sort_order {
    label {
      padding-left: 0;
      i {
        margin: 0;
      }
    }
    label:after,
    label:before {
      display: none;
    }
  }
  //checkbox/radio styling

  input[type="checkbox"] {
    display: none;
    & + label {
      position: relative;
      padding-left: 1.5rem;
      color: #9f9f9f;
      &::after {
        display: inline-block;
        color: white;
      }
      &::before {
        border-radius: 0.25rem;
        content: "";
        top: 50%;
        left: 0;
        position: absolute;
        transform: translateY(-50%);
        box-sizing: border-box;
        display: inline-block;
        background: #c1c1c1;
        width: 1rem;
        height: 1rem;
        border: 0.25rem solid #c1c1c1;
        transition: all 0.25s ease-in-out;
        border-width: 0rem;
        padding: 0.1rem;
      }
      &::after {
        opacity: 0;
        content: "✓";
        top: 50%;
        color: #fff;
        left: 0.15rem;
        position: absolute;
        transform: translateY(-50%);
        display: block;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
    &:checked {
      & + label {
        color: #f2f2f2;
        &::after {
          opacity: 1;
          top: 40%;
        }
        &::before {
          padding: 0;
          border-width: 2px;
          background: #eb9a21;
          border-color: #cfcfcf;
        }
      }
    }
  }
  input[type="radio"] {
    display: none;
    & + label {
      position: relative;
      padding-left: 1.5rem;
      color: #9f9f9f;
      &::before {
        top: 50%;
        left: 0;
        position: absolute;
        transform: translateY(-50%);
        content: "";
        box-sizing: border-box;
        display: inline-block;
        background: #c1c1c1;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 0.25rem solid #c1c1c1;
        transition: all 0.25s ease-in-out;
        border-width: 0.1rem;
        padding: 0.15rem;
      }
    }
    &:checked {
      & + label {
        color: #fff;
        &::before {
          padding: 0;
          border-width: 0.25rem;
          background: #eb9a21;
          border-color: #f2f2f2;
        }
      }
    }
  }

  .number-group {
    display: flex;
    :global(button) {
      margin: 0;
    }
    mragin-bottom: 0.5rem;
  }
  input[type="number"] {
    background: transparent;
    border-color: #e0e0e0;
    color: #fff;
    margin: 0 0.5rem;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    &:focus {
      border-color: #cfcfcf;
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.15);
      border-color: #d0d0d0;
    }
  }
  section h4 {
    margin: 0.5rem 0;
  }
</style>

<svelte:window on:scroll={() => (showFilter = false)} />

<div class="filter-body {showFilter ? 'active' : ''}" transition:fade>
  <div class="filter-button" on:click={() => (showFilter = !showFilter)}>
    <i class="fas fa-tasks" />
  </div>
  <nav>
    <section class="filter">
      <div class="guests">
        <h4>Guests</h4>
        <div class="control-group number-group">
          <Button on:click={red_guest} type="controls">-</Button>
          <input type="number" bind:value={$roomsFilter.guests.n} />
          <Button on:click={inc_guest} type="controls">+</Button>
        </div>
      </div>
      <div class="control-group">
        <input
          id="filter_n_guests"
          type="checkbox"
          bind:checked={$roomsFilter.guests.larger} />
        <label for="filter_n_guests">Show larger rooms</label>
      </div>
      <h4>Дополнительные удобства</h4>
      <div class="control-group">
        <input
          id="filter_amenities_1"
          type="checkbox"
          bind:checked={$roomsFilter.amenities[1]} />
        <label for="filter_amenities_1">Утюг</label>
      </div>
      <div class="control-group">
        <input
          id="filter_amenities_0"
          type="checkbox"
          bind:checked={$roomsFilter.amenities[0]} />
        <label for="filter_amenities_0">Wifi</label>
      </div>
      <div class="control-group">
        <input
          id="filter_amenities_2"
          type="checkbox"
          bind:checked={$roomsFilter.amenities[2]} />
        <label for="filter_amenities_2">Завтрак в постель</label>
      </div>
    </section>
    <section class="sort">
      <h4>Sort by</h4>
      <Button on:click={() => ($roomsFilter.sort = '')} type="controls">
        <i class="fas fa-sync-alt" />
        Reset
      </Button>
      {#if $roomsFilter.sort}
        <div class="control-group filter_sort_order">
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
        </div>
      {/if}

      <div class="control-group">
        <input
          id="filter_sort_price"
          type="radio"
          value="price"
          name="filter_sort"
          bind:group={$roomsFilter.sort} />
        <label for="filter_sort_price">price</label>
      </div>
      <!-- 
      <div class="control-group">
        <input
        id="filter_sort_id"
        type="radio"
        value="id"
        name="filter_sort"
        bind:group={$roomsFilter.sort} />
      <label for="filter_sort_id">id</label>
      </div>
       -->
      <div class="control-group">
        <input
          id="filter_sort_people"
          type="radio"
          value="people"
          name="filter_sort"
          bind:group={$roomsFilter.sort} />
        <label for="filter_sort_people">number of guests</label>
      </div>
    </section>
    <section class="view">
      <h4>View</h4>
      <div class="control-group">
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
      </div>
      <div class="control-group">
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
