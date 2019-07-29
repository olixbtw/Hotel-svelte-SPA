<script>
  export let modalContent;
  console.log(modalContent.image);
  console.log(modalContent.heading);
  console.log(modalContent.text);
</script>

<div class="modalBG" on:click>
  <div class="inner">
    <img src={modalContent.image} alt={modalContent.alt} />
    <h1>{modalContent.heading}</h1>
    <p>{modalContent.text}</p>
  </div>
</div>

<style lang="scss">
  .modalBG {
    background: rgba(250, 250, 250, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    overflow-x: scroll;
  }
  .inner {
    margin: auto;
    width: 50vmax;

    img {
      max-height: 300px;
    }
  }
</style>
