<template>
<ion-app>
<ion-router-outlet v-if="$store.state.user!=null" />
<login-page v-else></login-page>
</ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet,useBackButton,useIonRouter } from '@ionic/vue';
import { App } from '@capacitor/app';
import { defineComponent } from 'vue';
import LoginPage from '@/views/LoginPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    LoginPage,

  },

  setup() {

  const ionRouter = useIonRouter();



  },


  data(){return{
  user:null,

  }},
methods:{
app_state(){
var session=localStorage.getItem('userID');
this.$store.state.user=session;

},

exit_app(){
useBackButton(10, () => {
      alert();
  })

var session=this.$store.state.user;
if(session==null){
return null;
}


}




},

mounted(){
this.app_state();
if(this.$store.state.user==null){
useBackButton(-1, () => {App.exitApp();});
}
}










});




</script>