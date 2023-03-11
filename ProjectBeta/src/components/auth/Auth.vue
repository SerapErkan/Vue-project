<template>

  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 col-md-10">
        <img
          class="img-fluid"
          src="/src/assets/images/login-image.PNG"
          alt=""
        />
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <!-- login --> <!-- //sing up -->
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputName"
              placeholder="First Name"
            />
            <label for="floatingInputName">First Name</label>
          </div>
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputLast"
              placeholder="last Name"
            />
            <label for="floatingInputLast">Last Name</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInputEmail"
              placeholder="name@example.com"
            />
            <label for="floatingInputEmail">E-mail Address</label>
          </div>
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              placeholder="Age"
              id="floatingInputAge"
            />
            <label for="floatingInputAge">Age</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingRePassword2"
              placeholder="re-password"
            />
            <label for="floatingRePassword">Re-Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <div class="button-container d-flex  flex-column align-items-center">
            <button
              type="submit"
              :class="{ 'btn-warning': isUser, 'btn-custom': !isUser }"
              class=" w-100 btn btn-lg mb-2"
            >
              {{ isUser ? "Login" : "Sign up" }}
            </button>

        
            <a
              class="text-secondary fw-bold text-decoration-none"
              @click="toggle"
              style="cursor: pointer;"
            >
              <span v-if="isUser">
              Sign up
              </span>
              <span v-else>
              Login
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isUser: false
    };
  },
  methods: {
    toggle() {
      this.isUser = !this.isUser;
      console.log(this.isUser);
    }
  }


};
</script>
<style>
.btn-custom {
  background-color: #9b30ff !important;
  border-color: #9b30ff !important;
  color: white !important;
}
.btn-custom:hover {
  background-color: #9b30ff;
  border-color: #9b30ff;
  color: white;
  transform: scale(1.1);
}

</style>
