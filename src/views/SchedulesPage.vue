<template>
<page-layout :title='title'>




</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
// import { } from '@ionic/vue';
import { addCircleOutline, pricetagOutline} from 'ionicons/icons';


export default {
components:{
PageLayout,




},
data(){return{
title:'Farm Schedules',





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