<script>
  // function fillGaps(node) {
  //   var cols = parseInt(node.offsetWidth / node.children[0].offsetWidth);
  //   var block_c = cols - (node.children.length % cols);
  //   if (block_c !== 0)
  //     for (let i = 0; i < block_c; i++)
  //       node.appendChild(node.children[0].cloneNode());
  // }

  // import Modal from "./../../parts/galleryModal.svelte";
  var modalContent, modalShow;

  function runModal(event) {
    modalShow = true;
    modalContent = event.currentTarget;
    modalContent.image = event.currentTarget.children[0].src;
    modalContent.alt = event.currentTarget.children[0].alt;
    modalContent.text = event.currentTarget.children[1].innerText;
    // modalContent.heading = event.currentTarget.children[1].innerText;
  }

  var images = [
    {
      src: "_assets/img/other/image1.jpg",
      alt: "image1",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image2.jpg",
      alt: "image2",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image3.jpg",
      alt: "image3",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image4.jpg",
      alt: "image4",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image5.jpg",
      alt: "image5",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image6.jpg",
      alt: "image6",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image7.jpg",
      alt: "image7",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image8.jpg",
      alt: "image8",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image9.jpg",
      alt: "image9",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image10.jpg",
      alt: "image10",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image11.jpg",
      alt: "image11",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image12.jpg",
      alt: "image12",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image13.jpg",
      alt: "image13",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image14.jpg",
      alt: "image14",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image15.jpg",
      alt: "image15",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image16.jpg",
      alt: "image16",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    },
    {
      src: "_assets/img/other/image17.jpg",
      alt: "image17",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad."
    }
    // {src:'assets/img/other/image18.jpg',alt:'image18',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad.'},
  ];
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
<!-- {#if modalShow}
  <Modal
    {modalContent}
    on:click={() => {
      modalShow = false;
    }} />
{/if} -->

<div class="gallery">
  {#each images as img}
    <figure on:click={runModal}>
      <img src={img.src} alt={img.alt} />
      <figcaption>{img.text}</figcaption>
    </figure>
  {/each}
</div>
<!-- <div class="gallery" use:fillGaps> -->
