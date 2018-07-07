<template>

    <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="Sex">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
 import axios from 'axios';
    export default {
        data(){
            return {
                formData:{
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            handleAdd(){
                axios
                    .post('http://localhost:3000/heroes',this.formData)
                    .then((res)=>{
                        const {status,data} = res;
                        if(status === 201){
                            this.$router.push({name:'heroes'})
                        } else {
                            alert('添加失败')
                        }
                    })
            }
        }
    };
</script>

<style>
    
</style>
