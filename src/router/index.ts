import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import RegisterFarm from '../views/RegisterFarm.vue';
import FarmPage from '../views/FarmPage.vue';
import FarmProfile from '../views/FarmProfile.vue';
import AnimalPage from '../views/AnimalPage.vue';
import AddAnimal from '../views/AddAnimal.vue';
import ShowAnimals from '../views/ShowAnimals.vue';
import FarmProfilePage from '../views/FarmProfilePage.vue';
import AnimalProfile from '../views/AnimalProfile.vue';
import SettingsPage from '../views/SettingsPage.vue';
import FarmsPage from '../views/FarmsPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import FarmListPage from '../views/FarmListPage.vue';
import FarmManagerPage from '../views/FarmManagerPage.vue';
import NotificationPage from '../views/NotificationPage.vue';
import RecordsPage from '../views/RecordsPage.vue';
import InventoryPage from '../views/InventoryPage.vue';
import SchedulesPage from '../views/SchedulesPage.vue';
import FarmDoctor from '../views/FarmDoctor.vue';
import FarmDoctorPage from '../views/FarmDoctorPage.vue';

const routes: Array<RouteRecordRaw> = [

{
path: '/',
redirect: '/tabs/tab1'
},
{
path: '/tabs/',
component: TabsPage,
children: [
{
path: '',
redirect: '/tabs/tab1'
},
{
path: 'tab1',
component: () => import('@/views/Tab1Page.vue')
},
{
path: 'tab2',
component: () => import('@/views/Tab2Page.vue')
},
{
path: 'tab3',
component: () => import('@/views/Tab3Page.vue')
},
{
path:'animal',
component:AnimalPage
},
{
path:'/tabs/animal-form',
component:AddAnimal
},
{
path:'/tabs/show-animals/:id',
component:ShowAnimals

},
{
path:'/tabs/farm/:id',
component:FarmProfilePage
},
{
path:'/tabs/animal/:id',
component:AnimalProfile
},
{
path:'/tabs/settings',
component:SettingsPage,
},
{
path:'/tabs/farms',
component:FarmsPage
},

{
path:'/tabs/vet',
component:FarmsPage
},
{
path:'/tabs/drugs',
component:FarmsPage
},
{
path:'/tabs/feeds',
component:FarmsPage
},
{
path:'/tabs/breeds',
component:FarmsPage
},
{
path:'/tabs/farm-list',
component:FarmListPage
},
{
path:'/tabs/farm-manager/:id',
component:FarmManagerPage
},
{
path:'/tabs/notification',
component:NotificationPage
},
{
path:'/tabs/records',
component:RecordsPage
},
{
  path:'/tabs/inventory',
  component:InventoryPage
},
{
path:'/tabs/schedules',
component:SchedulesPage
},
{
 path:'/tabs/doctor',
 component:FarmDoctor
},
{
path:'/tabs/farm-doctor/:id',
component:FarmDoctorPage



}










]
},
{
path:'/register-farm',
name:'farm-register',
component:RegisterFarm
},
{
path:'/farm/:id',
name:'farm',
component:FarmPage
},
{
path:'/farm-profile/:id',
name:'farm_profile',
component:FarmProfile
},
{
path:'/register',
component:RegisterPage,
name:'register-user'

}
















]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router
