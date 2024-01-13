<template>
  <div>
    <h2>Add Data to PostgreSQL</h2>
    <form @submit.prevent="addData">
      <label for="name">Name:</label>
      <input v-model="name" type="text" required />

      <label for="description">Description:</label>
      <textarea v-model="description" required></textarea>

      <button type="submit">Add Data</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
    };
  },
  methods: {
    addData() {
       console.log("Data to be sent:", this.name, this.description);// Send data to the server
      this.$axios
        .post('http://localhost:3000/addData', {
          name: this.name,
          description: this.description,
        })
        .then((response) => {
          console.log('Data added successfully:', response.data);
          // Optionally, reset form fields after successful submission
          this.name = '';
          this.description = '';
        })
        .catch((error) => {
          console.error('Error adding data:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
h2 {
  color: #333;
}
form {
  max-width: 400px;
  margin: 20px auto;
}
label {
  display: block;
  margin-bottom: 8px;
}
input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
</style>
