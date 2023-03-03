<template>
    <div class="container">
      <div >
        <div >
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
          <div class="card-body">
            <h3>Ürün İşlemleri</h3>
            <hr>
            <div class="form-group mb-3">
              <label>Ürün Adı</label>
              <input  type="text" v-model="product.title" class="form-control" placeholder="Ürün adını giriniz..">
            </div>
            <div class="form-group mb-3">
              <label>Adet</label>
              <input  type="number" v-model="product.count" class="form-control" placeholder="Ürün adetini giriniz..">
            </div>
            <div class="form-group mb-3">
              <label>Fiyat</label>
              <input  type="number" v-model="product.price" class="form-control" placeholder="Ürün fiyatı giriniz..">
            </div>
            <div class="form-group mb-3">
              <label>Açıklama</label>
              <textarea cols="30" rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                      v-model="product.description"  class="form-control"></textarea>
            </div>
       
        
            <button class="w-100 btn btn-lg btn-warning" @click="saveProduct" type="submit">Save</button>
              <hr class="my-4">
          </div>
        </div>
      </div>
    
    </div>
  </template>
<script>
export default {
    data(){
        return{
            product:{

                title:"",
                count:null,
                price:null,
                description:""
            }
        }
    }
    ,methods:{
        saveProduct(){
            this.$store.dispatch("saveProduct",this.product);
        }
    }
}
</script>