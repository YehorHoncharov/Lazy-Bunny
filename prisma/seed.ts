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

async function createMovie() {
  const movies = await prisma.movie.create({
    data: {
      Name: "The Exorcist",
      ReleaseDate: "26.12",
      Year: 1973,
      Country: "USA",
      Director: "William Friedkin",
      Duration: "2.02 hours",
      Screenwriter: "William Peter Blatty",
      Description: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
      Language: "english",
      FilmCompany: "Warner Bros.",
      Img: "https://m.media-amazon.com/images/I/61tF7jKagWL._AC_UF894,1000_QL80_.jpg",
      Rating: 8.1,
      Actors: {
        connectOrCreate: {
          where: { id: 13 },
          create: {
            Actor: {
              create: {
                name: "Linda",
                surname: "Blair",
                dateOfBirth: 1959,
                placeOfBirth: "USA, Missouri",
                height: 165,
                career: "Actress known for her role in The Exorcist",
                totalMovies: 70,
                image: "https://www.famousbirthdays.com/headshots/linda-blair-5.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 13 },
          create: {
            Genre: {
              create: {
                name: "supernatural horror",
              }
            }
          }
        }
      }
    }
  });
}


async function main() {
    await createMovie();
    // await createComments()
    // await deleteMovieById(4)
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