<template>
  <div>
    <nav class="navbar navbar-expand-lg ">
        <div class="container pt-3">
          <a class="navbar-brand text-light " href="#">بیمار یار</a>
          <button class="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <router-link class="nav-link text-light fw-bold active" to="/Dashboard">داشبورد</router-link> 
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light fw-bold " to="/Login">ورود</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light fw-bold" to="/Visit">ویزیت</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light fw-bold" to="/Booking">رزرو</router-link>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    
  </div>
</template>

