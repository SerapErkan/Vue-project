import Vue from "vue"

export const  setTradeResult=({commit,state},tradeResult)=>{
   //  güncelleme için 
commit("updateTradeResult",tradeResult)
   // sonuçları firebase yazdırmak için  
   // var olan kayıdın üzerine yazması için 

  let tradeData={
   purchase:state.purchase,
   sale:state.sale
  }

Vue.http.put("https://productoperations-deece-default-rtdb.firebaseio.com/trade-result.json",tradeData)
.then((response)=>{
   console.log(response)
});

}

export const  getTradeResult=({commit})=>{

    // firebase baglan state güncelle  
Vue.http.get("https://productoperations-deece-default-rtdb.firebaseio.com/trade-result.json")
.then((response)=>{
commit("updateTradeResult",response.body);
})

 }
