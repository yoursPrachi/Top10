// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // Automatically send user to hospital ranking page
  redirect("/top-10-best-hospitals-in-new-york-2025");
}
