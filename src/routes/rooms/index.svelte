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
  import Filter from "./__filter.svelte";
  import { roomsFilter } from "../../components/_stores.js";
  let loaded_flag = false;

  var REFERENCE;
  onMount(() => {
    REFERENCE = new Array(...rooms);
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
    unavailable: true,
    sort: "",
    view: "cards"
  };
  //additional
  // FIX
  // вствить сортировку по датам в объект комнат
  var room_available = true;

  $: if (loaded_flag) rooms = roomSort($roomsFilter);

  function roomSort(inputFilter) {
    var sortBy = inputFilter.sort;
    var tempRooms = rooms;
    if (!sortBy) {
      sortBy = "id";
    }
    var reg = /[^0-9]/;
    function compare(a, b) {
      typeof a[sortBy] === "string" ? console.log(a[sortBy]) : "";
      if (+a[sortBy].replace(reg, "") < +b[sortBy].replace(reg, "")) {
        return -1;
      }
      if (+a[sortBy].replace(reg, "") > +b[sortBy].replace(reg, "")) {
        return 1;
      }
      return 0;
    }
    tempRooms.sort(compare);
    return tempRooms;

    // console.log("reference");
    // REFERENCE.forEach(element => {
    //   console.log(element[sortBy]);
    // });
    // console.log("sorted");
    // tempRooms.forEach(element => {
    //   console.log(element[sortBy]);
    // });
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
    <!-- <article class="guests{room.people} available{room_available} price{room.price}"> -->
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
      </a>
    </article>
  {/each}
</div>

<svelte:head>
  <title>ОТЕЛЬ - Номера</title>
</svelte:head>
