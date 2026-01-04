// "use client"
// import { useState } from 'react'

// export default function Services() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedService, setSelectedService] = useState('')

//   const services = [
//     {
//       name: "Manufacturing",
//       description: "Industry-grade steel solutions built to last.",
//       details: "We provide state-of-the-art manufacturing processes for steel products, ensuring precision and quality in every piece we produce."
//     },
//     {
//       name: "Supply Chain",
//       description: "Industry-grade steel solutions built to last.",
//       details: "Our comprehensive supply chain management ensures timely delivery and optimal inventory control for all your steel needs."
//     },
//     {
//       name: "Custom Fabrication",
//       description: "Industry-grade steel solutions built to last.",
//       details: "Tailored fabrication services to meet your specific steel requirements and designs, from concept to completion."
//     },
//   ]

//   const openModal = (serviceName: string) => {
//     setSelectedService(serviceName)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     setSelectedService('')
//   }

//   return (
//     <section id="services" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12">
//           Our Services
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service) => (
//             <div key={service.name} className="border p-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300 cursor-pointer" onClick={() => openModal(service.name)}>
//               <h3 className="font-semibold mb-3">
//                 {service.name}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
//           <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-bold">{selectedService}</h3>
//               <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
//             </div>
//             <p className="text-gray-600">
//               {services.find(s => s.name === selectedService)?.details}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

"use client"
import { useState } from "react"

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const services = [
    {
      name: "Manufacturing",
      description: "Industry-grade steel solutions built to last.",
      details:
        "We provide state-of-the-art manufacturing processes for steel products, ensuring precision and quality in every piece we produce.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
    },
    {
      name: "Supply Chain",
      description: "Industry-grade steel solutions built to last.",
      details:
        "Our comprehensive supply chain management ensures timely delivery and optimal inventory control for all your steel needs.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
    },
    {
      name: "Custom Fabrication",
      description: "Industry-grade steel solutions built to last.",
      details:
        "Tailored fabrication services to meet your specific steel requirements and designs, from concept to completion.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
    }
  ]

  const openModal = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Our Services
        </h2>

        {/* ORIGINAL SERVICE CARDS – UNCHANGED */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.name}
              className="border p-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(service)}
            >
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

      {/* GLASSMORPHIC MODAL */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl overflow-hidden
            bg-white/20 backdrop-blur-xl border border-white/30
            shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE */}
            <div className="h-48 w-full">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                }}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 text-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  {selectedService.name}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-white text-2xl"
                >
                  &times;
                </button>
              </div>

              <p className="text-white/80 leading-relaxed">
                {selectedService.details}
              </p>

              <button
                className="mt-6 rounded-lg px-6 py-2 bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
