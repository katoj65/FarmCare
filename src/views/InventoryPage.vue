<template>
<page-layout :title='title'>
<div v-if="form_item==true">





123







</div>
<div v-else>


<table style="border:solid thin silver;width:100%;">
<tr>
<th>
Item
</th>
<th>
Quantity
</th>
<th>
Exp Date
</th>
</tr>
<tr v-for="n in list" :key="n.name">
<td>
{{ n.name }}
</td>
<td>
{{ n.qtty }} {{ n.measure }}
</td>
<td>
{{ n.exp }}
</td>
</tr>
</table>








</div>
</page-layout>
</template>
<script>
import PageLayout from '../shared/PageLayout.vue';
import { addCircleOutline, pricetagOutline,} from 'ionicons/icons';


export default {
components:{
PageLayout,


},
data(){return{
title:'Inventory',
form_item:false,

list:[

{name:'Sugar',qtty:10,measure:'Kg',exp:'2-30-22'},
{name:'Salt',qtty:20,measure:'Kg',exp:'11-30-22'},
{name:'Medicine',qtty:30,measure:'Ltr',exp:'12-04-22'}


],


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


table{
background:white;
}


table tr td{
text-align: center;
padding:10px;
}

table tr{
border:solid thin silver;
}
table tr td{
border-left:solid thin silver;
}
table tr th{
padding:10px;
}

</style>