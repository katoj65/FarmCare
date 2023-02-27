<template>
<ion-page style="background:#E8F6F3;">
<ion-header>
<ion-toolbar>
<ion-title style="color:white; font-family: 'Gill Sans', sans-serif;font-size:20px;font-weight:bold;">{{ title }} </ion-title>
<ion-buttons slot="end">
<ion-button style="color:white;font-weight:bold;" href="/register-farm"> <ion-icon :icon="addOutline" style="font-weight:bold;"></ion-icon>Farm</ion-button>
</ion-buttons>
</ion-toolbar>
</ion-header>
<ion-content :fullscreen="true" style="background:#148F77; color:white; font-family: 'Gill Sans', sans-serif;">
<ion-header collapse="condense" style="background:#148F77; color:white; font-family: 'Gill Sans', sans-serif;">
<ion-toolbar>
<ion-title size="large">{{ title }} </ion-title>
</ion-toolbar>
</ion-header>


<div style="background:#E8F6F3;  font-family: 'Gill Sans', sans-serif;min-height:100%;padding-top:10px;">



<div v-if="isLoading==true" style="text-align:center;padding:10px;">
<ion-spinner></ion-spinner>
</div>



<ion-grid>
<ion-row>
<ion-col v-for="m in menu" :key="m.tag" size="6" style="text-align:center;padding:15px;">
<div style="height:120px;text-align:center;padding:20px;" @click="nav(m.url)">
<div style="text-align:center;height:80px;">
<!-- <ion-icon :icon="m.icon" style="font-size:50px;"/> -->
<span style="background:white;padding:30px;border-radius:130px;padding-top:45px;padding-bottom:35px;border:solid thin #A3E4D7;">
<img :src="m.icon" style="width:35px;"/>
</span>
</div>
<div style="text-transform:capitalize;color:#0E6251;padding-bottom:10px;padding-top:0px;">
{{ m.name }}
</div>
</div>
</ion-col>
</ion-row>
</ion-grid>



</div>
</ion-content>
</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/vue';
import { ellipse, square, triangle, addOutline } from 'ionicons/icons';
export default  defineComponent({
name: 'Tab1Page',
components: {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonPage,
IonButtons,
IonButton,
IonGrid,
IonRow,
IonCol,
IonSpinner,



  },
setup(){return{
ellipse,
square,
triangle,
addOutline,



}},
data(){
  return{
title:'MOST CARE',
isLoading:false,
menu:[
{name:'Farm Animals',icon:'../../icons/cow1.png',tag:'animal',url:'/tabs/farm-list'},
{name:'Notifications',icon:'../../icons/email.png',tag:'notification',url:'/tabs/notification'},
{name:'Farm Records',icon:'../../icons/records.png',tag:'records',url:'/tabs/records'},
{name:'Farm Doctor',icon:'../../icons/doctor.png',tag:'doctor',url:'/tabs/doctor'},
{name:'Schedules',icon:'../../icons/schedule.png',tag:'schedule',url:'/tabs/schedules'},
{name:'Inventory',icon:'../../icons/inventory.png',tag:'inventory',url:'/tabs/inventory'}
],

userID:null,
response:null,



}},

methods:{

//
nav(item){

this.$router.push(item);

//end animal
},





//get information
get(){
this.axios.post('https://standbypromotersltd.com/api/get-latest-farm',
{id:this.$store.state.user}).then(response =>{
this.response=response.data.response.farmID;
this.isLoading=false;
})
.catch(error=>{
alert('Check your internet connectivity.');
});
},

//navigate
navigation(url){
this.$router.push(url+this.response);
},





},



mounted(){
this.userID=this.$store.state.user;
},

// computed(){
// this.get();
// }




});






</script>
<style scoped>
.bg1{
background:#148F77;
color:white;
font-family: "Gill Sans", sans-serif;
}


ion-header{
--background:#148F77;
}

ion-toolbar {
--background:#148F77;
font-size: 30px;
font-weight:bold;
}
</style>