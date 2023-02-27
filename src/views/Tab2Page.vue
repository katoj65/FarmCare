<template>
<ion-page style="background:#E8F6F3;">
<ion-header style="color:white; font-family: 'Gill Sans', sans-serif;font-size:20px;font-weight:bold;">
  <ion-toolbar>
    <ion-title style="color:white; font-family: 'Gill Sans', sans-serif;font-size:20px;font-weight:bold;">{{ title }} </ion-title>
  </ion-toolbar>
</ion-header>
<ion-content :fullscreen="true" style="background:#148F77; color:white; font-family: 'Gill Sans', sans-serif;">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">{{ title }}</ion-title>
    </ion-toolbar>

  </ion-header>

<div style="background:#E8F6F3; font-family: 'Gill Sans', sans-serif;min-height:100%;padding-top:1px;">
<div style="text-align:center;" v-if="isLoading==true">
<ion-spinner name="crescent"></ion-spinner>
</div>

<ion-list :inset="true" style="margin:-5px;" v-if="isLoading==false">
<ion-item v-for="m in menu" :key="m.id" :href="m.url">
<ion-label style="font-size:20px;">
<ion-icon :icon="chevronForwardOutline"></ion-icon>
<span style="margin-left:10px;text-transform:capitalize;">
{{ m.name }}
</span>
</ion-label>
</ion-item>
</ion-list>

</div>

</ion-content>
</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonIcon, IonSpinner } from '@ionic/vue';
import { chevronForwardOutline} from 'ionicons/icons';

export default defineComponent({
name: 'Tab2Page',
components: {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonPage ,
IonItem,
IonLabel,
IonList,
IonIcon,
IonSpinner
  },
data(){return{
title:'Farm Services',
response:null,
isLoading:false,
menu:[
{id:1,name:'Farms',url:'/tabs/farms'},
{id:2,name:'Veterinary Services',url:'/tabs/vet'},
{id:3,name:'Animal Drugs',url:'/tabs/drugs'},
{id:4,name:'Animal Feeds',url:'/tabs/feeds'},
{id:5,name:'Animal Breeds',url:'/tabs/breeds'},



],

}},

setup(){return{
chevronForwardOutline
}},


methods:{
farms(){
this.isLoading=true;
this.axios
.post('https://standbypromotersltd.com/api/farms',{
id:this.$store.state.user
})
.then(response =>{
this.isLoading=false;
this.response=response.data.farms;
})
.catch(error=>{
alert(error);
});
},

//
nav(item){
this.$$router.pust({name:'farm',params:{item}});
}










},






mounted(){
// this.farms();
}






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