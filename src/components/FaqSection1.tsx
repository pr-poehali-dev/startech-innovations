import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Какие препараты вы используете?",
    answer: "Мы работаем только с сертифицированными препаратами, безопасными для людей и животных. Все средства имеют необходимые разрешительные документы.",
  },
  {
    question: "Как быстро вы можете приехать?",
    answer: "Стандартный выезд — в течение 24 часов. При срочной необходимости можем приехать в течение 2-6 часов.",
  },
  {
    question: "Сколько времени занимает обработка?",
    answer:
      "В среднем обработка квартиры занимает 2-4 часа, офиса — 4-6 часов. Время зависит от площади и степени загрязнения.",
  },
  {
    question: "Выдаете ли документы?",
    answer:
      "Да, после обработки мы предоставляем полный пакет документов: акт выполненных работ, сертификаты на препараты, гарантийный талон.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Частые вопросы
          </h1>
          <p className="text-muted-foreground">
            Ответы на основные вопросы о дезинфекции. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Позвоните нам.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Нужна консультация?</h2>
            <p className="text-base text-muted-foreground">
              Звоните или оставьте заявку. Ответим в течение 15 минут!
            </p>
          </div>
          <Button aria-label="Заказать консультацию">Заказать звонок</Button>
        </div>
      </div>
    </section>
  )
}