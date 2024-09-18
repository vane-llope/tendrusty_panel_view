<template>
  <div class="container m-auto">
    <DynamicForm :title="title" :fields="formFields" :axiosData="axiosData"/>
  </div>
</template>


<script>
import DynamicForm from "../components/DynamicForm.vue";

export default {
  name: "VisitView",
  components: {
    DynamicForm,
  },
  setup() {
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

    const axiosData = {
      header: {},
      method: "post",
      action: "tenapi.tendrusty.com/app/loggin",
    };
    return {
      title,
      inputLabel,
      formFields,
      axiosData,
    };
  },
};
</script>
