<script>
  import { reservedRoom } from "../../../components/_stores.js";

  export let bookingData = false;

  var activeBookingPage = 0;
  function nextBooking() {
    activeBookingPage += 1;
  }
  function prevBooking() {
    activeBookingPage -= 1;
  }
  function resetBooking() {
    activeBookingPage = 0;
  }
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: auto 10rem;
  }
</style>

<svelte:head>
  <title>ОТЕЛЬ - Резервация</title>
</svelte:head>

{#if $reservedRoom.length}
  <div class="container">
    <div class="col-left">
      <button on:click={prevBooking}>Back</button>

      {#if activeBookingPage == 0}
        <section>
          <h1>1. Review rules</h1>
          <h2>3 nights in L'viv</h2>
          <div>
            August
            <br />
            AUG
            <br />
            18
            <br />
            Sunday check-in
            <br />
            1PM - 6PM
          </div>
          <div>
            August
            <br />
            AUG
            <br />
            21
            <br />
            Wednesday check-out
            <br />
            11AM
          </div>

          <h3>Things to keep in mind</h3>
          <ul>
            <li>Not suitable for children and infants</li>
            <li>No pets</li>
            <li>No parties or events</li>
            <li>No smoking</li>
          </ul>

          <div class="additional">
            <h3>Additional rules</h3>
            <p>Dear guests-to-be,</p>
            <p>
              If You're making the booking on the same day as the check-in is,
              please note that we might need up to two hours to check you in (to
              physically deliver the key and set you up for the stay). Also, we
              would appreciate for guests not to violate public order (loud
              noises after 23:00, etc.).
            </p>
            <p>
              Thanks for the understanding, we hope You will have a great time
              at our apartment in Lviv!
            </p>
            <p>Yaryna & Yaroslav</p>
          </div>

          <button on:click={nextBooking}>Agree and continue</button>

        </section>
      {:else if activeBookingPage == 1}
        <section>
          <h1>Confirm and pay</h1>
          <h3>Pay with card:</h3>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <h3>How do you want to pay?</h3>
          pay in full
          <br />
          pay for booking--- the rest you will pay upon arival
          <button on:click={nextBooking}>Next</button>
        </section>
      {:else if activeBookingPage > 1}
        <section>
          <h1>Thank you for your booking!</h1>
          <button on:click={resetBooking}>Close</button>
        </section>
      {/if}

    </div>
    <div class="col-right">Booking info - col right</div>
  </div>
{:else}
  <p>Для продолжения резервации</p>
  <h1>Выберите номер</h1>
  <a href="rooms">Номера</a>
{/if}
