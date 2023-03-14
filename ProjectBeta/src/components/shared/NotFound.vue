<template>
  <div class="mb-5 mt-5">
    <br />
    <br />
    <div class="container ">
      <div class="row row-cols-1 row-cols-md-3 mb-5 text-center mt-5">
        <div class="col ">
          <div class="card mb-4 rounded-3 shadow-sm custom-border custom-min">
            <div class="card-header py-3 custom-border">
              <button
                type="button"
                class="w-100 btn btn-lg btn-outline-secondary"
              >
                404-NotFound
              </button>
              <h4 class="my-0 fw-normal"></h4>
            </div>
            <div class="card-body">
              <h1 class="text-center">
                <span class="mb-2 badge rounded-pill custom-span">1</span>
              </h1>
              <p class="card-text text-center">
                You can use the menu to go back to the homepage.
              </p>
              <img
                src="/src/assets/images/404/404-err.PNG "
                class="img-fluid"
              />

              <img src="/src/assets/images/404/404-1.PNG " class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm custom-border custom-min">
            <div class="card-header py-3 custom-border">
              <button
                type="button"
                class="w-100 btn btn-lg btn-outline-warning"
              >
                Get started
              </button>
            </div>
            <div class="card-body">
              <h1 class="text-center">
                <span class=" mb-2 p2 badge rounded-pill bg-warning">2</span>
              </h1>

              <p class="card-text text-center">
                Explore our product pages.
              </p>

              <img
                src="/src/assets/images/404/404-err2.PNG"
                class="img-fluid mb-5"
              /><br />

              <img src="/src/assets/images/404/404-2.PNG " class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm custom-border custom-min ">
            <div class="card-header py-3 text-bg-ligth custom-border">
              <button type="button" class="w-100 btn btn-lg btn-outline-info ">
                Contact us
              </button>
            </div>
            <div class="card-body">
              <p class="card-text text-center mt-4 ">
                Our customer support team is always ready to help.
              </p>

              <img src="/src/assets/images/404/404-c.PNG " class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-border {
  border: none !important ;
}
.custom-span {
  background-color: #541fc4 !important;
}
.custom-min {
  min-height: 550px;
}
</style>
