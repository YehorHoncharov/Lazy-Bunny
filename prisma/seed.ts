import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function createMovies(){
    const movies = await prisma.movie.createMany({
        data: [
            {name: "Один дома", rating: 4.5, year: 1990, language: "English", country: "USA", ageRating: 15},
            {name: "Гарри Поттер и філософський камень", rating: 4.1, year: 2001, language: "English", country: "USA", ageRating: 10},
            {name: "Гарри Поттер и таємна кімната", rating: 4.8, year: 2002, language: "English", country: "USA", ageRating: 20},
            {name: "Гладіатор", rating: 3.5, year: 2000, language: "English", country: "USA", ageRating: 8},
            {name: "Чарлі та шоколадна фабрика", rating: 5, year: 2005, language: "English", country: "USA", ageRating: 15},
        ]
    })
}

async function getAllGenres(){
    const findAllGenres = await prisma.genre.findMany({
        where: {
            id: 1
        }
    });
    console.log(findAllGenres)
}

async function getMovieById() {
    const findMovie = await prisma.movie.findUnique({
        where: {
            id: 1
        }
    });
    console.log(findMovie);
}


async function main() {
    await createMovies();
    // await getAllGenres();
    // await getMovieById();
};

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})