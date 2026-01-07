import Image from "next/image";

export default function Page() {
  const data = {
    title: "Top 10 Best Hospitals in New York — 2025 Edition",
    subtitle: "Ranked for cardiology, oncology, neurology, surgery, and patient outcomes",
    year: 2025,
    region: "New York, USA",
    intro: "A data-backed look at New York’s leading hospitals across specialties, outcomes, and patient experience.",
    items: [
      {
        rank: 1,
        name: "NYU Langone Hospitals",
        location: "Manhattan",
        strengths: ["Cardiology", "Orthopedics", "Neurology"],
        highlights: "Consistently high patient outcomes, multi-specialty excellence",
        website: "https://nyulangone.org"
      },
      {
        rank: 2,
        name: "New York-Presbyterian Hospital – Columbia & Cornell",
        location: "Manhattan",
        strengths: ["Cancer", "Heart Surgery", "Neurology"],
        highlights: "Large academic center with cross-campus expertise",
        website: "https://www.nyp.org"
      },
      {
        rank: 3,
        name: "Mount Sinai Hospital",
        location: "Manhattan",
        strengths: ["Geriatrics", "Diabetes", "Gastroenterology"],
        highlights: "Strong research programs and specialty care",
        website: "https://www.mountsinai.org"
      }
      // ... add up to rank 10
    ]
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <header>
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-600">{data.subtitle}</p>
        <p className="text-sm text-gray-500">{data.region} • {data.year}</p>
      </header>

      <section className="my-6">
        <p className="text-lg">{data.intro}</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Top 10 hospitals</h2>
        <table className="min-w-full border mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">Rank</th>
              <th className="p-2 text-left">Hospital</th>
              <th className="p-2 text-left">Location</th>
              <th className="p-2 text-left">Strengths</th>
              <th className="p-2 text-left">Highlights</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.rank} className="border-t">
                <td className="p-2">{item.rank}</td>
                <td className="p-2">
                  <a href={item.website} className="text-blue-600 hover:underline">
                    {item.name}
                  </a>
                </td>
                <td className="p-2">{item.location}</td>
                <td className="p-2">{item.strengths.join(", ")}</td>
                <td className="p-2">{item.highlights}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
