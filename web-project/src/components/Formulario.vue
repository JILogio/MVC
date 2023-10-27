<template>
        <div class="form">
            <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="cedula">Cedula:</label>
                <input type="text" id="cedula" v-model="persona.cedula" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" v-model="persona.nombre" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="correo">Correo:</label>
                <input type="email" id="email" v-model="persona.email" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="edad">Edad:</label>
                <input type="number" id="edad" v-model="persona.edad"/>
                </div>
            </div>
            <button type="submit">Enviar</button>
            </form>
        </div>
</template>

<script>
import Global from '../Global';
import axios from 'axios';
import Paciente from '../models/Persona'

export default{
    name: 'formularioRegistro',
    data(){
        return {
        url: Global.url,
        persona: new Paciente('','','','')
        }
    },
    mounted(){
        console.log(this.persona)
    },
    methods:{
        handleSubmit(){
            console.log(this.persona)

            axios.post(this.url+'save/'+this.persona)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style>
.form {
    text-align: center;
    padding: 20px;
}

.row {
    margin: 20px;
}

</style>