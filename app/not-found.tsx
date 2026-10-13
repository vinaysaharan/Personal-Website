import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x section min-h-[60svh] flex flex-col justify-center">
      <p className="t-mono text-slate">404</p>
      <h1 className="t-display-lg mt-4 max-w-[14ch]">This page is not built yet.</h1>
      <p className="t-lead text-slate mt-6">The link may be old, or the page may have moved. Try one of these instead.</p>
      <div className="flex flex-wrap gap-3 mt-10">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/work" className="btn btn-ghost">Work</Link>
        <Link href="/services" className="btn btn-ghost">Services</Link>
        <Link href="/contact" className="btn btn-ghost">Contact</Link>
      </div>
    </section>
  );
}
