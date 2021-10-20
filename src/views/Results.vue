<template>
<Layout name="LayoutDefault">
    <div v-for='user in users' :key="user.studentId">
        <h1 style="margin-bottom:50px;">Results</h1><br>
        <b-button style=" float:left; margin-bottom:20px;" class="btn  btn-warning" v-b-modal.modal-prevent-closing>Add Results</b-button>

        <div class="mt-3">
            <ul class="mb-0 pl-3">
            </ul>
        </div>
       <b-modal id="modal-prevent-closing" hide-footer ref="modal" title="Enter Your Details">
            <form ref="form" @submit="handleSubmit">
                <b-form-group label="Results Description" label-for="result-desc" invalid-feedback="Student Name is required">
                    <b-form-input v-model="resultsDesc" id="result-desc" required></b-form-input>

                </b-form-group>
                <b-form-group label="Results Type" label-for="result-type" invalid-feedback="student number is required">
                    <b-form-input v-model="resultsType" id="student-number" required></b-form-input>

                </b-form-group>
                 
                <b-form-group label="student Number" label-for="studentNumber" invalid-feedback="student number is required">
                    <b-form-input v-model="studentNumber" id="studentNumber" required></b-form-input>

                </b-form-group>
                
                <button style="margin-top:50px;" class="btn btn-primary">Record</button>
            </form>
        </b-modal>
        <table>
            <thead>
                <tr>
                    <th>Result Id</th>
                    <th>Student Number</th>
                    <th>Result description</th>
                    <th>Result type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='user in users' :key="user.resultId">
               
                    <td>{{ user.resultsId }}</td>
                    <td>{{ user.studentNumber }}</td>
                    <td>{{ user.resultsDesc }}</td>
                    <td>{{ user.resultsType }}</td>
                    <td><button class="btn btn-primary" v-b-modal="'my-modal'">Edit</button> <button class="btn btn-danger" @click="deleteUser(user.resultsId)">Delete</button></td>
                </tr>
           </tbody>
        </table>

        <b-modal id="my-modal" hide-footer title="Udpadte Your Details">

            <form ref="form" @submit="UpdateUser(user.studentId)">
                
                <b-form-group label="resuls description" label-for="result-desc" invalid-feedback="Results Description is required">
                    <b-form-input v-model="ResultsDesc" id="result-desc" required></b-form-input>

                </b-form-group>
                <b-form-group label="Result Type" label-for="result-type" invalid-feedback="Result Type is required">
                    <b-form-input v-model="ResultsType" id="result-type" required></b-form-input>

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

table th {
  border: 1px solid rgb(243, 173, 81);
    border-bottom: 1px solid rgb(243, 173, 81);
    margin-left: 20px;
    margin-right: 20px;
}

table td {
    border: 1px solid rgb(243, 173, 81);
    border-bottom: 1px solid rgb(243, 173, 81);
    margin-left: 20px;
    margin-right: 20px;
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
            resultsDesc: "",
            resultsType: "",
            studentNumber: "",
          
        }
    },
    mounted() {
        axios.get('http://localhost:8080/results/list').then((res) => {
            this.users = res.data,
                console.log(res.data)

        })
    },
    methods: {
        getData() {
            axios.get('http://localhost:8080/results/list').then((res) => {
                this.users = res.data,
                    console.log(res.data)

            })
        },
        handleSubmit() {

            let formData = {
            resultsDesc: this.resultsDesc,
            resultsType: this.resultsType,
           studentNumber: this.studentNumber,

            }
            console.log(formData),
                axios.post('http://localhost:8080/results/create', formData)
                .then(res => (this.formData = res.data)).then(() => {
                    this.getData()
                }).
            catch(error => console.log(error.message))
        },

        deleteUser(id) {
            axios.delete("http://localhost:8080/results/" + id)
                .then(() => {
                    this.getData();
                });
        },
        UpdateUser(id) {
            axios.put("http://localhost:8080/results/" + id)
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error)
                })
        },

    }

}
</script>
