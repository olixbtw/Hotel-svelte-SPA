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
  import Button from "../../components/__button.svelte";
  import { reservedRoom, slugTitle } from "../../data/_stores.js";
  import { onMount, onDestroy } from "svelte";
  export let room;
  var Date_a, Date_b, daysTotal, loaded_flag;

  $: {
    if (loaded_flag) {
      if (Date_a && Date_b) {
        // a and b are javascript Date objects
        function dateDiffInDays(a, b) {
          // Discard the time and time-zone information.
          const _MS_PER_DAY = 1000 * 60 * 60 * 24;
          const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
          const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

          return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        daysTotal = dateDiffInDays(new Date(Date_a), new Date(Date_b));
      }
    }
  }

  onMount(() => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    Date_a = yyyy + "-" + mm + "-" + dd;
    dd = String(++dd).padStart(2, "0");
    Date_b = yyyy + "-" + mm + "-" + dd;

    $slugTitle = room.title;
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  var showAmm_flag =
    room.amenities.additional.length + room.amenities.abscent.length;
  function addRoom() {
    var reserveItem = {
      id: room.slug,
      content: room,
      date1: Date_a,
      date2: Date_b,
      days: daysTotal
    };
    //should be unique index, push dates aswell, check for errors
    $reservedRoom.push(reserveItem);

    localStorage.setItem("roomsBooked", JSON.stringify($reservedRoom));
  }

  import Modal from "../../components/modal.svelte";
  var modalContent = {
    // active: 1,
    active: false,
    images: room.photos
  };
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-gap: 1rem 3rem;

    .col-right {
      grid-row: 1 / 2;
    }
    @media (min-width: 1000px) {
      grid-template-columns: auto 18rem;
      .col-left {
        grid-column: 1 / 2;
      }
      .col-right {
        grid-column: 2 / 3;
      }
    }
  }

  .images {
    margin-bottom: 1em;

    display: grid;
    height: 450px;
    grid-auto-flow: dense;

    grid-row-gap: 0.5em;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    @media (min-width: 500px) {
      grid-gap: 0.75em;
      grid-template-columns: 6fr 7fr;
    }
    @media (min-width: 1001px) {
      //weird behaviour from mqpacker
      height: 400px;
      grid-template-columns: 6fr 7fr 6fr;
    }
    @media (min-width: 1680px) {
      grid-template-columns: 6fr 7fr 6fr 6fr;
    }

    img {
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
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

  .amenities {
    ul {
      li {
        &.disabled {
          color: #9f9f9f;
          text-decoration: line-through;
        }
      }
    }
  }

  .col-right {
    margin-top: 2rem;
    .control-group {
      display: inline-block;
    }
    @media (min-width: 1000px) {
    }
    label {
      font-size: 1.2rem;
      padding: 0.25rem;
      color: #9f9f9f;
    }

    .dates_check {
      input {
        width: 100%;
      }
    }
    .display_days {
      font-size: 1.2rem;
      margin: .5rem 0 1.25rem;
    }
    .prompt {
      display: block;
      color: #9f9f9f;
      font-size: 0.8rem;
    }
    @media (min-width: 1000px) {
      &-inner {
        min-width: 16 rem;
        display: block;
        border: 0.1rem solid #9f9f9f;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
        padding: 1.5rem;
        hr {
          display: none;
        }
      }
      .control-group {
        display: block;
        // @media (min-width: 500px) { }
      }
      :global(button) {
        margin-left: auto;
        margin-right: auto;
      }
      .prompt {
        text-align: center;
      }
    }
  }
  .type {
    color: #9f9f9f;
    font-weight: 600;

    .n_people {
      font-weight: 400;
    }
  }
  .price {
    font-weight: 600;
    color: #f2f2f2;
    font-size: 2.5rem;
    // padding-left: 1rem;
    padding: 0.75rem 3.5rem 0.75rem 1rem;
    position: relative;
    display: inline-block;
    margin: 1.5rem 0 3.5rem;

    &::after {
      background: #444b57;
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 200vh;
      z-index: -1;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
  }
</style>

<svelte:head>
  <title>Pris - {room.title}</title>
</svelte:head>

<div class="images">
  {#each room.photos as img, index}
    <img
      src={img.src}
      alt={img.alt}
      on:click={() => (modalContent.active = index)} />
  {/each}
</div>
<div class="container">
  <!-- more photos here -->
  <div class="col-left">
    <div class="type">
      {room.type}
      <span class="n_people">
        для {room.people} {room.people == 1 ? 'гостя' : 'гостей'}
      </span>
    </div>
    <h1>{room.title}</h1>
    <div class="price">{room.price.currency}{room.price.value}/night</div>

    {#if room.amenities.additional.length + room.amenities.abscent.length > 0}
      <div class="amenities">
        <h3>Дополнительные услуги</h3>
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
      <h3>Описание</h3>
      <p>{room.description}</p>
    </div>
    <!-- <Button on:click={addRoom} href="rooms/booking">Reserve it</Button> -->
  </div>

  <div class="col-right">
    <div class="col-right-inner">
      <div class="control-group dates_check">
        <label for="date_input_checkin">Дата въезда</label>
        <input id="date_input_checkin" type="date" bind:value={Date_a} />
      </div>
      <div class="control-group dates_check">
        <label for="date_input_checkout">Дата отъезда</label>
        <input id="date_input_checkout" type="date" bind:value={Date_b} />
      </div>
      <div class="display_days">

        {#if daysTotal > 0}
          <div class="days-total">
            Дни -
            <strong>{daysTotal}</strong>
          </div>
          <div class="price-total">
            Цена -
            <strong>{room.price.value * daysTotal}{room.price.currency}</strong>
          </div>
        {:else}
          Эти даты не доступны
          <br />
          <br />
        {/if}
      </div>
      <Button on:click={addRoom} href="rooms/booking" type="active big">
        Зарезервировать
      </Button>
      <span class="prompt">Оплата позже</span>
      <hr />
    </div>
  </div>
</div>

<Modal {modalContent} />
