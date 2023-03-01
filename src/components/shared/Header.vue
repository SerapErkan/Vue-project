<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-dark  sticky-top"
      style="background-color:#9b30ff; color:white;"
    >
      <div class="container-fluid">
        <a class="navbar-brand">SerapERKAN</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">CV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Dashboard</a>
            </li>
          </ul>

          <a class="nav-link me-3 ">
            <i class="fa-solid fa-user me-2"></i>Login
          </a>
          <a class="nav-link me-3 ">
            <i class="fa-sharp fa-solid fa-star me-2"></i>Favorite
          </a>
          <a class="nav-link me-3 ">
            <i class="fa-solid fa-cart-shopping me-2"></i>Shopping Cart
          </a>
        </div>
      </div>
    </nav>

    <div class="d-flex bg-gray  justify-content-center">
      <form class="d-flex m-3 col-sm-5" role="search">
        <input class="form-control me-2 " type="search" placeholder="Search" />
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>

    <div class="d-flex justify-content-center ">
      <a class="nav-link active m-3">Men</a>
      <a class="nav-link m-3 ">Women</a>
      <a class="nav-link m-3">Kids</a>
      <a class="nav-link m-3">Sports</a>
      <a class="nav-link m-3">Digital</a>
      <a class="nav-link m-3 ">Furniture</a>
      <a class="nav-link m-3 ">Garden -Plant</a>
      <a class="nav-link m-3">Bestsellers</a>
      <a class="nav-link m-3 ">Flash discounts</a>
    </div>

    <div class=" flex-direction-column scrollmenu">
      <a>
        <img class="items" src="/src/assets/img/1.PNG" />
        <span></span>
      </a>
      <a>
        <img class="items" src="/src/assets/img/2.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/3.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/4.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/5.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/6.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/7.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/8.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/9.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/10.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/11.PNG" />
      </a>
      <a>
        <img class="items" src="/src/assets/img/12.PNG" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.bg {
  background-color: darkgrey;
  min-height: 40px;
}
.items {
  vertical-align: middle;
  width: 150px;
  height: 150px;
  margin-left: 5px;
}
.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}
</style>
