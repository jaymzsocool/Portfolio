import tacolog from "../imgs/taco-log.PNG"
import adven from "../imgs/the-great-adventure.PNG"

export const projects = [
    {
        id:1,
        title:"Taco Log",
        description:"Worked in a team of four students and a project manager to simulate real world developement process.",
        site_address:"https://taco-logs.netlify.com/",
        imgurl:tacolog,
        imgalt:"taco-log"
    },
    {
        id:2,
        title:"The Great Adventure",
        description:"Worked in a independently making a text-based game using python/django back end with react as the front end/ UI.",
        site_address:"https://great-adventure.netlify.com/",
        imgurl:adven,
        imgalt:"great-adventure"
    }
]

export default {
    projects,
}
