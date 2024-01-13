<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button @click="deleteData(item.name)" class="delete-button">Delete</button>
          </td>
        </tr>
         <tr>
          <td><input v-model="newItem.name" placeholder="Enter Name" /></td>
          <td><input v-model="newItem.description" placeholder="Enter Description" /></td>
          <td>
            <button @click="addNewRow" class="add-button">Add</button>
          </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
       newItem: {
        name: '',
        description: '',
        },
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
    async deleteData(name) {
      try {
        await axios.delete(`http://localhost:3000/api/data/${name}`);
        console.log('Row deleted successfully');
        // Optionally, refresh the data after deletion
        this.fetchData();
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    },
     async addNewRow() {
      try {
        await axios.post('http://localhost:3000/addData', this.newItem);
        console.log('Row added successfully');
        // Optionally, refresh the data after addition
        this.fetchData();
        // Clear input fields after adding a new row
        this.newItem.name = '';
        this.newItem.description = '';
      } catch (error) {
        console.error('Error adding data:', error);
      }
    },
  },
};
</script>

<style>
.data-table {
  max-width: 800px;
  margin: 20px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>
