<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-custom ">
      <div class="container-fluid">
        <router-link active-class="active" to="/" exact class="nav-item">
          <img src="/src/assets/logo2.PNG " class="img-fluid mb-2" />
        </router-link>

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
            <router-link
              active-class="active"
              to="/auth"
              exact
              tag="li"
              class="nav-item"
              :class="logoutClass"
            >
              <a class="nav-link active" aria-current="page">
                <i class="fa-solid fa-user me-2 "></i>Login
              </a>
            </router-link>

            <router-link
              active-class="active"
              to="/user/7"
              exact
              tag="li"
              class="nav-item"
              :class="LoginClass"
            >
              <a class="nav-link active" aria-current="page">
                <i class="fa-solid fa-user me-2 "></i> {{ userName }}
              </a>
            </router-link>

            <router-link
              active-class="active"
              to="/user/7/userFavorite"
              exact
              tag="li"
              class="nav-item"
              :class="LoginClass"
            >
              <a class="nav-link">
                <i class="fa-sharp fa-solid fa-star me-2"></i>Favorite</a
              >
            </router-link>

            <router-link
              active-class="active"
              to="/user/7/userCard"
              exact
              tag="li"
              class="nav-item me-4"
              :class="LoginClass"
            >
              <a class="nav-link">
                <i class="fa-solid fa-cart-shopping me-2"></i>Shopping Cart</a
              >
            </router-link>

            <button
              class="btn btn-light mt-1"
              :class="LoginClass"
              @click="logout"
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </ul>
        </div>

        <div></div>
      </div>
    </nav>
    <br />
    <div class="d-flex bg-gray  justify-content-center mt-5">
      <form class="d-flex m-3 col-sm-5" role="search">
        <input class="form-control me-2 " type="search" placeholder="Search" />
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "Serap Erkan"
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    logoutClass() {
      return {
        "d-none": this.$store.getters.isAuthenticated
      };
    },
    LoginClass() {
      return {
        "d-none": !this.$store.getters.isAuthenticated
      };
    }
  }
};
</script>
<style>
.bg-custom {
  background-color: #713be4;
}
</style>
