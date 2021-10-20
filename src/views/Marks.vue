<template>
<Layout name="LayoutDefault">
    <div>
        <h1 style="margin-bottom:50px;">Marks</h1><br>
        <b-button style=" float:left; margin-bottom:20px;" class="btn  btn-warning" v-b-modal.modal-prevent-closing>Create Marks</b-button>

        <div class="mt-3">
            <ul class="mb-0 pl-3">  
            </ul>
        </div>
        <b-modal id="modal-prevent-closing" hide-footer ref="modal" title="Enter Your Details">
            <form ref="form" @submit="handleSubmit">
                <b-form-group label="mark Type" label-for="markType" invalid-feedback="mark Type is required">
                    <b-form-input v-model="markType" id="markType" required></b-form-input>
 
                </b-form-group>
                <b-form-group label="mark Average" label-for="markAverage" invalid-feedback="mark Average is required">
                    <b-form-input v-model="markAverage" id="markAverage" required></b-form-input>

                </b-form-group>
                <b-form-group label=" student Id" label-for=" studentId" invalid-feedback=" student Id is required">
                    <b-form-input v-model=" studentId" id=" studentId" required></b-form-input>
                </b-form-group>
               
            
                <button style="margin-top:50px;" class="btn btn-primary">Register Student</button>
            </form>
        </b-modal>
        <table>
            <thead>
                <tr>
                    <th>mark Id</th>
                    <th>markAverage</th>
                    <th> studentId</th>
                    <th> markType</th>
                    <th> Action</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for='user in users' :key="user.markID">

                    <td>{{ user.markID }}</td>
                    <td>{{ user.markAverage }}</td>
                    <td>{{ user.studentId }}</td>
                    <td>{{ user.markType }}</td>
                    <td><button class="btn btn-primary" v-b-modal="'my-modal'">Edit</button> <button class="btn btn-danger" @click="deleteUser(user.markID)">Delete</button></td>
                </tr>
            </tbody>
        </table>

        <b-modal id="my-modal" hide-footer title="Udpadte Your Details">

            <form ref="form" @submit="UpdateUser(user.studentId)">
                    <b-form-group label="Student Name" label-for="markType" invalid-feedback="mark Type is required">
                    <b-form-input v-model="markType" id="markType" required></b-form-input>
 
                </b-form-group>
                <b-form-group label="mark Average" label-for="markAverage" invalid-feedback="mark Average is required">
                    <b-form-input v-model="markAverage" id="markAverage" required></b-form-input>

                </b-form-group>
                <b-form-group label=" student Id" label-for=" studentId" invalid-feedback=" student Id is required">
                    <b-form-input v-model=" studentId" id=" studentId" required></b-form-input>
                </b-form-group>
                <button style="margin-top:50px;" type="submit" class="btn btn-primary">update Student</button>
            </form>
        </b-modal>

    </div>
</Layout>
</template>

<style>
table {
    width: 100%;
    border: 1px solid rgb(223, 174, 116);
}

table thead {
    border: 1px solid rgb(240, 233, 224);
    border-bottom: 1px solid rgb(226, 184, 132);
}

.table td {
    border: 1px solid rgb(243, 173, 81);
    border-bottom: 1px solid rgb(243, 173, 81);
}
</style>

<script>
import Layout from '@/layouts/Layout'
import axios from 'axios'
export default {
    components: {
        Layout
    },
    data() {
        return {
            users: [],
             arkType:"",
             markAverage:"",
             studentId:"",
        }
    },
    mounted() {
        axios.get('http://localhost:8080/marks/list').then((res) => {
            this.users = res.data,
                console.log(res.data)

        })
    },
    methods: {
        getData() {
            axios.get('http://localhost:8080/marks/list').then((res) => {
                this.users = res.data,
                    console.log(res.data)

            })
        },
        handleSubmit() {

            let formData = {

             markType:this.markType,
             markAverage:this.markAverage,
             studentId:this.studentId,

            }
            console.log(formData),
                axios.post('http://localhost:8080/marks/create', formData)
                .then(res => (this.formData = res.data)).then(() => {
                    this.getData()
                }).
            catch(error => console.log(error.message))
        },

        deleteUser(id) {
            axios.delete("http://localhost:8080/marks/" + id)
                .then(() => {
                    this.getData();
                });
        },
        UpdateUser(id) {
            axios.put("http://localhost:8080/marks/" + id)
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error)
                })
        },

    }

}
</script>
