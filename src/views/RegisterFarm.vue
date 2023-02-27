<template>
<page-layout :title='title'>
<form style="padding:20px;" @submit.prevent="submit">
<div>
<!-- {{ id }} -->
<div style="text-align:center;padding:10px;font-size:15px;color:red;" v-if="message!=null">{{ message }}</div>





</div>
<ion-list style="background:none;">
<ion-item>
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter farm name" v-model="form.name"></ion-input>
</ion-item>
<ion-item>
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter farm location" v-model="form.location"></ion-input>
</ion-item>
<ion-item>
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter farm manager firstname" v-model="form.firstname"></ion-input>
</ion-item>
<ion-item>
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter farm manager lastname" v-model="form.lastname"></ion-input>
</ion-item>
<ion-item>
<ion-label></ion-label>
<ion-input type="number" placeholder="Enter farm manager telephone number" v-model="form.tel"></ion-input>
</ion-item>
<ion-item>
<ion-label></ion-label>
<ion-input type="email" placeholder="Enter farm manager email address" v-model="form.email"></ion-input>
</ion-item>
</ion-list>
<div style="text-align:center;">

<ion-button type="submit" style="padding:10px;font-size:20px;" v-if="isLoading==false">
Save
</ion-button>

<ion-button type="submit" style="padding:10px;font-size:20px;" v-else>
<ion-spinner></ion-spinner>
</ion-button>

</div>
</form>
</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { IonInput, IonItem, IonLabel, IonList, IonButton, IonSpinner  } from '@ionic/vue';

export default {
components:{
PageLayout,
IonInput,
IonItem,
IonLabel,
IonList,
IonButton,
IonSpinner


},
data(){return{
title:'Register a farm',
isLoading:false,
message:null,
form:{
userID:this.$store.state.user,
name:null,
location:null,
firstname:null,
lastname:null,
tel:null,
email:null,
}




}},
setup(){return{




}},

methods:{
submit(){
this.isLoading=true;
this.axios
.post('https://standbypromotersltd.com/api/mobile-register-farm',{
name:this.form.name,
location:this.form.location,
firstname:this.form.firstname,
lastname:this.form.lastname,
email:this.form.email,
tel:this.form.tel,
id:this.form.userID,
}).then(response =>{
this.isLoading=false;
if(response.data.status==true){
this.isLoading=false;
var id=response.data.farmID;
this.$router.push('/tabs/farm/'+id);
}else{
this.message=response.data.message;
}


})
.catch(error=>{
alert(error);
});
},


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