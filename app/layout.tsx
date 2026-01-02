import "./globals.css"

export const metadata = {
  title: "Steelz | Industrial Steel Solutions",
  description: "High quality steel manufacturing and supply",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
