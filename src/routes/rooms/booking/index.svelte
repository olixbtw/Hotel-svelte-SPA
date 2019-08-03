<script>
  import { reservedRoom } from "../../../components/_stores.js";
  import Button from "../../../components/__button.svelte";

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
  var y;
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto 13rem;

    position: relative;
  }
  .col-left {
    grid-column: 1 / 2;
  }
  .col-right {
    grid-column: 2 / 3;

    &.fixed {
      position: fixed;
      background: red;
      right: 0;
    }
  }
</style>

<svelte:head>
  <title>ОТЕЛЬ - Резервация</title>
</svelte:head>
<svelte:window bind:scrollY={y} />
{$reservedRoom.length}
<br />
{activeBookingPage}
{#if $reservedRoom.length && activeBookingPage >= 0}
  <div class="container">
    <div class="col-left">
      <Button on:click={prevBooking}>Back</Button>

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

          <Button on:click={nextBooking}>Agree and continue</Button>

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
          <Button on:click={nextBooking}>Next</Button>
        </section>
      {:else if activeBookingPage > 1}
        <section>
          <h1>Thank you for your booking!</h1>
          <Button on:click={resetBooking}>Close</Button>
        </section>
      {/if}

    </div>
    <div class="col-right {y > 100 ? 'fixed' : ''}">
      Booking info - col right
    </div>
  </div>
{:else}
  <p>Для продолжения резервации</p>
  <h1>Выберите номер</h1>
  <Button href="/rooms">Номера</Button>
  {#if $reservedRoom.length}
    <Button on:click={nextBooking}>Вернуться к регистрации</Button>
  {/if}
{/if}
