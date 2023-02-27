<template>
<page-layout :title='title'>
<div v-if="isLoading==false">


<ion-list>
<ion-item>
<ion-label style="font-weight:bold;font-size:20px;">
Farm Animals
</ion-label>
<span @click="navigation()">
<ion-icon :icon="addCircleOutline" style="font-size:30px;"></ion-icon>
</span>
</ion-item>



<ion-item v-for="l in response" :key="l.id" :href="'/tabs/animal/'+l.id">
<ion-label style="font-size:19px;">
<ion-icon :icon="pricetagOutline" style="margin-right:10px;"></ion-icon>
{{ l.tag }}
</ion-label>
<span style="color:#909497;">{{ l.category }}
</span>
</ion-item>
</ion-list>
</div>
<div v-else style="text-align:center;padding:10px;">
<ion-spinner></ion-spinner>
</div>

</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { IonItem, IonLabel, IonList, IonSpinner, IonIcon } from '@ionic/vue';
import { addCircleOutline, pricetagOutline } from 'ionicons/icons';
export default {
components:{
PageLayout,
IonItem,
IonLabel,
IonList,
IonSpinner,
IonIcon



},

setup(){return{
addCircleOutline,
pricetagOutline

}},

data(){return{

title:'Farm animal',
response:[],
isLoading:false,
route:null,
farm:[],
farmID:null,

}},


methods:{

show_animals(){
let path=this.$route.fullPath;
let path_split=path.split('/');
let segment=path_split[3];
this.isLoading=true;
// var farmID=this.$store.state.farm!=null?this.$store.state.farm.id:null;
this.axios
.get('https://standbypromotersltd.com/api/show-animals/'+segment)
.then(response =>{
this.response=response.data.response;
this.farm=response.data.farm.response;
this.title=this.farm.name.toUpperCase();
this.farmID=this.farm.id;


this.isLoading=false;
})
.catch(error=>{
alert(error);
});
},

//navigation
navigation(){
this.$store.state.farm=this.farm;
this.$router.push('/tabs/animal-form');
},

//show animal details





},
mounted(){
this.show_animals();

}



}
</script>