<template>
  <div class="py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-if="products.length > 0">
        <div class="col" v-for="product in products">
          <div class="card shadow-sm">
            <img src="../../assets/logo.png" class="p-5" />
            <div class="card-body">
              <h6 class="card-text">{{ product.key}}</h6>
              <h2 class="card-text">{{ product.title}}</h2>
              <h4 :class="getCountClasses(product.count)">count: {{ product.count }} </h4>
                <h5> {{ product.price |currency}} </h5>
              
              <p class="card-text">{{ product.description}}</p>
            

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="alert alert-warning mt-5" v-else >
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br >
            <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz
            </small>
          </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "getPoducts"
    })
  },
  methods:{
    getCountClasses(count){
      return{
         'bg-danger' : count == 0 || count==null ,
         'bg-success' : count > 0,
      }
    
    }
  
  }
};
</script>

