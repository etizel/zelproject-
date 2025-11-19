export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Etizel · Simbiose entre polaridades
        </p>
      </div>
    </footer>
  );
}

