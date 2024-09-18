<template>
  <div class="col-lg-6 col-12 m-auto">
    <pre>{{ userInputs }}</pre>
    <DynamicForm :title="title" :fields="formFields"  v-model:userInputs="userInputs" >
      <button type="submit" class="btn bg-main text-light mt-5 w-100 border-0" >تایید</button>
      </DynamicForm>
  </div>
</template>

<script>
import { ref } from "vue";
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
    const userInputs = ref({});
    const formFields = [
      { name: "username", label: "نام کاربری", type: "text" },
      { name: "password", label: "پسورد", type: "password" },
    ];

    return {
      title,
      formFields,
      userInputs,
      route,
    };
  },
};
</script>
