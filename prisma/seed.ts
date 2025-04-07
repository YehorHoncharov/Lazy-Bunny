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
  console.log('Фильм "Sonic the Hedgehog 3" добавлен.');
}

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
    await createSonic4()
    await skuf()
    await createTheMaskedSinger();
    await createAmericasGotTalent();
    await createHorrorMovie()
    await createAnotherHorrorMovie()
    await moodAngry()
    await moodHappy()
    await moodSad()

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