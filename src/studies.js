
let study=[
    {
        id:1,
        institucion:"IED Bicentenario",
        añoInicio:"2014",
        añoFin:"2020",
        titulo:"Bachiller",
    },
    {
        id:2,
        institucion:"Universidad Tecnológica de Pereira",
        añoInicio:"2021",
        añoFin:"2021",
        titulo:"Diplomado en desarrollo de aplicaciones moviles",
    },
    {
        id:3,
        institucion:"Kuepa Edutech",
        añoInicio:"2022",
        añoFin:"En curso",
        titulo:"Técnico en Digitación y procesamiento de datos con énfasis en desarrollo frontend",
    },
    {
        id:4,
        institucion:"Servicio Nacional de aprendizaje",
        añoInicio:"2021",
        añoFin:"2021",
        titulo:"Certificado en Arquitectura de computo",
    },
    {
        id:5,
        institucion:"Servicio Nacional de aprendizaje",
        añoInicio:"2020",
        añoFin:"2020",
        titulo:"Certificado en Excel Básico",
    }
    ,
    {
        id:6,
        institucion:"Servicio Nacional de aprendizaje",
        añoInicio:"2021",
        añoFin:"2021",
        titulo:"Certificado en Desarrollo web con PHP",
    }
]

export function getAllStudy(){
    return study;
}

export function getStudy(id){
    return study.find((s)=> s.id===id);
}