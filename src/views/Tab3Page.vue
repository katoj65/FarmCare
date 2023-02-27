<template>
<ion-page style="background:#E8F6F3;">
<ion-header>
<ion-toolbar>
<ion-title style="color:white; font-family: 'Gill Sans', sans-serif;font-size:20px;font-weight:bold;">{{ title }} </ion-title>
</ion-toolbar>
</ion-header>
<ion-content :fullscreen="true" style="background:#148F77; color:white; font-family: 'Gill Sans', sans-serif;">
<ion-header collapse="condense" style="background:#148F77; color:white; font-family: 'Gill Sans', sans-serif;">
<ion-toolbar>
<ion-title size="large">
{{ title }}
</ion-title>
</ion-toolbar>
</ion-header>
<div style="background:#E8F6F3; font-family: 'Gill Sans', sans-serif;min-height:100%;">






<ion-list lines="full">
<ion-item style="font-size:20px;" v-for="m in menu" :key="m.id">
<ion-label><ion-icon :icon="chevronForwardOutline"></ion-icon>
<span style="margin-left:10px;text-transform:capitalize;">
{{ m.name }}
</span>
</ion-label>
</ion-item>


<ion-item style="font-size:20px;" @click="logout()">
<ion-label><ion-icon :icon="chevronForwardOutline"></ion-icon>
<span style="margin-left:10px;text-transform:capitalize;">
Logout
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonLabel, IonList, IonIcon } from '@ionic/vue';
import { chevronForwardOutline} from 'ionicons/icons';

export default defineComponent({
name: 'Tab3Page',
components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
IonItem, IonLabel, IonList, IonIcon



},
data(){return{
title:'User Profile',
menu:[
{id:1,name:'User Details',url:''},
{id:2,name:'Change Password',url:''},
{id:3,name:'Delete Account',url:''},


],



}},

setup(){return{
chevronForwardOutline,


}},

methods:{
logout(){
localStorage.clear();
document.location.href = '/';
}

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