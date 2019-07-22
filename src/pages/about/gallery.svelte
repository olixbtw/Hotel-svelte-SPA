<script>
  // function fillGaps(node) {
  //   var cols = parseInt(node.offsetWidth / node.children[0].offsetWidth);
  //   var block_c = cols - (node.children.length % cols);
  //   if (block_c !== 0)
  //     for (let i = 0; i < block_c; i++)
  //       node.appendChild(node.children[0].cloneNode());
  // }

  import Modal from "./../../parts/modal.svelte";
  var modalContent, modalShow;

  function runModal(event) {
    modalShow = true;
    modalContent = event.currentTarget;
    modalContent.image = event.currentTarget.children[0].src;
    modalContent.alt = event.currentTarget.children[0].alt;
    modalContent.text = event.currentTarget.children[1].innerText;
    // modalContent.heading = event.currentTarget.children[1].innerText;
  }
</script>

<em>About section</em>
<h1>Gallery</h1>
{#if modalShow}
  <Modal
    {modalContent}
    on:click={() => {
      modalShow = false;
    }} />
{/if}
<!-- <div class="gallery" use:fillGaps> -->
<div class="gallery">
  <figure on:click={runModal}>
    <img src="assets/img/other/image1.jpg" alt="image1" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image2.jpg" alt="image2" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image3.jpg" alt="image3" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image4.jpg" alt="image4" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image5.jpg" alt="image5" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image6.jpg" alt="image6" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image7.jpg" alt="image7" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image8.jpg" alt="image8" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image9.jpg" alt="image9" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image10.jpg" alt="image10" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image11.jpg" alt="image11" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image12.jpg" alt="image12" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image13.jpg" alt="image13" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image14.jpg" alt="image14" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image15.jpg" alt="image15" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image16.jpg" alt="image16" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
  <figure>
    <img src="assets/img/other/image17.jpg" alt="image17" />
    <figcaption>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.
    </figcaption>
  </figure>
</div>

<style lang="scss">
  .gallery {
    width: calc(100% + 1em);
    margin-left: -0.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  figure {
    &:after {
      position: absolute;
      content: "";
      background: #443941;
      color: #fff;
      display: block;
      width: 80%;
      height: 80%;
      right: -0.5em;
      top: -0.5em;
      z-index: -1;
      transition: all 0.5s;
    }
    &:hover {
      &:after {
        right: 1em;
        top: 1em;
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
        top: -1em;
        right: -1em;
        opacity: 1;
      }
    }
    // border-radius: 10px;
    // overflow: hidden;
    position: relative;
    width: 300px;
    display: block;
    margin: 1em 0.5em;

    img {
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
      background: #443941;
      color: #fff;
      transition: all 0.5s;
    }

    &:before {
      display: block;
      content: "";
      padding-bottom: 100%;
    }
  }
</style>
