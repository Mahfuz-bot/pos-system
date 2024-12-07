import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to the POS System</h1>
      <div className="mt-4">
        <Link
          href="/login"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Login
        </Link>
        <Link
          href="/products"
          className="px-4 py-2 ml-4 text-white bg-green-500 rounded"
        >
          Products
        </Link>
        <Link
          href="/pos"
          className="px-4 py-2 ml-4 text-white bg-purple-500 rounded"
        >
          POS
        </Link>
      </div>
    </div>
  );
}
