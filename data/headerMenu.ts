import { IMenuHeader } from "@/components/layout/header/header.type";

export const menuHeader: IMenuHeader[] = [
  { label: "О нас", href: "/about", child: [] },
  {
    label: "Услуги",
    href: "/service",
    child: [
      {
        label: "Обивка мягкой мебели",
        href: "/service/obivka-myagkoi-mebeli",
      },
      {
        label: "Замена механизмов",
        href: "/service/zamena-mehanizmov",
      },
      {
        label: "Изготовление матрасов",
        href: "/service/izgotovlenie-matrasov",
      },
      {
        label: "Изменение дизайна",
        href: "/service/izmenenie-dizaina",
      },
      {
        label: "Частичный ремонт мебели",
        href: "/service/chastichnyy-remont",
      },
      {
        label: "Рестораны, бары, кафе",
        href: "/service/restorany-bary-kafe",
      },
      {
        label: "Реставрация мебели",
        href: "/service/restavraciya-mebeli",
      },
      {
        label: "Мебель на заказ",
        href: "/service/mebel-na-zakaz",
      },
    ],
  },
  { label: "Работы", href: "/portfolio", child: [] },
  { label: "Материалы", href: "/catalog", child: [] },
  { label: "Контакты", href: "/contact", child: [] },
];
