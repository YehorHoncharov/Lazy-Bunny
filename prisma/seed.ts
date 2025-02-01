import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// async function createMovies(){
//     const movies = await prisma.movie.create({
//         data: 
//             { Name: "Один дома", 
//               ReleaseDate: "25.10",
//               Year: 1990, Country: "USA",
//               Director: "Serj",
//               Duration: "3 hours", 
//               Screenwriter: "Kahnarov", 
//               Description: "zxc", 
//               Language:"arab",
//               FilmCompany:"SergeyAndCo",
//               MoodImg:"bebeb" ,
//               Img:"bebebe" ,
//               Rating: 4,
//               Actors: {connectOrCreate: {
//                 where: {id: 1},
//                 create: {
//                   Actor:{
//                     create:{
//                       firstName: "John",
//                       lastName: "Sigma"
//                     }
//                   }
//                 }
//                 }  
//               },
//               Genres:{connectOrCreate:{
//                 where:{id:1},
//                 create:{
//                   Genre:{
//                     create:{
//                       name:"bebebe",
//                     }
//                   }
//                 }
//               }}
//     }})
// }




async function getAllGenres(){
    const findAllGenres = await prisma.genre.findMany({
        where: {
            id: 1
        }
    });
    console.log(findAllGenres)
}
async function getAllMovies(){
    const findAllMovies = await prisma.movie.findMany({
      include:{
        Genres: {include: {Genre: true}},
        Actors: true
      }
    });
    console.log(findAllMovies)
}

async function getMovieById() {
    const findMovie = await prisma.movie.findUnique({
        where: {
            id: 1
        }, 
        include: {
          Genres: {include: {Genre: true}},
          Actors: true
        }
    });
    console.log(findMovie?.Genres);
}

async function createComments() {
            const comments = await prisma.comment.createMany({
              data: [
                {
                  author: "Богдан",
                  text: "под пиво с рыбкой самое то",
                  movieId: 1, 
                },
                {
                  author: "Богдан",
                  text: "zxczxczxc",
                  movieId: 1, 
                },
              ],
            });
            console.log(comments);
        }

// async function deleteMovieById(id: number){
//       const deletedMovie = await prisma.movie.delete({
//         where: {
//           id: id, 
//         },
//       });
//       console.log('фильм удалён:', deletedMovie);
//     }

async function createMovies(){
  const movies = await prisma.movie.create({
      data: 
          { Name: "Django", 
            ReleaseDate: "13.12",
            Year: 2025, Country: "Ukraine",
            Director: "Serj",
            Duration: "3 hours", 
            Screenwriter: "Kashnarov", 
            Description: "zxc", 
            Language:"arab",
            FilmCompany:"SergeyAndCo",
            MoodImg:"bebeb" ,
            Img:"bebebe" ,
            Rating: 4,
            Actors: {connectOrCreate: {
              where: {id: 1},
              create: {
                Actor:{
                  create:{
                    firstName: "John",
                    lastName: "Sigma"
                  }
                }
              }
              }  
            },
            Genres:{connectOrCreate:{
              where:{id:1},
              create:{
                Genre:{
                  create:{
                    name:"bebebe",
                  }
                }
              }
            }}
  }})
}

async function main() {
    // await createMovies();
    await createComments()
    // await deleteMovieById(10)
    // await getAllGenres();
    // await getMovieById();
    // await getAllMovies();
};

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})