import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>Ups, keni humbur rrugën?</div>
      <div>
        Kthehu në{" "}
        <Link href="/">
          <span className="text-blue-400">fillim</span>
        </Link>{" "}
        të faqes ose ktheu{" "}
        <a
          onClick={() => router.back()}
          className="text-rose-400 cursor-pointer"
        >
          mbrapa
        </a>
        .
      </div>
    </div>
  );
}
