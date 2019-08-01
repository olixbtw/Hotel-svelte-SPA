<script>
  export let modalContent = {
    active: false,
    images: []
  };

  // $: modalContent.active === true ? (modalContent.active = 0) : "";
</script>

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
    background: #4f4f4f;
    color: white;
    padding: 2rem;
  }
  .big :global(img) {
    display: block;
    width: 40rem;
    max-height: 40rem;
    object-fit: contain;
  }
  .small :global(img) {
    display: inline-block;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
</style>

{#if modalContent.active === 0 || (modalContent.active && modalContent.images.length > 0)}
  <div class="modalBG" on:click={() => (modalContent.active = false)}>
    <div class="inner" on:click|stopPropagation>
      <div class="big">
        {#each modalContent.images as img, index}
          {#if index === modalContent.active}
            <img src={img.src} alt={img.alt} />
            {#if img.text}{img.text}{/if}
          {/if}
        {/each}
      </div>
      <div class="small">
        {#each modalContent.images as img}
          <img src={img.src} alt={img.alt} />
        {/each}
      </div>
    </div>
  </div>
{/if}
