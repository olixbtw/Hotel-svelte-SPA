<script>
  export let value = "";

  let sliderScroll = 0;
  $: sliderScroll_class = "slide" + sliderScroll;
</script>

<div class="slider">
  <h1 class={sliderScroll_class}>{sliderScroll_class}</h1>
  <h2>{value}</h2>
  <img
    src="assets/img/slider/slider1.jpg"
    alt="sliderImage1"
    class={sliderScroll_class} />
  <img
    src="assets/img/slider/slider2.jpg"
    alt="sliderImage2"
    class={sliderScroll_class} />
  <img
    src="assets/img/slider/slider3.jpg"
    alt="sliderImage3"
    class={sliderScroll_class} />
  <img
    src="assets/img/slider/slider4.jpg"
    alt="sliderImage4"
    class={sliderScroll_class} />
  <img
    src="assets/img/slider/slider5.jpg"
    alt="sliderImage5"
    class={sliderScroll_class} />
  <div
    class="slider__button slider__button-left"
    on:click={() => {
      sliderScroll--;
    }} />
  <div
    class="slider__button slider__button-right"
    on:click={() => {
      sliderScroll++;
    }} />

</div>

<style lang="scss">
  h1,
  h2 {
    color: #fff;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .slider {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    background: #4f3552;

    img {
      scroll-snap-align: center;
      object-fit: cover;
      width: 100%;
    }
    .slider__button {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      width: 5em;
      height: 450px;
      background: #4f3552;
      // border-radius: 4px;
      opacity: 0.1;
      transition: all 0.5s;
      &:hover {
        opacity: 0.5;
      }

      &-left {
        left: 0.5em;
      }
      &-right {
        right: 0.5em;
      }
    }
  }
  img {
    transition: margin 1s linear;
    &.slide1 {
      margin-left: -100%;
      margin-right: 100%;
    }
    &.slide2 {
      margin-left: -200%;
      margin-right: 200%;
    }
    &.slide3 {
      margin-left: -300%;
      margin-right: 300%;
    }
    &.slide4 {
      margin-left: -400%;
      margin-right: 400%;
    }
  }
</style>
