const { fontType, numbers } = require("../../helpers/constants");
import { percentExperience } from "../../helpers/functions"; 


export const Experiences = Object.freeze({
    GRUPO_SALINAS: {
        date: "Oct 2022 - Actuallity",
        city: "Mexico City. México",
        title: "Microservices Developer",
        place: "Grupo Salinas [Hybrid]",
        body: [
            { info: "Skills:", style: fontType.BOLD },
            { info: "✅ Java | SpringBoot " },
            { info: "✅ Kafka" },
            { info: "✅ CI/CD with Jenkins" },
            { info: "✅ API Gateway with ApiGee" },
        ],
    },
    GONET: {
        date: "Jul 2022 - Oct 2022",
        title: "iOS Mobile Developer",
        place: "Gonet [Remote]",
        body: [
            { info: "Skills:", style: fontType.BOLD },
            { info: "✅ Swift " },
        ],
    },
    HACIENDA_CHIAPAS: {
        date: "Oct 2020 - Oct 2022",
        city: "Tuxtla Gutiérrez, Chiapas. México",
        title: "Fullstack developer",
        place: "Secretaría de Hacienda del Estado de Chiapas [On site]",
        body: [
            { info: "Skills:", style: fontType.BOLD },
            { info: "✅ Microsoft SQL Server | Stored Procedures, Functions, Jobs " },
            { info: "✅ .NET | Microservices, Web API " },
            { info: "✅ VueJs | FrontEnd Apps" },
        ],
    },
    GLOBAL_TRANSFER: {
        date: "Jul 2020 - Oct 2020",
        city: "Tuxtla Gutiérrez, Chiapas. México",
        title: "Fullstack developer",
        place: "Global Transfer [On site]",
        body: [
            { info: "Skills:", style: fontType.BOLD },
            { info: "✅ Microsoft SQL Server | Stored Procedures, Functions, Jobs " },
            { info: "✅ C# | Restful Web Services" },
            { info: "✅ Flutter | Mobile App" },
            { info: "✅ Laravel | Web App" },
        ],
    },
    INDUXSOFT: {
        date: "Ago 2018 - Jan 2020",
        city: "Tuxtla Gutiérrez, Chiapas. México",
        title: "Fullstack developer",
        place: "Induxsoft Data Services [On site]",
        body: [
            { info: "Skills:", style: fontType.BOLD },
            { info: "✅ SQL Server | Stored Procedures, Functions, Jobs " },
            { info: "✅ MySQL | Stored Procedures, Functions, Jobs " },
            { info: "✅ C# | Console Applicatios, Monolithic Applications, SOAP Web services" },
            { info: "✅ Javascript | Web apps" },
            { info: "✅ PHP | Web Apps" },
            { info: "✅ VB | Monolithic Applications" },
            { info: "✅ Bootstrap | Web Apps " },
        ],
    },
});


export const Schools = Object.freeze({
    UNACH: {
        date: "2016 - 2022",
        city: "Tuxtla Gutiérrez, Chiapas. México",
        title: "Software Development and Technology Engineering",
        place: "Autonomous University of Chiapas",
        body: [
            { info: "Main topics: ", style: fontType.BOLD },
            { info: "🔷  Object Oriented Programming [OOP]" },
            { info: "🔷  Structured programming" },
            { info: "🔷  Database Management" },
            { info: "🔷  SOAP & REST services" },
            { info: "🔷  Robotics & AI" },
            { info: "🔷  Project management" },
            { info: "🔷  Web Apps" },
        ],
    },
    UNIBOYACA: {
        date: "January 2020 - June 2020",
        city: "Tunja, Boyacá. Colombia",
        title: "Exchange Student",
        place: "University of Boyacá",
        body: [
            { info: "I got a scholarship to study in Boyacá, Colombia." },
            {
                info: "Main learnings obtained during the school exchange period:",
                style: fontType.BOLD,
            },
            {
                info: "🔷  Programation with Python as a language for Big Data.",
            },
            { info: "🔷  SQL as a tool to store big data." },
            {
                info: "🔷  Project management with agile software development methodologies.",
            },
        ],
    },
});


