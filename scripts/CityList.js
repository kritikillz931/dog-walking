import { getCityList } from "./database.js"

const cities = getCityList()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

