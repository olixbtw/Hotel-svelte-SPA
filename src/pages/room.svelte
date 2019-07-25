<script>
  var images = [
    { src: "assets/img/other/image1.jpg", alt: "image1" },
    { src: "assets/img/other/image2.jpg", alt: "image2" },
    { src: "assets/img/other/image3.jpg", alt: "image3" },
    { src: "assets/img/other/image4.jpg", alt: "image4" },
    { src: "assets/img/other/image5.jpg", alt: "image5" },
    { src: "assets/img/other/image6.jpg", alt: "image6" },
    { src: "assets/img/other/image7.jpg", alt: "image7" },
    { src: "assets/img/other/image8.jpg", alt: "image8" },
    { src: "assets/img/other/image9.jpg", alt: "image9" },
    { src: "assets/img/other/image10.jpg", alt: "image10" },
    { src: "assets/img/other/image11.jpg", alt: "image11" },
    { src: "assets/img/other/image12.jpg", alt: "image12" },
    { src: "assets/img/other/image13.jpg", alt: "image13" },
    { src: "assets/img/other/image14.jpg", alt: "image14" },
    { src: "assets/img/other/image15.jpg", alt: "image15" },
    { src: "assets/img/other/image16.jpg", alt: "image16" },
    { src: "assets/img/other/image17.jpg", alt: "image17" }
  ];
</script>

<div class="container">
  <!-- more photos here -->
  <div class="images">
    {#each images as img}
      <img src={img.src} alt={img.alt} />
    {/each}
  </div>
  <div class="col-left">
    <h1>
      VIP suite
      <span class="n_people">3 beds</span>
    </h1>
    <h4>Glass window suite</h4>
    <div class="price">$300/night</div>

    <h3>Amenities</h3>
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
      <li>Item4</li>
    </ul>
    <h3>Description</h3>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
      ratione temporibus eum voluptatem officia distinctio eveniet numquam,
      voluptatum quaerat ab similique accusamus expedita nemo ducimus libero
      voluptas veniam architecto quae illum earum obcaecati sapiente hic. Sequi
      fugit, molestiae officiis at, sunt, saepe recusandae totam deserunt quasi
      doloribus repellendus provident aliquid?
    </p>
    <button>Reserve it</button>
  </div>
  <div class="col-right">
    <div class="calendar">CALENDAR</div>
    <div class="price-total">Price total</div>
    <button>Reserve</button>
    You wont be charged yet
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: auto 10rem;
  }
  .images {
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    display: grid;
    height: 400px;
    grid-auto-flow: dense;

    grid-row-gap: 0.5em;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    @media (min-width: 420px) {
      grid-gap: 0.5em;
      grid-template-columns: 6fr 7fr;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 6fr 7fr 6fr;
    }
    @media (min-width: 1680px) {
      grid-template-columns: 6fr 7fr 6fr 6fr;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;

      @media (max-width: 419px) {
        &:first-child {
          grid-row: 1 / 3;
        }
        &:nth-child(n + 3) {
          display: none;
        }
      }
      @media (min-width: 420px) and (max-width: 999px) {
        &:first-child {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        &:nth-child(n + 4) {
          display: none;
        }
      }
      @media (min-width: 1000px) and (max-width: 1679px) {
        &:first-child {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        &:nth-child(n + 6) {
          display: none;
        }
      }
      @media (min-width: 1680px) {
        &:first-child {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        &:nth-child(n + 8) {
          display: none;
        }
      }
    }
  }
  .col-left {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .col-right {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
</style>
