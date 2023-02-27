<template>
<farm-profile :title="title">
<ion-card :style="'margin:-2px;background-image:url('+'../../images/bg1.jpg'+');background-size:cover;background-color:white;height:150px;background-position:100% 100%'">
<ion-card-header>
<!-- <ion-card-title style="text-transform:uppercase;margin-bottom:20px;">
{{ response.name }}
</ion-card-title> -->

<!-- <img :src="'../../images/bg.png'"/> -->


<ion-card-subtitle style="font-size:20px;text-transform:capitalize;margin-bottom:10px;">
</ion-card-subtitle>
</ion-card-header>
<ion-card-content>

<!-- <ion-chip :outline="true" style="font-size:16px;background:white;border:none;">Farm Manager</ion-chip>
<ion-chip :outline="true" style="font-size:16px;background:white;border:none;">Farm Doctor</ion-chip> -->


</ion-card-content>
</ion-card>
<ion-item lines="none">


<!-- <ion-label>
<h2 style="font-weight:bold;font-size:18px;">Farm Details</h2>
</ion-label>
 -->


<ion-chip :outline="true" style="font-size:16px;background:white;border:solid thin #F2F3F4;width:45%;text-align:center;">
<ion-icon :icon="callOutline" style="margin-right:10px;"></ion-icon>
Manager</ion-chip>
<ion-chip :outline="true" style="font-size:16px;background:white;border:solid thin #F2F3F4;width:45%;text-align:center;">
<ion-icon :icon="callOutline" style="margin-right:10px;"></ion-icon> Doctor</ion-chip>






</ion-item>





<div style="margin:10px;padding-bottom:200px;">

<!-- <ion-item  v-for="n in 50" :key="n" style="margin-bottom:10px;border-radius:5px;border:none;">
<ion-label>
<h1>H1 Heading</h1>
<p>Paragraph</p>
</ion-label>
</ion-item> -->


<ion-item button v-for="n in farm_menu" :key="n" style="margin-bottom:10px;border-radius:10px;border:none;" lines="none" @click="navigate('/tabs/show-animals/')">
<ion-label>
<h2 style="font-size:17px;font-weight:bold;">
<ion-icon :icon="n.icon" style="margin-right:10px;"></ion-icon>{{ n.name }}
 </h2>
<p>{{ n.description }} </p>
</ion-label>
</ion-item>
</div>



<ion-fab style="position:fixed;bottom:0;right:0;margin-bottom:20px;margin-right:20px;">
<ion-fab-button color="success" @click="farm_details()">
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
//IonCardTitle,
IonFab,
IonFabButton,
IonIcon,
IonItem,
IonLabel,
IonChip,

},
data(){return{
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
this.axios
.post('https://standbypromotersltd.com/api/last-accesed-farm',{
id:this.$store.state.user,
})
.then(response =>{
let item=response.data.response;
this.response.name=item.name;
this.response.location=item.location;
this.response.id=item.id;
this.title=item.name.toUpperCase();
this.farm_menu=[

{name:item.location,description:item.count_animals>1?item.count_animals+' Animals available at the farm ':item.count_animals+' Aminal available at the farm',icon:locationOutline},
{name:'Farm Activity Schedules',description:'Scheduled activities',icon:calendarOutline},
{name:'Aminal Health Infomation',description:'All animals are in good health',icon:medkitOutline},
{name:'Feeding Information',description:'Aminal feeds are soon deplited',icon:clipboardOutline},
{name:'Breeding Information',description:'200 Calves were born in december 2021',icon:clipboardOutline}


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
this.$router.push(url+this.$store.state.farm.id);
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