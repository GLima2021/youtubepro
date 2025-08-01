import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-red-900/20 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/placeholder.svg?height=120&width=400"
            alt="YouTube Pro Logo"
            width={400}
            height={120}
            className="mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Descubra como criar, otimizar e ganhar mais inscritos para começar a{" "}
            <span className="text-red-500">monetizar o seu canal</span>
          </h1>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full">
                <Play className="w-6 h-6 mr-2" />
                Assistir Vídeo
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=480&width=854"
              alt="Video Thumbnail"
              fill
              className="object-cover opacity-70"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold px-12 py-4 rounded-2xl text-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
          >
            QUERO SER PRO NO YOUTUBE AGORA
          </Button>
        </div>

        {/* Course Preview Image */}
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Course Preview"
            width={400}
            height={300}
            className="mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
