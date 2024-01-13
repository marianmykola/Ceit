
import { createWebHistory, createRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import DataTable from '../components/DataTable.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import DataBasePG from '../components/DataBasePG.vue';
import AddData from '../components/AddData.vue';



const routes = [
  {
  path: '/',
  component: LoginForm
  },
   {
    path: '/register',
    component: RegistrationForm,
  },
  { path: '/data', component: DataTable, meta: { requiresAuth: true } },

  { path: '/add', component: AddData, meta: { requiresAuth: true } },
  { path: '/dataPG', component: DataBasePG, meta: { requiresAuth: true } },

]


const router = createRouter({
    history: createWebHistory(),
  routes,
})

export default router
