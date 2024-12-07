import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/users");
      if (!res.ok) {
        throw new Error("Unable to connect to the server.");
      }
      const users = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("token", `mock-token-${user.id}`);
        alert("Login successful!");
        router.push("/products");
      } else {
        setError("Invalid email or password!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-black">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
