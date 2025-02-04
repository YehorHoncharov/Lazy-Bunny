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

async function deleteGenreById(id: number) {
  const deletedGenre = await prisma.genre.delete({
      where: {
        id: 1
      }, 
  });
  console.log('Жанр удалён:', deletedGenre);
}

async function deleteActorById(id: number) {
  const deletedActor = await prisma.actor.delete({
      where: {
        id: 1
      }, 
  });
  console.log('actor удалён:', deletedActor);
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

async function deleteMovieById(movieId: number) {
  try {
    const deletedMovie = await prisma.movie.delete({
      where: {
        id: movieId, 
      },
    });
    console.log('Фильм успешно удален:', deletedMovie);
  } catch (error) {
    console.error('Ошибка при удалении фильма:', error);
  }
}

async function deleteComentById(id: number){
  const deletedComment = await prisma.comment.delete({
    where: {
      id: id, 
    },
  });
  console.log('фильм удалён:', deletedComment);
}

async function createMovie(){
  const movies = await prisma.movie.create({
      data: 
          { Name: "Last", 
            ReleaseDate: "14.02",
            Year: 2014,
            Country: "USA",
            Director: "Anthony DiBlasie",
            Duration: "1.5 hours", 
            Screenwriter: "Adam Barber", 
            Description: "A rookie cop's last night before their station is closed turns into a living nightmare.", 
            Language:"english",
            FilmCompany:"Skyra Entertainment",
            Img:"https://irecommend.ru/sites/default/files/product-images/2315946/xyAIGoU4LOaNdEJBTYRmxw.jpg" ,
            Rating: 8,
            Actors: {connectOrCreate: {
              where: {id: 1},
              create: {
                Actor:{
                  create:{
                    name: "Juliana ",
                    surname: "Harkvy",
                    dateOfBirth: 1987,
                    placeOfBirth: "USA, California",
                    height: 176,
                    career: "крутая баба",
                    totalMovies: 15,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rt6v5EqgSe0iIvx3iJmRinsC3OcAvq2wLA&s"
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
                    name:"triller",
                  }
                }
              }
            }}
          }
        })
}

async function main() {
    await createMovie();
    // await createComments()
    // await deleteMovieById(6)
    // await getAllGenres();
    // await getMovieById();
    // await getAllMovies();
    // await deleteGenreById(1)
    // await deleteComentById(1)
    // await deleteActorById(1)
};

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})