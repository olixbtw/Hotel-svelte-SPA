<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`rooms/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { room: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { reservedRoom, slugTitle } from "../../components/_stores.js";
  import { onMount } from "svelte";
  export let room;
  var Date_a = "2019-08-02";
  var Date_b = "2019-08-04";
  var daysTotal = 2;

  onMount(() => {
    $slugTitle = room.title;
  });
  var showAmm_flag =
    room.amenities.additional.length + room.amenities.abscent.length;

  function addRoom() {
    var reserveItem = {
      id: room.slug,
      content: room,
      date1: Date_a,
      date2: Date_b
    };
    //should be unique index, push dates aswell, check for errors
    $reservedRoom.push(reserveItem);
  }

  import Modal from "../../components/modal.svelte";
  var modalContent = {
    active: false,
    images: room.photos
  };
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: auto 10rem;
  }
  .images {
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    display: grid;
    height: 400px;
    grid-auto-flow: dense;

    grid-row-gap: 0.5em;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    @media (min-width: 500px) {
      grid-gap: 0.5em;
      grid-template-columns: 6fr 7fr;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 6fr 7fr 6fr;
    }
    @media (min-width: 1680px) {
      grid-template-columns: 6fr 7fr 6fr 6fr;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;

      @media (max-width: 499px) {
        &:first-child {
          grid-row: 1 / 3;
        }
        &:nth-child(n + 3) {
          display: none;
        }
      }
      @media (min-width: 500px) and (max-width: 999px) {
        &:first-child {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        &:nth-child(n + 4) {
          display: none;
        }
      }
      @media (min-width: 1000px) and (max-width: 1679px) {
        &:first-child {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        &:nth-child(n + 6) {
          display: none;
        }
      }
      @media (min-width: 1680px) {
        &:first-child {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        &:nth-child(n + 8) {
          display: none;
        }
      }
    }
  }
  .col-left {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .col-right {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .type {
  }
  .n_people {
  }
  h1 {
  }
  .price {
  }
  .amenities {
    h3 {
    }
    ul {
      li {
      }
    }
  }
  .description {
  }
</style>

<svelte:head>
  <title>{room.title}</title>
</svelte:head>

<div class="container">
  <!-- more photos here -->
  <div class="images">
    {#each room.photos as img, index}
      <img
        src={img.src}
        alt={img.alt}
        on:click={() => (modalContent.active = index)} />
    {/each}
  </div>
  <div class="col-left">
    <div class="type">{room.type}</div>
    <div class="n_people">
      {room.people} {room.people == 1 ? 'person' : 'people'}
    </div>
    <h1>{room.title}</h1>
    <div class="price">{room.price.currency}{room.price.value}/night</div>

    {#if room.amenities.additional.length + room.amenities.abscent.length > 0}
      <div class="amenities">
        <h3>Amenities</h3>
        <ul>
          {#each room.amenities.additional as amm}
            <li>{amm}</li>
          {/each}
          {#each room.amenities.abscent as amm}
            <li class="disabled">{amm}</li>
          {/each}
        </ul>
      </div>
    {/if}
    <div class="description">
      <h3>Description</h3>
      <p>{room.description}</p>
    </div>
    <button on:click={addRoom}>Reserve it</button>
  </div>
  <div class="col-right">
    <label for="date_input_checkin">Дата въезда</label>
    <input id="date_input_checkin" type="date" bind:value={Date_a} />
    <label for="date_input_checkout">Дата отъезда</label>
    <input id="date_input_checkout" type="date" bind:value={Date_b} />
    <div class="price-total">{room.price.value * daysTotal}</div>
    <hr />
    <button on:click={addRoom}>Reserve</button>
    <span>You wont be charged yet</span>
  </div>
</div>

<Modal {modalContent} />

<!-- <button on:click={() => console.log(room)}>SHOW</button>
<button on:click={() => console.log($reservedRoom)}>RESERVED</button> -->

<!-- <style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{room.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style> -->
<!-- <div class="content">
  {@html room.description}
</div> -->
