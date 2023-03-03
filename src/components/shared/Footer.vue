<template>

    <div class="bg-dark text-secondary px-4 py-5 text-center ">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">Footer</h1>
        <div class="col-lg-6 mx-auto mt-5 ">
        
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              class="btn btn-outline-warning btn-lg px-4 me-sm-3 fw-bold"
            >
            Alış Tutarı :<span class="badge bg-secondary ms-1">{{Result.purchase}}</span>
            </button>
            <button type="button" class="btn btn-outline-light btn-lg px-4">
              Satış Tutarı :<span class="badge bg-secondary ms-1">{{Result.sale}}</span>
            </button>
            <button type="button" class="btn btn-outline-danger btn-lg px-4">
              Bakiye :<span class="badge bg-secondary ms-5">  {{ Result.blance}}</span>
            </button>



          </div>
        </div>
      </div>
    </div>


</template>
<script>
import {mapGetters} from "vuex"
export default{

computed:{
  ...mapGetters(
    {
    Result:'getTradeResult'
    }
  )

    
  
  

  }

}
</script>