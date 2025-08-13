<template>
   <v-row justify="center">
      <v-col cols="12" md="6">
  <div class="add-list">
  
    <h2 class="text-h5 font-weight-bold text-center mb-4">
        商品を追加する
        </h2>
    <input v-model="id" placeholder="idを入力" type="number" />
    <input v-model="product" placeholder="商品を入力" />
    <input v-model="price" placeholder="価格を入力" type="number" />
    <button @click="addData">追加</button>

    <h3 class="mt-6 mb-2">商品一覧</h3>
         <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">商品</th>
              <th class="text-left">価格(円)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.product }}</td>
              <td>{{ item.price }}（円）</td>
            </tr>
          </tbody>
        </v-simple-table>
  </div>
  </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      product: '',
      price: '',
    };
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    }
  },
  methods: {
  async addData() {
    const newProduct = {
      id: Number(this.id),
      product: this.product,
      price: Number(this.price),
      quantity: 0,
    };

    this.$store.dispatch('product/addProduct', newProduct);

    this.id = '';
    this.product = '';
    this.price = '';
  }
}
}
</script>

