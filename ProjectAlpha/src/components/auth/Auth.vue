<template>



    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Lorem ipsum dolor sit,</h1>
            <p class="col-lg-10 fs-4">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
         Recusandae unde iste quis dolorum ipsum necessitatibus dolore quibusdam,
         voluptatum maxime corrupti. 
            </p>
            <p class=" text-center">
              <button  class="btn btn-outline-info" @click="toggle">Sign in or Login</button>
            </p> 
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
       <!-- login -->
            <form v-if="login" class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-warning" type="submit">Login</button>
              <hr class="my-4">
              <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
    
       <!-- //sing up -->
    
            <form v-if="!login" class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Last Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
    
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-warning" type="submit">Sign up</button>
              <hr class="my-4">
              <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
    
    
    
          </div>
        </div>
      </div>
    
    
    
    </template>
    
    <script>
    export default {
      data() {
        return {
          login: true
        };
      },
      methods: {
        toggle() {
          this.login = !this.login;
        }
      }
    };
    </script>
    