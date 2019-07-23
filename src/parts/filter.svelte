<script>
  var classToggle = false;
  var classShow = "";

  function filterToggle() {
    classToggle = !classToggle;
    classToggle ? (classShow = "active") : (classShow = "");
  }
</script>

<div class="filter-body {classShow}">
  <div class="filter-button" on:click={filterToggle} />
  <nav>
    <h3>Guests</h3>
    <h3>Filter</h3>
    price- availability
    <h3>Sort by</h3>
    name- price- number of guests
    <h3>view</h3>
    list- cards
  </nav>
</div>

<style lang="scss">
  .filter-button {
    width: 3rem;
    height: 3rem;
    background: red;
    cursor: pointer;
  }
  .filter-body {
    position: absolute;
    top: 2rem;
    left: 0rem;

    &.active {
      nav {
        max-height: 90vh;
        max-width: 50vw;
        opacity: 1;
      }
    }
    nav {
      opacity: 0;
      max-height: 0;
      max-width: 0;
      overflow: hidden;
    }
  }
  h3 {
    margin: 0;
  }
</style>
