<template>
  <div id="app">
    <!-- <addblog/>
    <showblogs/> -->
    <blogheader></blogheader>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import addblog from './components/addblog'
import ShowBlogs from './components/ShowBlogs'
import blogheaders from './components/blogheader'
export default {
  name: 'App',
  components: {
    'addblog':addblog,
    'showblogs':ShowBlogs,
    'blogheader':blogheaders
  }
}
</script>

<style>

</style>
