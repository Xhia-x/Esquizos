<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chelsea Market">
  <div class="monopoly-board" :image="fondoImage">
    <!-- Esquinas vacías -->
    <div class="corner top-left" id="21">
        <h1 class="carceletra1">De Paso</h1>
        <img src="@/assets/carcel.png" class="carcel"/>
    </div>
    <div class="corner top-right" id="31">
        <h1 class="letrapolicia1">Ir a la </h1>
        <img src="@/assets/policia.png" class="policia"/> 
        <h1 class="letrapolicia2">carcel</h1>
    </div>
    <div class="corner bottom-left" id="11">
        <img src="@/assets/Parking.png" class="parking"/>
    </div>
    <div class="corner bottom-right" id="1">
        <h1 class="LetraInicio">Start</h1>
        <img src="@/assets/Start.png" class="Start" />
    </div>

    

    <!-- Lado superior -->
    <div class="side top-side">
      <div class="property-top" id="22"><Casilla color="red" title="AV. KENTUCKY" :price="preciosTerrenos[22]" :isCardActive="activeCardIndex === 22"
        :oriented="2" @toggleActive="setActiveCard(22)" :dueno="duenos[22]" :propiedades="propiedades[22]"/></div>
      <div class="property-top" id="23"><Casilla color="" title="" price="" :image="signoImage" :isCardActive="activeCardIndex === 23"
        :oriented="2" @toggleActive="setActiveCard(23)"/></div>
      <div class="property-top" id="24"><Casilla color="red" title="AV. INDIANA" :price="preciosTerrenos[24]"  :isCardActive="activeCardIndex === 24"
        :oriented="2" @toggleActive="setActiveCard(24)" :dueno="duenos[24]" :propiedades="propiedades[24]"/></div>
      <div class="property-top" id="25"><Casilla color="red" title="AV.ILLINOIS" :price="preciosTerrenos[25]" :isCardActive="activeCardIndex === 25"
        :oriented="2" @toggleActive="setActiveCard(25)" :dueno="duenos[25]" :propiedades="propiedades[25]"/></div>
      <div class="property-top" id="26"><Casilla color="" title="FERROCARRIL B. & O." :price="preciosTerrenos[26]" :image="trenImage" :isCardActive="activeCardIndex === 26"
        :oriented="2" @toggleActive="setActiveCard(26)" :dueno="duenos[26]" :propiedades="propiedades[26]"/></div>
      <div class="property-top" id="27"><Casilla color="yellow" title="AV. ATLÁNTICO" :price="preciosTerrenos[27]" :isCardActive="activeCardIndex === 27"
        :oriented="2" @toggleActive="setActiveCard(27)" :dueno="duenos[27]" :propiedades="propiedades[27]"/></div>
      <div class="property-top" id="28"><Casilla color="yellow" title="AV. VENTNOR" :price="preciosTerrenos[28]" :isCardActive="activeCardIndex === 28"
        :oriented="2" @toggleActive="setActiveCard(28)" :dueno="duenos[28]" :propiedades="propiedades[28]"/></div>
      <div class="property-top" id="29"><Casilla color="" title="COMPAÑÍA DE AGUA" :price="preciosTerrenos[29]" :image="grifoImage" :isCardActive="activeCardIndex === 29"
        :oriented="2" @toggleActive="setActiveCard(29)" :dueno="duenos[29]" :propiedades="propiedades[29]"/></div>
      <div class="property-top" id="30"><Casilla color="yellow" title="JARDINES MARVIN" :price="preciosTerrenos[30]" :isCardActive="activeCardIndex === 30"
        :oriented="2" @toggleActive="setActiveCard(30)" :dueno="duenos[30]" :propiedades="propiedades[30]"/></div>
    </div> 

    <!-- Lado derecho -->
    <div class="side right-side">
      <div class="property-rotate-right" id="32"><Casilla color="green" title="AV. PACÍFICO" :price="preciosTerrenos[32]" :isCardActive="activeCardIndex === 32"
        :oriented="1" @toggleActive="setActiveCard(32)" :dueno="duenos[32]" :propiedades="propiedades[32]"/></div>
      <div class="property-rotate-right" id="33"><Casilla color="green" title="AV. CAROLINA DEL NORTE" :price="preciosTerrenos[33]" :isCardActive="activeCardIndex === 33"
        :oriented="1" @toggleActive="setActiveCard(33)" :dueno="duenos[33]" :propiedades="propiedades[33]"/></div>
      <div class="property-rotate-right" id="34"><Casilla color="" title="" price="" :image="chestImage" :isCardActive="activeCardIndex === 34"
        :oriented="1" @toggleActive="setActiveCard(34)" /></div>
      <div class="property-rotate-right" id="35"><Casilla color="green" title="AV. PENNSYLVANIA" :price="preciosTerrenos[35]" :isCardActive="activeCardIndex === 35"
        :oriented="1" @toggleActive="setActiveCard(35)" :dueno="duenos[35]" :propiedades="propiedades[35]"/></div>
      <div class="property-rotate-right" id="36"><Casilla color="" title="FERROCARRÍL VÍA RÁPIDA" :price="preciosTerrenos[36]" :image="trenImage" :isCardActive="activeCardIndex === 36"
        :oriented="1" @toggleActive="setActiveCard(36)" :dueno="duenos[36]" :propiedades="propiedades[36]"/></div>
      <div class="property-rotate-right" id="37"><Casilla color="" title="" price="" :image="signoImage" :isCardActive="activeCardIndex === 37"
        :oriented="1" @toggleActive="setActiveCard(37)"/></div>
      <div class="property-rotate-right" id="38"><Casilla color="blue" title="PLAZA PARK" :price="preciosTerrenos[38]" :isCardActive="activeCardIndex === 38"
        :oriented="1" @toggleActive="setActiveCard(38)" :dueno="duenos[38]" :propiedades="propiedades[38]"/></div>
      <div class="property-rotate-right" id="39"><Casilla color="" title="IMPUESTO SOBRE POSESIONES DE LUJO - PÁGUESE $100" :price="preciosTerrenos[39]" :isCardActive="activeCardIndex === 39"
        :oriented="1" @toggleActive="setActiveCard(39)" dueno="impuesto"/></div>
      <div class="property-rotate-right" id="40"><Casilla color="blue" title="EL MUELLE" :price="preciosTerrenos[40]" :isCardActive="activeCardIndex === 40"
        :oriented="1" @toggleActive="setActiveCard(40)" :dueno="duenos[40]" :propiedades="propiedades[40]"/></div>
    </div>

    <!-- Lado inferior -->
    <div class="side bottom-side">
      <div class="property-bottom" id="10"><Casilla color="lightblue" title="AV. CONNECTICUT" :price="preciosTerrenos[10]" :isCardActive="activeCardIndex === 10"
        @toggleActive="setActiveCard(10)" :dueno="duenos[10]" :propiedades="propiedades[10]"/></div>
      <div class="property-bottom" id="9"><Casilla color="lightblue" title="AV. VERMONT" :price="preciosTerrenos[9]" :isCardActive="activeCardIndex === 9"
        @toggleActive="setActiveCard(9)" :dueno="duenos[9]" :propiedades="propiedades[9]"/></div>
      <div class="property-bottom" id="8"><Casilla color="" title="" price="" :image="signoImage" :isCardActive="activeCardIndex === 8"
        @toggleActive="setActiveCard(8)"/></div>
      <div class="property-bottom" id="7"><Casilla color="lightblue" title="AV. ORIENTAL" :price="preciosTerrenos[7]" :isCardActive="activeCardIndex === 7"
        @toggleActive="setActiveCard(7)" :dueno="duenos[7]" :propiedades="propiedades[7]"/></div>
      <div class="property-bottom" id="6"><Casilla color="" title="FERROCARRIL READING" :price="preciosTerrenos[6]" :image="trenImage" :isCardActive="activeCardIndex === 6"
        @toggleActive="setActiveCard(6)" :dueno="duenos[6]" :propiedades="propiedades[6]"/></div>
      <div class="property-bottom" id="5"><Casilla color="" title="Impuesto sobre ingreso - Páguese $200" :price="preciosTerrenos[5]" :isCardActive="activeCardIndex === 5"
        @toggleActive="setActiveCard(5)" dueno="impuesto"/></div>
      <div class="property-bottom" id="4"><Casilla color="brown" title="AV. BÁLTICA" :price="preciosTerrenos[4]" :isCardActive="activeCardIndex === 4"
        @toggleActive="setActiveCard(4)" :dueno="duenos[4]" :propiedades="propiedades[4]"/></div>
      <div class="property-bottom" id="3"><Casilla color="" title="" price="" :image="chestImage" :isCardActive="activeCardIndex === 3"
        @toggleActive="setActiveCard(3)" /></div>
      <div class="property-bottom" id="2"><Casilla color="brown" title="AV. MEDITERRÁNEO" :price="preciosTerrenos[2]" :isCardActive="activeCardIndex === 2"
        @toggleActive="setActiveCard(2)" :dueno="duenos[2]" :propiedades="propiedades[2]"/></div>
    </div>

    <!-- Lado izquierdo -->
    <div class="side left-side">
      <div class="property-rotate-left" id="20"><Casilla color="orange" title="AV. NUEVA YORK" :price="preciosTerrenos[20]" :isCardActive="activeCardIndex === 20" 
        :oriented="3" @toggleActive="setActiveCard(20)" :dueno="duenos[20]" :propiedades="propiedades[20]"/></div>
      <div class="property-rotate-left" id="19"><Casilla color="orange" title="AV. TENNESSEE" :price="preciosTerrenos[19]" :isCardActive="activeCardIndex === 19"
        :oriented="3" @toggleActive="setActiveCard(19)" :dueno="duenos[19]" :propiedades="propiedades[19]"/></div>
      <div class="property-rotate-left" id="18"><Casilla color="" title="" price="" :image="chestImage" :isCardActive="activeCardIndex === 18"
        :oriented="3" @toggleActive="setActiveCard(18)"/></div>
      <div class="property-rotate-left" id="17"><Casilla color="orange" title="PLAZA ST. JAMES" :price="preciosTerrenos[17]" :isCardActive="activeCardIndex === 17"
        :oriented="3" @toggleActive="setActiveCard(17)" :dueno="duenos[17]" :propiedades="propiedades[17]"/></div>
      <div class="property-rotate-left" id="16"><Casilla color="" title="FERROCARRIL PENSSYLVANIA" price="" :image="trenImage" :isCardActive="activeCardIndex === 16"
        :oriented="3" @toggleActive="setActiveCard(16)" :dueno="duenos[16]" :propiedades="propiedades[17]"/></div>
      <div class="property-rotate-left" id="15"><Casilla color="purple" title="AV. VIRGINIA" :price="preciosTerrenos[15]" :isCardActive="activeCardIndex === 15 "
        :oriented="3" @toggleActive="setActiveCard(15)" :dueno="duenos[15]" :propiedades="propiedades[15]"/></div>
      <div class="property-rotate-left" id="14"><Casilla color="purple" title="AV. ESTADOS" :price="preciosTerrenos[14]" :isCardActive="activeCardIndex === 14"
        :oriented="3" @toggleActive="setActiveCard(14)" :dueno="duenos[14]" :propiedades="propiedades[14]"/></div>
      <div class="property-rotate-left" id="13"><Casilla color="" title="COMPAÑÍA DE ELECTRICIDAD" :price="preciosTerrenos[13]" :image="luzImage" :isCardActive="activeCardIndex === 13"
        :oriented="3" @toggleActive="setActiveCard(13)" :dueno="duenos[13]" :propiedades="propiedades[13]"/></div>
      <div class="property-rotate-left" id="12"><Casilla color="purple" title="PLAZA SAN CARLOS" :price="preciosTerrenos[12]" :isCardActive="activeCardIndex === 12"
        :oriented="3" @toggleActive="setActiveCard(12)" :dueno="duenos[12]" :propiedades="propiedades[12]"/></div>
    </div>


    <div class="center-container">
      <div class="button-group">
        <button class="figuras-button" @click="togglePopup">Seleccionar Figuras</button>
        <button class="colores-button" @click="toggleColorPopup">Seleccionar Colores</button>
        <button class="casitas-button" @click="togglePopupCasitas">Ver Casitas</button>
      </div>
        <div class="center-logo">
            <img src="@/assets/monopolylogo.png" alt="Monopoly Logo" />
            <div class="pop-up" v-if="Popup" >
                <FigurasMonopoly @close="togglePopup() " @select="toggleSelect"  />
            </div>


            <div class="popup-casitas" v-if="mostrarPopupCasitas">
            <div class="popup-content">
                <span class="close" @click="togglePopupCasitas">&times;</span>
                <h1>Casitas</h1>
                <div class="casita-container">
                    <div class="casita-box">
                        <img class="casita" src="@/assets/casaRoja.png" alt="Casita roja" />
                        <p>Se agrega cuando el jugador posee 4 casitas verdes. Aumenta el impuesto según la propiedad (Max: 1). </p>
                    </div>
                    <div class="casita-box">
                        <img class="casita" src="@/assets/casaVerde.png" alt="Casita verde" />
                        <p>Se agrega cuando el jugador posee todas las propiedades de un cierto color. Aumenta el Impuesto según la propiedad (Max: 4).</p>
                    </div>
                </div>
            </div>              
        </div>

            
            <div class="color-popup" v-if="colorPopup">
          <div class="color-picker">
            <div v-for="color in colors" :key="color" :style="{ backgroundColor: color }" class="color-swatch" @click="selectColor(color)"></div>
          </div>
        </div>
        </div>
        <div class="ruletaDado">
            <dados @diceRolled="movePieceBasedOnDice" />
        </div>

        <div v-if="partida" class="dinero-container">
                <h1>Dinero del jugador</h1>
                <p>El jugador tiene ${{ partida.jugadores[partida.jugadores.indexOf(userName)].dinero}}</p>
            </div>
    </div>

    <!-- Ficha -->
   
        <div 
        v-for="(piece, index) in pieces" 
        :key="index" 
        class="ficha" 
        :style="piece.style" 
        @click="movePiece(index)"
    >
        <div class="figurin">
            <div v-if="Figure " >
                <img :src="Figure" alt="ficha" lass="animada"/>
            </div> <!-- Agregar variable de estado -->
          </div>
            <div class="color-circle" :style="{ backgroundColor: selectedColor }"></div>
            <div class="user-name">{{ partida.jugadores[index] }}</div>
      
        
       

    </div>
    
    <div class="gray-background"></div>
    <button class="botones" @click="goToMonopolyView2" >Ir a Monopoly View 2</button>
    <button class="botones" @click="goToMonopolyView3">Ir a Monopoly View 3</button>

  <h1></h1>

    <div>
        <button class="botones" @click="actualizarJugador">Actualizar Jugador en el Backend</button>
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>

    <div v-if="mostrarComprar" class= "comprarTerrenoDiv">
        <h1>¿Desea comprar este terreno?</h1>
        <h2>Costo: {{ preciosTerrenos[terrenoAComprar] }}</h2>
        
        <button class="botonCancelar" @click="cancelarCompra()">Cancelar</button>
        <button class="botonComprarTerreno"  @click="comprarTerreno()">Comprar Terreno</button>

    </div>
    
    <div v-if="mostrarComprarCasa" class="comprarCasaDiv">
        <h1>¿Desea comprar una casa?</h1>
        <h2>Costo: </h2>
        <button class="botonCancelar" @click="cancelarCompraCasa()">Cancelar</button>
        <button class="botonComprarCasa" @click="comprarCasa()">Comprar Casa</button>
    </div>  

