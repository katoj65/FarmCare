<template>
<page-layout :title='$store.state.farm!=null?$store.state.farm.name.toUpperCase():title'>


<form style="padding:20px;padding-bottom:150px;" @submit.prevent="submit">
<div>
<div style="text-align:center;font-size:20px;margin-bottom:10px;">
Fill in animal information
</div>


<!-- <div style="text-align:center;padding:10px;font-size:18px;color:red;" v-if="error!=null">{{ error }}</div> -->

</div>
<ion-list style="background:none;">
<ion-item>
<ion-label></ion-label>
<ion-input type="text" placeholder="Enter animal tag" v-model="form.tag"></ion-input>
</ion-item>

<ion-item>
<ion-select interface="popover" placeholder="Select Animal Category" style="text-align:center;width:100%;" v-model="form.category">
<IonSelectOption :value="cat.name" v-for="cat in category" :key="cat">{{ cat.name }} </IonSelectOption>
</ion-select>
</ion-item>






<ion-item>
<ion-select interface="popover" placeholder="Select Animal Breed" style="text-align:center;width:100%;" v-model="form.breed">
<IonSelectOption :value="n" v-for="b in breed" :key="b">{{ b.item }} </IonSelectOption>
</ion-select>
</ion-item>




<ion-item>
<ion-select interface="popover" placeholder="Select Animal Sex" style="text-align:center;width:100%;" v-model="form.gender">
<IonSelectOption :value="g.name" v-for="g in gender" :key="g">{{ g.name }} </IonSelectOption>
</ion-select>
</ion-item>



<ion-item>
<ion-select interface="popover" placeholder="Select Animal Purpose" style="text-align:center;width:100%;" v-model="form.purpose">
<IonSelectOption :value="p.name" v-for="p in purpose" :key="p">{{ p.name }} </IonSelectOption>
</ion-select>
</ion-item>


<ion-item>
<ion-select interface="popover" placeholder="Select Animal Age" style="text-align:center;width:100%;" v-model="form.age">
<IonSelectOption :value="a.name" v-for="a in age" :key="a">{{ a.name }} </IonSelectOption>
</ion-select>
</ion-item>




<ion-item>
<ion-select interface="popover" placeholder="Select Animal Color" style="text-align:center;width:100%;" v-model="form.color">
<IonSelectOption :value="c.name" v-for="c in color" :key="c">{{ c.name }} </IonSelectOption>
</ion-select>
</ion-item>




<ion-item>
<ion-label></ion-label>
<ion-input type="text" placeholder="Previous Farm and Location" v-model="form.farm"></ion-input>
</ion-item>


<ion-item>

    <ion-textarea placeholder="Enter Previous Animal Health" v-model="form.health"></ion-textarea>
</ion-item>




</ion-list>
<div style="text-align:center;">

<div style="text-align:center;padding:10px;font-size:18px;color:red;" v-if="error!=null">{{ error }}</div>





<ion-button type="submit" style="padding:10px;font-size:20px;" v-if="isLoading==false">
Save
</ion-button>

<ion-button class="success" style="margin:20px;" v-else>
<ion-spinner></ion-spinner>
</ion-button>



</div>
</form>



</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { IonInput, IonItem, IonLabel, IonList, IonButton,IonSelect, IonSelectOption,IonTextarea, IonSpinner,} from '@ionic/vue';
import { addCircleOutline, pricetagOutline} from 'ionicons/icons';


export default {
components:{
PageLayout,
IonInput,
IonItem,
IonLabel,
IonList,
IonButton,
IonSelect,
IonSelectOption,
IonTextarea,
IonSpinner,



},
data(){return{
title:'Farm Details',
isLoading:false,
isLoading2:false,
message:null,
error:null,
change_interface:'form',
animal_data:[],

form:{
farmID:this.$store.state.farmID,
tag:null,
category:null,
purpose:null,
color:null,
age:null,
gender:null,
breed:null,
farm:null,
health:null,
},

breed:[{item:'Local'},{item:'Fresian'},{item:'Cross'},{item:'Other'}],
gender:[{name:'Male'},{name:'Female'}],
purpose:[{name:'Meat'},{name:'Milk'}],
age:[{name:'Calf'},{name:'Heifer'},{name:'Mature'},{name:'Bull'},{name:'Other'}],
color:[{name:'Black'},{name:'White'},{name:'Spotted'},{name:'Brown'},{name:'Other'}],
category:[{name:'Cow'},{name:'Goat'},{name:'Sheep'}],





}},
setup(){return{
addCircleOutline,
pricetagOutline



}},

methods:{

submit(){
this.isLoading=true;
this.axios
.post('https://standbypromotersltd.com/api/create-animals',{
// id:this.form.farmID,
farmID:this.$store.state.farm!=null?this.$store.state.farm.id:null,
tag:this.form.tag,
category:this.form.category,
purpose:this.form.purpose,
color:this.form.color,
age:this.form.age,
gender:this.form.gender,
breed:this.form.breed,
farm:this.form.farm,
health:this.form.health

}).then(response =>{

this.message=response.data.message;
this.isLoading=false;
this.error=null;
var farmID=this.$store.state.farm!=null?this.$store.state.farm.id:null;
this.form={};
this.$router.push('/tabs/show-animals/'+farmID);

})
.catch(error=>{
let error_code=error.response.status;
this.isLoading=false;
if(error_code==422){
this.error='Fill in all fields';
}else{
alert(error_code);
}
});
},

success_message(){
this.change_interface='animals';
this.form={};
this.error=null;
this.message=null;
this.show_animals();
},


//show animals
show_animals(){
this.isLoading2=true;
var farmID=this.$store.state.farm!=null?this.$store.state.farm.id:null;
if(farmID!=null){
this.axios
.post('https://standbypromotersltd.com/api/get-animal-data',{
id:farmID
})
.then(response =>{
this.animal_data=response.data.response;
this.isLoading2=false;
})
.catch(error=>{
alert(error);
});
}
},

nav(){
this.$router.push('/tabs/animal-form');
},

navigate(){
var farmID=this.$store.state.farm!=null?this.$store.state.farm.id:null;
this.$router.push('tabs/show-animals/'+farmID);
}







},


mounted(){
this.title=this.$store.state.user;
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