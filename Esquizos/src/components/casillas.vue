<template>
  <div class="card" :class="[cardTransform(), !isCardActive ? 'card--hover' : '']" @click="toggleActive">
    <!-- Cara frontal -->
    <div class="card__color-strip" :style="{ backgroundColor: color }"></div>
    <img v-if="image" :src="image" alt="Imagen de la propiedad" class="card__image" />
    <div class="card__descr-wrapper">
      <p class="card__title">{{ title }}</p>
      <p class="card__descr">{{ description }}</p>
      <div class="card__price">{{ price }}</div>
    </div>
    <!-- Cara trasera -->
    <div class="card__back">
      <div class="box">
        <h2 :style="{ backgroundColor: color }"><br />
          {{ title }}</h2>
        <p class="align-center">Renta ${{ renta }}</p>
        <div class="clear-both">
          <div class="float-left">Con 1 Casa</div>
          <div class="float-right">${{ renta1Casa }}</div>
          <br />
          <div class="float-left">Con 2 Casas</div>
          <div class="float-right">${{ renta2Casa }}</div>
          <br />
          <div class="float-left">Con 3 Casas</div>
          <div class="float-right">${{ renta3Casa }}</div>
          <br />
          <div class="float-left">Con 4 Casas</div>
          <div class="float-right">${{ renta4Casa }}</div>
        </div>
        <p class="align-center clear-both">Con HOTEL ${{ rentaHotel }}</p>
        <small class="align-center">
          Valor Hipoteca ${{ hipoteca }}
        </small>

      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 170px;
  height: 230px;
  background: lightgray;
  display: flex;
  flex-direction: column;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card--hover:hover {
  transform: scale(1.05) translate(-5%,-5%); /* Agranda ligeramente la tarjeta */
}

.card--active {
  width: 400px; 
  height: 500px; 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(180deg);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.card--active--RIGHT {
  width: 400px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: center; 
  transform: translate(-50%,-150%) rotate(90deg) rotateY(180deg);
  z-index: 9999;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}

.card--active--TOP {
  width: 400px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -130%) rotate(180deg) rotateY(180deg);
  z-index: 9999;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}


.card--active--LEFT {
  width: 400px; /* Ajusta el tamaño de la carta agrandada */
  height: 500px; /* Ajusta el tamaño de la carta agrandada */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -130%) rotateY(180deg) rotate(90deg);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.card__front,
.card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card__front {
  z-index: 1;
  transform: rotateY(0deg);
}

.card__back {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  transform: rotateY(180deg);
  z-index: 2;
}

.close-btn {
  position: fixed;
  top: 10px;
  right: 10px;
  background: red;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
}

.card__color-strip {
  width: 100%;
  height: 70px;
}

.card__descr-wrapper {
  padding: 3px;
  display: grid;
}

.card__title {
  color: var(--font-color);
  text-align: center;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 14px;
}

.card__descr {
  color: var(--font-color);
  font-size: 12px;
}

.card__image {
  width: 100%;
  height: auto;
  max-height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

/* back card */
@textColor: #444444;

body {
  font-family: 'Montserrat', sans-serif;
  color:@textColor;
  font-size:1em;
  box-sizing:border-box;
}
hr {
    border: 0;
    height: 1px;
    background: #ffffff;
}

.wrapper {
  width:100%;
  margin:5%;
  z-index: 99999;
}

.box {
  min-width: 400px;
  max-width:320px;
  min-height:500px;
  margin:60px auto;
  border:1px solid #ffffff;
  padding:10px;
  box-shadow:0 1px 1px 1px white;
  transition: 3s ease-in all;
  z-index: 9999;
  h2 {
    text-align:center;
    color:black;
    padding:20px;
    margin:0;
    border:2px solid black;
    small {
      text-transform:uppercase;
      font-size:12px;
      letter-spacing:2px;
    }
  }
  .align-center {
    text-align:center;
  }
}

.float-left {
  float:left;
}

.float-right {
  float:right;
}

.clear-both {
  clear:both;
  padding-bottom:10px;
}

</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Casilla",
  props: {
    color: {
      type: String,
      default: "blueviolet"
    },
    title: {
      type: String,
      default: "Avenida"
    },
    description: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 200
    },
    valorCasa: {
      type: Number,
      default: 200
    },
    hipoteca: {
      type: Number,
      default: 100
    },
    renta: {
      type: Number,
      default: 10
    },
    renta1Casa: {
      type: Number,
      default: 50
    },
    renta2Casa: {
      type: Number,
      default: 120
    },
    renta3Casa: {
      type: Number,
      default: 200
    },
    renta4Casa: {
      type: Number,
      default: 350
    },
    rentaHotel: {
      type: Number,
      default: 750
    },
    image: {
      type: String,
      default: ""
    },
    isCardActive: { // Mantener isActive como prop
      type: Boolean,
      default: false
    },
    oriented: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleActive() {
      this.$emit('toggleActive');  // Emitir el evento al padre
    },
    cardTransform() {
      if (this.isCardActive && this.oriented == 0) {
        return 'card--active';
      }
      if (this.isCardActive && this.oriented == 1) {
        return 'card--active--RIGHT';
      } 
      if (this.isCardActive && this.oriented == 2) {
        return 'card--active--TOP';
      } 
      if (this.isCardActive && this.oriented == 3) {
        return 'card--active--LEFT';
      } 
    }
  }
};
</script>


