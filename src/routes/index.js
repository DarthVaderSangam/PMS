import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'
import SingleProduct from '../views/singleProduct/SingleProduct.vue'
import CreateProduct from '../views/createProduct/CreateProduct.vue'
const routes = [
    {
        path : "/",
        component : Home
    },
    {
        path : "/singleBlog/:id",
        component : SingleProduct
    },
    {
        path : "/createProduct/:id"
    }
   
]
const router = createRouter({
    history : createWebHistory(),
   routes 
})

export default router