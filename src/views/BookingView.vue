<template>
  <div class="container">
    <DynamicForm :title="title" :fields="formFields" v-model:userInputs="userInputs" >
      <button @click="submitForm"  type="submit" class="btn bg-main text-light mt-5 w-100 border-0" >تایید</button>
      </DynamicForm>
  </div>
</template>


<script>
import DynamicForm from "../components/DynamicForm.vue";
import axios from "axios";

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

    const submitForm = async () => {
      await axios({
        method: "",
        url: "",
        data: userInputs.value,
        headers: {},
      })
        .then((response) => {
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    return {
      title,
      formFields,
      submitForm,
    };
  },
};
</script>
