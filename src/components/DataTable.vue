<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Hala</th>
          <th>AGV</th>
          <th>Problem</th>
          <th>Solution</th>
          <!-- Add more columns as needed based on your data structure -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in jsonData" :key="row.date">
          <td>{{ row.date }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.hala }}</td>
          <td>{{ row.agv }}</td>
          <td>{{ row.problem }}</td>
          <td>{{ row.solve }}</td>
          <!-- Add more cells based on your data structure -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: [
        { date: '6.01.2024', name: 'John Doe', hala: 'M1', agv: '059', problem: 'Safety', solve: 'Clear scanner' },
        { date: '6.01.2024', name: 'Jane Smith', hala: 'M2', agv: '061', problem: 'Production', solve: 'Adjust machine settings' },
        { date: '6.01.2024', name: 'Bob Johnson', hala: 'M3', agv: '072', problem: 'Quality Control', solve: 'Inspect and retest products' },
        { date: '6.01.2024', name: 'Emily Davis', hala: 'M1', agv: '055', problem: 'Maintenance', solve: 'Replace worn-out parts' },
        { date: '6.01.2024', name: 'Alex Turner', hala: 'M2', agv: '068', problem: 'Logistics', solve: 'Optimize warehouse layout' },
        { date: '6.01.2024', name: 'Sophie Miller', hala: 'M3', agv: '077', problem: 'Communication', solve: 'Enhance team coordination' },
        // Add more data objects based on your Excel data structure
      ],
    };
  },
};
</script>

<style>
/* Add your styling here */
.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

td {
  background-color: #f8f8f8;
}

th {
  background-color: #e0e0e0;
  font-weight: bold;
}
</style>