</div>
    

    
  
</template>

<script>
import dados from './dados.vue';
import Casilla from '@/components/casillas.vue';
import { io } from 'socket.io-client';
import FigurasMonopoly from './FigurasMonopoly.vue';
import axios from 'axios';
import Jugador from '@/models/jugador.js';


export default {
    name: "MonopolyView",
    components: {
        dados,
        Casilla,
        FigurasMonopoly
        
    },
    data() {
        return {
            
            pieces: [],
            chestImage: null,
            grifoImage: null,
            trenImage: null,
            signoImage: null,
            luzImage: null,
            fondoImage: null,
            mostrarComprar: false,
            terrenoAComprar: null,
            mostrarComprarCasa: false,

            Jugador: new Jugador(   // Instancia de la clase Jugador
                'user3', // user
                '1', // CasillaID
                1500, // dinero
                [], // propiedades
                'token1' // tokenID
            ),
            step: 5, // Porcentaje de movimiento en cada dirección
            socket: null,
            partidaActual: null,
            Popup: false,
            Figure: null, //new URL('@/assets/hollow.png', import.meta.url).href
            activeCardIndex: null,  // Aquí se almacena el índice de la carta activa
            duenos: {}, // Aquí se almacenan los dueños de las propiedades
            propiedades: {}, // Aquí se almacenan las propiedades de los jugadores
            preciosTerrenos: {
                2: 60,
                4: 60,
                5: -200,
                7: 100,
                9: 100,
                10: 120,
                12: 140,
                14: 140,
                15: 160,
                17: 180,
                19: 180,
                20: 200,
                22: 220,
                24: 220,
                25: 240,
                27: 260,
                28: 260,
                30: 280,
                32: 300,
                33: 300,
                35: 320,
                38: 350,
                39: -100,
                40: 400
            },
            colorPopup: false,
            selectedColor: '#ffffff', // Color predeterminado
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'], // Lista de colores disponibles
            userName: localStorage.getItem('user') || sessionStorage.getItem('user') || 'Usuario', // Nombre del usuario
            mostrarPopupCasitas: false,
            partida: null,
            jugadorATirar: null,
            
        };
        
        
    },
    mounted() {
        // Conectar al servidor de WebSocket
        this.socket = io("http://localhost:9992");
        this.partidaActual = window.location.pathname.split('/').pop();
        // Unirse a la partida
        this.socket.emit("joinPartida", this.partidaActual);
        console.log("Partida actual: " + this.partidaActual);
        this.cargarJugadores(this.partidaActual);
        // Escuchar cuando otro usuario mueve una ficha
        this.socket.on("movimientoGenerado", (data) => {
            const { ficha, indice, usuario } = data;
            this.pieces[indice] = ficha;
            console.log(`Ficha ${indice} movida a la posición ${ficha.currentPosition} por el usuario ${usuario}`); 
            this.actualizarJugador();
            
            this.$nextTick(() => {
                this.$refs.ficha.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });

        import('@/assets/Chest.png')
        .then((module) => {
          this.chestImage = module.default; // Asigna la imagen a la variable
          this.signoImage = module.default;
          this.trenImage = module.default;
          this.grifoImage = module.default;
          this.fondoImage = module.default;
        })
        .catch((err) => {
          console.error("Error al cargar la imagen: ", err);
        });

        import('@/assets/signo.png')
        .then((module) => {
          this.signoImage = module.default;
        })
        .catch((err) => {
          console.error("Error al cargar la imagen: ", err);
        });

        import('@/assets/tren.png')
        .then((module) => {
          this.trenImage = module.default;
        })
        .catch((err) => {
          console.error("Error al cargar la imagen: ", err);
        });

        import('@/assets/grifo.png')
        .then((module) => {
          this.grifoImage = module.default;
        })
        .catch((err) => {
          console.error("Error al cargar la imagen: ", err);
        });

        import('@/assets/Luz.gif')
        .then((module) => {
          this.luzImage = module.default;
        })
        .catch((err) => {
          console.error("Error al cargar la imagen: ", err);
        });
        import('@/assets/fondo.jpg')
        .then((module) => {
          this.fondoImage = module.default;
        })
        .catch((err) => {
          console.error("Error al cargar la imagen: ", err);
        });
         // Escuchar cuando otro usuario selecciona una figura
         this.socket.on("figuraSeleccionada", (data) => {
            const { figura, usuario } = data;
            this.Figure = figura;
            console.log(`Figura seleccionada por el usuario ${usuario}: ${figura}`);
        });

        // Escuchar cuando otro usuario selecciona un color
    this.socket.on("colorSeleccionado", (data) => {
      const { color, usuario } = data;
      this.selectedColor = color;
      console.log(`Color seleccionado por el usuario ${usuario}: ${color}`);
    });
      // Escuchar cuando otro usuario selecciona un nombre
      this.socket.on("nombreSeleccionado", (data) => {
      const { nombre, usuario } = data;
      this.userName = nombre;
      console.log(`Nombre seleccionado por el usuario ${usuario}: ${nombre}`);
    });

        this.socket.on("terrenoComprado", (data) => {
            const { terreno, usuario } = data;
            this.duenos[terreno] = usuario;
            this.propiedades[terreno] = [];
            console.log(`Terreno ${terreno} comprado por el usuario ${usuario}`);
        });
        
        this.socket.on("casaComprada", (data) => {
            const { terreno, usuario } = data;
            if(usuario != this.userName){
                this.propiedades[terreno].push(usuario);
            }
            console.log(`Casa comprada en el terreno ${terreno} por el usuario ${usuario}`);
        });
        this.socket.on("ultimoTurno", (data) => {
          const { user } = data;
          if(user == this.userName){
            const siguiente = this.partida.jugadores.indexOf(user) + 1;
            console.log(`El siguiente jugador es ${this.partida.jugadores[siguiente]}`);
            if(siguiente >= this.partida.jugadores.length){
              this.socket.emit("tirarDado", { actual: this.partida.jugadores[0], partida: this.partidaActual });
            }
            else{
              this.socket.emit("tirarDado", { actual: this.partida.jugadores[siguiente], partida: this.partidaActual });
            }
          }

        });
    },


   
// Método para obtener el índice del jugador actual

    methods: {
        cargarJugadores(nombrePartida) {
            axios.get(`http://localhost:9992/partida/${nombrePartida}`)
                .then(({ data }) => {
                    this.partida = data;
                    console.log(this.partida.jugadores);
                    
                    
                    for (let i = 0; i < this.partida.jugadores.length; i++) {
                        this.asignarFicha(this.partida.jugadores[i]);
                    }
                    const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
                    console.log("Usuario: " + usuario);
                    this.piezajugador = this.partida.jugadores.indexOf(usuario);
                    const actual = this.partida.jugadores[0];
                    this.socket.emit("tirarDado", { actual: actual, partida: nombrePartida });
                    
                })
                .catch((error) => {
                    console.error("Error al cargar los jugadores:", error);
                });
        },

        togglePopupCasitas() {
        this.mostrarPopupCasitas = !this.mostrarPopupCasitas;
    },
        movePiece(index) {
            const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
            const playerIndex = this.partida.jugadores.indexOf(usuario);
            if (index === playerIndex) {
                // Lógica para mover la ficha del jugador actual
                this.movePieceBasedOnDice(this.step);
            }
        },
        asignarFicha(player) {
        // Crear una ficha para el jugador
            const ficha = {
                currentPosition: 1, 
                style: {
                top: '1900px',
                left: '1850px',
                transform: 'translate(-50%, -50%)'
                },
                Figure: player.tokenID
            };
            this.pieces.push(ficha);
            },
            
        
        

        
        

        
        


        // Mover la ficha según los pasos dados
        movePieceBasedOnDice(steps) {
            console.log("Aqui esta jugadores: " + this.piezajugador);      
            const promises = [];
            const indice = this.piezajugador; // Jugador actual
            let position = this.pieces[indice].currentPosition || 0; // Posición actual de la ficha
            const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
            let dineroPorInicio = false;
            for (let i = 1; i <= steps; i++) {
              promises.push(new Promise((resolve) => {
                setTimeout(() => {
                    let nuevaPosicion = (position + 1) % 40; // Asegurarse de que no se pase de las 40 casillas
                    if(position + 1 >= 40){
                      dineroPorInicio = true;
                    }
                    position = nuevaPosicion;
                    this.pieces[indice].currentPosition = position;
                    
                      // Determinar la nueva casilla
                      const casillaId = this.getCasillaIdFromPosition(position);
                      this.movePieceToCasilla(casillaId);
                      resolve();
                  }, i * 10); // 300ms de pausa entre cada movimiento, ajustable para la velocidad de la animación
              }));
            }
            if(dineroPorInicio){
              const playerIndex = this.partida.jugadores.indexOf(usuario);
              this.partida.jugadores[playerIndex].dinero += 200; //dinero por pasar por la casilla de salida
            }
            

            Promise.all(promises).then(() => {
              const posicionFicha = this.pieces[indice].currentPosition;
              this.terrenoAComprar = posicionFicha;
              if(posicionFicha == 3 || posicionFicha == 5 || posicionFicha == 8 || posicionFicha == 11 || posicionFicha == 18 || posicionFicha == 21 
                || posicionFicha == 23 || posicionFicha == 31 || posicionFicha == 34 || posicionFicha == 37 || posicionFicha == 39){
                return;
              }
              
              
              if(this.duenos[posicionFicha] == null){
                this.mostrarComprar = true;
                console.log(`Ficha movida ${this.terrenoAComprar}`);
              }
              else if(this.duenos[posicionFicha] == usuario){
                this.mostrarComprarCasa = true;
                console.log(`Ficha movida ${this.terrenoAComprar}`);
              }
              else if(this.duenos[posicionFicha] != usuario){
                console.log(`Debe pagar al dueño de la propiedad`);
                const playerIndex = this.partida.jugadores.indexOf(usuario);
                const dueñoIndex = this.partida.jugadores.indexOf(this.duenos[posicionFicha]);
                this.partida.jugadores[dueñoIndex].dinero += 10;
                this.partida.jugadores[playerIndex].dinero -= 10;
                console.log(`El jugador ${usuario} paga 10 al jugador ${this.duenos[posicionFicha]}`);
                this.actualizarJugador();
                console.log(`Dinero del jugador ${usuario}: ${this.partida.jugadores[playerIndex].dinero}`);

              }
              else if(this.duenos[posicionFicha] == "impuesto"){
                const playerIndex = this.partida.jugadores.indexOf(usuario);
                this.partida.jugadores[playerIndex].dinero -= this.preciosTerrenos[posicionFicha];
                console.log(`Descuenta ${this.preciosTerrenos[posicionFicha]} al jugador ${usuario}`)
              }
            });
        },

        // Método adicional para mover la ficha a la casilla específica
        movePieceToCasilla(casillaId) {
            const indice = this.piezajugador;
            const casillaElement = document.getElementById(casillaId);
            if (casillaElement) {
                const rect = casillaElement.getBoundingClientRect();

                // Ajustar las coordenadas de la ficha
                this.pieces[indice].style = {
                    top: `${rect.top + window.scrollY}px`, // Añadir scrollY para corregir si hay desplazamiento de la página
                    left: `${rect.left + window.scrollX}px`, // Añadir scrollX para corregir si hay desplazamiento de la página
                    transform: 'translate(-50%, -50%)' // Mantener la ficha centrada
                };
                const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
                this.socket.emit("moverFicha", {ficha: this.pieces[indice],indice: indice,usuario: usuario, partida: this.partidaActual});
            }
        },

        // Método para obtener el ID de la casilla basado en la posición de la ficha
        getCasillaIdFromPosition(position) {
            
            return position;
        },


         // Método para navegar a la vista FigurasMonopoly
         irAFiguras() {
            this.$router.push({ name: 'FigurasMonopoly' }); //cambiar a logica de popup
        },
        
        goToMonopolyView2() {
            this.$router.push({ name: 'MonopolyView2' });
        },

        goToMonopolyView3() {
            this.$router.push({ name: 'MonopolyView3' });
        },
        togglePopup() {
        this.Popup = !this.Popup;
        },
        toggleColorPopup() {
      this.colorPopup = !this.colorPopup;
    },

        async toggleSelect(figurename) {
            try {
            // Verificación antes de construir la URL
            if (!figurename) {
            console.error("El nombre de la figura es inválido.");
            return;
            }

            // Importación dinámica de la imagen
            const image = await import(`@/assets/${figurename}.png`);
            this.Figure = image.default || image;
            this.Popup = false;

              // Emitir evento de WebSocket
              const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
                this.socket.emit("seleccionarFigura", { figura: this.Figure, usuario: usuario, partida: this.partidaActual });
                console.log("Evento seleccionarFigura emitido", { figura: this.Figure, usuario: usuario, partida: this.partidaActual }); // Verificación de emisión

            // Consola para verificar valores
            console.log("Figure URL: " + this.Figure); // Debería mostrar la URL correcta de la imagen
            console.log("Figure name: " + figurename);
            console.log("Figure name type: " + typeof(this.Figure));

        } catch (error) {
            console.error("Error cargando la imagen: ", error);
        }

        
        },

        setActiveCard(index) {
          if (this.activeCardIndex === index) {
            this.activeCardIndex = null;
          } else {
            this.activeCardIndex = index;
            if(this.duenos[index] == null){
              this.terrenoAComprar = index;
              this.mostrarComprar = true;
            }
            else{
              this.terrenoAComprar = index;
              this.mostrarComprarCasa = true;

            }
           
          }
        },
        cancelarCompra() {
          this.mostrarComprar = false;
        },
        comprarTerreno() {
          const selectedId = this.terrenoAComprar;
          const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
          this.duenos[selectedId] = usuario;
          console.log(`Propiedad ${selectedId} comprada por ${usuario}`);
          this.propiedades[selectedId] = [];
          this.mostrarComprar = false;
          console.log(`El jugador ${usuario} paga ${this.preciosTerrenos[selectedId]}`)
          this.socket.emit("comprarTerreno", { terreno: selectedId, usuario: usuario, partida: this.partidaActual });
        },
        cancelarCompraCasa() {
          this.mostrarComprarCasa = false;
        },
        comprarCasa() {
          const selectedId = this.terrenoAComprar;
          const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
          this.propiedades[selectedId].push("casa");
          console.log(`Casa comprada en ${selectedId} por ${usuario}`);
          this.mostrarComprarCasa = false;
          console.log(`El jugador ${usuario} paga 10`)
          this.socket.emit("comprarCasa", { terreno: selectedId, usuario: usuario, partida: this.partidaActual });
        },
        selectColor(color) {
          this.selectedColor = color;
          this.colorPopup = false;

          const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
          this.socket.emit("seleccionarColor", { color: this.selectedColor, usuario: usuario, partida: this.partidaActual });
          console.log("Evento seleccionarColor emitido", { color: this.selectedColor, usuario: usuario, partida: this.partidaActual });
        },

    async actualizarJugador() {
        try {
            

            const respuesta = await axios.put('http://localhost:9992/api/jugador', {
                userSchema: localStorage.getItem('user') || sessionStorage.getItem('user'), // Incluye el ID del usuario en la solicitud
                CasillaID: this.Jugador.CasillaID,
                dinero: this.Jugador.dinero,
                propiedades: this.Jugador.propiedades,
                tokenID: this.Jugador.tokenID
            });
            this.mensaje = respuesta.data.message;
        } catch (error) {
            console.error("Error en la solicitud de actualización:", error);
            this.mensaje = 'Error al actualizar el jugador';
        }
    }




    }
};
</script>

<style scoped>


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
}

.center-container {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    z-index: 2; 
    position: relative; 
    grid-column: 5 / span 3; 
    grid-row: 4 / span 2; 
    background-color: #cfe2f3;
    margin-block: 5%;
    padding: 5vw; 
    border-radius: 15px; 
}

.button-group {
    display: flex;
    gap: 10px; 
    margin-bottom: 10px;
}

.monopoly-board {
    display: grid;
    grid-template-columns: 230px repeat(9, 170px) 230px;
    grid-template-rows: 230px repeat(9, 170px) 230px;
    width: auto;
    height: auto;
    background-image: url('@/assets/fondo.jpg'); 
    background-size: 200rem;
    background-repeat: no-repeat; 
    background-position: left; 
    background-position-x: -90rem;
    border: 2px solid black;
    padding: 0;
    margin: 0;
    gap: 0;
    box-sizing: border-box;
}

.corner, .property-top, .property-bottom, .property-rotate-right, .property-rotate-left {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}

/* Ajustes para que las casillas mantengan proporciones al redimensionar */
/* Logo centrado */
.center-logo {
    grid-column: 5 / span 3;
    grid-row: 4 / span 2; /* Coloca el logo un poco más arriba */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; /* Asegura que el logo esté sobre otros elementos */
}

.center-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

/* Ruleta y dado */
.ruletaDado {
    grid-column: 5 / span 3;
    grid-row: 6 / span 2; /* Coloca los dados debajo del logo */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    z-index: 1; /* Coloca los dados debajo del logo */
    margin-top: 20px; /* Ajusta el espacio entre logo y dados */
}






/* Esquinas cuadradas */
.corner {
    background-color: lightgray;
    border: 2px solid black;
    width: 230px;
    height: 230px;
    box-sizing: border-box;
}

.top-left {
    grid-column: 1;
    grid-row: 1;
}

.top-right {
    grid-column: 11;
    grid-row: 1;
}

.bottom-left {
    grid-column: 1;
    grid-row: 11;
}

.bottom-right {
    grid-column: 11;
    grid-row: 11;
}

/* Lados del tablero */
.side {
    display: grid;
    padding: 0;
    margin: 0;
    gap: 0;
}

.top-side {
  grid-column: 2 / span 9;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(9, 170px); /* Ajusta el tamaño para que coincida con las esquinas */
  justify-items: stretch;
  align-items: center; /* Alinea el contenido de las casillas */
}


.bottom-side {
  grid-column: 2 / span 9; /* Se asegura que las casillas ocupen 9 columnas */
  grid-row: 11; /* Ajusta la fila inferior del tablero */
  display: grid;
  grid-template-columns: repeat(9, 170px); /* Asegura que las casillas tengan el tamaño adecuado */
  justify-items: stretch;
  align-items: center; /* Alinea el contenido de las casillas */
}


.right-side,
.left-side {
    grid-row: 2 / span 9;
    display: grid;
    grid-template-rows: repeat(9, 170px);
    /* Asegura que las casillas coincidan con las esquinas */
    justify-items: stretch;
    align-items: center;
    /* Asegura que las casillas laterales estén alineadas con las esquinas */
    z-index: 1;
}

.right-side {
    grid-column: 11;
    margin-left: 28px;
    z-index: 1;
    /* Mueve hacia la derecha */
}

.left-side {
    grid-column: 1;
    margin-left: 33px;
    /* Mueve hacia la derecha */
}

/* Casillas con tamaño fijo */
.property-rotate-right,
.property-rotate-left {
    width: 170px;
    height: 170px;
    background-color: lightgray;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.property-top {
  transform: rotate(180deg); /* Casillas superiores mirando hacia abajo */
  width: 170px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border: 1px solid lightgray;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.property-bottom {
  width: 170px;
  height: 170px;
  background-color: lightgray;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}



.property-rotate-right {
    transform: rotate(-90deg);
    /* Casillas laterales derechas mirando hacia la izquierda */
}

.property-rotate-left {
    transform: rotate(90deg);
    /* Casillas laterales izquierdas mirando hacia la derecha */
}



/* Ficha */
.ficha {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 96px;
    width: 96px;
    animation: rotate_3922 20s linear infinite;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
    transform-origin: center;
    transition: top 0.5s ease, left 0.5s ease, transform 0.5s ease;
    z-index: 1;
    /* Añadido */
}

.ficha::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: #fff;
    border: solid 5px #ffffff;
    border-radius: 50%;
    z-index: -1;
}

@keyframes rotate_3922 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}



.contendor {
    display: flex;
    justify-content: center;
    align-items: center;
    /* tamaño del tablero */
    width: 100vw;
    height: 100%;
}



.figuras-button, .colores-button, .casitas-button {
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    color: #F8E8A0;
    cursor: pointer;
    padding: 8px 15px;
    width: 9rem;
}

.figuras-button:hover, .colores-button:hover, .casitas-button:hover {
    background-color: #8a1616c2;
}

.ficha-imagen {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -1; /* Colocar la imagen por encima de la ficha base */
}
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 3;
}


