// app/top-10-best-hospitals-in-new-york-2025/page.tsx

export default function HospitalsPage() {
  const hospitals = [
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
    },
    {
      rank: 4,
      name: "Memorial Sloan Kettering Cancer Center",
      location: "Manhattan",
      strengths: ["Oncology"],
      highlights: "World leader in cancer treatment and research",
      website: "https://www.mskcc.org"
    },
    {
      rank: 5,
      name: "Hospital for Special Surgery (HSS)",
      location: "Manhattan",
      strengths: ["Orthopedics", "Sports Medicine"],
      highlights: "Nation’s #1 in orthopedics",
      website: "https://www.hss.edu"
    }
    // Add more hospitals up to rank 10
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Top 10 Best Hospitals in New York — 2025 Edition
      </h1>
      <p className="text-gray-600 mb-6">
        Ranked for cardiology, oncology, neurology, surgery, and patient outcomes.
      </p>

      <table className="min-w-full border border-gray-200">
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
          {hospitals.map((h) => (
            <tr key={h.rank} className="border-t">
              <td className="p-2">{h.rank}</td>
              <td className="p-2">
                <a href={h.website} target="_blank" className="text-blue-600 hover:underline">
                  {h.name}
                </a>
              </td>
              <td className="p-2">{h.location}</td>
              <td className="p-2">{h.strengths.join(", ")}</td>
              <td className="p-2">{h.highlights}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
