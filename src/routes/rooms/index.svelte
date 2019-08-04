<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`rooms.json`)
      .then(r => r.json())
      .then(rooms => {
        return { rooms };
      });
  }
</script>

<script>
  export let rooms;

  import { onMount, onDestroy } from "svelte";
  import Filter from "./_filter/filter.svelte";
  import { roomsFilter } from "../../components/_stores.js";
  let loaded_flag = false;

  var REFERENCE = [];
  onMount(() => {
    REFERENCE = rooms.concat();
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  $roomsFilter = {
    guests: {
      n: 1,
      larger: true
    },
    amenities: [false, false, false],
    sort: "",
    reverse: false,
    view: "cards"
  };

  import guestsFilter from "./_filter/guests.js";
  import roomSortOrder from "./_filter/order.js";
  import amenitiesFilter from "./_filter/amen.js";

  $: if (loaded_flag) rooms = doSorting($roomsFilter);

  function doSorting(allFilters) {
    var newArray = REFERENCE.concat();
    console.log(newArray);
    newArray = guestsFilter(newArray, allFilters); //убрать
    newArray = amenitiesFilter(newArray, allFilters); //оставить только
    newArray = roomSortOrder(newArray, allFilters); //посортировать
    console.log(newArray);
    // newArray = REFERENCE.concat();
    return newArray;
  }
</script>

<style>
  article {
    border: 1px solid grey;
    padding: 10px;
    margin-bottom: 20px;
  }
  article::after {
    display: block;
    content: "";
    clear: both;
  }
  figure {
    float: left;
    margin: 0 20px 0 0;
    display: inline-block;
  }
  figure img {
    display: block;
    width: 200px;
    height: 150px;
    object-fit: contain;
  }
</style>

{#if loaded_flag}
  <Filter />
{/if}

<div class="room-list {loaded_flag ? 'show_roooms' : ''}">
  {#each rooms as room}
    <article>
      <a rel="prefetch" href="rooms/{room.slug}">
        <figure>
          <img src={room.photo.src} alt={room.photo.alt} />
        </figure>
        <div class="type">
          {room.type}
          <span class="n_people">
            {room.people} {room.people == 1 ? 'guest' : 'guests'}
          </span>
        </div>
        <h4>{room.title}</h4>
        <div class="price">{room.price}/night</div>
        <ul style="float:right;">
          {#each room.amenities.additional as item}
            <li class="amen" style="background:green; color:white;">{item}</li>
          {/each}
          {#each room.amenities.abscent as item}
            <li class="amen" style="background:red; color:white;">{item}</li>
          {/each}
        </ul>
      </a>
    </article>
  {/each}
</div>

<svelte:head>
  <title>ОТЕЛЬ - Номера</title>
</svelte:head>
