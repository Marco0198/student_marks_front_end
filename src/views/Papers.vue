<template>
<Layout name="LayoutDefault">
    <div>
     <!--  <h1 style="margin-bottom:50px;">Papers</h1><br>
        <b-button style=" float:left; margin-bottom:20px;" class="btn  btn-warning" v-b-modal.modal-prevent-closing>Create paper</b-button>

        <div class="mt-3">
            <ul class="mb-0 pl-3">
            </ul>
        </div>
        <b-modal id="modal-prevent-closing" hide-footer ref="modal" title="Enter Your Details">
            <form ref="form" @submit="handleSubmit">
                <b-form-group label="Paper Name" label-for="Paper-Number" invalid-feedback="Paper Number Name is required">
                    <b-form-input v-model="paper-name" id="Paper-Number" required></b-form-input>

                </b-form-group>
                <b-form-group label="Student Number" label-for="student-number" invalid-feedback="student number is required">
                    <b-form-input v-model="studentNumber" id="student-number" required></b-form-input>

                </b-form-group>
                <b-form-group label="Phone Number" label-for="Phone-number" invalid-feedback="phone number is required">
                    <b-form-input v-model="studentPhoneNumber" id="Phone-number" required></b-form-input>

                </b-form-group>
                <b-form-group label="student Email" label-for="student-email" invalid-feedback="student email is required">
                    <b-form-input type="email" v-model="studentEmail" id="name-input" required></b-form-input>

                </b-form-group>
                <b-form-group label="Student Password " label-for="Student-password" invalid-feedback="student Password  is required">
                    <b-form-input type="password" v-model="studentPassword" id="Student-password" required></b-form-input>

                </b-form-group>
                <b-form-group label="Student address " label-for="Student-address" invalid-feedback="student address  is required">
                    <b-form-input v-model="studentAddress" id="Student-address" required></b-form-input>

                </b-form-group>
                <button style="margin-top:50px;" class="btn btn-primary">Register Student</button>
            </form>
        </b-modal>
        <table>
            <thead>
                <tr>
                    <th>Paper Number</th>
                    <th>Student Name</th>
                    <th> Paper subject</th>
                    <th> Marks decription</th>
                   
                    <th> marks</th>
                    <th> Student number</th>
                    <th> Action</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for='user in users' :key="user.paper_Id">
                      <td>{{ user.paper_Id }}</td>
                    <td>{{ user.paper_examId }}</td>
                    <td>{{ user.paper_subject }}</td>
                    <td>{{ user.paper_time }}</td>
                    <td>{{ user.paper_name }}</td>
                    <td>{{ user.paper_type }}</td>
                    <td><button class="btn btn-primary" v-b-modal="'my-modal'">Edit</button> <button class="btn btn-danger" @click="deleteUser(user.paper_Id)">Delete</button></td>
                </tr>
            </tbody>
        </table>

        <b-modal id="my-modal" hide-footer title="Udpadte Your Details">

            <form ref="form" @submit="UpdateUser(user.studentId)">
                <b-form-group label="Student Name" label-for="Student-Name-input" invalid-feedback="Student Name is required">
                    <b-form-input v-model="studentName" id="Student-Name-input" required></b-form-input>

                </b-form-group>
                <b-form-group label="Student Number" label-for="student-number" invalid-feedback="student number is required">
                    <b-form-input v-model="studentNumber" id="student-number" required></b-form-input>

                </b-form-group>
                <b-form-group label="Phone Number" label-for="Phone-number" invalid-feedback="phone number is required">
                    <b-form-input v-model="studentPhoneNumber" id="Phone-number" required></b-form-input>

                </b-form-group>
                <b-form-group label="student Email" label-for="student-email" invalid-feedback="student email is required">
                    <b-form-input type="email" v-model="studentEmail" id="name-input" required></b-form-input>

                </b-form-group>
                <b-form-group label="Student Password " label-for="Student-password" invalid-feedback="student Password  is required">
                    <b-form-input v-model="studentPassword" id="Student-password" required></b-form-input>

                </b-form-group>
                <b-form-group label="Student address " label-for="Student-address" invalid-feedback="student address  is required">
                    <b-form-input v-model="studentAddress" id="Student-address" required></b-form-input>

                </b-form-group>
                <button style="margin-top:50px;" type="submit" class="btn btn-primary">update Student</button>
            </form>
        </b-modal>
-->
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
  paper_examId:"",
  paper_subject:"",
  paper_time:"",
  paper_name:"",
  paper_type:"",
 
  
        }
    },
    mounted() {
        axios.get('http://localhost:8080/paper/list').then((res) => {
            this.users = res.data,
                console.log(res.data)

        })
    },
    methods: {
        getData() {
            axios.get('http://localhost:8080/paper/list').then((res) => {
                this.users = res.data,
                    console.log(res.data)

            })
        },
        handleSubmit() {

            let formData = {

                studentNumber: this.studentNumber,
                studentName: this.studentName,
                studentPhoneNumber: this.studentPhoneNumber,
                studentEmail: this.studentEmail,
                studentPassword: this.studentPassword,
                studentAddress: this.studentAddress

            }
            console.log(formData),
                axios.post('http://localhost:8080/paper/create', formData)
                .then(res => (this.formData = res.data)).then(() => {
                    this.getData()
                }).
            catch(error => console.log(error.message))
        },

        deleteUser(id) {
            axios.delete("http://localhost:8080/paper/" + id)
                .then(() => {
                    this.getData();
                });
        },
        UpdateUser(id) {
            axios.put("http://localhost:8080/paper/" + id)
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error)
                })
        },

    }

}
</script>
