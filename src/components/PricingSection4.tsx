import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const pricingData = {
  plans: [
    {
      name: "Базовый",
      description: "Для квартир и небольших помещений.",
      features: [
        {
          name: "Обработка до 50 м²",
          tooltip: "Подходит для однокомнатных квартир",
        },
        {
          name: "Безопасные препараты",
          tooltip: "Сертифицированные средства",
        },
        {
          name: "Выезд в течение 24 ч",
          tooltip: "Быстрый выезд специалиста",
        },
      ],
      pricing: {
        monthly: 3500,
        annually: 3500,
      },
      variant: "secondary",
    },
    {
      name: "Стандарт",
      description: "Для офисов и коммерческих помещений.",
      badge: "Популярный",
      features: [
        {
          name: "Обработка до 150 м²",
          tooltip: "Подходит для офисов и магазинов",
        },
        {
          name: "Усиленная защита",
          tooltip: "Профессиональные препараты",
        },
        {
          name: "Выезд в течение 6 ч",
          tooltip: "Приоритетный выезд",
        },
        {
          name: "Документы о проведении",
          tooltip: "Полный пакет документов",
        },
      ],
      pricing: {
        monthly: 8500,
        annually: 8500,
      },
      variant: "default",
    },
    {
      name: "Премиум",
      description: "Для складов и производств.",
      features: [
        {
          name: "Обработка от 300 м²",
          tooltip: "Для больших площадей",
        },
        {
          name: "Профессиональное оборудование",
          tooltip: "Современные генераторы и распылители",
        },
        {
          name: "Срочный выезд 2-4 ч",
          tooltip: "Экстренный выезд бригады",
        },
        {
          name: "Лабораторный контроль",
          tooltip: "Проверка эффективности обработки",
        },
      ],
      pricing: {
        monthly: 0,
        annually: 0,
      },
      variant: "secondary",
    },
  ],
}

export function PricingSection4() {
  const [billingPeriod, setBillingPeriod] = React.useState("monthly")

  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Тарифы</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Цены на услуги
            </h2>
            <p className="text-base text-muted-foreground">Выберите пакет для вашего объекта</p>
          </div>



          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {pricingData.plans.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-0.5">
                    <span className="text-4xl font-semibold leading-10">
                      {plan.pricing.monthly === 0 ? 'По запросу' : `${plan.pricing.monthly} р`}
                    </span>
                  </div>

                  <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                    {plan.pricing.monthly === 0 ? "Получить консультацию" : "Заказать"}
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">
                    Что включено:
                  </p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info
                                className={`h-4 w-4 ${index === 2 ? "opacity-40" : "text-muted-foreground opacity-70"}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}