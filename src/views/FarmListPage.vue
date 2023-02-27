<template>
<page-layout :title='$store.state.farm!=null?$store.state.farm.name.toUpperCase():title'>
<div v-if="isLoading==false">
<ion-list v-if="response.length>0">
<ion-item v-for="r in response" :key="r.id" :href="'/tabs/farm/'+r.id">
<ion-label style="text-transform:capitalize;">{{ r.name }} </ion-label>
<ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
</ion-item>
</ion-list>

<div v-else>No farm has been registered</div>
</div>
<div v-else style="padding:20px;text-align:center;">
<ion-spinner></ion-spinner>
</div>
</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import {IonItem, IonLabel, IonList, IonSpinner, IonIcon } from '@ionic/vue';
import { chevronForwardOutline} from 'ionicons/icons';



export default {
components:{
PageLayout,
IonItem,
IonLabel,
IonList,
IonSpinner,
IonIcon,


},
data(){return{
title:'My Farms',
response:[],
isLoading:false,






}},
setup(){return{
chevronForwardOutline


}},

methods:{
get(){
this.isLoading=true;
this.axios.get('https://standbypromotersltd.com/api/my-farms/'+this.$store.state.user)
.then(response =>{
this.isLoading=false;
this.response=response.data;
})
.catch(error=>{
alert(error);
});
}

},
mounted(){
this.get();
}




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