<template>
  <div class="container m-auto">
    <pre>{{userInputs}}</pre>
    <DynamicForm :title="title" :fields="formFields" v-model:userInputs="userInputs" >
      <button @click="submitForm"  type="submit" class="btn bg-main text-light mt-5 w-100 border-0" >تایید</button>
      </DynamicForm>
  </div>
</template>

<script>
import { ref } from "vue";
import DynamicForm from "../components/DynamicForm.vue";
import axios from "axios";

export default {
  name: "VisitView",
  components: {
    DynamicForm,
  },
  setup() {
    const userInputs = ref({});
    const title = "ویزیت";
    const inputLabel = "دارو";
    const formFields = [
      {
        name: "reservation",
        label: "نوبت ها",
        type: "select",
        options: [
          { id: 1, info: "john" },
          { id: 2, info: "jack" },
          { id: 3, info: "jenny" },
        ],
      },
      { name: "description", label: "توضیحات", type: "text" },
      {
        name: "drug_item",
        label: "داروها",
        type: "select2extended",
        options: [
          { id: 1, text: "first" },
          { id: 2, text: "second" },
          { id: 3, text: "third" },
        ],
      },
      {
        name: "Lab_item",
        label: "آزمایش",
        type: "select2extended",
        options: [
          { id: 1, text: "firstA" },
          { id: 2, text: "secondB" },
          { id: 3, text: "thirdC" },
        ],
      },
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
      inputLabel,
      formFields,
      userInputs,
      submitForm,
    };
  },
};
</script>
