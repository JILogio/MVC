<template>
        <div class="form">
            <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="cedula">Cedula:</label>
                <input type="text" id="cedula" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="correo">Correo:</label>
                <input type="email" id="email" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                <label for="edad">Edad:</label>
                <input type="number" id="edad" required />
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
    validations: {
        edad: {
            number: true, max: 90
        }
    },
    data(){
        return {
        url: Global.url,
        /*user: {
            cedula: '',
            nombre: '',
            email: '',
            edad: ''
            }*/
        persona: new Paciente('','','','')
        }
    },
    mounted(){
        console.log(this.persona)
    },
    methods:{
        handleSubmit(){
            console.log(this.persona)

            axios.post(this.url+'save',this.user)
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