<script>
  import imageList from "./../../data/gallery.js";
  import Modal from "../../components/modal.svelte";
  var modalContent = {
    active: false,
    images: imageList
  };
</script>

<style lang="scss">
  .gallery {
    justify-content: space-around;
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 0.65rem * 2);
    margin-left: -0.65rem;
  }
  figure {
    margin: 1.25rem 0.65rem;
    //минимальный зазор чтобы пр ховере не прикасаться - 0.5
    width: 300px;
    //вместе с паддингом
    // при наведении 300, в покое 300 - 1rem
    position: relative;
    display: block;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      background: #eb9a21;
      color: white;
      display: block;
      width: 80%;
      height: 80%;
      right: -0.5rem;
      top: -0.5rem;
      z-index: -1;
      transition: all 0.5s;
    }

    img {
      transition: all 0.4s;
      position: absolute;
      height: 100%;
      // width: 100%;
      top: 5%;
      left: 5%;
      width: 90%;
      background: white;
      object-fit: cover;
    }

    figcaption {
      opacity: 0;
      top: -2em;
      right: 0;
      width: 100%;
      position: absolute;
      padding: 0.75rem;
      background: #eb9a21;
      color: #f2f2f2;
      transition: all 0.5s;
      pointer-events: none;
    }

    &::before {
      display: block;
      content: "";
      padding-bottom: 100%;
    }

    &:hover {
      &::after {
        background: #dcb03f;
        right: 0.5rem;
        top: 0.5rem;
        width: 100%;
        height: 100%;
      }
      img {
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
      }
      figcaption {
        top: -0.5rem;
        right: -0.5rem;
        opacity: 1;
        pointer-events: all;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>

<h1>Галерея</h1>

<div class="gallery">
  {#each imageList as img, index}
    <figure on:click={() => (modalContent.active = index)}>
      <img src={img.src} alt={img.alt} />
      <figcaption>{img.text}</figcaption>
    </figure>
  {/each}
</div>

<svelte:head>
  <title>Pris - Галерея</title>
</svelte:head>

<Modal {modalContent} />
