import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-br from-red-900/20 via-black to-red-900/20">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="/placeholder.svg?height=100&width=300"
          alt="YouTube Pro"
          width={300}
          height={100}
          className="mx-auto mb-6"
        />

        <div className="text-gray-300 text-sm max-w-4xl mx-auto space-y-4">
          <p className="text-red-500 font-semibold">Termos de Uso – Políticas de Privacidade – Contato</p>

          <p>
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não
            deve ser interpretada como uma garantia de resultados. Para garantir que as estratégias tragam resultados, é
            necessário aplicar todos os ensinamentos conforme o recomendado. Os resultados podem variar e dependem
            unicamente de cada pessoa em colocar em prática as estratégias aprendidas. Lembre-se que cada um tem sua
            individualidade, experiência e rotinas, não compare seu resultado com o de outros e siga dando o seu melhor
            todos os dias. A chave para ter resultados e sucesso é a consistência.
          </p>

          <p className="text-red-500 font-semibold">Este Curso – Tem Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
