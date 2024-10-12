<template>
<div class="pop-up">
    <div class ="pop-up-inner">
        <div class ="pop-up-close" @click="closePopUp()">
            &times;

        </div>
        <h1>
           Reglas
        </h1>
        <p>
           
        </p>
        <div class="alinear">
        <p>
        Los jugadores comienzan por turnos, el jugador que empieza el juego se decide al azar antes de la partida. Cada jugador inicia el juego con 1500 $. Para comprar avenidas, no es necesario dar dos vueltas sino solo una. A su vez, como es costumbre, se comienza lanzando los dados y se avanza su pieza en sentido horario alrededor del tablero, el correspondiente número de espacios.

        Si un jugador cae en el espacio Fortuna o Arca Comunal, recoge la carta superior de la baraja correspondiente y sigue las instrucciones escritas en ella (estas cartas deben estar boca abajo antes de comenzar la partida). Una vez sacada la carta se coloca en la parte inferior. Si el jugador cae en una propiedad sin dueño, ya sea una calle, un ferrocarril, o una utilidad, puede comprarla a no ser que esté en la primera vuelta del juego, la propiedad por el precio de compra en la lista. Si decide no realizar esta compra, la propiedad está disponible para otro jugador que tenga el dinero para comprarlo. Si la propiedad ya posee dueño, debe pagar al propietario un alquiler determinado, el precio depende de si la propiedad es parte de un conjunto o su nivel de desarrollo. Si un jugador saca pares, tira otra vez después de completar su turno. Si el jugador saca 3 veces seguidas pares, deberá ir a la cárcel. En el caso de que en la primera ronda vayas a la cárcel no va a contar esa vuelta, vas a tener que terminar de dar la vuelta y completarla.

        Si un jugador está en la cárcel, no realiza un turno normal, puede pagar 50$ para ser liberado de la cárcel, o intentar sacar pares en los dados. Si un jugador no saca pares para salir de la cárcel, cede su turno. Si intenta esto 3 veces tendrá que pagar la multa de 50$ por obligación para ser liberado. Mientras el jugador está en la cárcel, todavía puede vender propiedades y edificios, y cobrar los alquileres. Si un jugador saca pares, inmediatamente se puede mover de acuerdo con la cantidad indicada por los dados, pero no puede así por segunda vez después de salir de la cárcel. Durante el turno de un jugador, ese jugador también puede optar por desarrollar propiedades, si posee todas las propiedades del grupo de colores. El desarrollo implica la construcción de casas u hoteles en las propiedades, de determinadas cantidades de dinero que se paga al banco, y se hace un seguimiento en el tablero mediante la adición de casas y hoteles a la plaza. El desarrollo debe ser uniforme a través de un monopolio (grupo de propiedades del mismo color), de tal manera que una segunda casa no se puede construir en una propiedad de un monopolio hasta que los otros tengan una casa.

        Aunque las casas y los hoteles no se puede construir en los ferrocarriles o los servicios públicos, el alquiler aumenta si un jugador tiene varias vías férreas o ambos servicios públicos.

        Las propiedades también pueden ser hipotecadas, aunque todos los desarrollos realizados sobre el monopolio deben ser vendidos antes de que la propiedad sea hipotecada o comercializada. También el banco le paga al jugador cada vez que cae en su propiedad el precio establecido. El jugador recibe dinero del banco por cada propiedad hipotecada, que debe ser devuelto con intereses para retirar la hipoteca. Casas y hoteles se puede vender de nuevo al banco a mitad de precio. La propiedad no puede ser entregada a otro jugador.

        Cuando un jugador se declara en quiebra, es eliminado del juego, si no puede pagar lo que debe. Si el jugador en bancarrota debe al banco, debe pasar todas sus propiedades al banco. Si la deuda es a otro jugador, se debe dar todas las propiedades al oponente, pero el nuevo propietario tiene que pagar al banco para retirar la hipoteca por cualquier propiedad recibida. El ganador es el jugador que quede después de que todos los demás se declaren en quiebra.
      </p>
    </div>
           
        <button class = "btn" @click="closePopUp()">
       Cerrar
        

    </button>

</div>

</div>
</template>

<script>
export default{

    name: 'PopUp',
    methods: {
        closePopUp(){
            this.$emit('close');
        }
    }

}
</script>

<style lang="scss">
 .pop-up{
    position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 32px 16px 120px;
  height: 100vh;
  width: 100%;
  background-color: rgba(82, 160, 126, 0.5);
  display: grid;
  place-items: center;

  &-close {
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

  &-inner {
    background-color: #fff;
    color: #000;
    position: relative;
    width: 60%;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    max-height: 80vh; /* Limita la altura máxima del contenido interno */
    overflow-y: auto; /* Agrega scroll vertical si el contenido excede la altura máxima */

  }

  .btn {
  background-color: #9c0000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #640b0b;
  }
}
.alinear{
  text-align: justify;
  font-size: 1em;




}

 }



</style>
