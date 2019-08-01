<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`services/rooms/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { room: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { reservedRoom } from "../../../components/_stores.js";
  export let room;
  var showAmm =
    room.amenities.additional.length + room.amenities.abscent.length;
  var a, b;

  function addRoom() {
    var reserveItem = {
      id: room.slug,
      content: room,
      date1: "",
      date2: ""
    };
    //should be unique index, push dates aswell, check for errors
    $reservedRoom.push(reserveItem);
  }

  import Modal from "../../../components/modal.svelte";
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
</style>

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
    <h1>
      {room.type}
      <span class="n_people">
        {room.people} {room.people == 1 ? 'person' : 'people'}
      </span>
    </h1>
    <h4>{room.title}</h4>
    <div class="price">{room.price.currency}{room.price.value}/night</div>

    {#if room.amenities.additional.length + room.amenities.abscent.length > 0}
      <h3>Amenities</h3>
      <ul>
        {#each room.amenities.additional as amm}
          <li>{amm}</li>
        {/each}
        {#each room.amenities.abscent as amm}
          <li class="disabled">{amm}</li>
        {/each}
      </ul>
    {/if}

    <h3>Description</h3>
    <p>{room.description}</p>
    <button>Reserve it</button>
  </div>
  <div class="col-right">
    <input type="date" bind:value={a} />
    {a}
    <input type="date" bind:value={b} />
    {b}
    <div class="price-total">Price total</div>
    <!-- <a href="services/booking" on:click={() => $reservedRoom.push('asdasd')}> -->
    <button on:click={addRoom}>Reserve</button>
    <br />
    You wont be charged yet
  </div>
</div>

<button on:click={() => console.log(room)}>SHOW</button>
<button on:click={() => console.log($reservedRoom)}>RESERVED</button>

<Modal {modalContent} />
