<template>
  <div class="add-blog">
   <h2>添加博客</h2>
   <form action="" v-if="!submited">
       <label > 博客标题：</label>
       <input type="text" v-model="blog.title" required>
       <label > 博客内容：</label>
       <textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>

       <div id="checkboxs">
           <label for=""> vue.js</label>
           <input type="checkbox" value="vue.js" v-model="blog.categories">
           <label for=""> node.js</label>
           <input type="checkbox" value="node.js" v-model="blog.categories">
           <label for=""> react.js</label>
           <input type="checkbox" value="react.js" v-model="blog.categories">
           <label for=""> angular.js</label>
           <input type="checkbox" value="angular.js" v-model="blog.categories">
       </div>

       <label for="">作者</label>
       <select v-model="blog.author">
           <option  v-for=" aut in authors">{{aut}}</option>
       </select>

       <button @click.prevent="postit">添加博客</button>

       
   </form>
   <div v-if="submited"><h3>添加成功</h3></div>
   <hr>
   <div id="preview">
       <h3>博客总览</h3>
       <p>博客标题：{{blog.title}}</p>
       <p>博客内容：</p>
       <p>{{blog.content}}</p>
       <p>博客分类</p>
       <ul>
           <li v-for="cate in blog.categories">
               {{cate}}
           </li>
       </ul>
       <p>作者:{{blog.author}}</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
        blog:{
            title:"",
            content:"",
            categories:[],
            author:""
        },
        authors:["asd","rfv","nbxchv"],
        submited:false
    }
  },
  methods: {
      postit:function(){
          this.$http.post("http://jsonplaceholder.typicode.com/posts",{
              title:this.blog.title,
              body:this.blog.content,
              userId:1
          })
          .then(function(data){
              console.log(data);
              this.submited=true;
          })
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-blog *{
        box-sizing: border-box;

    }
    .add-blog {
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;

    }
    label{
        display: block;
        margin: 20px 0 10px;

    }
    input[type="text"],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;

    }
    textarea{
        height: 200px;
    }
    #checkboxs label{
        display: inline-block;
        margin-top: 0;

    }
    #checkboxs input{
        display: inline-block;
        margin-right: 10px;
        
    }
    button{
        display: block;
        margin: 20px 0;
        background: greenyellow;
        color: azure;
        border: 0;
        border-radius: 4px;
        font-size: 18px;
        padding: 14px;
        cursor: pointer;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted gray;
        margin: 30px 0;

    }
    h3{
        margin-top: 10px;
    }
</style>
