<template>
  <div class="col-lg-6 col-12 m-auto">
    <DynamicForm :title="title" :fields="formFields" v-model:userInputs="userInputs">
      <button type="submit" @click="submitForm" :disabled="isSubmitting" class="btn bg-main text-light mt-5 w-100 border-0">تایید</button>
    </DynamicForm>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import DynamicForm from "../components/DynamicForm.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import store from "@/store";

export default {
  name: "LoginView",
  components: {
    DynamicForm,
  },
  setup() {
    const title = "ورود";
    const route = useRoute();
    const router = useRouter();
    const userInputs = ref({});
    const isSubmitting = ref(false);
    const formFields = [
      { name: "username", label: "نام کاربری", type: "text" },
      { name: "password", label: "پسورد", type: "password" },
    ];

    const submitForm = async () => {
      await axios({
        method: "POST",
        url: "user/login",
        data: userInputs.value,
      })
        .then((response) => {
          if (response.data.code == 200) {
            store.commit("SET_USER_DATA", response.data);
            router.push({
              name: "DashboardView",
            });
          }
        })
        .catch((error) => {
          alert("کاربر معتبر نمی باشد");
          console.log(error);
        });
    };

    return {
      title,
      formFields,
      userInputs,
      route,
      submitForm,
      isSubmitting,
    };
  },
};
</script>
