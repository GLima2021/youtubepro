"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-red-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/80 border-2 border-red-600 rounded-2xl p-8 shadow-2xl shadow-red-500/20">
            {/* Logo */}
            <div className="text-center mb-6">
              <Image
                src="/placeholder.svg?height=80&width=250"
                alt="YouTube Pro"
                width={250}
                height={80}
                className="mx-auto"
              />
            </div>

            {/* Offer Title */}
            <h2 className="text-3xl font-bold text-white text-center mb-4">OFERTA ESPECIAL</h2>

            {/* Countdown */}
            <div className="bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-6">
              <p className="font-bold text-lg">PROMOÇÃO ENCERRA EM POUCOS MINUTOS</p>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              {[
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="bg-black/60 border border-red-500 rounded-xl p-3 text-center">
                  <div className="text-3xl font-bold text-white">{item.value.toString().padStart(2, "0")}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="text-center mb-6">
              <p className="text-white text-lg mb-2">
                <span className="line-through">DE R$597,00</span> POR APENAS
              </p>
              <div className="text-6xl font-bold text-white mb-4">R$ 97,00</div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 text-xl rounded-lg mb-6 hover:scale-105 transition-all duration-300"
            >
              CLIQUE AQUI PARA COMPRAR
            </Button>

            {/* Payment Icons */}
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=400"
                alt="Payment Security"
                width={400}
                height={60}
                className="mx-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
