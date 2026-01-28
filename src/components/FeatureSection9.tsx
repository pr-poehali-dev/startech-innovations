import Icon from '@/components/ui/icon'

const features = [
  {
    icon: "Home",
    title: "Квартиры и дома",
    description: "Полная дезинфекция жилых помещений с безопасными препаратами. Быстро, эффективно, без запаха.",
  },
  {
    icon: "Building2",
    title: "Офисы и коммерческие помещения",
    description: "Обработка офисов, магазинов, салонов с минимальным прерыванием работы.",
  },
  {
    icon: "Warehouse",
    title: "Склады и производства",
    description: "Комплексная обработка больших площадей. Современное оборудование.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия качества",
    description: "Сертифицированные препараты, опытные специалисты. Документы после работы.",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Возможности</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Наши услуги</h2>
          <p className="text-base text-muted-foreground">
            Профессиональная дезинфекция любых помещений в Екатеринбурге:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 items-center text-center">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={feature.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}