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

  //filter - данные через store.js
  // нужно связать каждое поле со значением
  // + удобнее передавать через общие свойства (но наверное дольше)
  import { onMount, onDestroy } from "svelte";
  import Filter from "./__filter.svelte";
  import { roomsFilter } from "../../components/_stores.js";
  let loaded_flag = false;
  onMount(() => {
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
</script>

<svelte:head>
  <title>ОТЕЛЬ - Номера</title>
</svelte:head>
<h1>Номера</h1>

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

<style>
  article {
    border: 1px solid grey;
    padding: 15px;
  }
  article::after {
    display: block;
    content: "";
    clear: both;
  }
  figure {
    float: left;
  }
  figure img {
    width: 200px;
    height: 150px;
    object-fit: contain;
  }
</style>
