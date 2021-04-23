import { getWalkers, getCityList } from "./database.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers ) {
                for (const city of cities) {
                if (walker.id === parseInt(walkerId) && walker.cityId === parseInt(city.id)) {
                    window.alert(`${walker.name} services ${city.city}`)
                }
            }
            }
        }
    }
)

const walkers = getWalkers()
const cities = getCityList()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

