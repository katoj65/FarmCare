<template>
<page-layout :title='title'>

<div v-if="response.length>0">
<ion-card style="margin:0;box-shadow:none;">
<ion-card-header>
<ion-card-title>Card Title</ion-card-title>
<ion-card-subtitle>Card Subtitle</ion-card-subtitle>
</ion-card-header>

<ion-card-content>
Here's a small text description for the card content. Nothing more, nothing less.
</ion-card-content>

<ion-button fill="clear">Action 1</ion-button>
<ion-button fill="clear">Action 2</ion-button>
</ion-card>
</div>





<div v-else style="margin:0;margin-top:-20px;">
<form style="padding:15px;" @click.prevent="submit">


<p style="text-align:center;padding:0px;">
Add farm doctor
</p>



<ion-item lines="full">
    <ion-label>
     <ion-input placeholder="Enter first name" v-model="form.firstname"></ion-input>
    </ion-label>
  </ion-item>

<ion-item lines="full">
    <ion-label>
     <ion-input placeholder="Enter last name" v-model="form.lastname"></ion-input>
    </ion-label>
  </ion-item>


<ion-item lines="full">
    <ion-label>
     <ion-input type="number" placeholder="Enter telephone number" v-model="form.tel"></ion-input>
    </ion-label>
  </ion-item>


<ion-item lines="full">
    <ion-label>
     <ion-input type="email" placeholder="Enter email address" v-model="form.email"></ion-input>
    </ion-label>
  </ion-item>


<div style="text-align:center;padding:10px;">
<ion-button  style="font-size:20px;">Save</ion-button>
</div>


</form>
</div>
</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton, IonItem, IonLabel} from '@ionic/vue';
import { addCircleOutline, pricetagOutline} from 'ionicons/icons';


export default {
components:{
PageLayout,
IonCard,
IonCardContent,
IonCardHeader,
IonCardSubtitle,
IonCardTitle,
IonButton,
IonItem,
IonLabel,
IonInput,



},
data(){return{
title:'Farm Doctor',
url:null,
response:[],
isLoading:false,
message:null,


form:{
firstname:null,
lastname:null,
tel:null,
email:null,
},



}},
setup(){return{
addCircleOutline,
pricetagOutline



}},

methods:{

get(){
this.isLoading=true;
let path=this.$route.fullPath;
let path_split=path.split('/');
let segment=path_split[3];
this.url=segment;
this.axios
this.axios.get('https://standbypromotersltd.com/api/farm-doctor/'+segment)
.then(response =>{
this.isLoading=false;
this.response=response.data;
})
.catch(error=>{
alert('Check your internet connection.');
});
},


//submit information

submit(){
this.axios
.post('https://standbypromotersltd.com/api/store-farm-doctor/'+this.url,{
firstname:this.form.firstname,
lastname:this.form.lastname,
email:this.form.email,
tel:this.form.tel
}).then(response =>{
this.info=response;
}).catch(error=>{
alert('Check your internet connection.');
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

ion-button{
--background:#0B5345;
--padding-end:50px;
--padding-start:50px;
--padding-top:20px;
--padding-bottom:20px;
}

</style>