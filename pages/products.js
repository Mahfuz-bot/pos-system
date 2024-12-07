export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 3600,
  };
}

export default function ProductsPage({ products }) {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Products</h1>
      <table className="w-full mb-4 border border-collapse border-gray-200 table-auto">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Min Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">${product.price}</td>
              <td
                className={`p-2 border ${
                  product.stock < product.min_stock
                    ? "bg-red-100 text-red-700 font-bold"
                    : ""
                }`}
              >
                {product.stock} {product.stock < 5 && "(Low Stock)"}
              </td>
              <td className="p-2 border">{product.min_stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
