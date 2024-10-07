<template>
  <div class="card">
    <div class="card__img"></div>
    <div class="card__descr-wrapper">
      <p class="card__title">Avenida</p>
      <p class="card__descr">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.
      </p>
      <div class="card__price">Price: $200</div> <!-- Aquí agregamos el precio -->
      <div class="card__links">
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --font-color: #323232;
  --bg-color: #e0e0e0;
  width: 170px;
  height: 230px;

  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  transition: .4s;
  position: relative;
}

.card:hover {
  transform: scale(1.02);
}

.card__img {
  width: 100%;
  height: 70px;
  object-fit: cover;

  background-color: blueviolet;
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

.svg {
  width: 20px;
  height: 20px;
  transform: translateY(25%);
  fill: var(--font-color);
}

.card__links {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}

.card__links .link {
  color: var(--font-color);
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
}

.card__links .link:hover {
  text-decoration: underline;
}
</style>


<script>

</script>