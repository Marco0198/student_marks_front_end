<template>
<Layout name="LayoutDefault">
    <div>
        <h1 style="margin-bottom:50px;">Examination Subject</h1><br>
        <b-button style=" float:left; margin-bottom:20px;" class="btn  btn-warning" v-b-modal.modal-prevent-closing>Create subject</b-button>

        <div class="mt-3">
            <ul class="mb-0 pl-3">
            </ul>
        </div>
        <b-modal id="modal-prevent-closing" hide-footer ref="modal" title="Enter Your Details">
            <form ref="form" @submit="handleSubmit">
                <b-form-group label="subjectCode" label-for="subjectCode" invalid-feedback="subjectCode is required">
                    <b-form-input v-model="subjectCode" id="subjectCode" required></b-form-input>

                </b-form-group>
                <b-form-group label="subject Name" label-for="subjectName" invalid-feedback="subject Name is required">
                    <b-form-input v-model="subjectName" id="subjectName" required></b-form-input>

               </b-form-group>
                <button style="margin-top:50px;" class="btn btn-primary">Register Student</button>
            </form>
        </b-modal>
        <table>
            <thead>
                <tr>
                    <th>subject Id</th>
                    <th>subject code</th>
                    <th> subject Name</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='user in users' :key="user.subjectId">
                    <td>{{ user.subjectId }}</td>
                     <td>{{ user.subjectCode }}</td>
                    <td>{{ user.subjectName }}</td>
                    <td><button class="btn btn-primary" v-b-modal="'my-modal'">Edit</button> <button class="btn btn-danger" @click="deleteUser(user.subjectId)">Delete</button></td>
                </tr>
            </tbody>
        </table>

        <b-modal id="my-modal" hide-footer title="Udpadte Your Details">

            <form ref="form" @submit="UpdateUser(user.studentId)">
                  <b-form-group label="exam Date" label-for="examDate" invalid-feedback="exam Date is required">
                    <b-form-input v-model="examDate" id="examDate" required></b-form-input>

                </b-form-group>
                <b-form-group label="exam Name" label-for="examName" invalid-feedback="exam Name is required">
                    <b-form-input v-model="examName" id="examName" required></b-form-input>

                </b-form-group>
                <b-form-group label="examType" label-for="examType" invalid-feedback="exam Type is required">
                    <b-form-input v-model="examType" id="examType" required></b-form-input>
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
  subjectName:"",
  subjectCode:""
        }
    },
    mounted() {
        axios.get('http://localhost:8080/subject/list').then((res) => {
            this.users = res.data,
                console.log(res.data)

        })
    },
    methods: {
        getData() {
            axios.get('http://localhost:8080/subject/list').then((res) => {
                this.users = res.data,
                    console.log(res.data)

            })
        },
        handleSubmit() {

            let formData = {

     subjectName:this.subjectName,
     subjectCode:this.subjectCode

            }
            console.log(formData),
                axios.post('http://localhost:8080/subject/create', formData)
                .then(res => (this.formData = res.data)).then(() => {
                    this.getData()
                }).
            catch(error => console.log(error.message))
        },

        deleteUser(id) {
            axios.delete("http://localhost:8080/subject/" + id)
                .then(() => {
                    this.getData();
                });
        },
        UpdateUser(id) {
            axios.put("http://localhost:8080/subject/" + id)
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error)
                })
        },

    }

}
</script>
