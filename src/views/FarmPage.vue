<template>
<page-layout :title='title.toUpperCase()'>
<div style="margin-top:-10px;padding-top:10px;">
<div style="text-align:center" v-if="isLoading==true">
  <ion-spinner name="crescent"></ion-spinner>
</div>
<div v-else>
<ion-card style="box-shadow:none;margin:0;margin-bottom:10px;border-radius:0;" >
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
<ion-card-header>
<ion-card-title style="text-transform:capitalize;">
{{ farm_profile.location }}
</ion-card-title>
<ion-card-subtitle style="text-transform:capitalize;">Farm Manager Details </ion-card-subtitle>
</ion-card-header>
<ion-card-content>
<span></span>
<span style="font-size:15px;font-weight:bold;text-transform:capitalize;">
<ion-icon :icon="personOutline" style="margin-right:5px;"></ion-icon>
{{ farm_profile.firstname }} {{ farm_profile.lastname }}
</span>
</ion-card-content>
</ion-card>
<!-- {{ farm_profile }} -->
<ion-list :inset="true" style="margin:0px;">
    <ion-item>
      <ion-label style="font-size:25px;"> <ion-icon :icon="callOutline" style="margin-right:15px;"></ion-icon>  {{ farm_profile.tel }} </ion-label>
    </ion-item>
    <ion-item>
      <ion-label style="font-size:20px;"><ion-icon :icon="mailOutline" style="margin-right:15px;"></ion-icon> {{ farm_profile.email }} </ion-label>
    </ion-item>
    <ion-item>
      <ion-label  style="font-size:20px;"> <ion-icon :icon="addCircleOutline" style="margin-right:15px;"></ion-icon>Add Animals Details</ion-label>
    </ion-item>
    <ion-item>
      <ion-label  style="font-size:20px;"><ion-icon :icon="personAddOutline" style="margin-right:15px;"></ion-icon> Add Farm Doctor</ion-label>
    </ion-item>
    <ion-item>
      <ion-label  style="font-size:20px;"><ion-icon :icon="briefcaseOutline" style="margin-right:15px;"></ion-icon>Add Farm Records</ion-label>
    </ion-item>
     <ion-item>
      <ion-label  style="font-size:20px;text-align:center">Continue</ion-label>
    </ion-item>
  </ion-list>







</div>

</div>
</page-layout>
</template>

<script>
import { callOutline, mailOutline, personOutline, personAddOutline,addCircleOutline,briefcaseOutline } from 'ionicons/icons';
import PageLayout from '../shared/PageLayout.vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonSpinner } from '@ionic/vue';
export default {
components:{
PageLayout,
IonCard,
 IonCardContent,
 IonCardHeader,
 IonCardSubtitle,
 IonCardTitle,
 IonItem,
 IonLabel,
 IonList,
 IonSpinner
},

data(){return{
isLoading:false,
title:'Farm',
farm_profile:{
name:null,


},

}},

setup(){return{
callOutline ,
mailOutline,
personOutline,
personAddOutline,
addCircleOutline,
briefcaseOutline


}},


methods:{
farm(){
this.isLoading=true;
this.axios
.post('https://standbypromotersltd.com/api/farm',{
id:this.$route.params.id})
.then(response =>{
this.isLoading=false;
this.farm_profile.name=response.data.farm.name;
this.farm_profile.location=response.data.farm.location;
this.farm_profile.firstname=response.data.farm.firstname;
this.farm_profile.lastname=response.data.farm.lastname;
this.farm_profile.email=response.data.farm.email;
this.farm_profile.tel=response.data.farm.tel;
this.title=response.data.farm.name;
}).catch(error=>{
alert('Please check your internet connection');
});


},




},
mounted(){
this.farm();
}

}
</script>