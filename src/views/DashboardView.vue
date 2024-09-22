<template>
  <div>
    <div class="container my-5">
      <div class="row my-5">
      
        <router-link to="/Visit" class="container col-md-6 text-decoration-none my-3 text-end ">
          <div
            class=" service-item p-5 position-relative d-flex align-items-start rounded-20">
            <div><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2 class="text-white mt-4">ویزیت</h2>
          </div>
          </router-link>
          <router-link to="/Booking" class="container col-md-6 text-decoration-none my-3 text-end ">
          <div
            class=" service-item p-5 position-relative d-flex align-items-start rounded-20">
            <div><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2 class="text-white mt-4">رزرو</h2>
          </div>
        </router-link>
        <router-link to="/BookingList" class="container col-md-6 text-decoration-none my-3 text-end ">
          <div
            class=" service-item p-5 position-relative d-flex align-items-start rounded-20">
            <div><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2 class="text-white mt-4">تاریخچه نوبت ها</h2>
          </div>
        </router-link>
        <a  class="container col-md-6 text-decoration-none my-3 text-end ">
          <div
            class=" service-item p-5 position-relative d-flex align-items-start rounded-20">
            <div><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2 class="text-white mt-4">fourth</h2>
           
          </div>
        </a>
       
        
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
};
</script>

<style>

</style>