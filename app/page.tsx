// app/page.tsx
export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to Top 10 Rankings</h1>
      <p className="mt-2 text-gray-600">Explore our latest hospital rankings for 2025.</p>
      <a href="/top-10-best-hospitals-in-new-york-2025" className="mt-4 inline-block text-blue-600 underline">
        View Hospital Rankings →
      </a>
    </main>
  );
}
