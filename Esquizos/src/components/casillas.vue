<template>
  <div class="card" :class="cardTransform()" @click="toggleActive">
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
      <p>Información adicional de la carta...</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 170px;
  height: 230px;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card--active {
  transform: rotateY(180deg);
  width: 400px; /* Ajusta el tamaño de la carta agrandada */
  height: 500px; /* Ajusta el tamaño de la carta agrandada */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(180deg);
  z-index: 999;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}

.card--active--LEFT {
  transform: rotateY(180deg);
  width: 400px; /* Ajusta el tamaño de la carta agrandada */
  height: 500px; /* Ajusta el tamaño de la carta agrandada */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%) rotateY(180deg) rotate(90deg);
  z-index: 999;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}

.card__front,
.card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card__front {
  z-index: 2;
  transform: rotateY(0deg);
}

.card__back {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  transform: rotateY(180deg);
}

.close-btn {
  position: fixed;
  top: 10px;
  right: 10px;
  background: red;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 400;
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
</style>

<script>
export default {
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
    image: {
      type: String,
      default: ""
    },
    isActive: { // Mantener isActive como prop
      type: Boolean,
      default: false
    },
    extraRotation: { 
      type: Number,
      default: 0
    },
    oriented: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleActive() {
      this.isCardActive = !this.isCardActive; // Cambiar el estado local
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


