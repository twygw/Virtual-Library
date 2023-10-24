// import the Media class:
const film  = require("./classes/Media")
// create your Movie class:
class Movie extends Media{
    constructor(director,duration,rating,title,year,genre){
        super(title,genre,year)
        this.director = director
        this.duration = duration
        this.rating = rating
    }
    summery(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${rating}`
    }
}
// don't change below
module.exports = Movie;