export const HardSkills = Object.freeze([
    {
        title: "JAVA",
        experience: 2,
        isYear: true,
        percent: {
            value: percentExperience(2) + "%",
            isVisible: true,
        },
    },
    {
        title: "C# | .NET",
        experience: 4,
        isYear: true,
        percent: {
            value: percentExperience(4) + "%",
            isVisible: true,
        },
    },
    {
        title: "PHP",
        experience: 2,
        isYear: true,
        percent: {
            value: percentExperience(2) + "%",
            isVisible: true,
        },
    },
    {
        title: "SWIFT | FRONTEND",
        experience: 4,
        isYear: false,
        percent: {
            value: percentExperience(4, false) + "%",
            isVisible: true,
        },
    },
    {
        title: "VUE JS",
        experience: 1,
        isYear: true,
        percent: {
            value: percentExperience(1) + "%",
            isVisible: true,
        },
    },
    {
        title: "PYTHON",
        experience: 4,
        isYear: false,
        percent: {
            value: percentExperience(4, false) + "%",
            isVisible: true,
        },
    },
    {
        title: "MONGO DB",
        experience: 4,
        isYear: false,
        percent: {
            value: percentExperience(4, false) + "%",
            isVisible: true,
        },
    },
    {
        title: "SQL SERVER",
        experience: 2,
        isYear: true,
        percent: {
            value: percentExperience(2) + "%",
            isVisible: true,
        },
    },
    {
        title: "MYSQL",
        experience: 2,
        isYear: true,
        percent: {
            value: percentExperience(2) + "%",
            isVisible: true,
        },
    },
    {
        title: "APIS REST / SOAP",
        experience: 4,
        isYear: true,
        percent: {
            value: percentExperience(4) + "%",
            isVisible: true,
        },
    },
]);

export const SoftSkills = Object.freeze([
    {
        title: "SELF-TAUGHT",
        percent: {
            value: "100%",
            isVisible: false,
        },
    },
    {
        title: "RESPONSIBLE",
        percent: {
            value: "100%",
            isVisible: false,
        },
    },
    {
        title: "COLLABORATIVE",
        percent: {
            value: "100%",
            isVisible: false,
        },
    },
    {
        title: "ANALYTICAL",
        percent: {
            value: "100%",
            isVisible: false,
        },
    },
    {
        title: "PERSISTENT",
        percent: {
            value: "100%",
            isVisible: false,
        },
    },
    {
        title: "TEAM WORKER",
        percent: {
            value: "100%",
            isVisible: false,
        },
    },
]);


export const Courses = Object.freeze([
    {
        date: "May 2023",
        title: "CLOUD ARQUITECTURE",
        place: "Google Cloud Skills Boost",
        externalLink: "https://www.cloudskillsboost.google/public_profiles/a25389ce-740e-48a4-bb67-c3296f58f8aa/badges/3752007?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        body: "CHEEMS xdxdxdxxd",
    },
    {
        date: "May 2023",
        title: "GOOGLE CLOUD ESSENTIALS",
        place: "Google Cloud Skills Boost",
        externalLink: "https://www.cloudskillsboost.google/public_profiles/a25389ce-740e-48a4-bb67-c3296f58f8aa/badges/3778980?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        body: "CHEEMS iusadfhludsa",
    },
    {
        date: "May 2023",
        title: "CLOUD ENGINEERING",
        place: "Google Cloud Skills Boost",
        externalLink: "https://www.cloudskillsboost.google/public_profiles/a25389ce-740e-48a4-bb67-c3296f58f8aa/badges/3751266?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        body: "CHEEMS",
    },
    {
        date: "Jun 2022",
        title: "INTRODUCTION TO IOT",
        place: "CISCO ACADEMY",
        externalLink: "https://www.credly.com/badges/49f334de-98a8-4f7e-a62d-9eb58265f656?source=linked_in_profile",
        body: "CHEEMS",
    },
    {
        date: "May 2022",
        title: "SCRUM FUNDAMENTALS CERTIFIED",
        place: "SCRUMStudy",
        externalLink: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-FranciscoCrist%C3%B3balP%C3%A9rezHern%C3%A1ndez.-915871.pdf",
        body: "CHEEMS",
    },

]);

export const OtherCourses = Object.freeze([
    {
        date: "2022 - 2023",
        title: "CERTIFICATIONS BY PLATZI",
        place: "PLATZI ACADEMY",
        body: [
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            },
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            },
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            },
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            },
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            }
        ],
    },
    {
        date: "2022 - 2023",
        title: "CERTIFICATIONS BY CODIGOFACILITO",
        place: "CODIGOFACILITO",
        body: [
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            },
            {
                info: "Fundamentos de .NET",
                style: fontType.BOLD,
                externalLink: "https://platzi.com/p/devfcph/curso/2883-fundamentos-net/diploma/detalle/"
            },
        ],
    },
]);