export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-8 text-center text-sm text-gray-400">
      <div className="mx-auto max-w-6xl px-4 space-y-2">
        <p className="text-gray-500">
          Built with precision. Designed for performance.
        </p>

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-300">Steelz</span>. All rights reserved.
        </p>

        <p className="text-xs text-gray-600">
          Made by <span className="text-gray-400">Aethel Labs</span>
        </p>
      </div>
    </footer>
  )
}
