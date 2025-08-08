import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://fakestoreapi.com/products/categories')
      const data = await res.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const url =
          selectedCategory === 'all'
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${selectedCategory}`
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products