

<div class="filter-body {classToggle ? 'active' : ''}" transition:fade>
  <div class="filter-button" on:click={() => (classToggle = !classToggle)}>
    <i class="fas fa-tasks" />
  </div>
  <nav>
    <h4>Guests</h4>
    <Button on:click={red_guest}>-</Button>
    <input type="number" bind:value={$roomsFilter.guests.n} />
    <Button on:click={inc_guest}>+</Button>
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

