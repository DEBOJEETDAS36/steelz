"use client"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="text-gray-900 font-medium">abc@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-600 text-sm">Location</p>
                <p className="text-gray-900 font-medium">
                  123 Steel Street, Industrial City, IC 12345
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg">
              <iframe
                src="https://maps.google.com/maps?q=40.7128,-74.0060&z=15&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Wrapper */}
              {["name", "email"].map((field) => (
                <div key={field} className="relative group">
                  <span className="pointer-events-none absolute inset-0 rounded-lg bg-blue-400/40 opacity-0 blur-sm transition-opacity duration-300 group-focus-within:opacity-100" />
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    required
                    placeholder={field === "email" ? "your@email.com" : "Your Name"}
                    className="relative z-10 w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="relative group">
                <span className="pointer-events-none absolute inset-0 rounded-lg bg-blue-400/40 opacity-0 blur-sm transition-opacity duration-300 group-focus-within:opacity-100" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="relative z-10 w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-400 rounded-lg border border-gray-700 resize-none focus:outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
