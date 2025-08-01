import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BonusSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-red-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Bonus Package"
              width={600}
              height={500}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              2 SUPER BÔNUS <span className="text-red-500">EXCLUSIVOS</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Comprando agora você vai receber 2 Bônus selecionados e exclusivos!
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-red-500 font-bold text-xl mb-2">BÔNUS 01:</h3>
                <p className="text-gray-300">
                  Super pack com diversas palavras de alta conversão para você bombar seus anúncios com qualidade e
                  garantir o máximo de visibilidade!
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-bold text-xl mb-2">BÔNUS 02:</h3>
                <p className="text-gray-300">
                  Um curso completo te ensinando a criar anúncios na plataforma{" "}
                  <span className="text-white font-semibold">TABOOLA</span> para obter o máximo de desempenho e
                  conversão em suas campanhas patrocinadas.
                </p>
              </div>
            </div>

            <p className="text-red-500 font-semibold mb-8">
              Não perca tempo! Compre agora o seu curso para garantir esses bônus.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold px-8 py-4 rounded-2xl mb-6 hover:scale-105 transition-all duration-300"
            >
              QUERO SER PRO NO YOUTUBE
            </Button>

            <Image
              src="/placeholder.svg?height=80&width=300"
              alt="Secure Payment"
              width={300}
              height={80}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
