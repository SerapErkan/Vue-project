<template>

<div>
   <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-custom ">
    <div class="container-fluid">
      <img src="/src/assets/logo2.PNG " class="img-fluid mb-2" />


      <button
        class="navbar-toggler collapsed ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse" style="">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <i class="fa-solid fa-user me-2"></i>Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa-sharp fa-solid fa-star me-2"></i>Favorite</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">
              <i class="fa-solid fa-cart-shopping me-2"></i>Shopping Cart</a
            >
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  </nav>
  <br>
  <div class="d-flex bg-gray  justify-content-center mt-5">
  
      <form class="d-flex m-3 col-sm-5" role="search">
        <input class="form-control me-2 " type="search" placeholder="Search" />
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>

    </div>
</div>


 
</template>
<style>
.bg-custom {
  background-color: #713be4;
}
</style>

<!-- 
<router-link to="/auth">
  <a class="nav-link me-3 ">
    <i class="fa-solid fa-user me-2"></i>Login
  </a>
</router-link> -->
