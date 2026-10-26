export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-12 text-sm">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <p className="font-semibold mb-4">Socials</p>
          <div className="space-y-2 text-white/70">
            <a href="#" className="block hover:text-accent">Instagram</a>
            <a href="#" className="block hover:text-accent">LinkedIn</a>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-4">Legals</p>
          <div className="space-y-2 text-white/70">
            <a href="#" className="block hover:text-accent">Terms & Conditions</a>
            <a href="#" className="block hover:text-accent">Privacy Policy</a>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-white/50">© Aristocrat 2026</p>
        </div>
      </div>
    </footer>
  );
}