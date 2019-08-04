<script>
  import { onMount, onDestroy } from "svelte";
  var y, yStore, loaded_flag, modalWindowActive;

  export let modalContent = {
    active: false,
    images: []
  };

  function modalChange(n) {
    if (!n) {
      modalContent.active = false;
      closeModal();
    } else if (n === "dec") {
      modalContent.active > 0 ? (modalContent.active -= 1) : "";
    } else if (n === "inc") {
      modalContent.active < modalContent.images.length - 1
        ? (modalContent.active += 1)
        : "";
    }
  }

  $: modalWindowActive =
    modalContent.active === 0 ||
    (modalContent.active && modalContent.images.length > 0);
  $: if (modalWindowActive) openModal();

  onMount(() => {
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  function openModal() {
    if (loaded_flag) {
      yStore = y;
      document.body.setAttribute("style", "position:fixed; overflow-y:scroll;");
    }
  }
  function closeModal() {
    if (loaded_flag) {
      y = yStore;
      document.body.setAttribute("style", "");
    }
  }
</script>

<style lang="scss">
  .modalBG {
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    overflow: hidden;
  }
  .inner {
    width: 100%;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
  }
  .big_image {
    width: 100%;
    height: 50vh;
  }
  .big_image :global(img) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 50% 100%;
  }
  .all_img_list {
    padding: 1rem 0;
    display: flex;
    max-width: 40rem;
    position: relative;
    overflow-x: hidden;
  }
  .all_img_list :global(img) {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border: 0px solid transparent;
    transition: all 0.15s ease-in;

    &.active {
      transform: scale(1.2);
      border: 0.1rem solid #444b57;
      z-index: 1;
    }
  }
  .controls-overflow {
    position: relative;
    margin: 3rem auto 0;
  }

  .close_btn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    color: #444b57;
    font-size: 3rem;
    height: 6rem;
    width: 6rem;
    line-height: 6rem;
    text-align: center;
    background: white;
    // background: radial-gradient(white 45%, rgba(0, 0, 0, 0) 75%);
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .prev_btn,
  .next_btn {
    display: block;
    width: 5rem;
    padding: 1rem 0;
    color: #444b57;
    position: absolute;
    top: 50%;
    left: -2rem;
    transform: translateY(-50%);
    text-align: center;
    font-size: 2.5rem;
    z-index: 2;
    background: linear-gradient(90deg, white 40%, rgba(0, 0, 0, 0) 100%);
    * {
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      * {
        transform: scale(1.2);
      }
    }
  }
  .next_btn {
    left: unset;
    right: -2rem;
    background: linear-gradient(270deg, white 40%, rgba(0, 0, 0, 0) 100%);
  }

  @for $i from 0 through 20 {
    .active_slide#{$i} {
      img {
        margin-left: #{$i * -5rem + 12rem};
        margin-right: #{$i * 5rem - 12rem};
      }
    }
  }
</style>

<svelte:window bind:scrollY={y} />

{#if modalContent.active === 0 || (modalContent.active && modalContent.images.length > 0)}
  <div class="modalBG" on:click={() => modalChange(false)}>
    <div class="inner" on:click|stopPropagation>
      <div class="big_image">
        {#each modalContent.images as img, index}
          {#if index === modalContent.active}
            <img src={img.src} alt={img.alt} />
            <!-- {#if img.text}{img.text}{/if} -->
            <!-- {modalContent.active} -->
          {/if}
        {/each}
      </div>
      <br />
      <div class="controls-overflow">
        <div class="all_img_list active_slide{modalContent.active}">
          {#each modalContent.images as img, index}
            <img
              class={modalContent.active == index ? 'active' : ''}
              src={img.src}
              alt={img.alt}
              on:click={() => (modalContent.active = index)} />
          {/each}
        </div>
        <div class="prev_btn" on:click={() => modalChange('dec')}>
          <i class="fas fa-angle-left" />
        </div>
        <div class="next_btn" on:click={() => modalChange('inc')}>
          <i class="fas fa-angle-right" />
        </div>
      </div>
      <div class="close_btn" on:click={() => modalChange(false)}>
        <i class="fas fa-times" />
      </div>
    </div>
  </div>
{/if}
