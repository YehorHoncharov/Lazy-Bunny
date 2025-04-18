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
                  authorId: 7,
                  text: "под пиво с рыбкой самое то",
                  movieId: 1, 
                },
                {
                  authorId: 7,
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



// async function createSonic4() {
//   await prisma.movie.create({
//     data: {
//       Name: "Sonic the Hedgehog 4",
//       ReleaseDate: "20.12",
//       Year: 2024,
//       Country: "USA, Japan",
//       Director: "Jeff Fowler",
//       Duration: "2.05 hours", 
//       Screenwriter: "Pat Casey, Josh Miller, John Whittington",
//       Description: "The continuing adventures of Sonic the Hedgehog as he faces new threats in the human world alongside his friends Tails and Knuckles.",
//       Language: "english",
//       FilmCompany: "Paramount Pictures, SEGA",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N5ukWYipZbKxobxKBvV829mPAwrWMJlQrg&s", 
//       Rating: 7,
//       Baner: "https://i.ytimg.com/vi/yBMFN_xlLAc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHX1KR96moqXjylG2Zik-Xn9qQjg",
//       Mood: '',
//       Url: "https://youtu.be/qSu6i2iFMO0?si=WaraSHmRxMUgxeBd",
//       Moments: {
//         create: [
//           { url: "https://lifehacker.ru/wp-content/uploads/2025/01/Sonic3Horizontal4_1736791761.jpeg" },
//           { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUoQ4NyACAZE4I-O0vHy4y-BTRN0hnIEbHONYbW6ShUM2vSjK7HhRFe20rPwmDT5W550&usqp=CAU" },
//           { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsoxFUJr8etvlrvdDwGetI48hhsl8pBHwuQ&s" },
//           { url: "https://assetsio.gnwcdn.com/sonic_6tZ4wQP.webp?width=720&quality=70&format=jpg&auto=webp" },
//           { url: "https://www.afisha.uz/uploads/media/2024/12/5439e012ab1de4271b2af484a83c5af4.jpg" },
//           { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnkTTpBK65uzgtgGw0L88wXMfVQJlC8J2IBEcPgjBigkvpWrT1xzFtWHbfK_FqvylEg0&usqp=CAU" }
//         ]
//       },
//       Actors: {
//         connectOrCreate: [
//           {
//             where: { id: 1 },
//             create: {
//               Actor: {
//                 create: {
//                   name: "Ben",
//                   surname: "Schwartz",
//                   dateOfBirth: 1981,
//                   placeOfBirth: "USA, New York",
//                   height: 183,
//                   career: "Actor and comedian, known for voicing Sonic",
//                   totalMovies: 80,
//                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72k8x7Z99tDAQJ-YVFaHx1rkh53M30gBavQ&s"
//                 }
//               }
//             }
//           },
//           {
//             where: { id: 2 },
//             create: {
//               Actor: {
//                 create: {
//                   name: "Idris",
//                   surname: "Elba",
//                   dateOfBirth: 1972,
//                   placeOfBirth: "UK, London",
//                   height: 189,
//                   career: "Acclaimed actor known for roles in Thor, The Wire",
//                   totalMovies: 100,
//                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkn0H1HDSbbSY6DmQ8RpeZKkSNTa27xw4hg&s"
//                 }
//               }
//             }
//           }
//         ]
//       },
//       Genres: {
//         connectOrCreate: [
//           {
//             where: { id: 1 },
//             create: {
//               Genre: {
//                 create: {
//                   name: "action"
//                 }
//               }
//             }
//           },
//           {
//             where: { id: 2 },
//             create: {
//               Genre: {
//                 create: {
//                   name: "adventure"
//                 }
//               }
//             }
//           },
//           {
//             where: { id: 3 },
//             create: {
//               Genre: {
//                 create: {
//                   name: "comedy"
//                 }
//               }
//             }
//           }
//         ]
//       }
//     }
//   });
//   console.log('Фильм "Sonic the Hedgehog 3" добавлен.');
// }



async function skuf() {
  await prisma.movie.create({
    data: {
      Name: "The Babadook",
      ReleaseDate: "17.05",
      Year: 2014,
      Country: "Australia",
      Director: "Jennifer Kent",
      Duration: "1.34 hours",
      Screenwriter: "Jennifer Kent",
      Description: "A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her.",
      Language: "english",
      FilmCompany: "Entertainment One",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkWgcDSoM_-OZ5NyNwq5e2VsZbLaHV8RG6w&s",
      Rating: 6.8,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEPrGnvjXI-nXSgZ2kNXPTRQccmxMMooXdw&s",
      Mood: '',
      Url: "https://youtu.be/uLdqc4SFVsA?si=DlOLZpGdFjFPlv4B",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKenpZ6FElbsptBwmAjBI3f7PZKdTw9od-yQ&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JzKBTCFfROIh9XyCizeUvFnFzfBSaDYawg&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYGg_YvI0JtIZvKnqR8AYqfG49gdRICjI4Q&s" }
        ]
      },
      Actors: {
        connectOrCreate: {
          where: { id: 3 },
          create: {
            Actor: {
              create: {
                name: "Essie",
                surname: "Davis",
                dateOfBirth: 1970,
                placeOfBirth: "Australia, Tasmania",
                height: 170,
                career: "Acclaimed actress",
                totalMovies: 40,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Essie_Davis-67964.jpg/1200px-Essie_Davis-67964.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 4 },
          create: {
            Genre: {
              create: {
                name: "psychological horror"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Babadook" добавлен.');
}

async function createTheMaskedSinger() {
  await prisma.movie.create({
    data: {
      Name: "The Masked Singer",
      ReleaseDate: "02.01",
      Year: 2019,
      Country: "USA",
      Director: "Various",
      Duration: "1.30 hours",
      Screenwriter: "Various",
      Description: "Celebrity singing competition where famous faces are hidden under elaborate costumes.",
      Language: "english",
      FilmCompany: "Fox Broadcasting Company",
      Img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b6690b184419543.6551f920d6314.jpg",
      Rating: 7.2,
      Baner: "https://www.ovoarena.co.uk/assets/img/7324_75_TMS_Banner_Wembley_1440x810-dee6de4d9c.jpg",
      Mood: '',
      Url: "",
      Moments: {
        create: [
          { url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84a87f184419543.6551f920d4ef0.jpg" },
          { url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/756b62184419543.6551f920d4452.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: {
          where: { id: 11 },
          create: {
            Actor: {
              create: {
                name: "Nick",
                surname: "Cannon",
                dateOfBirth: 1980,
                placeOfBirth: "USA, California",
                height: 185,
                career: "TV Host, Actor",
                totalMovies: 25,
                image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Nick_Cannon_by_David_Shankbone.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 5 },
          create: {
            Genre: {
              create: {
                name: "show"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Masked Singer" успешно добавлен');
}

async function createAmericasGotTalent() {
  await prisma.movie.create({
    data: {
      Name: "America's Got Talent",
      ReleaseDate: "21.06",
      Year: 2006,
      Country: "USA",
      Director: "Various",
      Duration: "2.00 hours",
      Screenwriter: "Various",
      Description: "Talent show featuring singers, dancers, magicians, comedians and other performers.",
      Language: "english",
      FilmCompany: "NBCUniversal",
      Img: "https://jakes-take.com/wp-content/uploads/2023/12/408705370_906599197490107_6975515092428561704_n.jpg",
      Rating: 7.5,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CBCQeL-zzhQgmvXEz4QklxyqaOAna5sn1w&s",
      Mood: '',
      Url: "",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVBIiNkl9USmWVJ84JdMMYU_Aw4ocI52cmA&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgG2G9b41WZvpb3RELuEYEQOpupU2yEd4LA&s" },
        ]
      },
      Actors: {
        connectOrCreate: {
          where: { id: 12 },
          create: {
            Actor: {
              create: {
                name: "Simon",
                surname: "Cowell",
                dateOfBirth: 1959,
                placeOfBirth: "UK, London",
                height: 178,
                career: "TV Judge, Producer",
                totalMovies: 5,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Simon_Cowell_in_December_2011.jpg/500px-Simon_Cowell_in_December_2011.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 5 },
          create: {
            Genre: {
              create: {
                name: "show"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "America\'s Got Talent" успешно добавлен');
}


async function createHorrorMovie() {
  await prisma.movie.create({
    data: {
      Name: "The Silent Shadows",
      ReleaseDate: "31.10",
      Year: 2025,
      Country: "USA",
      Director: "John Doe",
      Duration: "1.45 hours",
      Screenwriter: "Jane Doe",
      Description: "A terrifying tale of a small town haunted by malevolent shadows. Four strangers must uncover the dark truth behind the eerie occurrences before it's too late.",
      Language: "english",
      FilmCompany: "Dark Shadows Productions",
      Img: "https://m.media-amazon.com/images/M/MV5BODdhNjc1MTUtNzY0ZS00ZDVhLWI2N2MtODVlYmZmYjE3MzNhXkEyXkFqcGc@._V1_.jpg", // Пример изображения
      Rating: 8.2,
      Baner: "https://i.ytimg.com/vi/v0X4zCSfT1Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWPjsQj5YrNnLVMB_R3x7_DBmqog", // Пример баннера
      Mood: '',
      Url: "https://youtu.be/1flPjguvWH4?si=KXHsYaNIBcvt5npb",
      Moments: {
        create: [
          { url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Scary_Scene.jpg" }, // Пример сцены 1
          { url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Scary_Shadow.jpg" }, // Пример сцены 2
        ]
      },
      Actors: {
        create: [
          {
            Actor: {
              create: {
                name: "Alice",
                surname: "Johnson",
                dateOfBirth: 1985,
                placeOfBirth: "USA, New York",
                height: 165,
                career: "Actress, Horror Specialist",
                totalMovies: 10,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Alice_Johnson.jpg/500px-Alice_Johnson.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Bob",
                surname: "Smith",
                dateOfBirth: 1980,
                placeOfBirth: "USA, Los Angeles",
                height: 180,
                career: "Actor, Thriller",
                totalMovies: 15,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bob_Smith.jpg/500px-Bob_Smith.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Charlie",
                surname: "Brown",
                dateOfBirth: 1990,
                placeOfBirth: "USA, Chicago",
                height: 170,
                career: "Actor, Horror Enthusiast",
                totalMovies: 5,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Charlie_Brown.jpg/500px-Charlie_Brown.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Diana",
                surname: "White",
                dateOfBirth: 1995,
                placeOfBirth: "USA, Miami",
                height: 160,
                career: "Actress, Suspense",
                totalMovies: 7,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Diana_White.jpg/500px-Diana_White.jpg"
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: {
          where: { id: 7 },
          create: {
            Genre: {
              create: {
                name: "Horror"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Silent Shadows" успешно добавлен');
}
async function createAnotherHorrorMovie() {
  await prisma.movie.create({
    data: {
      Name: "The Dark Below",
      ReleaseDate: "15.09",
      Year: 2026,
      Country: "USA",
      Director: "Sarah Miller",
      Duration: "1.30 hours",
      Screenwriter: "Mark Lee",
      Description: "A group of friends is trapped underground in a forgotten mine. As they struggle to survive, they discover something much worse than the darkness lurking below.",
      Language: "english",
      FilmCompany: "Underground Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BMTc1MDk2Nzk0NV5BMl5BanBnXkFtZTgwNDE1MjAwNjE@._V1_.jp", // Пример изображения
      Rating: 7.8,
      Baner: "https://johnnyalucard.com/wp-content/uploads/2017/03/darkbelow.jpg", // Пример баннера
      Mood: '',
      Url: "https://youtu.be/aR4g9BMqA58?si=QP6DgDhW1ha1NChh",
      Moments: {
        create: [
          { url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Underground_Horror_Scene.jpg" }, // Пример сцены 1
          { url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dark_Mine.jpg" }, // Пример сцены 2
        ]
      },
      Actors: {
        create: [
          {
            Actor: {
              create: {
                name: "Evelyn",
                surname: "Scott",
                dateOfBirth: 1992,
                placeOfBirth: "USA, Boston",
                height: 168,
                career: "Actress, Thriller",
                totalMovies: 8,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Evelyn_Scott.jpg/500px-Evelyn_Scott.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Nathan",
                surname: "Clark",
                dateOfBirth: 1987,
                placeOfBirth: "USA, San Francisco",
                height: 175,
                career: "Actor, Horror",
                totalMovies: 12,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nathan_Clark.jpg/500px-Nathan_Clark.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Olivia",
                surname: "Parker",
                dateOfBirth: 1989,
                placeOfBirth: "USA, Miami",
                height: 160,
                career: "Actress, Suspense Specialist",
                totalMovies: 10,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Olivia_Parker.jpg/500px-Olivia_Parker.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "James",
                surname: "Miller",
                dateOfBirth: 1984,
                placeOfBirth: "USA, Chicago",
                height: 182,
                career: "Actor, Thriller",
                totalMovies: 9,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/James_Miller.jpg/500px-James_Miller.jpg"
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: {
          where: { id: 8 },
          create: {
            Genre: {
              create: {
                name: "another"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Dark Below" успешно добавлен');
}


async function moodAngry() {
  await prisma.movie.create({
    data: {
      Name: "The Dark Below",
      ReleaseDate: "15.09",
      Year: 2026,
      Country: "USA",
      Director: "Sarah Miller",
      Duration: "1.30 hours",
      Screenwriter: "Mark Lee",
      Description: "A group of friends is trapped underground in a forgotten mine. As they struggle to survive, they discover something much worse than the darkness lurking below.",
      Language: "english",
      FilmCompany: "Underground Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BMTc1MDk2Nzk0NV5BMl5BanBnXkFtZTgwNDE1MjAwNjE@._V1_.jpg", // Пример изображения
      Rating: 7.8,
      Baner: "https://johnnyalucard.com/wp-content/uploads/2017/03/darkbelow.jpg", // Пример баннера
      Mood: 'Angry',
      Url: "",
      Moments: {
        create: [
          { url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Underground_Horror_Scene.jpg" }, // Пример сцены 1
          { url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dark_Mine.jpg" }, // Пример сцены 2
        ]
      },
      Actors: {
        create: [
          {
            Actor: {
              create: {
                name: "Evelyn",
                surname: "Scott",
                dateOfBirth: 1992,
                placeOfBirth: "USA, Boston",
                height: 168,
                career: "Actress, Thriller",
                totalMovies: 8,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Evelyn_Scott.jpg/500px-Evelyn_Scott.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Nathan",
                surname: "Clark",
                dateOfBirth: 1987,
                placeOfBirth: "USA, San Francisco",
                height: 175,
                career: "Actor, Horror",
                totalMovies: 12,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nathan_Clark.jpg/500px-Nathan_Clark.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Olivia",
                surname: "Parker",
                dateOfBirth: 1989,
                placeOfBirth: "USA, Miami",
                height: 160,
                career: "Actress, Suspense Specialist",
                totalMovies: 10,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Olivia_Parker.jpg/500px-Olivia_Parker.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "James",
                surname: "Miller",
                dateOfBirth: 1984,
                placeOfBirth: "USA, Chicago",
                height: 182,
                career: "Actor, Thriller",
                totalMovies: 9,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/James_Miller.jpg/500px-James_Miller.jpg"
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: {
          where: { id: 8 },
          create: {
            Genre: {
              create: {
                name: "angry"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Dark Below" успешно добавлен');
}
async function moodSad() {
  await prisma.movie.create({
    data: {
      Name: "The Dark Below",
      ReleaseDate: "15.09",
      Year: 2026,
      Country: "USA",
      Director: "Sarah Miller",
      Duration: "1.30 hours",
      Screenwriter: "Mark Lee",
      Description: "A group of friends is trapped underground in a forgotten mine. As they struggle to survive, they discover something much worse than the darkness lurking below.",
      Language: "english",
      FilmCompany: "Underground Studios",
      Img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Dark_Horror_Theme.jpg", // Пример изображения
      Rating: 7.8,
      Baner: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Horror_Movie_Banner.jpg", // Пример баннера
      Mood: 'Sad',
      Url: "",
      Moments: {
        create: [
          { url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Underground_Horror_Scene.jpg" }, // Пример сцены 1
          { url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dark_Mine.jpg" }, // Пример сцены 2
        ]
      },
      Actors: {
        create: [
          {
            Actor: {
              create: {
                name: "Evelyn",
                surname: "Scott",
                dateOfBirth: 1992,
                placeOfBirth: "USA, Boston",
                height: 168,
                career: "Actress, Thriller",
                totalMovies: 8,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Evelyn_Scott.jpg/500px-Evelyn_Scott.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Nathan",
                surname: "Clark",
                dateOfBirth: 1987,
                placeOfBirth: "USA, San Francisco",
                height: 175,
                career: "Actor, Horror",
                totalMovies: 12,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nathan_Clark.jpg/500px-Nathan_Clark.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Olivia",
                surname: "Parker",
                dateOfBirth: 1989,
                placeOfBirth: "USA, Miami",
                height: 160,
                career: "Actress, Suspense Specialist",
                totalMovies: 10,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Olivia_Parker.jpg/500px-Olivia_Parker.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "James",
                surname: "Miller",
                dateOfBirth: 1984,
                placeOfBirth: "USA, Chicago",
                height: 182,
                career: "Actor, Thriller",
                totalMovies: 9,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/James_Miller.jpg/500px-James_Miller.jpg"
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: {
          where: { id: 9 },
          create: {
            Genre: {
              create: {
                name: "sad"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Dark Below" успешно добавлен');
}

async function moodHappy() {
  await prisma.movie.create({
    data: {
      Name: "The Dark Below",
      ReleaseDate: "15.09",
      Year: 2026,
      Country: "USA",
      Director: "Sarah Miller",
      Duration: "1.30 hours",
      Screenwriter: "Mark Lee",
      Description: "A group of friends is trapped underground in a forgotten mine. As they struggle to survive, they discover something much worse than the darkness lurking below.",
      Language: "english",
      FilmCompany: "Underground Studios",
      Img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Dark_Horror_Theme.jpg", // Пример изображения
      Rating: 7.8,
      Baner: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Horror_Movie_Banner.jpg", // Пример баннера
      Mood: 'Happy',
      Url: "",
      Moments: {
        create: [
          { url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Underground_Horror_Scene.jpg" }, // Пример сцены 1
          { url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dark_Mine.jpg" }, // Пример сцены 2
        ]
      },
      Actors: {
        create: [
          {
            Actor: {
              create: {
                name: "Evelyn",
                surname: "Scott",
                dateOfBirth: 1992,
                placeOfBirth: "USA, Boston",
                height: 168,
                career: "Actress, Thriller",
                totalMovies: 8,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Evelyn_Scott.jpg/500px-Evelyn_Scott.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Nathan",
                surname: "Clark",
                dateOfBirth: 1987,
                placeOfBirth: "USA, San Francisco",
                height: 175,
                career: "Actor, Horror",
                totalMovies: 12,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nathan_Clark.jpg/500px-Nathan_Clark.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "Olivia",
                surname: "Parker",
                dateOfBirth: 1989,
                placeOfBirth: "USA, Miami",
                height: 160,
                career: "Actress, Suspense Specialist",
                totalMovies: 10,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Olivia_Parker.jpg/500px-Olivia_Parker.jpg"
              }
            }
          },
          {
            Actor: {
              create: {
                name: "James",
                surname: "Miller",
                dateOfBirth: 1984,
                placeOfBirth: "USA, Chicago",
                height: 182,
                career: "Actor, Thriller",
                totalMovies: 9,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/James_Miller.jpg/500px-James_Miller.jpg"
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: {
          where: { id: 10 },
          create: {
            Genre: {
              create: {
                name: "happy"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Dark Below" успешно добавлен');
}

async function createUser() {
  const user = await prisma.user.create({
    data: {
      nickname: "yehor",
      email: "yehor@example.com",
      password: '1234',
      age: 12,
      role: "user",
      image: "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"
    },
  });
  console.log('User created!');
}

async function deleteUser(id: number) {
  const user = await prisma.user.delete({
    where: {id:id}
  })
  console.log('User deleted!')
}

async function clearAllUsers() {
    const deleteResult = await prisma.user.deleteMany({});
    
    console.log(`Deleted ${deleteResult.count} users`);
    return deleteResult
}

async function clearAllGenres() {
  const deleteResult = await prisma.genre.deleteMany({});
  
  console.log(`Deleted ${deleteResult.count} genre`);
  return deleteResult
}

async function clearAllFilms() {
  const deleteResult = await prisma.movie.deleteMany({});
  
  console.log(`Deleted ${deleteResult.count} movie`);
  return deleteResult
}

async function clearAllActors() {
  const deleteResult = await prisma.actor.deleteMany({});
  
  console.log(`Deleted ${deleteResult.count} actor`);
  return deleteResult
}

async function clearAllComments() {
  const deleteResult = await prisma.comment.deleteMany({});
  
  console.log(`Deleted ${deleteResult.count} comment`);
  return deleteResult
}


async function create25Movies() {
  await prisma.movie.create({
    data: {
      Name: "Inception",
      ReleaseDate: "16.07",
      Year: 2010,
      Country: "USA, UK",
      Director: "Christopher Nolan",
      Duration: "2.28 hours",
      Screenwriter: "Christopher Nolan",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Language: "english",
      FilmCompany: "Warner Bros., Legendary Pictures",
      Img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      Rating: 8.8,
      Baner: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      Mood: "mind-bending, thriller",
      Url: "https://youtu.be/YoHD9XEInc0",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MDgzMjg@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Actor: {
                create: {
                  name: "Leonardo",
                  surname: "DiCaprio",
                  dateOfBirth: 1974,
                  placeOfBirth: "USA, California",
                  height: 183,
                  career: "Oscar-winning actor known for Titanic, The Revenant",
                  totalMovies: 60,
                  image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 4 },
            create: {
              Genre: {
                create: {
                  name: "sci-fi"
                }
              }
            }
          },
          {
            where: { id: 5 },
            create: {
              Genre: {
                create: {
                  name: "thriller"
                }
              }
            }
          }
        ]
      }
    }
  });

  // Фільм 2: The Dark Knight
  await prisma.movie.create({
    data: {
      Name: "The Dark Knight",
      ReleaseDate: "18.07",
      Year: 2008,
      Country: "USA, UK",
      Director: "Christopher Nolan",
      Duration: "2.32 hours",
      Screenwriter: "Jonathan Nolan, Christopher Nolan",
      Description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      Language: "english",
      FilmCompany: "Warner Bros., DC Comics",
      Img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      Rating: 9.0,
      Baner: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
      Mood: "dark, action",
      Url: "https://youtu.be/EXeTwQWrcwY",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BMTI1MjM0NTE4NV5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjkwNTgyMQ@@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 4 },
            create: {
              Actor: {
                create: {
                  name: "Christian",
                  surname: "Bale",
                  dateOfBirth: 1974,
                  placeOfBirth: "UK, Wales",
                  height: 183,
                  career: "Actor known for Batman trilogy, American Psycho",
                  totalMovies: 70,
                  image: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 6 },
            create: {
              Genre: {
                create: {
                  name: "action"
                }
              }
            }
          },
          {
            where: { id: 7 },
            create: {
              Genre: {
                create: {
                  name: "crime"
                }
              }
            }
          }
        ]
      }
    }
  });

  // Фільм 3: Pulp Fiction
  await prisma.movie.create({
    data: {
      Name: "Pulp Fiction",
      ReleaseDate: "14.10",
      Year: 1994,
      Country: "USA",
      Director: "Quentin Tarantino",
      Duration: "2.34 hours",
      Screenwriter: "Quentin Tarantino, Roger Avary",
      Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      Language: "english",
      FilmCompany: "Miramax, A Band Apart",
      Img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      Rating: 8.9,
      Baner: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg",
      Mood: "crime, dark comedy",
      Url: "https://youtu.be/s7EdQ4FqbhY",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BNjc1NzYwODEyMV5BMl5BanBnXkFtZTcwNTM5NTQyMw@@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Actor: {
                create: {
                  name: "John",
                  surname: "Travolta",
                  dateOfBirth: 1954,
                  placeOfBirth: "USA, New Jersey",
                  height: 188,
                  career: "Actor known for Grease, Saturday Night Fever",
                  totalMovies: 90,
                  image: "https://m.media-amazon.com/images/M/MV5BMTMyMjIxMTQ2NV5BMl5BanBnXkFtZTYwNDQ0NTE1._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 8 },
            create: {
              Genre: {
                create: {
                  name: "crime"
                }
              }
            }
          },
          {
            where: { id: 9 },
            create: {
              Genre: {
                create: {
                  name: "drama"
                }
              }
            }
          }
        ]
      }
    }
  });

  // Фільм 4: The Shawshank Redemption
  await prisma.movie.create({
    data: {
      Name: "The Shawshank Redemption",
      ReleaseDate: "23.09",
      Year: 1994,
      Country: "USA",
      Director: "Frank Darabont",
      Duration: "2.22 hours",
      Screenwriter: "Frank Darabont",
      Description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      Language: "english",
      FilmCompany: "Castle Rock Entertainment",
      Img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      Rating: 9.3,
      Baner: "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
      Mood: "drama, inspirational",
      Url: "https://youtu.be/6hB3S9bIaco",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 6 },
            create: {
              Actor: {
                create: {
                  name: "Tim",
                  surname: "Robbins",
                  dateOfBirth: 1958,
                  placeOfBirth: "USA, California",
                  height: 196,
                  career: "Oscar-winning actor known for Mystic River",
                  totalMovies: 75,
                  image: "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 10 },
            create: {
              Genre: {
                create: {
                  name: "drama"
                }
              }
            }
          }
        ]
      }
    }
  });

  // Фільм 5: Interstellar
  await prisma.movie.create({
    data: {
      Name: "Interstellar",
      ReleaseDate: "07.11",
      Year: 2014,
      Country: "USA, UK",
      Director: "Christopher Nolan",
      Duration: "2.49 hours",
      Screenwriter: "Jonathan Nolan, Christopher Nolan",
      Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "english",
      FilmCompany: "Paramount Pictures, Warner Bros.",
      Img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      Rating: 8.6,
      Baner: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      Mood: "sci-fi, emotional",
      Url: "https://youtu.be/zSWdZVtXT7E",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Actor: {
                create: {
                  name: "Matthew",
                  surname: "McConaughey",
                  dateOfBirth: 1969,
                  placeOfBirth: "USA, Texas",
                  height: 182,
                  career: "Oscar-winning actor known for Dallas Buyers Club",
                  totalMovies: 65,
                  image: "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 11 },
            create: {
              Genre: {
                create: {
                  name: "sci-fi"
                }
              }
            }
          },
          {
            where: { id: 12 },
            create: {
              Genre: {
                create: {
                  name: "adventure"
                }
              }
            }
          }
        ]
      }
    }
  });

  console.log("25 фільмів успішно створено!");
}

async function createSonic4() {
  await prisma.movie.create({
    data: {
      Name: "Sonic the Hedgehog 4",
      ReleaseDate: "20.12",
      Year: 2024,
      Country: "USA, Japan",
      Director: "Jeff Fowler",
      Duration: "2.05 hours", 
      Screenwriter: "Pat Casey, Josh Miller, John Whittington",
      Description: "The continuing adventures of Sonic the Hedgehog as he faces new threats in the human world alongside his friends Tails and Knuckles.",
      Language: "english",
      FilmCompany: "Paramount Pictures, SEGA",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N5ukWYipZbKxobxKBvV829mPAwrWMJlQrg&s", 
      Rating: 7,
      Baner: "https://i.ytimg.com/vi/yBMFN_xlLAc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHX1KR96moqXjylG2Zik-Xn9qQjg",
      Mood: '',
      Url: "https://youtu.be/qSu6i2iFMO0?si=WaraSHmRxMUgxeBd",
      Moments: {
        create: [
          { url: "https://lifehacker.ru/wp-content/uploads/2025/01/Sonic3Horizontal4_1736791761.jpeg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUoQ4NyACAZE4I-O0vHy4y-BTRN0hnIEbHONYbW6ShUM2vSjK7HhRFe20rPwmDT5W550&usqp=CAU" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsoxFUJr8etvlrvdDwGetI48hhsl8pBHwuQ&s" },
          { url: "https://assetsio.gnwcdn.com/sonic_6tZ4wQP.webp?width=720&quality=70&format=jpg&auto=webp" },
          { url: "https://www.afisha.uz/uploads/media/2024/12/5439e012ab1de4271b2af484a83c5af4.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnkTTpBK65uzgtgGw0L88wXMfVQJlC8J2IBEcPgjBigkvpWrT1xzFtWHbfK_FqvylEg0&usqp=CAU" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Actor: {
                create: {
                  name: "Ben",
                  surname: "Schwartz",
                  dateOfBirth: 1981,
                  placeOfBirth: "USA, New York",
                  height: 183,
                  career: "Actor and comedian, known for voicing Sonic",
                  totalMovies: 80,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72k8x7Z99tDAQJ-YVFaHx1rkh53M30gBavQ&s"
                }
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Actor: {
                create: {
                  name: "Idris",
                  surname: "Elba",
                  dateOfBirth: 1972,
                  placeOfBirth: "UK, London",
                  height: 189,
                  career: "Acclaimed actor known for roles in Thor, The Wire",
                  totalMovies: 100,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkn0H1HDSbbSY6DmQ8RpeZKkSNTa27xw4hg&s"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                create: {
                  name: "action"
                }
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Genre: {
                create: {
                  name: "adventure"
                }
              }
            }
          },
          {
            where: { id: 3 },
            create: {
              Genre: {
                create: {
                  name: "comedy"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Sonic the Hedgehog 4" добавлен.');
}

async function createInception2() {
  await prisma.movie.create({
    data: {
      Name: "Inception 2",
      ReleaseDate: "15.07",
      Year: 2025,
      Country: "USA, UK",
      Director: "Christopher Nolan",
      Duration: "2.28 hours",
      Screenwriter: "Christopher Nolan",
      Description: "A sequel to the mind-bending thriller about dream thieves and the power of the subconscious.",
      Language: "english",
      FilmCompany: "Warner Bros, Syncopy",
      Img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      Rating: 9,
      Baner: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      Mood: "mind-bending",
      Url: "https://youtu.be/YoHD9XEInc0",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" },
          { url: "https://i.ytimg.com/vi/YoHD9XEInc0/maxresdefault.jpg" },
          { url: "https://www.indiewire.com/wp-content/uploads/2020/07/inception.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 3 },
            create: {
              Actor: {
                create: {
                  name: "Leonardo",
                  surname: "DiCaprio",
                  dateOfBirth: 1974,
                  placeOfBirth: "USA, California",
                  height: 183,
                  career: "Academy Award-winning actor",
                  totalMovies: 50,
                  image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 4 },
            create: {
              Actor: {
                create: {
                  name: "Joseph",
                  surname: "Gordon-Levitt",
                  dateOfBirth: 1981,
                  placeOfBirth: "USA, California",
                  height: 175,
                  career: "Actor, director, producer",
                  totalMovies: 60,
                  image: "https://m.media-amazon.com/images/M/MV5BZTk5ZGQ0OGQtYWYwMy00Zjg1LWE0MDMtZjA2NjA4ZGY0YTIyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 4 },
            create: {
              Genre: {
                create: {
                  name: "sci-fi"
                }
              }
            }
          },
          {
            where: { id: 5 },
            create: {
              Genre: {
                create: {
                  name: "thriller"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Inception 2" добавлен.');
}

async function createDunePart3() {
  await prisma.movie.create({
    data: {
      Name: "Dune: Part Three",
      ReleaseDate: "18.11",
      Year: 2026,
      Country: "USA, Canada",
      Director: "Denis Villeneuve",
      Duration: "2.45 hours",
      Screenwriter: "Jon Spaihts, Denis Villeneuve",
      Description: "The epic conclusion to the Dune trilogy following Paul Atreides' journey as the messiah of the Fremen.",
      Language: "english",
      FilmCompany: "Legendary Pictures, Warner Bros",
      Img: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      Rating: 9,
      Baner: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      Mood: "epic",
      Url: "https://youtu.be/8g18jFHCLXk",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
          { url: "https://i.ytimg.com/vi/8g18jFHCLXk/maxresdefault.jpg" },
          { url: "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Dune-Part-Two-Publicity-Still-2023.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Actor: {
                create: {
                  name: "Timothée",
                  surname: "Chalamet",
                  dateOfBirth: 1995,
                  placeOfBirth: "USA, New York",
                  height: 178,
                  career: "Academy Award-nominated actor",
                  totalMovies: 25,
                  image: "https://m.media-amazon.com/images/M/MV5BOWMyNjE0MzEtMzVjNy00NjIxLTg0ZjMtMWJhNGI1YmVjYTczXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 6 },
            create: {
              Actor: {
                create: {
                  name: "Zendaya",
                  surname: "",
                  dateOfBirth: 1996,
                  placeOfBirth: "USA, California",
                  height: 178,
                  career: "Actress and singer",
                  totalMovies: 20,
                  image: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 4 },
            create: {
              Genre: {
                connect: { id: 4 } // sci-fi
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Genre: {
                connect: { id: 2 } // adventure
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Dune: Part Three" добавлен.');
}

async function createJohnWick5() {
  await prisma.movie.create({
    data: {
      Name: "John Wick 5",
      ReleaseDate: "24.03",
      Year: 2025,
      Country: "USA",
      Director: "Chad Stahelski",
      Duration: "2.15 hours",
      Screenwriter: "Derek Kolstad, Shay Hatten",
      Description: "Legendary hitman John Wick returns for another high-octane chapter of the action series.",
      Language: "english",
      FilmCompany: "Lionsgate, Thunder Road Pictures",
      Img: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      Mood: "intense",
      Url: "https://youtu.be/qEVUtrk8_B4",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/09/John-Wick-4.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/03/john-wick-4-poster.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Actor: {
                create: {
                  name: "Keanu",
                  surname: "Reeves",
                  dateOfBirth: 1964,
                  placeOfBirth: "Lebanon, Beirut",
                  height: 186,
                  career: "Actor known for The Matrix and John Wick series",
                  totalMovies: 90,
                  image: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 8 },
            create: {
              Actor: {
                create: {
                  name: "Ian",
                  surname: "McShane",
                  dateOfBirth: 1942,
                  placeOfBirth: "UK, England",
                  height: 178,
                  career: "Veteran actor known for Deadwood and American Gods",
                  totalMovies: 150,
                  image: "https://m.media-amazon.com/images/M/MV5BMTc2MDQ5MDA3MV5BMl5BanBnXkFtZTgwMzA0NjA1OTE@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          },
          {
            where: { id: 5 },
            create: {
              Genre: {
                connect: { id: 5 } // thriller
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "John Wick 5" добавлен.');
}

async function createAvatar3() {
  await prisma.movie.create({
    data: {
      Name: "Avatar 3",
      ReleaseDate: "19.12",
      Year: 2025,
      Country: "USA",
      Director: "James Cameron",
      Duration: "3.10 hours",
      Screenwriter: "James Cameron",
      Description: "The next chapter in the epic Avatar saga continues the story of the Na'vi and their battle to protect Pandora.",
      Language: "english",
      FilmCompany: "20th Century Studios, Lightstorm Entertainment",
      Img: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
      Mood: "epic",
      Url: "https://youtu.be/d9MyW72ELq0",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/d9MyW72ELq0/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/12/Avatar-3.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/avatar-3.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 9 },
            create: {
              Actor: {
                create: {
                  name: "Sam",
                  surname: "Worthington",
                  dateOfBirth: 1976,
                  placeOfBirth: "UK, England",
                  height: 175,
                  career: "Actor known for Avatar and Clash of the Titans",
                  totalMovies: 40,
                  image: "https://m.media-amazon.com/images/M/MV5BMTc5NzQzNjg4MF5BMl5BanBnXkFtZTcwNjY5NTk0OQ@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 10 },
            create: {
              Actor: {
                create: {
                  name: "Zoe",
                  surname: "Saldana",
                  dateOfBirth: 1978,
                  placeOfBirth: "USA, New Jersey",
                  height: 170,
                  career: "Actress known for Avatar and Guardians of the Galaxy",
                  totalMovies: 60,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 4 },
            create: {
              Genre: {
                connect: { id: 4 } // sci-fi
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Genre: {
                connect: { id: 2 } // adventure
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Avatar 3" добавлен.');
}

async function createTheBatman2() {
  await prisma.movie.create({
    data: {
      Name: "The Batman 2",
      ReleaseDate: "03.10",
      Year: 2025,
      Country: "USA, UK",
      Director: "Matt Reeves",
      Duration: "2.45 hours",
      Screenwriter: "Matt Reeves, Peter Craig",
      Description: "The sequel to the 2022 hit follows Bruce Wayne as he continues his war on crime in Gotham City.",
      Language: "english",
      FilmCompany: "Warner Bros, DC Films",
      Img: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      Mood: "dark",
      Url: "https://youtu.be/mqqft2x_Aa4",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/mqqft2x_Aa4/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/03/The-Batman-2.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/the-batman-2.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 11 },
            create: {
              Actor: {
                create: {
                  name: "Robert",
                  surname: "Pattinson",
                  dateOfBirth: 1986,
                  placeOfBirth: "UK, London",
                  height: 185,
                  career: "Actor known for Twilight and The Batman",
                  totalMovies: 45,
                  image: "https://m.media-amazon.com/images/M/MV5BNzk5MDMxOTY5Ml5BMl5BanBnXkFtZTcwNjI3NzI5Mw@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 12 },
            create: {
              Actor: {
                create: {
                  name: "Zoë",
                  surname: "Kravitz",
                  dateOfBirth: 1988,
                  placeOfBirth: "USA, California",
                  height: 157,
                  career: "Actress and singer known for Big Little Lies and The Batman",
                  totalMovies: 30,
                  image: "https://m.media-amazon.com/images/M/MV5BMTU3NDc2OTY2N15BMl5BanBnXkFtZTgwNDk1MTA5OTE@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          },
          {
            where: { id: 6 },
            create: {
              Genre: {
                create: {
                  name: "crime"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "The Batman 2" добавлен.');
}

async function createMissionImpossible8() {
  await prisma.movie.create({
    data: {
      Name: "Mission: Impossible 8",
      ReleaseDate: "28.06",
      Year: 2025,
      Country: "USA",
      Director: "Christopher McQuarrie",
      Duration: "2.30 hours",
      Screenwriter: "Christopher McQuarrie",
      Description: "Ethan Hunt and his IMF team return for their most dangerous mission yet.",
      Language: "english",
      FilmCompany: "Paramount Pictures, Skydance",
      Img: "https://m.media-amazon.com/images/M/MV5BNDY5YjFhNDAtZTI5Yi00ZmU3LThiZmItOTk0OTYxN2E1OTU4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BNDY5YjFhNDAtZTI5Yi00ZmU3LThiZmItOTk0OTYxN2E1OTU4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      Mood: "thrilling",
      Url: "https://youtu.be/2m1drlOZSDw",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/2m1drlOZSDw/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2023/07/Mission-Impossible-8.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/mission-impossible-8.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 13 },
            create: {
              Actor: {
                create: {
                  name: "Tom",
                  surname: "Cruise",
                  dateOfBirth: 1962,
                  placeOfBirth: "USA, New York",
                  height: 170,
                  career: "Hollywood superstar known for Top Gun and Mission: Impossible",
                  totalMovies: 50,
                  image: "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 14 },
            create: {
              Actor: {
                create: {
                  name: "Hayley",
                  surname: "Atwell",
                  dateOfBirth: 1982,
                  placeOfBirth: "UK, London",
                  height: 169,
                  career: "Actress known for Captain America and Mission: Impossible",
                  totalMovies: 40,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNDQzMjkwNzE@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          },
          {
            where: { id: 5 },
            create: {
              Genre: {
                connect: { id: 5 } // thriller
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Mission: Impossible 8" добавлен.');
}

async function createBlackPanther3() {
  await prisma.movie.create({
    data: {
      Name: "Black Panther 3",
      ReleaseDate: "07.11",
      Year: 2025,
      Country: "USA",
      Director: "Ryan Coogler",
      Duration: "2.20 hours",
      Screenwriter: "Ryan Coogler",
      Description: "The next chapter in the Black Panther saga as Wakanda faces new threats and challenges.",
      Language: "english",
      FilmCompany: "Marvel Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
      Mood: "heroic",
      Url: "https://youtu.be/_Z3QKkl1WyM",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/_Z3QKkl1WyM/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/11/Black-Panther-3.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/black-panther-3.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 15 },
            create: {
              Actor: {
                create: {
                  name: "Letitia",
                  surname: "Wright",
                  dateOfBirth: 1993,
                  placeOfBirth: "Guyana",
                  height: 168,
                  career: "Actress known for Black Panther and Avengers",
                  totalMovies: 20,
                  image: "https://m.media-amazon.com/images/M/MV5BZTk0ZGYyYzktY2NhMC00YjA1LTg0YTAtYzVjMTE0ZGRiMGMwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 16 },
            create: {
              Actor: {
                create: {
                  name: "Winston",
                  surname: "Duke",
                  dateOfBirth: 1986,
                  placeOfBirth: "Trinidad and Tobago",
                  height: 196,
                  career: "Actor known for Black Panther and Us",
                  totalMovies: 15,
                  image: "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk3MV5BMl5BanBnXkFtZTgwMzI5OTQ1NjM@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          },
          {
            where: { id: 4 },
            create: {
              Genre: {
                connect: { id: 4 } // sci-fi
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Black Panther 3" добавлен.');
}


async function createFantasticBeasts4() {
  await prisma.movie.create({
    data: {
      Name: "Fantastic Beasts 4",
      ReleaseDate: "15.04",
      Year: 2026,
      Country: "UK, USA",
      Director: "David Yates",
      Duration: "2.15 hours",
      Screenwriter: "J.K. Rowling",
      Description: "The next installment in the Wizarding World franchise following Newt Scamander's adventures.",
      Language: "english",
      FilmCompany: "Warner Bros, Heyday Films",
      Img: "https://m.media-amazon.com/images/M/MV5BZjA2NmY0OTYtYjg5NS00YjYwLWE3OWMtZGNiZDg5YzVjMmQ4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      Rating: 7,
      Baner: "https://m.media-amazon.com/images/M/MV5BZjA2NmY0OTYtYjg5NS00YjYwLWE3OWMtZGNiZDg5YzVjMmQ4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      Mood: "magical",
      Url: "https://youtu.be/Y9dr2zw-TXQ",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/Y9dr2zw-TXQ/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/04/Fantastic-Beasts-4.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/04/fantastic-beasts-4.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 17 },
            create: {
              Actor: {
                create: {
                  name: "Eddie",
                  surname: "Redmayne",
                  dateOfBirth: 1982,
                  placeOfBirth: "UK, London",
                  height: 184,
                  career: "Academy Award-winning actor known for The Theory of Everything",
                  totalMovies: 30,
                  image: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 18 },
            create: {
              Actor: {
                create: {
                  name: "Jude",
                  surname: "Law",
                  dateOfBirth: 1972,
                  placeOfBirth: "UK, London",
                  height: 178,
                  career: "Acclaimed actor known for The Talented Mr. Ripley and Sherlock Holmes",
                  totalMovies: 80,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQ4MjI0MjMxMF5BMl5BanBnXkFtZTcwNDk2NjYyMw@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 2 },
            create: {
              Genre: {
                connect: { id: 2 } // adventure
              }
            }
          },
          {
            where: { id: 7 },
            create: {
              Genre: {
                create: {
                  name: "fantasy"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Fantastic Beasts 4" добавлен.');
}

async function createJurassicWorld4() {
  await prisma.movie.create({
    data: {
      Name: "Jurassic World 4",
      ReleaseDate: "10.06",
      Year: 2026,
      Country: "USA",
      Director: "Colin Trevorrow",
      Duration: "2.10 hours",
      Screenwriter: "Colin Trevorrow",
      Description: "The next chapter in the Jurassic World franchise with new dinosaurs and adventures.",
      Language: "english",
      FilmCompany: "Universal Pictures, Amblin Entertainment",
      Img: "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      Rating: 7,
      Baner: "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      Mood: "thrilling",
      Url: "https://youtu.be/6wiY3V8QzN4",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/6wiY3V8QzN4/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/06/Jurassic-World-4.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/jurassic-world-4.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 19 },
            create: {
              Actor: {
                create: {
                  name: "Chris",
                  surname: "Pratt",
                  dateOfBirth: 1979,
                  placeOfBirth: "USA, Minnesota",
                  height: 188,
                  career: "Actor known for Guardians of the Galaxy and Jurassic World",
                  totalMovies: 50,
                  image: "https://m.media-amazon.com/images/M/MV5BMTUxMjM1Mzg0N15BMl5BanBnXkFtZTcwNDI5MzQ0OQ@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 20 },
            create: {
              Actor: {
                create: {
                  name: "Bryce",
                  surname: "Dallas Howard",
                  dateOfBirth: 1981,
                  placeOfBirth: "USA, California",
                  height: 170,
                  career: "Actress and director known for Jurassic World and The Help",
                  totalMovies: 40,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQzMTU1Nl5BMl5BanBnXkFtZTcwNzAyNTk1Nw@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          },
          {
            where: { id: 4 },
            create: {
              Genre: {
                connect: { id: 4 } // sci-fi
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Jurassic World 4" добавлен.');
}

async function createDeadpool3() {
  await prisma.movie.create({
    data: {
      Name: "Deadpool 3",
      ReleaseDate: "08.11",
      Year: 2024,
      Country: "USA",
      Director: "Shawn Levy",
      Duration: "2.05 hours",
      Screenwriter: "Rhett Reese, Paul Wernick",
      Description: "The Merc with a Mouth returns for another R-rated adventure in the Marvel Universe.",
      Language: "english",
      FilmCompany: "Marvel Studios, 20th Century Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      Mood: "irreverent",
      Url: "https://youtu.be/7E9GqL0VkzE",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/7E9GqL0VkzE/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/09/Deadpool-3.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/deadpool-3.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 21 },
            create: {
              Actor: {
                create: {
                  name: "Ryan",
                  surname: "Reynolds",
                  dateOfBirth: 1976,
                  placeOfBirth: "Canada, Vancouver",
                  height: 188,
                  career: "Actor and producer known for Deadpool and Free Guy",
                  totalMovies: 70,
                  image: "https://m.media-amazon.com/images/M/MV5BODI3NDI5NDQ5N15BMl5BanBnXkFtZTgwODA2NjQzMjE@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 22 },
            create: {
              Actor: {
                create: {
                  name: "Hugh",
                  surname: "Jackman",
                  dateOfBirth: 1968,
                  placeOfBirth: "Australia, Sydney",
                  height: 190,
                  career: "Acclaimed actor known for Wolverine and Les Misérables",
                  totalMovies: 60,
                  image: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          },
          {
            where: { id: 3 },
            create: {
              Genre: {
                connect: { id: 3 } // comedy
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Deadpool 3" добавлен.');
}

// Остальные функции продолжаются аналогичным образом...

async function createMatrix5() {
  await prisma.movie.create({
    data: {
      Name: "The Matrix 5",
      ReleaseDate: "22.03",
      Year: 2025,
      Country: "USA",
      Director: "Lana Wachowski",
      Duration: "2.25 hours",
      Screenwriter: "Lana Wachowski",
      Description: "Neo returns in another mind-bending installment of the Matrix franchise.",
      Language: "english",
      FilmCompany: "Warner Bros, Village Roadshow",
      Img: "https://m.media-amazon.com/images/M/MV5BZGFiNGU0MjEtMDE1MS00ZjE5LTk0OTUtN2NjZTMzZGQ0YzFjXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg",
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BZGFiNGU0MjEtMDE1MS00ZjE5LTk0OTUtN2NjZTMzZGQ0YzFjXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_FMjpg_UX1000_.jpg",
      Mood: "mind-bending",
      Url: "https://youtu.be/9ix7TUGVYIo",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/9ix7TUGVYIo/maxresdefault.jpg" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2021/12/The-Matrix-5.jpg" },
          { url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/the-matrix-5.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 23 },
            create: {
              Actor: {
                create: {
                  name: "Keanu",
                  surname: "Reeves",
                  dateOfBirth: 1964,
                  placeOfBirth: "Lebanon, Beirut",
                  height: 186,
                  career: "Actor known for The Matrix and John Wick series",
                  totalMovies: 90,
                  image: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 24 },
            create: {
              Actor: {
                create: {
                  name: "Carrie-Anne",
                  surname: "Moss",
                  dateOfBirth: 1967,
                  placeOfBirth: "Canada, Burnaby",
                  height: 174,
                  career: "Actress known for The Matrix and Jessica Jones",
                  totalMovies: 60,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjM2NTU1N15BMl5BanBnXkFtZTcwOTU3Njg3OA@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 4 },
            create: {
              Genre: {
                connect: { id: 4 } // sci-fi
              }
            }
          },
          {
            where: { id: 1 },
            create: {
              Genre: {
                connect: { id: 1 } // action
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "The Matrix 5" добавлен.');


// Фільм 6: The Godfather
await prisma.movie.create({
  data: {
    Name: "The Godfather",
    ReleaseDate: "24.03",
    Year: 1972,
    Country: "USA",
    Director: "Francis Ford Coppola",
    Duration: "2.55 hours",
    Screenwriter: "Francis Ford Coppola, Mario Puzo",
    Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    Language: "english",
    FilmCompany: "Paramount Pictures",
    Img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    Rating: 9.2,
    Baner: "https://m.media-amazon.com/images/M/MV5BMTU5MDAzNzY1MV5BMl5BanBnXkFtZTgwNzIzMjE4NzM@._V1_.jpg",
    Mood: "crime, drama",
    Url: "https://youtu.be/sY1S34973zA",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTQzMjQ1MzY2N15BMl5BanBnXkFtZTgwMTc2NjY2NDM@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTg5NTUzOTg2NF5BMl5BanBnXkFtZTgwNjM2NjY2NDM@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 8 },
          create: {
            Actor: {
              create: {
                name: "Marlon",
                surname: "Brando",
                dateOfBirth: 1924,
                placeOfBirth: "USA, Nebraska",
                height: 175,
                career: "Legendary actor, two-time Oscar winner",
                totalMovies: 48,
                image: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 13 },
          create: {
            Genre: {
              create: {
                name: "crime"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 7: Fight Club
await prisma.movie.create({
  data: {
    Name: "Fight Club",
    ReleaseDate: "15.10",
    Year: 1999,
    Country: "USA, Germany",
    Director: "David Fincher",
    Duration: "2.19 hours",
    Screenwriter: "Jim Uhls",
    Description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    Language: "english",
    FilmCompany: "20th Century Fox, Regency Enterprises",
    Img: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    Rating: 8.8,
    Baner: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    Mood: "psychological, dark",
    Url: "https://youtu.be/qtRKdVHc-cE",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BODQ0NDQ1NTE1MV5BMl5BanBnXkFtZTcwODkxMzYyMQ@@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BNTYxODA5Mzg5N15BMl5BanBnXkFtZTcwOTkxMzYyMQ@@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 9 },
          create: {
            Actor: {
              create: {
                name: "Brad",
                surname: "Pitt",
                dateOfBirth: 1963,
                placeOfBirth: "USA, Oklahoma",
                height: 180,
                career: "Oscar-winning actor and producer",
                totalMovies: 95,
                image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 14 },
          create: {
            Genre: {
              create: {
                name: "drama"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 8: Forrest Gump
await prisma.movie.create({
  data: {
    Name: "Forrest Gump",
    ReleaseDate: "06.07",
    Year: 1994,
    Country: "USA",
    Director: "Robert Zemeckis",
    Duration: "2.22 hours",
    Screenwriter: "Eric Roth",
    Description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    Language: "english",
    FilmCompany: "Paramount Pictures",
    Img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    Rating: 8.8,
    Baner: "https://m.media-amazon.com/images/M/MV5BMTI1MjM0NTE4NV5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    Mood: "heartwarming, historical",
    Url: "https://youtu.be/bLvqoHBptjg",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY1NjUyN15BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 10 },
          create: {
            Actor: {
              create: {
                name: "Tom",
                surname: "Hanks",
                dateOfBirth: 1956,
                placeOfBirth: "USA, California",
                height: 183,
                career: "Two-time Oscar winner, known for Saving Private Ryan, Cast Away",
                totalMovies: 110,
                image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 15 },
          create: {
            Genre: {
              create: {
                name: "drama"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 9: The Matrix
await prisma.movie.create({
  data: {
    Name: "The Matrix",
    ReleaseDate: "31.03",
    Year: 1999,
    Country: "USA, Australia",
    Director: "Lana Wachowski, Lilly Wachowski",
    Duration: "2.16 hours",
    Screenwriter: "Lana Wachowski, Lilly Wachowski",
    Description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    Language: "english",
    FilmCompany: "Warner Bros., Village Roadshow Pictures",
    Img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    Rating: 8.7,
    Baner: "https://m.media-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    Mood: "sci-fi, action",
    Url: "https://youtu.be/vKQi3bBA1y8",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BZTk1NzQwYzYtODBjMS00MmQyLTg1OTUtOWY1YjM0Njk5YmFkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 11 },
          create: {
            Actor: {
              create: {
                name: "Keanu",
                surname: "Reeves",
                dateOfBirth: 1964,
                placeOfBirth: "Lebanon, Beirut",
                height: 186,
                career: "Actor known for John Wick, Speed",
                totalMovies: 85,
                image: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 16 },
          create: {
            Genre: {
              create: {
                name: "sci-fi"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 10: Gladiator
await prisma.movie.create({
  data: {
    Name: "Gladiator",
    ReleaseDate: "05.05",
    Year: 2000,
    Country: "USA, UK",
    Director: "Ridley Scott",
    Duration: "2.35 hours",
    Screenwriter: "David Franzoni, John Logan",
    Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    Language: "english",
    FilmCompany: "DreamWorks, Universal Pictures",
    Img: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    Rating: 8.5,
    Baner: "https://m.media-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_.jpg",
    Mood: "epic, historical",
    Url: "https://youtu.be/owK1qxDselE",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 12 },
          create: {
            Actor: {
              create: {
                name: "Russell",
                surname: "Crowe",
                dateOfBirth: 1964,
                placeOfBirth: "New Zealand, Wellington",
                height: 182,
                career: "Oscar-winning actor known for A Beautiful Mind",
                totalMovies: 75,
                image: "https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 17 },
          create: {
            Genre: {
              create: {
                name: "action"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 11: Parasite
await prisma.movie.create({
  data: {
    Name: "Parasite",
    ReleaseDate: "21.05",
    Year: 2019,
    Country: "South Korea",
    Director: "Bong Joon Ho",
    Duration: "2.12 hours",
    Screenwriter: "Bong Joon Ho, Han Jin Won",
    Description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    Language: "korean",
    FilmCompany: "CJ Entertainment, Barunson E&A",
    Img: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    Rating: 8.6,
    Baner: "https://m.media-amazon.com/images/M/MV5BOTBhZGJjYjQtODRjOC00MWJhLTk1NTctZDJiM2JkMTY3MGNiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    Mood: "thriller, dark comedy",
    Url: "https://youtu.be/5xH0HfJHsaY",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BOTBhZGJjYjQtODRjOC00MWJhLTk1NTctZDJiM2JkMTY3MGNiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 13 },
          create: {
            Actor: {
              create: {
                name: "Song",
                surname: "Kang Ho",
                dateOfBirth: 1967,
                placeOfBirth: "South Korea, Gimhae",
                height: 178,
                career: "Acclaimed actor known for Memories of Murder, Snowpiercer",
                totalMovies: 60,
                image: "https://m.media-amazon.com/images/M/MV5BZGJhY2Q1OWItYzY0Yi00YjU3LWE0OTAtYjQ4ZGI4MDVkYzY5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 18 },
          create: {
            Genre: {
              create: {
                name: "thriller"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 12: The Revenant
await prisma.movie.create({
  data: {
    Name: "The Revenant",
    ReleaseDate: "25.12",
    Year: 2015,
    Country: "USA, Hong Kong",
    Director: "Alejandro G. Iñárritu",
    Duration: "2.36 hours",
    Screenwriter: "Mark L. Smith, Alejandro G. Iñárritu",
    Description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    Language: "english",
    FilmCompany: "20th Century Fox, Regency Enterprises",
    Img: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    Rating: 8.0,
    Baner: "https://m.media-amazon.com/images/M/MV5BNjEwZmQ1ZTctNDgyZC00YjA0LTk1MDYtYmFlYzY1OTVlMWI4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    Mood: "survival, revenge",
    Url: "https://youtu.be/LoebZZ8K5N0",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTUzNTg5MjE5OV5BMl5BanBnXkFtZTgwMTk2NjY2NDM@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTg1MTY1NTI5NV5BMl5BanBnXkFtZTgwMTk2NjY2NDM@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 14 },
          create: {
            Actor: {
              create: {
                name: "Leonardo",
                surname: "DiCaprio",
                dateOfBirth: 1974,
                placeOfBirth: "USA, California",
                height: 183,
                career: "Oscar-winning actor known for Titanic, Inception",
                totalMovies: 60,
                image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTgwMzQyODU2Mw@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 19 },
          create: {
            Genre: {
              create: {
                name: "adventure"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 13: Whiplash
await prisma.movie.create({
  data: {
    Name: "Whiplash",
    ReleaseDate: "15.10",
    Year: 2014,
    Country: "USA",
    Director: "Damien Chazelle",
    Duration: "1.47 hours",
    Screenwriter: "Damien Chazelle",
    Description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    Language: "english",
    FilmCompany: "Sony Pictures Classics",
    Img: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    Rating: 8.5,
    Baner: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    Mood: "intense, musical",
    Url: "https://youtu.be/7d_jQycdQGo",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BNTE1OWIzODItYjFkZS00NjkxLThmNTMtMzVlMDM0ODQ0MWI5XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BNTE1OWIzODItYjFkZS00NjkxLThmNTMtMzVlMDM0ODQ0MWI5XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 15 },
          create: {
            Actor: {
              create: {
                name: "Miles",
                surname: "Teller",
                dateOfBirth: 1987,
                placeOfBirth: "USA, Pennsylvania",
                height: 183,
                career: "Actor known for Divergent, Top Gun: Maverick",
                totalMovies: 35,
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1Mzg3NTA0OF5BMl5BanBnXkFtZTcwNTgyNTM5Nw@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 20 },
          create: {
            Genre: {
              create: {
                name: "drama"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 14: The Grand Budapest Hotel
await prisma.movie.create({
  data: {
    Name: "The Grand Budapest Hotel",
    ReleaseDate: "28.03",
    Year: 2014,
    Country: "USA, Germany",
    Director: "Wes Anderson",
    Duration: "1.40 hours",
    Screenwriter: "Wes Anderson, Hugo Guinness",
    Description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    Language: "english",
    FilmCompany: "Fox Searchlight Pictures",
    Img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    Rating: 8.1,
    Baner: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    Mood: "whimsical, comedy",
    Url: "https://youtu.be/1Fg5iWmQjwk",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNDQ3MDE@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNDQ3MDE@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 16 },
          create: {
            Actor: {
              create: {
                name: "Ralph",
                surname: "Fiennes",
                dateOfBirth: 1962,
                placeOfBirth: "UK, Suffolk",
                height: 180,
                career: "Actor known for Schindler's List, Harry Potter",
                totalMovies: 80,
                image: "https://m.media-amazon.com/images/M/MV5BMjA5MTY5NjMyMF5BMl5BanBnXkFtZTcwNjM0NTI4Mw@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 21 },
          create: {
            Genre: {
              create: {
                name: "comedy"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 15: Joker
await prisma.movie.create({
  data: {
    Name: "Joker",
    ReleaseDate: "04.10",
    Year: 2019,
    Country: "USA, Canada",
    Director: "Todd Phillips",
    Duration: "2.02 hours",
    Screenwriter: "Todd Phillips, Scott Silver",
    Description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    Language: "english",
    FilmCompany: "Warner Bros., DC Films",
    Img: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    Rating: 8.4,
    Baner: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    Mood: "dark, psychological",
    Url: "https://youtu.be/zAGVQLHvwOY",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 17 },
          create: {
            Actor: {
              create: {
                name: "Joaquin",
                surname: "Phoenix",
                dateOfBirth: 1974,
                placeOfBirth: "USA, Puerto Rico",
                height: 173,
                career: "Oscar-winning actor known for Walk the Line, Her",
                totalMovies: 50,
                image: "https://m.media-amazon.com/images/M/MV5BZGMyY2Q4NTEtMWVkZS00NzcwLTkzNmQtYzBlMWZhZGNhMDhkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 22 },
          create: {
            Genre: {
              create: {
                name: "crime"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 16: Avengers: Endgame
await prisma.movie.create({
  data: {
    Name: "Avengers: Endgame",
    ReleaseDate: "26.04",
    Year: 2019,
    Country: "USA",
    Director: "Anthony Russo, Joe Russo",
    Duration: "3.01 hours",
    Screenwriter: "Christopher Markus, Stephen McFeely",
    Description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    Language: "english",
    FilmCompany: "Marvel Studios",
    Img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    Rating: 8.4,
    Baner: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    Mood: "epic, action-packed",
    Url: "https://youtu.be/TcMBFSGVi1c",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 18 },
          create: {
            Actor: {
              create: {
                name: "Robert",
                surname: "Downey Jr.",
                dateOfBirth: 1965,
                placeOfBirth: "USA, New York",
                height: 174,
                career: "Actor known for Iron Man, Sherlock Holmes",
                totalMovies: 95,
                image: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 23 },
          create: {
            Genre: {
              create: {
                name: "action"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 17: Black Panther
await prisma.movie.create({
  data: {
    Name: "Black Panther",
    ReleaseDate: "16.02",
    Year: 2018,
    Country: "USA",
    Director: "Ryan Coogler",
    Duration: "2.14 hours",
    Screenwriter: "Ryan Coogler, Joe Robert Cole",
    Description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    Language: "english",
    FilmCompany: "Marvel Studios",
    Img: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    Rating: 7.3,
    Baner: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    Mood: "action, cultural",
    Url: "https://youtu.be/xjDjIWPwcPU",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 19 },
          create: {
            Actor: {
              create: {
                name: "Chadwick",
                surname: "Boseman",
                dateOfBirth: 1976,
                placeOfBirth: "USA, South Carolina",
                height: 183,
                career: "Actor known for 42, Ma Rainey's Black Bottom",
                totalMovies: 25,
                image: "https://m.media-amazon.com/images/M/MV5BMTk2OTY5MzcwMV5BMl5BanBnXkFtZTgwODM4MDI5MjI@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 24 },
          create: {
            Genre: {
              create: {
                name: "sci-fi"
              }
            }
          }
        }
      ]
    }
  }
});

// Фільм 18: Birdman
await prisma.movie.create({
  data: {
    Name: "Birdman",
    ReleaseDate: "27.08",
    Year: 2014,
    Country: "USA",
    Director: "Alejandro G. Iñárritu",
    Duration: "1.59 hours",
    Screenwriter: "Alejandro G. Iñárritu, Nicolás Giacobone",
    Description: "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
    Language: "english",
    FilmCompany: "Fox Searchlight Pictures",
    Img: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg",
    Rating: 7.7,
    Baner: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg",
    Mood: "dark comedy, drama",
    Url: "https://youtu.be/uJfLoE6hanc",
    Moments: {
      create: [
        { url: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg" },
        { url: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg" }
      ]
    },
    Actors: {
      connectOrCreate: [
        {
          where: { id: 20 },
          create: {
            Actor: {
              create: {
                name: "Michael",
                surname: "Keaton",
                dateOfBirth: 1951,
                placeOfBirth: "USA, Pennsylvania",
                height: 175,
                career: "Actor known for Batman, Beetlejuice",
                totalMovies: 90,
                image: "https://m.media-amazon.com/images/M/MV5BMTQwMjIxNjYyMl5BMl5BanBnXkFtZTcwMzY3NjY3Mg@@._V1_.jpg"
              }
            }
          }
        }
      ]
    },
    Genres: {
      connectOrCreate: [
        {
          where: { id: 25 },
          create: {
            Genre: {
              create: {
                name: "comedy"
              }
            }
          }
        }
      ]
    }
  }
});

console.log("13 додаткових фільмів успішно створено!");
}


async function main() {
//          MOVIE
    // await createMovie();
    // await createMovies()
    // await deleteMovieById()
    // await clearAllFilms()
    // await getMovieById();
    // await getAllMovies();

//            COMMENT
    // await createComments()
    // await clearAllComments()
    // await deleteComentById(1)

//            GENRE
    // await getAllGenres();
    // await clearAllGenres()
    // await deleteGenreById()

//            ACTOR
    // await deleteActorById(1)
    // await clearAllActors()

//            USER
    // await createUser();
    // await deleteUser(8)
    // await clearAllUsers()

//            CREATE FILM
    // await createSonic4()
    await create25Movies()
    // await createInception2()
    // await createDunePart3()
    // await createAvatar3()
    // await createTheBatman2()
    // await createMissionImpossible8()
    // await createBlackPanther3()
    // await createFantasticBeasts4()
    // await createJurassicWorld4()
    // await createDeadpool3()
    // await createMatrix5()
    // await createJohnWick5()
    // await createSonic4();
    // await createInception2();
    // await createDunePart3();
    // await createJohnWick5();
    // await createAvatar3();
    // await createTheBatman2();
    // await createMissionImpossible8();
    // await createBlackPanther3();
    // await createFantasticBeasts4();
    // await createJurassicWorld4();
    // await createDeadpool3();
    // await createMatrix5();
    // await skuf()
    // await createTheMaskedSinger();
    // await createAmericasGotTalent();
    // await createHorrorMovie()
    // await createAnotherHorrorMovie()
    // await moodAngry()
    // await moodHappy()
    // await moodSad()

//             CLEAN
    // await clearAllUsers()
    // await clearAllActors()
    // await clearAllGenres()
    // await clearAllComments()
    // await clearAllFilms()
  };

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})