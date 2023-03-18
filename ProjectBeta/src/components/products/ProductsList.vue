<template>





<div class=" py-5 bg-light">
    <div class="container ">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
        <div class="col">
          <div class="card shadow-lg card-custom p-3">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-center align-items-center">
                <div class="btn-group ">
                    <button type="button" class="btn btn-sm btn-custom rounded-pill me-2">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                  <button type="button" class="btn btn-sm  btn me-2 btn-custom rounded-pill">Detail</button>
                  <button type="button" class="btn btn-sm btn-outline-warning rounded ">Add to cart</button>
                </div>
                <!-- <small class="text-muted">9 mins</small> -->
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
    <router-link
              active-class="active"
              to="/admin"
              exact
              tag="li"
              class="nav-item"
           
            >

            <a>add</a>
          </router-link>
  </div>

  



</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}

</script>
<style scoped>


.btn-custom {
  background-color: #541fc4 !important;
  border-color: #541fc4 !important;
  color: white !important;
}
.btn-custom:hover {
  background-color: #541fc4;
  border-color: #541fc4;
  color: white;
  transform: scale(1.1);
}
.card-custom:hover {
  transform: scale(1.1);
}
</style>

