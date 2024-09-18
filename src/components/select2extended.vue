<template>
  <div class="border p-4 py-0 mt-2 container">
    <div class="row mt-2">
      <div class="col-md-4 my-2">
        <Select2 class="mt-2 text-dark " v-model="selectedValue" :options="field.options"
          :settings="{ placeholder: 'Select an option' }" />
      </div>
      <div class="col-md-6 my-2">
        <input type="text" v-model="description" class="form-control" placeholder="توضیحات" />
      </div>
      <div class="col-md-2 my-2">
        <button type="button" class="btn bg-main border-0 text-light w-100 p-2" @click="submitItem">
          افزودن+
        </button>
      </div>
    </div>

    <!-- item table -->
    <table class="table text-center table-hover table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col" class="col-4">آیتم</th>
          <th scope="col" class="col-6">توضیحات</th>
          <th scope="col" class="col-2">حذف</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items[field.name]" :key="index">
          <td>
            <Select2 class="form-control border-0 text-dark" v-model="item.itemId" :options="field.options"
              :settings="{ placeholder: 'Select an option' }"  />
          </td>
          <td>
            <input type="text" v-model="item.description" class="w-100 form-control" placeholder="توضیحات" />
          </td>
          <td>
            <button @click="deleteItem(index)" class="btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, watch, defineComponent } from "vue";
import Select2 from "vue3-select2-component";

export default defineComponent({
  props: {
    field: {
      type: Object,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
  },
  components: {
    Select2,
  },
  emits: ["update-items"],
  setup(props, { emit }) {
    const selectedValue = ref("");
    const description = ref("");

    const deleteItem = (index) => {
      props.items[props.field.name].splice(index, 1);
      emit("update-items", { items: props.items });
    };

    const submitItem = () => {
      if (selectedValue.value === "" || description.value === "") {
        alert("فیلد ها نباید خالی باشند");
      } else {
        const selectedOption = props.field.options.find(
          (option) => option.id == selectedValue.value
        );

        if (selectedOption) {
          const newItem = {
            description: description.value,
            itemId: selectedValue.value,
          };

          // Ensure the field exists in items
          if (!props.items[props.field.name]) {
            props.items[props.field.name] = [];
          }
          props.items[props.field.name].push(newItem);

          description.value = "";
          selectedValue.value = "";
          emit("update-items", { items: props.items });
        } else {
          alert("Selected option not found");
        }
      }
    };

    watch(props.items, (newItems) => {
      emit("update-items", { items: newItems });
    });

    return {
      selectedValue,
      description,
      deleteItem,
      submitItem,
    };
  },
});
</script>
