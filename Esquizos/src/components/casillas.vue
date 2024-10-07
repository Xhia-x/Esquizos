<template>
    <div class="card">
        <div class="card__img"></div>
        <div class="card__descr-wrapper">
            <p class="card__title">
            Project
        </p>
        <p class="card__descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.
        </p>
        <div class="card__Pie">
            <div>
              <h3>Price</h3>
            </div>
        </div>
        </div>
    </div>

</template>

<style>
.card {
  --font-color: #323232;
  --bg-color: #e0e0e0;
  width: 250px;
  height: 350px;
  border-radius: 20px;
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
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  background-color: blueviolet;
}

.card__descr-wrapper {
  padding: 15px;
  display: grid;
}

.card__title {
  color: var(--font-color);
  text-align: center;
  margin-bottom: 15px;
  font-weight: 900;
  font-size: 16px;
}

.card__descr {
  color: var(--font-color);
}

.svg {
  width: 25px;
  height: 25px;
  transform: translateY(25%);
  fill: var(--font-color);
}

.card__Pie {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  
}

.card__Pie h3 {
  color: #000000;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
  margin: 0;
}



</style>

<script>

</script>