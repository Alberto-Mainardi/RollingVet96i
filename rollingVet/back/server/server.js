const express = require("express");
const cors = require("cors");
const dbConnection = require("../database/config");

class Server {
    constructor(){
        this.app = express();
        this.port = 8080;
        this.rutaPacientes = "/api/pacientes";

        this.conectarDb();
        this.middlewares();
        this.rutas();
    }
    async conectarDb(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
    }
    rutas(){
        this.app.use(this.rutaPacientes , require("../routes/pacientes"));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor está activo en el puerto:",this.port);
        })
    }
}

module.exports = Server