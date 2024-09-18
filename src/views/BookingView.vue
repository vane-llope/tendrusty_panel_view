<template>
  <div class="container">
    <DynamicForm :title="title" :fields="formFields" :axiosData="axiosData"/>
  </div>
</template>


<script>
import DynamicForm from "../components/DynamicForm.vue";
export default {
  name: "BookingView",
  components: {
    DynamicForm,
  },
  setup() {
    const title = "رزرو";
    const formFields = [
      { name: "first_name", label: "نام", type: "text" },
      { name: "last_name", label: "نام خانوادگی", type: "text" },
      {
        name: "national_code",
        label: "کدملی",
        type: "number",
      },
      { name: "date", label: "تاریخ", type: "datetime-local" },
    ];
    const axiosData = {
      header: {},
      method: "post",
      action: "tenapi.tendrusty.com/app/loggin",
    };
    return {
      title,
      formFields,
      axiosData,
    };
  },
};
</script>