.policia {
    width: 60%;
    height: 60%;
    rotate: 10deg;
}

.letrapolicia1 {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.letrapolicia2 {
    font-family: 'Roboto Monos', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.Start {
    width: 60%;
    height: 60%;
}

.LetraInicio {
    font-family: 'Roboto Mono', sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    margin-right: 15%;
    margin-top: 18%;
    transform: rotate(-50deg);
    color: #ff0000;
}

.parking {
    width: 100%;
    height: 100%;
    rotate: 10deg;
}

.carcel {
    width: 90%;
    height: 90%;
    rotate: 45deg;
    margin-left: 24%;
    margin-top: 4%;
}

.carceletra1 {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.gray-background {
    background-color: lightgray;
    grid-column: 1 / span 11;
    grid-row: 1 / span 11;
    pointer-events: none;
    z-index: -1;
}

.figurin {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -20px;
    left: 0;
    border-radius: 50%;
    z-index: 10;
 
}

.mago {
  width: 100px; /* Ajusta el ancho de la imagen del mago */
  height: 100px; /* Ajusta la altura de la imagen del mago */
  border-radius: 10px; /* Ajusta el radio de los bordes si es necesario */
}

.botones{
  border: 1px solid #F8E8A0;
  border-radius: 10px;
  color: #F8E8A0;
}

.comprarTerrenoDiv{
    position: absolute;
    top: 1400px;
    left: 700px;
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    padding: 20px;
    z-index: 10;
}

.botonCancelar{
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
}

.botonComprarTerreno{
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
}

.comprarCasaDiv{
    position: absolute;
    top: 1400px;
    left: 700px;
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    padding: 20px;
    z-index: 10;
}

.botonCancelar{
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
}

.botonComprarCasa{
    background-color: #9c1616c2;
    color: white;
    border: 1px solid #F8E8A0;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
}

.color-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  
}
.color-swatch {
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  cursor: pointer;
  
}
.color-popup {
  position: absolute;
  top: -100px; /* Ajusta según sea necesario */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 20;
}
.color-circle {
  position: absolute;
  top: 10px; /* Ajusta según sea necesario */
  left: 50%;
  transform: translateX(-50%);
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 2px solid #000;
  z-index: 1; /* Asegúrate de que el círculo de color esté por encima de la ficha */
}
.user-name {
  margin-top: -50px;
  font-size: 20px;
  color: #000;
}

.popup-casitas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 80%;
    max-width: 600px;
    max-height: 80%;
    overflow-y: auto;
    text-align: center;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
}

.casita-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.casita-box {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 100%;
    max-width: 300px;
    text-align: center;
}

.casita {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}

.dinero-container {
    position: absolute;
    top: 700px;
    right: 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
}

</style>
