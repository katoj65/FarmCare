<template>
<ion-page>
<ion-header>
<ion-toolbar>
<ion-title style="color:white; font-family: 'Gill Sans', sans-serif;font-size:20px;font-weight:bold;">{{ title }} </ion-title>
</ion-toolbar>
<span>

</span>
</ion-header>
<ion-content :fullscreen="true" style="color:white; font-family: 'Gill Sans', sans-serif;">
<div style="background:#E8F6F3;  font-family: 'Gill Sans', sans-serif;min-height:100%;">
<slot></slot>
</div>
</ion-content>
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
export default {
components:{
IonPage, IonHeader, IonToolbar, IonTitle, IonContent




},
props:{
title:{},

},
}
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