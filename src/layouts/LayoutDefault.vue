<template>
  <div class="LayoutDefault">
    <nav >
     <SideBar />
    </nav>
    <main class="LayoutDefault__main">
      <slot />
    </main>
    <footer >
 
    </footer>
  </div>
  
</template>

<script>
 import SideBar from '@/components/SideBar.vue'
 //import TheFooter from '@/components/layouts/TheFooter.vue'
export default {
 components: {SideBar},
  name: `LayoutDefault`,
 
};
</script>

<style >
.LayoutDefault__main{
  justify-content :center;
  margin-top: 10px;
  text-align: center;
  height:auto;
  width: 86%;
 background-attachment: fixed;



}
</style>



