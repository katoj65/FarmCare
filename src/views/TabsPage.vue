<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label style="color:#0E6251;">Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="listOutline"/>
          <ion-label style="color:#0E6251;">Services</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="personOutline" />
          <ion-label style="color:#0E6251;">My Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, pawOutline, homeOutline, leafOutline, personOutline, listOutline } from 'ionicons/icons';

export default defineComponent({
name: 'TabsPage',
components: {
  
IonLabel,
IonTabs,
IonTabBar,
IonTabButton,
IonIcon,
IonPage,
IonRouterOutlet,

  },
setup() {
return {
ellipse,
square,
triangle,
pawOutline,
homeOutline,
leafOutline,
personOutline,
listOutline

}
},





});
</script>
