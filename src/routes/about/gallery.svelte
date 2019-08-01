<script>
  import imageList from "./_gallery.js";
  import Modal from "../../components/modal.svelte";
  var modalContent = {
    active: false,
    images: imageList
  };
</script>

<style lang="scss">
  .gallery {
    padding: 0.5rem 0;
    width: calc(100% + 1em);
    margin-left: -0.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  figure {
    // border-radius: 10px;
    // overflow: hidden;
    position: relative;
    width: 300px;
    display: block;
    margin: 1.5em 0.75em;

    &::after {
      position: absolute;
      content: "";
      background: #eb9a21;
      color: #fff;
      display: block;
      width: 80%;
      height: 80%;
      right: -0.5em;
      top: -0.5em;
      z-index: -1;
      transition: all 0.5s;
    }

    img {
      // z-index: 2;
      background: #cecece;
      transition: all 0.4s;
      position: absolute;
      top: 5%;
      left: 5%;
      height: 90%;
      width: 90%;
      object-fit: cover;
    }

    figcaption {
      opacity: 0;
      top: -2em;
      right: 0;
      width: 100%;
      position: absolute;
      padding: 0.75em;
      background: #eb9a21;
      color: #fff;
      transition: all 0.5s;
    }

    &::before {
      display: block;
      content: "";
      padding-bottom: 100%;
    }

    &:hover {
      &::after {
        background: #dcb03f;
        right: 0.75em;
        top: 0.75em;
        width: 100%;
        height: 100%;
      }
      img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      figcaption {
        top: -0.75em;
        right: -0.75em;
        opacity: 1;
        // z-index: 3;
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
  <title>ОТЕЛЬ - Галерея</title>
</svelte:head>

<Modal {modalContent} />
