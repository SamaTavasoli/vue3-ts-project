import { createRouter, createWebHistory } from 'vue-router'
import MoviePlayRouter from './MoviePlayRouter'

const routes = [
    ...MoviePlayRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router