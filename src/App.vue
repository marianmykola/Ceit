<template>
<div class="l">

<router-link class="fs" to="/">Login</router-link>
</div>
<div class="r">
<router-link to="/register">Register</router-link>
</div>
<div class="d">
<router-link to="/data">Data</router-link>
</div>
<div class="d">
<router-link to="/dataPG">DataPG</router-link>
</div>
<router-view></router-view>

</template>
<script>

</script>
<style>

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
 body{
background-color: #0fffff;
}
.l, .r, .d{
text-align: center;
font-size: 1.4em;
font-weight: bold;
margin: 10px;
}


</style>
