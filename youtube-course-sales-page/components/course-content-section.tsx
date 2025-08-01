import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export function CourseContentSection() {
  const modules = [
    {
      title: "MÓDULO 01 - Comece por aqui",
      content: ["Configurando a conta", "Configurando meios de pagamento"],
    },
    {
      title: "MÓDULO 02 - Conhecendo a ferramenta",
      content: ["Conhecendo o Dashboard do Google"],
    },
    {
      title: "MÓDULO 03 - Planejador de palavras",
      content: ["Como usar o planejador de palavras chaves lucrativas"],
    },
    {
      title: "MÓDULO 04 - Rede de pesquisas",
      content: ["Aprenda como criar uma campanha lucrativa utilizando a rede de pesquisa para seus anúncios"],
    },
    {
      title: "MÓDULO 05 - Rede de display",
      content: ["Criando uma campanha passo a passo de forma simples e descomplicada"],
    },
    {
      title: "MÓDULO 06 - Google Tag Manager",
      content: ["Aprenda como fazer toda configuração profissional para obter o máximo de resultado na plataforma"],
    },
    {
      title: "MÓDULO 07 - YouTube",
      content: ["Aprenda como criar e configurar uma campanha de sucesso utilizando o YouTube"],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* First Content Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="YouTube Creator"
              width={500}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
              Aprenda como criar um canal no YouTube, crescer de forma orgânica e monetizar pra ter uma renda extra
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Muitas pessoas tentam criar um canal no youtube com o objetivo de fazer uma renda extra mas acabam ficando
              pelo meio do caminho, isso é mais comum do que você imagina e isso acontece porque a maioria não faz a
              coisas certa, trabalha sem rumo e sem direção, a boa notícia é que eu posso te mostrar uma metodologia
              simples e eficiente para criação do seu canal projetando um crescimento rápido pra começar o quanto antes
              a monetização dos seus vídeos.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold px-8 py-4 rounded-2xl mb-6 hover:scale-105 transition-all duration-300"
            >
              QUERO SER PRO NO YOUTUBE AGORA
            </Button>
            <Image
              src="/placeholder.svg?height=100&width=300"
              alt="Payment Methods"
              width={300}
              height={100}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Method Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-900 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">VENDA TODOS OS DIAS COM O MÉTODO</h2>
              <p className="text-white text-lg">
                Um curso desenvolvido por quem já lucra usando esta ferramenta! E quer ajudar você também conquistar uma
                renda que jamais imaginou na vida!
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Success Chart"
                width={400}
                height={300}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="text-center mb-12">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Course Content"
            width={300}
            height={200}
            className="mx-auto mb-8 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CONHEÇA O CONTEÚDO QUE <span className="text-red-500">VOCÊ VAI APRENDER NESTE CURSO</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Um curso completo do zero ao avançado com mais de 5 horas de vídeo aulas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-red-500/30 rounded-lg bg-black/50 shadow-lg shadow-red-500/10"
              >
                <AccordionTrigger className="text-white font-semibold px-6 py-4 hover:text-red-400 transition-colors">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-4">
                  <ul className="space-y-2">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
