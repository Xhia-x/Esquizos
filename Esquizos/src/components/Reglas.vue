
<template>

    <pop-up v-if="Popup" @close="togglePopup" />


<div class="loader">

  

<button class="readmore-btn" @click="togglePopup()">
   
  <span class="book-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(86, 69, 117)"
      viewBox="0 0 126 75"
      class="book"
    >
      <rect
        stroke-width="3"
        stroke="#fff"
        rx="7.5"
        height="70"
        width="121"
        y="2.5"
        x="2.5"
      ></rect>
      <line stroke-width="3" stroke="#fff" y2="75" x2="63.5" x1="63.5"></line>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#fff"
        d="M25 20H50"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#fff"
        d="M101 20H76"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#fff"
        d="M16 30L50 30"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#fff"
        d="M110 30L76 30"
      ></path>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 65 75"
      class="book-page"
    >
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#fff"
        d="M40 20H15"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#fff"
        d="M49 30L15 30"
      ></path>
      <path
        stroke-width="3"
        stroke="#fff"
        d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
      ></path>
    </svg>
  </span>
  <span class="text"> Reglas </span>
</button>

</div>

</template>

<script>
// eslint-disable-next-line vue/no-unused-components
import PopUp from './PopUp.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reglas',
  components: {
    PopUp
  },
  data() {
    return {
      Popup: false
    }
  },
    methods: {
        togglePopup() {
        this.Popup = !this.Popup;
        }
    }
}

</script>



<style>

.readmore-btn {
  width: fit-contentd;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #9c1616c2;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  padding: 0px 15px;
  gap: 0px;
  transition: all 0.4s;
}
.book-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 45px;
  height: 100%;
}
.book-wrapper .book-page {
  width: 50%;
  height: auto;
  position: absolute;
}
.readmore-btn:hover .book-page {
  animation: paging 0.4s linear infinite;
  transform-origin: left;
}
.readmore-btn:hover {
  background-color:rgb(156, 0, 0);
}
@keyframes paging {
  0% {
    transform: rotateY(0deg) skewY(0deg);
  }
  50% {
    transform: rotateY(90deg) skewY(-20deg);
  }
  100% {
    transform: rotateY(180deg) skewY(0deg);
  }
}
.text {
  width: 105px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  color: #F8E8A0;
}


</style>

<style lang="scss">
.pop-up{
    position: fixed;
    top: 0;
    left: 0;
    z-index:10 ;
    padding: 32px 16px 120px;
    height: 100vh;
    width: 100%;
    background-color: rgba($color:#52a07e, $alpha: 0.5);
    display: grid;
    place-items: center;
 

    &-close{
        position: absolute;
        height: 52px;
        width: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        font-size: 3rem;
        color: #d6d6d6;
        cursor: pointer;

    }

    &-inner{
        background-color: #fff;
        color: #000;
        position: relative;
        width: 60%;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 5px 5px rgba($color: #000, $alpha: 0.2);
    }

}

</style>
