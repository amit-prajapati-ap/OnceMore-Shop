import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                products: resolve(__dirname, "products.html"),
                addToCart: resolve(__dirname, "addToCart.html")
            }
        }
    }
})