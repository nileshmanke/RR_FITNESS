export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 bg-white/95 backdrop-blur z-40 shadow-inner">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between text-sm">
        <div>© {new Date().getFullYear()} RR Fitness</div>
        <div className="text-gray-600">Built with ❤️ • RR_FITNESS</div>
      </div>
    </footer>
  );
}
