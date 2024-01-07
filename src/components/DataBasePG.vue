// src/components/YourComponent.vue
<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        this.data = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
