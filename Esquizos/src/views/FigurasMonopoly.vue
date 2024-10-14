<template>
    <Reglas></Reglas>
     <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">

   
 <div class="page-container">

   
<div class = "main"> 
    <div class ="mensaje">
      <h1>Figuras Monopoly</h1>
    </div>


      <div class = "imagenes">
        <div class = "contenedor">
    
            <h2> Hollow</h2>
            <div class = "rectangulo">
        <img src ="@/assets/hollow.png" alt="Hollow" class = "animada"  @click="seleccionarFigura('hollow')"/>
            
        </div>
        <p class ="descripcion">El Caballero es silencioso, nunca habla, lo que añade un aire misterioso a su carácter. Está completamente envuelto en la atmósfera oscura y melancólica del reino subterráneo de Hallownest.</p>
    </div>


    <div class = "contenedor">
        <h2> Gato</h2>
        <div class = "rectangulo">
        <img src = "@/assets/cat.png" alt="Cat" class = "animada"/>
        </div>
        <p class ="descripcion">Su cuerpo, ágil y flexible, se mueve con una elegancia casi sobrenatural, deslizándose por los espacios con una precisión que desafía las leyes físicas. Puede desaparecer entre las sombras sin dejar rastro, y cuando lo ves nuevamente, parece haberse materializado de la nada.</p>
    </div>

        <div class ="contenedor">
            <h2> Warhammer</h2>
         <div class = "rectangulo">
       <img src = "@/assets/warhammer.png" alt="Warhammer" class="animada" />
        </div>
       <p class ="descripcion">Puede ser un caballero, un paladín o incluso un guerrero del caos. Si es un caballero, su armadura reluciente y capa ondeante lo presentan como un símbolo de honor y justicia, siempre listo para defender a su reino de las hordas de orcos, bestias y criaturas oscuras.</p>
    </div>  

    <div class ="contenedor">
        <h2> Mago</h2>
        <div class = "rectangulo">
       <img src = "@/assets/mago.png" alt="Mago" class="animada" />
        </div>
         <p class ="descripcion">Hechicero especializado en la magia ofensiva, utilizando poderosos hechizos elementales y destructivos para dañar a sus enemigos.</p>
    </div>

    <div class ="contenedor">
        <h2> Illidan</h2>   
        <div class = "rectangulo">
       <img src = "@/assets/illidan.png" alt="Illidan" class="animada" />
        </div>
            <p class ="descripcion">Illidan es más famoso por convertirse en un Cazador de Demonios. Para combatir a la Legión Ardiente, absorbió la energía de los demonios y se transformó en algo más allá de un simple elfo de la noche.</p>
    </div>

    
    <div class ="contenedor">
        <h2> Oveja</h2>
        <div class = "rectangulo">
       <img src = "@/assets/oveja.png" alt="Oveja" class="animada"/>
        </div>
            <p class ="descripcion">Una criatura salida de los rincones más oscuros de la naturaleza, su figura inconfundible pero distorsionada por una presencia inquietante. Su lana, antaño blanca y suave, ahora parece oscura como el carbón. </p>
    </div>



      </div>

    </div>
    
</div>
<button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>
  </template>
  
  <script>
  import Reglas from '../components/Reglas.vue';
  import PopUp from '../components/PopUp.vue';
  export default {
    name: 'FigurasMonopoly',
    components: {
      PopUp,
        Reglas
    },
    methods: {
      seleccionarFigura(figuraName) {
      // Pasar el nombre de la figura en lugar de la ruta
      this.$router.push({
        name: 'MonopolyView',
        params: { figuraSeleccionada: figuraName }
      });
    },

      volverAtras () {
        this.$router.push('/home');
      }
    }
   
  };
  </script>
  
 <style scoped >
.page-container {
    display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la ventana */
  width: 100vw; /* Asegura que el contenedor ocupe el 100% del ancho de la ventana */
  box-sizing: border-box; /* Incluye el padding y el border en el ancho y alto total del elemento */
}


.main{
    width: 90%;
  max-width: 1200px;
  height: 90%;
  background-color: #33333346;
  margin-top: 15px;
  margin-bottom: 15px;
  box-sizing: border-box; /* Incluye el padding y el border en el ancho y alto total del elemento */
   overflow-y: auto; /* Agrega scroll vertical si el contenido excede la altura */
}
 


   .mensaje {
 
    text-align: center; 
font-family: Arial Black; 
font-weight: bold; 
font-size: 30px; 
color: #fff; 
text-shadow: 0 1px 0 #ddd, 0 2px 0 #ccc, 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 0 #acacac, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15);
}


  


  .imagenes {
    display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 20px; /* Espacio entre las imágenes */
  margin-top: 20px;
}

.rectangulo {
  width: 350px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #333; /* Borde del contenedor de la imagen */
  border-radius: 8px;
  margin-bottom: -80px;
  top:-100px;
  position: relative; 
  background-color: 	#8B0000; /* Relleno de color rojo */
  transition: height 0.3s ease, top 0.3s ease; /* Transición suave para el cambio de tamaño y posición */
}

.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #8d1347 ; /* Borde de la tarjeta */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden;
  box-shadow: 0 4px 8px #8d1347 ; /* Sombra para dar efecto de tarjeta */
  transition: transform 0.3s ease;
  background-color: #F5E5E1; /* Fondo blanco de la tarjeta */
}
h2{
   
    font-family: 'Playfair Display', serif;
  font-size: 3rem; /* Ajusta el tamaño según lo que necesites */
  font-weight: 700; /* Puedes usar 400 o 700 para regular o negrita */
  color: #333; /* Ajusta el color según el diseño */
 
  padding: 10px 20px; /* Espaciado interno */
  display: inline-block; /* Para que el borde circular se ajuste al texto */
  z-index: 1; /* Para que el texto esté por encima de la imagen */
  /*margin-top: 50px;*/
  margin-bottom: 100px; /* Ajustar el margen inferior para estar más cerca de la imagen */

 
}

img {
  width: 250px;
  height: 250px;
  object-fit: contain;
  transition: transform 0.3s ease;
  position: relative;
  top: -20px; /* Ajusta este valor según sea necesario para mover la imagen hacia abajo */
}

.animada:hover {
    transform: scale(1.2) rotate(2deg) translateX(2px);
    /*animation: shake 0.2s infinite;*/
}

.descripcion {
  margin-top: 10px;
  font-size: 14px;
  color: #333;

  font-family: 'Lato', sans-serif;
  font-size: 1.1rem; /* Ajusta el tamaño según lo que necesites */
  line-height: 1.6; /* Mejora la legibilidad del párrafo */
  color: #555; /* Ajusta el color según el diseño */
  text-align: justify;
  padding: 20px; /* Agrega padding para separar el texto del borde del contenedor */

}



button {
    width: auto; /* Ajusta el ancho del botón según el contenido */
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute; /* Posiciona el botón de manera absoluta */
    top: 10px; /* Ajusta la distancia desde la parte superior */
    right: 10px; /* Ajusta la distancia desde la parte derecha */
}

  </style>
  