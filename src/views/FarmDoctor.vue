<template>
<page-layout :title='title' style="padding:0;">

  <ion-card style="margin:-10px;">
    <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>

    <!-- <ion-button fill="clear">Action 1</ion-button>
    <ion-button fill="clear">Action 2</ion-button> -->
  </ion-card>











</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { addCircleOutline, pricetagOutline} from 'ionicons/icons';


export default {
components:{
PageLayout,
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle


},
data(){return{
title:'Farm Doctor',





}},
setup(){return{
addCircleOutline,
pricetagOutline



}},

// methods:{








// },




}
</script>

<style scoped>
.background{
background:#148F77;
padding:15px;
}
h1, .h1{
text-align:center;
font-size:35px;
font-weight:bolder;
font-family: "Gill Sans", sans-serif;
color: white;


}
p{
text-align: center;
font-size: 22px;
}

.bg1{
background:#148F77;
color:white;
font-size:18px;
padding:10px;
font-family: "Gill Sans", sans-serif;
}

ion-button{
--background:#0B5345;
--padding-end:50px;
--padding-start:50px;
--padding-top:20px;
--padding-bottom:20px;
}

ion-input{
--border-radius:0px;
}
ion-item{
--border-radius:10px;
}

ion-item{
margin-bottom:10px;
}
ion-input{
padding:10px;
}

</style>