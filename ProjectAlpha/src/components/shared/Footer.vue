<template>

    <div class="bg-warning text-secondary px-1 py-3 text-center fixed-bottom mt-5 " >
      <div class="px-1">
 
        <div class="col-lg-6 mx-auto  ">
        
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          
            <button type="button" class="btn btn-light btn-sm ">
          Alış Tutarı :<span class="badge bg-secondary ms-1">{{Result.purchase | currency}}</span>
            </button>
            <button type="button" class="btn btn-light btn-sm ">
              Satış Tutarı :<span class="badge bg-secondary ms-1">{{Result.sale | currency}}</span>
            </button>
            <button type="button" class="btn btn-light btn-sm ">
              Bakiye :<span class="badge bg-secondary ms-5">  {{ Result.blance | currency}}</span>
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