<template>
<ion-page class="background">
<ion-card style="box-shadow:none;">
<ion-card-header class="background">
<ion-card-title class="h1" style="margin-top:10px;">MOST CARE</ion-card-title>
<!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
</ion-card-header>
<ion-card-content class="bg1" style="text-align:center;">

<div style="font-size:20px;font-weight:bold;">
{{ page==1?'Login':'Register' }}
</div>
</ion-card-content>
<!-- {{ $store.state.user.data.user }} -->
<ion-card-content class="background">
<form @submit.prevent="submit"  v-if="page==1" style="padding-top:50px;">
<ion-list class="background">
<ion-item class="background">
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter your email" v-model="form.email"></ion-input>
</ion-item>

<ion-item class="background">
<ion-label></ion-label>
<ion-input type="password" placeholder="Enter your password" v-model="form.pass"></ion-input>
</ion-item>
</ion-list>
<div style="text-align:center;">
<ion-button shape="round" class="success" type="submit"> Login </ion-button>
</div>
<div style="color:white;padding:10px;text-align:center;padding-bottom:0px;">
<span v-if="isLoading==true"><ion-spinner name="crescent" style="color:white;"></ion-spinner></span>
<span v-else-if="isLoading==false && this.message!=null">{{ message }}</span>
</div>
</form>
<!----Register---->
<register-page v-else></register-page>
<div style="text-align:center;">
<button @click="page==1?this.page=2:this.page=1" style="font-size:20px;" class="background">
{{ page==1?'Register':'Login' }}
</button>
</div>
<!---End Register---->
</ion-card-content>
</ion-card>







</ion-page>
</template>
<script>
import RegisterPage from '../views/RegisterPage.vue';
import {IonPage,IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonList,IonButton,IonSpinner } from '@ionic/vue';
export default {
components:{
IonPage,
IonCard, IonCardContent, IonCardHeader, IonCardTitle,
IonInput, IonItem, IonLabel, IonList, IonButton,IonSpinner,
RegisterPage

},
data(){return{

title:'Login',
session:null,
page:1,


form:{
email:null,
pass:null
},
message:null,
response:null,
isLoading:false,



}},
methods:{



submit(){
this.isLoading=true;
this.axios
.post('https://standbypromotersltd.com/api/mobile-login',{
email:this.form.email,
pass:this.form.pass,

})
.then(response =>{
this.isLoading=false;
if(response.data.status==true){

localStorage.setItem("userID",response.data.user.id);
localStorage.setItem("user_firstname",response.data.user.firstname);
localStorage.setItem("user_lastname",response.data.user.lastname);
localStorage.setItem("user_email",response.data.user.email);
localStorage.setItem("user_telephone",response.data.user.tel);
var session=localStorage.getItem('userID');
this.$store.state.user=session;

}else if(response.data.status==false){
this.message='User email and password not matching';
}else if(response.data.status==null){
this.message='Fill in all field';
}

})
.catch(error=>{
alert(error);
});




},
},
// mounted(){
// // this.submit();
// }

}
</script>
<style scoped>
.background{
background:#148F77;
padding:10px;
}
h1, .h1{
text-align:center;
font-size:25px;
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
padding:0px;
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
padding:0;
}

</style>