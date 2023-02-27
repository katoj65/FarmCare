<template>
<page-layout :title='title'>
<div v-if="isLoading==false">
<ion-list lines="full" v-if="farms.length>0">
<ion-item v-for="f in farms" :key="f.id" :href="'/tabs/farm/'+f.id">
<ion-label style="font-size:18px;text-transform:capitalize;">{{ f.name }} </ion-label>
</ion-item>
</ion-list>
<div v-else style="padding:10px;">No content</div>
</div>
<div v-else style="text-align:center;padding:20px;">
<ion-spinner></ion-spinner>
</div>
</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import {IonItem, IonLabel, IonList,IonSpinner } from '@ionic/vue';
import {addCircleOutline, pricetagOutline} from 'ionicons/icons';

export default {
components:{
PageLayout,
IonItem,
IonLabel,
IonList,
IonSpinner



},
data(){return{
title:'My Farms',
farms:[],
isLoading:false,



}},
setup(){return{
addCircleOutline,
pricetagOutline



}},

methods:{
get(){
this.isLoading=true;
this.axios
.post('https://standbypromotersltd.com/api/farms',
{id:this.$store.state.user})
.then(response =>{
this.farms=response.data.farms;
this.isLoading=false;
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






</style>