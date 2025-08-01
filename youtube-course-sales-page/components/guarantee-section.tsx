import Image from "next/image"

export function GuaranteeSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="7 Day Guarantee"
              width={300}
              height={300}
              className="mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">VOCÊ ESTÁ SEGURO, FIQUE TRANQUILO!</h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                <span className="text-white">
                  O código de defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso em caso de
                  insatisfação com o produto.
                </span>
              </p>
              <p className="text-orange-400">
                E se por QUALQUER RAZÃO você entender que este treinamento não é para você, basta me avisar e que te
                devolvo cada centavo que você investiu, sem qualquer questionamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
