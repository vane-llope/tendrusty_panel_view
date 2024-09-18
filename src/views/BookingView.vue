<template>
  <div class="container">
    <DynamicForm :title="title" :fields="formFields" v-model:userInputs="userInputs" >
      <button type="submit" class="btn bg-main text-light mt-5 w-100 border-0" >تایید</button>
      </DynamicForm>
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

    return {
      title,
      formFields,
    };
  },
};
</script>
