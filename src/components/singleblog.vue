<template>
    <div id="singleblog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default {
    name:"singleblog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{

            }
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function (data) {
            // console.log(data)
            this.blog=data.body;

          })
    }
}
</script>
<style scoped>
    #singleblog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eeeeee;
        border: 1px dotted #aaaaaa;
    }
</style>