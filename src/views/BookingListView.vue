<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <label for=""> نام/نام خانوادگی/کدملی</label>
        <input type="text" v-model="search" placeholder="جستجو" class="form-control mb-3" />
      </div>
      <div class="col">
        <label for="">تاریخ شروع</label>
        <input type="date" v-model="startDate" class="form-control" placeholder="تاریخ شروع" />
      </div>
      <div class="col">
        <label for="">تاریخ پایان</label>
        <input type="date" v-model="endDate" class="form-control" placeholder="تاریخ پایان" />
      </div>
    </div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <table class="table table-striped table-hover text-center">
      <thead>
        <tr>
          <th scope="col">نام</th>
          <th scope="col">نام خانوادگی</th>
          <th scope="col">کدملی</th>
          <th scope="col">تاریخ</th>
          <th scope="col">نمایش اطلاعات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedList" :key="index">
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.national_code }}</td>
          <td>{{ item.date }}</td>
          <td><router-link :to="`/User/${item.id}`" class="nav-link" > پرونده</router-link></td>
  </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination ">
        <li class="page-item " :class="{ disabled: currentPage === 1 }">
          <a class="page-link rounded-0 border-0" href="#" @click.prevent="changePage(currentPage - 1)">قبلی</a>
        </li>
        <li class="page-item " v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link rounded-0 border-0" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link rounded-0 border-0" href="#" @click.prevent="changePage(currentPage + 1)">بعدی</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "BookingListView",
  setup() {
    const search = ref("");
    const startDate = ref("");
    const endDate = ref("");
    const error = ref(null);
    const List = ref([
      {
        id: 1,
        first_name: "علی",
        last_name: "رضایی",
        national_code: "1234567890",
        date: "2020-01-01",
      },
      {
        id: 2,
        first_name: "مریم",
        last_name: "احمدی",
        national_code: "2345678901",
        date: "2020-02-02",
      },
      {
        id: 3,
        first_name: "حسین",
        last_name: "محمدی",
        national_code: "3456789012",
        date: "2020-03-03",
      },
      {
        id: 4,
        first_name: "زهرا",
        last_name: "جعفری",
        national_code: "4567890123",
        date: "2020-04-04",
      },
      {
        id: 5,
        first_name: "رضا",
        last_name: "کاظمی",
        national_code: "5678901234",
        date: "2020-05-05",
      },
      {
        id: 6,
        first_name: "فاطمه",
        last_name: "حسینی",
        national_code: "6789012345",
        date: "2023-06-06",
      },
      {
        id: 7,
        first_name: "محمد",
        last_name: "نوری",
        national_code: "7890123456",
        date: "2021-07-07",
      },
      {
        id: 8,
        first_name: "سارا",
        last_name: "کریمی",
        national_code: "8901234567",
        date: "2022-08-08",
      },
      {
        id: 9,
        first_name: "علی",
        last_name: "مرادی",
        national_code: "9012345678",
        date: "2023-09-09",
      },
    ]);

    const filteredList = computed(() => {
      error.value = null;
      const start = startDate.value ? new Date(startDate.value) : null;
      const end = endDate.value ? new Date(endDate.value) : null;

      if (start && end && start > end) {
        error.value = "تاریخ شروع نمی‌تواند بعد از تاریخ پایان باشد.";
        return [];
      }

      return List.value.filter((item) => {
        const itemDate = new Date(item.date);
        return (
          (!start || itemDate >= start) &&
          (!end || itemDate <= end) &&
          (item.first_name.includes(search.value) ||
            item.last_name.includes(search.value) ||
            item.national_code.includes(search.value) ||
            item.date.includes(search.value))
        );
      });
    });

    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const totalPages = computed(() =>
      Math.ceil(filteredList.value.length / itemsPerPage.value)
    );

    const paginatedList = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredList.value.slice(start, end);
    });

    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    return {
      search,
      startDate,
      endDate,
      error,
      List,
      filteredList,
      currentPage,
      itemsPerPage,
      totalPages,
      paginatedList,
      changePage,
    };
  },
};
</script>



