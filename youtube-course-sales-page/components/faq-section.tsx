import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "O que é isso tudo?",
      answer: "Um conteúdo completo que vai te proporcionar criar um canal de sucesso no youtube.",
    },
    {
      question: "Como eu vou receber esse guia?",
      answer:
        "Você terá acesso a vídeo aulas onde ensinamos tudo que você precisa para ter sucesso utilizando o youtube de forma profissional",
    },
    {
      question: "Em quanto tempo vou ter resultados com o que vou aprender nesse programa?",
      answer:
        "Você pode começar a ver os resultados no aprendizado com extrema rapidez … Em alguns dias depois de começar. Quanto mais você fizer disso parte de sua rotina diária, mais rápido você vai obter os resultados que deseja.",
    },
    {
      question: "E se eu não tiver tempo para estudar?",
      answer:
        "O curso foi desenvolvido para ser flexível. Você pode estudar no seu próprio ritmo, quando tiver tempo disponível. As aulas são organizadas em módulos curtos para facilitar o aprendizado.",
    },
    {
      question: "Como vou receber acesso ao método?",
      answer:
        "Após a confirmação do pagamento, você receberá imediatamente por email os dados de acesso à plataforma onde estão todas as aulas do curso.",
    },
    {
      question: "Existe alguma garantia que o programa funciona?",
      answer:
        "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">DÚVIDAS FREQUENTES</h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-red-500/30 rounded-lg bg-black/50 shadow-lg shadow-red-500/10"
              >
                <AccordionTrigger className="text-white font-semibold px-6 py-4 hover:text-red-400 transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-4 text-lg">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
