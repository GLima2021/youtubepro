import { Shield, Play } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "7 DIAS DE GARANTIA PARA EXPERIMENTAR",
      description: "Teste o curso por 7 dias completos",
    },
    {
      icon: Shield,
      title: "AMBIENTE 100% SEGURO PARA SUA COMPRA",
      description: "Compra protegida e segura",
    },
    {
      icon: Play,
      title: "ACESSO IMEDIATO ÀS AULAS NA COMPRA",
      description: "Comece a estudar agora mesmo",
    },
  ]

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="bg-black/80 border-2 border-red-600 rounded-2xl p-8 shadow-lg shadow-cyan-500/20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 text-center md:text-left">
                <feature.icon className="w-12 h-12 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
