<template>
  <div class="col-lg-6 col-12 m-auto">
    <DynamicForm :title="title" :fields="formFields" :axiosData="axiosData" />
  </div>
</template>


<script>
import { useRoute } from "vue-router";
import DynamicForm from "../components/DynamicForm.vue";
export default {
  name: "LoginView",
  components: {
    DynamicForm,
  },
  setup() {
    const title = "ورود";
    const route = useRoute();
    const formFields = [
      { name: "username", label: "نام کاربری", type: "text" },
      { name: "password", label: "پسورد", type: "password" },
    ];

    const axiosData = {
      header: { role: route.params.role },
      method: "post",
      action: "tenapi.tendrusty.com/app/loggin",
    };

    return {
      title,
      formFields,
      axiosData,
      route,
    };
  },
};
</script>

<style>

</style>