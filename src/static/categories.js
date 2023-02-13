import { useTranslation } from "react-i18next"

export const Category = () => {
    const { t } = useTranslation()
    return [
        {
            id: 0,
            title: t("Barchasi"),
            link: "/"
        },
        {
            id: 1,
            title: t("Avtomobillar"),
            link: "/avtomobiles"
        },
        {
            id: 2,
            title: t("MaishiyTexnika"),
            link: "/appliances"
        },
        {
            id: 3,
            title: t("Elektronjihozlar"),
            link: "/electronics"
        },
        {
            id: 4,
            title: t("Uyjoylar"),
            link: "/houses"
        },
        {
            id: 5,
            title: t("Mebellar"),
            link: "/mebels"
        },
        {
            id: 6,
            title: t("QurilishMollari"),
            link: "/xostovarlar"
        },
        {
            id: 7,
            title: t("Chorvamollari"),
            link: "/chorva"
        },
    ]
}