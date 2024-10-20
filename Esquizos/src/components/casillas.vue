<template>
  <div class="card">
    <div class="card__color-strip" :style="{ backgroundColor: color }"></div>
    <img v-if="image" alt="Imagen de la propiedad" class="card__image" />
    <div class="card__descr-wrapper">
      <p class="card__title">{{ title }}</p>
      <p class="card__descr">
        {{ description }}
      </p>
      <div class="card__price">{{ price }}</div>
      <div class="card__links"></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --font-color: #323232;
  --bg-color: #e0e0e0;
  width: 170px;
  height: 230px;
  z-index: 3;

  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s, box-shadow 0.4s;
  position: relative;
}

.card:hover {
  transform: scale(1.15) translate(-10px, -10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index:200;
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
    image: {
      type: String,
      default: "" // Ruta de la imagen por defecto (vacía)
    }
  }
};
</script>
