<template>
<farm-profile :title="title">
<ion-card :style="'margin:-2px;height:0;'">
<ion-card-header>
<ion-card-subtitle style="font-size:20px;text-transform:capitalize;margin-bottom:10px;">
</ion-card-subtitle>
</ion-card-header>
<ion-card-content>
</ion-card-content>
</ion-card>
<ion-item lines="none">


<ion-chip :outline="true" style="font-size:16px;background:white;border:solid thin #F2F3F4;width:45%;text-align:center;" @click="nav('/tabs/farm-manager/'+url)">
<ion-icon :icon="callOutline" style="margin-right:10px;"></ion-icon>
Manager</ion-chip>


<ion-chip :outline="true" style="font-size:16px;background:white;border:solid thin #F2F3F4;width:45%;text-align:center;" @click="nav('/tabs/farm-doctor/'+url)">
<ion-icon :icon="callOutline" style="margin-right:10px;"></ion-icon> Doctor</ion-chip>
</ion-item>

<div style="margin:10px;padding-bottom:200px;">




















<ion-item button v-for="n in farm_menu" :key="n" style="margin-bottom:10px;border-radius:10px;border:none;" lines="none" :href="n.url+url">
<ion-label>
<h2 style="font-size:17px;font-weight:bold;">
<ion-icon :icon="n.icon" style="margin-right:10px;"></ion-icon>{{ n.name }}
 </h2>
<p>{{ n.description }} </p>
</ion-label>
</ion-item>
</div>
<ion-fab style="position:fixed;bottom:0;right:0;margin-bottom:20px;margin-right:20px;">
<ion-fab-button  @click="farm_details()" style="--background:#148F77;">
<ion-icon :icon="add"></ion-icon>
</ion-fab-button>
</ion-fab>
</farm-profile>
</template>

<script>
import { add, calendarOutline, callOutline,locationOutline, medkitOutline,clipboardOutline } from 'ionicons/icons';
import FarmProfile from '../shared/FarmProfile.vue'
import {IonCard, IonCardContent, IonCardHeader,
IonCardSubtitle, IonFab,
IonFabButton, IonIcon,
IonItem, IonLabel,
IonChip,



} from '@ionic/vue';
export default {
setup(){
return{
add, callOutline,
calendarOutline,
medkitOutline,
clipboardOutline
}
},
components:{
FarmProfile,
IonCard,
IonCardContent,
IonCardHeader,
IonCardSubtitle,
IonFab,
IonFabButton,
IonIcon,
IonItem,
IonLabel,
IonChip,

},
data(){return{

url:null,

title:'Farm Details',
response:{
name:null,
location:null,
id:null

},

farm_menu:[],




}},

methods:{
get(){

let path=this.$route.fullPath;
let path_split=path.split('/');
let segment=path_split[3];
this.url=segment;

this.axios.get('https://standbypromotersltd.com/api/farm/'+segment)
.then(response =>{
let item=response.data.response;
this.response.name=item.name;
this.response.location=item.location;
this.response.id=item.id;
this.title=item.name.toUpperCase();
this.farm_menu=[

{name:item.location,description:item.count_animals>1?item.count_animals+' Animals available at the farm ':item.count_animals+' Aminal available at the farm',icon:locationOutline,url:'/tabs/show-animals/'},
{name:'Farm Activity Schedules',description:'Scheduled activities',icon:calendarOutline,url:'/tabs/show-animals/'},
{name:'Aminal Health Infomation',description:'All animals are in good health',icon:medkitOutline,url:'/tabs/show-animals/'},
{name:'Feeding Information',description:'Aminal feeds are soon deplited',icon:clipboardOutline,url:'/tabs/show-animals/'},
{name:'Breeding Information',description:'200 Calves were born in december 2021',icon:clipboardOutline,url:'/tabs/show-animals/'}


];

})
.catch(error=>{
alert('Check your network connection');
});
},


//
farm_details(){
this.$store.state.farm={name:this.response.name,id:this.response.id};
this.$router.push('/tabs/animal-form');
},

//
navigate(url){
this.$router.push(url+url);
},

nav(item){
this.$router.push(item);
}




},
mounted(){
this.get();

}


}
</script>
<style scoped>
ion-item{
--border-color:none;
}
.bg-item{


}
</style>