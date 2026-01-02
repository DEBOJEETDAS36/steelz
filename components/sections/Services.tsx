"use client"
import { useState } from 'react'

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const services = [
    {
      name: "Manufacturing",
      description: "Industry-grade steel solutions built to last.",
      details: "We provide state-of-the-art manufacturing processes for steel products, ensuring precision and quality in every piece we produce."
    },
    {
      name: "Supply Chain",
      description: "Industry-grade steel solutions built to last.",
      details: "Our comprehensive supply chain management ensures timely delivery and optimal inventory control for all your steel needs."
    },
    {
      name: "Custom Fabrication",
      description: "Industry-grade steel solutions built to last.",
      details: "Tailored fabrication services to meet your specific steel requirements and designs, from concept to completion."
    },
  ]

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService('')
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.name} className="border p-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300 cursor-pointer" onClick={() => openModal(service.name)}>
              <h3 className="font-semibold mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedService}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <p className="text-gray-600">
              {services.find(s => s.name === selectedService)?.details}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
