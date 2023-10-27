<template>
    <h2>Personas</h2>
    <table>
        <thead>
            <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="persona in personas" :key="persona._id">
                <td>{{persona.cedula}}</td>
                <td>{{persona.nombre}}</td>
                <td>{{persona.email}}</td>
                <td>{{persona.edad}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
import Global from '../Global'

export default {
    name: 'dataBlog',
    mounted(){
        this.getPersonas();
    },
    data(){
        return {
            url: Global.url,
            personas: {}
        }
    },
    methods: {
        getPersonas(){
            axios.get(this.url+'personas')
                .then(res => {
                    if(res.data.status == 'success'){
                        this.personas = res.data.personas;
                        console.log(this.personas)
                    }
                })
        }
    }
}
</script>

<style scoped>
 table {
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
 }

 th, td {
    border: 1px solid black;
    padding: 8px;
 }

 th {
    background-color: #f2f2f2;
 }
</style>