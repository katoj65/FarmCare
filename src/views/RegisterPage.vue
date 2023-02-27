<template>

<form @submit.prevent="submit" style="margin-top:-20px;">
<ion-list class="background" style="padding:0;">
<ion-item class="background">
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter your firstname" v-model="form.firstname"></ion-input>
</ion-item>
<ion-item class="background">
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter your lastname" v-model="form.lastname"></ion-input>
</ion-item>
<ion-item class="background">
<ion-label></ion-label>
<ion-input type="number" placeholder="Enter your telephone number" v-model="form.tel"></ion-input>
</ion-item>
<ion-item class="background">
<ion-label></ion-label>
<ion-input type="email" placeholder="Enter your email" v-model="form.email"></ion-input>
</ion-item>
<ion-item class="background">
<ion-label></ion-label>
<ion-input type="password" placeholder="Enter your password" v-model="form.pass"></ion-input>
</ion-item>
</ion-list>
<div style="text-align:center;">
<ion-button shape="round" class="success" type="submit"> Register </ion-button>
</div>
<div style="color:white;padding:5px;text-align:center;">
<span v-if="isLoading==true"><ion-spinner name="crescent" style="color:white;"></ion-spinner></span>
<span v-else-if="isLoading==false && this.message!=null">{{ message }}</span>
</div>
</form>
</template>
<script>
import { IonInput, IonItem, IonLabel, IonList, IonButton, IonSpinner } from '@ionic/vue';
export default {
components:{

IonInput, IonItem, IonLabel, IonList, IonButton,IonSpinner

},
data(){
return{

title:'',
session:null,
form:{
firstname:null,
lastname:null,
email:null,
pass:null,
tel:null,
},
message:null,
response:null,
isLoading:false,



}},
methods:{


submit(){
this.message=null;
this.isLoading=true;
this.axios.post('https://standbypromotersltd.com/api/user-register',{

email:this.form.email,
pass:this.form.pass,
firstname:this.form.firstname,
lastname:this.form.lastname,
tell:this.form.tel,

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
var status=error.response.status;
if(status==422){
this.message='Fill in all fields';
}
});




},
},


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
--padding-top:10px;
--padding-bottom:10px;
}

ion-input{
--border-radius:0px;
}
ion-item{
--border-radius:10px;
}

</style>