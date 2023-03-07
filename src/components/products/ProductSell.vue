<template>
    <div class="container">
    <!-- <div class="loading" >
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedProduct" @change="productChange">
              <option selected disabled>Lütfen Bir Ürün Seçiniz...</option>
              <option 
            :disabled="product.count == 0"
              :value="product.key"
              v-for="product in products">{{ product.title }}</option>
             
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-4 mt-4 border border-danger" v-if="product !== null" >
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge text-bg-warning fs-4">Stok :{{product.count}}</span>
                      <span class="badge text-bg-warning fs-4">Fiyat :{{product.price | currency }} </span>
                    </div>
                    <p class="border border-warning p-2 text-secondary"> {{ product.description }} </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Adet</label>
            <input type="text" class="form-control" placeholder="Ürün adetini giriniz..">
          </div>
          <hr>
          <button  class="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
    
</template>
<script>
import { mapGetters } from 'vuex';

export default{
data(){
    return{
        selectedProduct:null,
        product:null,
    }
},
computed:{
 ...mapGetters({
    products:'getPoducts'
 })
    
 
},

methods:{
    productChange(){

       console.log(this.selectedProduct)
       // ---NPY-aRatMf4hJbDbjg2
       this.product = this.$store.getters.getPoduct(this.selectedProduct)[0];
       console.log(this.product);
       console.log(this.product.price);
    }
}



}
</script>