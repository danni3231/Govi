class Logica{

    constructor(){

        this.infoCanciones=[];
        this.infoSplit=[];
        this.usuarios=[];
        this.canciones=[]

    }

    cargarInfoCanciones(){
        this.infoCanciones = loadStrings("./src/data/infoCanciones.txt");
    }

    cargarImagenDeCancion(){



    }

    cargarAudioDeCancion(){



    }

    agregarCancion(){
        for(let i=0 ; i<this.infoCanciones.length ; i++){
            this.infoSplit =this.infoCanciones[i].split(",");
            this.canciones.push( new Cancion(this.infoSplit[0],this.infoSplit[1],this.infoSplit[2],this.infoSplit[3],this.infoSplit[4],this.infoSplit[5],null));
            console.log(this.canciones);
        }
    }

    crearCuenta(){



    }

    iniciarSesion(){


    }

    cerrarSesion(){

        
    }


}