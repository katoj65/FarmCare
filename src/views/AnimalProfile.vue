<template>
<page-layout :title='title' >
<div style="color:red;" v-if="isLoading==false">



<ion-card  style="margin:0px;border-radius:0;color:black;box-shadow:none;">
<ion-card-header>
<ion-card-title style="color:black;font-size:25px;">{{ response.category }}

<a href="" style="float:right;font-size:25px;color:gray;"><ion-icon :icon="createOutline"></ion-icon> </a>
</ion-card-title>
<ion-card-subtitle style="font-size:17px;">TAG ID: {{ response.tag }} </ion-card-subtitle>
</ion-card-header>

<ion-card-content style="font-size:17px;">
<div>{{ response.gender }} - {{ response.age }} </div>
<div>{{ response.breed }} breed</div>
<div>
Rared for {{ response.purpose}}
</div>
<div>{{ response.color }} in color</div>
<div>From {{ response.previous_farm }}</div>
<div>{{ response.previous_health_condition}} </div>
</ion-card-content>

<!-- <ion-card-content>

</ion-card-content> -->
</ion-card>





<div style="border-top:solid thin #D0D3D4;">



<ion-item button detail="true" v-for="n in reports" :key="n.title">
<ion-label>
<h3 style="font-weight:bold;font-size:19px;">
{{ n.title }}
</h3>
<p>{{ n.description }} </p>
</ion-label>
</ion-item>


<!-- <ion-item button detail="true">
<ion-label>
<h3 style="font-weight:bold;font-size:19px;">Other Information</h3>
<p>Detail set to true - detail arrow displays on both modes</p>
<p>Detail icon set to caret-forward-outline</p>
</ion-label>
</ion-item> -->



</div>










</div>
<div v-else style="text-align:center;padding:10px;">
<ion-spinner></ion-spinner>
</div>
</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { IonSpinner, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonIcon} from '@ionic/vue';
import { addCircleOutline, pricetagOutline, caretForwardOutline, createOutline } from 'ionicons/icons';
export default {
components:{
PageLayout,
// IonItem,
// IonLabel,
// IonList,
IonSpinner,
// IonIcon
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
IonCardTitle,
IonItem, IonLabel,
IonIcon



},

setup(){return{
addCircleOutline,
pricetagOutline,
caretForwardOutline,
createOutline

}},

data(){return{

title:'Farm animal',
response:[],
isLoading:false,
route:null,
farm:[],
farmID:null,

reports:[
{title:'Health Report',description:'Detail set to true - detail arrow displays on both modes',icon:''},
{title:'Feeding Report',description:'Detail set to true - detail arrow displays on both modes',icon:''},
{title:'Breeding Report',description:'Detail set to true - detail arrow displays on both modes',icon:''},
{title:'Schedule',description:'Detail set to true - detail arrow displays on both modes',icon:''},


],





}},


methods:{

show_animals(){
let path=this.$route.fullPath;
let path_split=path.split('/');
let segment=path_split[3];
this.isLoading=true;
// var farmID=this.$store.state.farm!=null?this.$store.state.farm.id:null;
this.axios
.get('https://standbypromotersltd.com/api/animal-profile/'+segment)
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