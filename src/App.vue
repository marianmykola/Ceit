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
<div class="d">
<router-link to="/add">Add</router-link>
</div>
<router-view></router-view>

</template>
<script>

</script>
<style>

#app {


}
 body{
background-color: #0fffffff;
}
.l, .r, .d{
text-align: center;
font-size: 1.4em;
font-weight: bold;
margin: 10px;
}


</style>
