//** formateo de fechas & +
export const formateos = {

    forFormatFecha : (value)  => {
        const dayjsFecha = dayjs(value).add(1,"day").format('DD/MM/YYYY')
        return dayjsFecha
    },
    forDependenciaCausante: (arreglo, id) => {
        let nombre = ""
        arreglo.forEach(item=>{
            if(item._id === id){ nombre = item.nombre }
        })
        return nombre 
    }
}

