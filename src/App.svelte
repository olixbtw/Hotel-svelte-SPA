<script>
  export let name;
  let changeName = "";

  function AddName() {
    name = changeName;
  }
</script>

<style type="scss" lang="scss">
  h1 {
    background: green;
  }

  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 31px; /* min-size, max-size */
    font-range: 420px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>

<h1>
  Hello,
  <span>{name}!</span>
</h1>

<label for="text_input">What is your Name?</label>
<input id="text_input" type="text" bind:value={changeName} />
<button on:click={AddName}>Add</button>
