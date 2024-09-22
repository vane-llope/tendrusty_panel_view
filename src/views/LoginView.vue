<template>
  <div class="col-lg-6 col-12 m-auto">
    <pre>{{ userInputs }}</pre>
    <DynamicForm :title="title" :fields="formFields"  v-model:userInputs="userInputs" >
      <button type="submit" @click="submitForm" class="btn bg-main text-light mt-5 w-100 border-0" >تایید</button>
      </DynamicForm>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import DynamicForm from "../components/DynamicForm.vue";
import axios from "axios";

export default {
  name: "LoginView",
  components: {
    DynamicForm,
  },
  setup() {
    const title = "ورود";
    const route = useRoute();
    const userInputs = ref({});
    const formFields = [
      { name: "username", label: "نام کاربری", type: "text" },
      { name: "password", label: "پسورد", type: "password" },
    ];

    const submitForm = async () => {
      await axios({
        method: "POST",
        url: "user/login",
        data: userInputs.value,
        headers: {
          //  role: route.params.role,
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          console.log(response.data);
          store.commit("SET_USER_DATA", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("کاربر معتبر نمی باشد");
        });
    };
    return {
      title,
      formFields,
      userInputs,
      route,
      submitForm,
    };
  },
};
</script>
