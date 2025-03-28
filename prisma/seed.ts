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


async function createInception() {
  await prisma.movie.create({
    data: {
      Name: "Inception",
      ReleaseDate: "16.07",
      Year: 2010,
      Country: "USA",
      Director: "Christopher Nolan",
      Duration: "2.5 hours",
      Screenwriter: "Christopher Nolan",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Language: "english",
      FilmCompany: "Warner Bros.",
      Img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      Rating: 8.8,
      Actors: {
        connectOrCreate: {
          where: { id: 1 },
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
                image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 1 },
          create: {
            Genre: {
              create: {
                name: "sci-fi"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "Inception" добавлен.');
}

// Функция для добавления фильма "The Dark Knight"
async function createTheDarkKnight() {
  await prisma.movie.create({
    data: {
      Name: "The Dark Knight",
      ReleaseDate: "18.07",
      Year: 2008,
      Country: "USA",
      Director: "Christopher Nolan",
      Duration: "2.5 hours",
      Screenwriter: "Jonathan Nolan, Christopher Nolan",
      Description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      Language: "english",
      FilmCompany: "Warner Bros.",
      Img: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
      Rating: 9.0,
      Actors: {
        connectOrCreate: {
          where: { id: 2 },
          create: {
            Actor: {
              create: {
                name: "Christian",
                surname: "Bale",
                dateOfBirth: 1974,
                placeOfBirth: "Wales, UK",
                height: 183,
                career: "Academy Award-winning actor",
                totalMovies: 60,
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Christian_Bale_2018.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 2 },
          create: {
            Genre: {
              create: {
                name: "action"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Dark Knight" добавлен.');
}



// Функция для добавления фильма "Interstellar"
async function createInterstellar() {
  await prisma.movie.create({
    data: {
      Name: "Interstellar",
      ReleaseDate: "07.11",
      Year: 2014,
      Country: "USA",
      Director: "Christopher Nolan",
      Duration: "2.49 hours",
      Screenwriter: "Jonathan Nolan, Christopher Nolan",
      Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "english",
      FilmCompany: "Paramount Pictures",
      Img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      Rating: 8.6,
      Actors: {
        connectOrCreate: {
          where: { id: 3 },
          create: {
            Actor: {
              create: {
                name: "Matthew",
                surname: "McConaughey",
                dateOfBirth: 1969,
                placeOfBirth: "USA, Texas",
                height: 182,
                career: "Academy Award-winning actor",
                totalMovies: 70,
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Matthew_McConaughey_2011.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 3 },
          create: {
            Genre: {
              create: {
                name: "adventure"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "Interstellar" добавлен.');
}

// Функция для добавления фильма "The Grand Budapest Hotel"
async function createTheGrandBudapestHotel() {
  await prisma.movie.create({
    data: {
      Name: "The Grand Budapest Hotel",
      ReleaseDate: "28.03",
      Year: 2014,
      Country: "USA",
      Director: "Wes Anderson",
      Duration: "1.40 hours",
      Screenwriter: "Wes Anderson, Hugo Guinness",
      Description: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
      Language: "english",
      FilmCompany: "Fox Searchlight Pictures",
      Img: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg",
      Rating: 8.1,
      Actors: {
        connectOrCreate: {
          where: { id: 4 },
          create: {
            Actor: {
              create: {
                name: "Ralph",
                surname: "Fiennes",
                dateOfBirth: 1962,
                placeOfBirth: "UK, Suffolk",
                height: 180,
                career: "Academy Award-nominated actor",
                totalMovies: 80,
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ralph_Fiennes_2011.jpg"
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
                name: "comedy"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Grand Budapest Hotel" добавлен.');
}



// Функция для добавления фильма "The Revenant"
async function createTheRevenant() {
  await prisma.movie.create({
    data: {
      Name: "The Revenant",
      ReleaseDate: "25.12",
      Year: 2015,
      Country: "USA",
      Director: "Alejandro González Iñárritu",
      Duration: "2.36 hours",
      Screenwriter: "Mark L. Smith, Alejandro González Iñárritu",
      Description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      Language: "english",
      FilmCompany: "20th Century Fox",
      Img: "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg",
      Rating: 8.0,
      Actors: {
        connectOrCreate: {
          where: { id: 5 },
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
                image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg"
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
                name: "drama"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Revenant" добавлен.');
}

// Функция для добавления фильма "The Conjuring"
async function createTheConjuring() {
  await prisma.movie.create({
    data: {
      Name: "The Conjuring",
      ReleaseDate: "19.07",
      Year: 2013,
      Country: "USA",
      Director: "James Wan",
      Duration: "1.52 hours",
      Screenwriter: "Chad Hayes, Carey W. Hayes",
      Description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      Language: "english",
      FilmCompany: "New Line Cinema",
      Img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg",
      Rating: 7.5,
      Actors: {
        connectOrCreate: {
          where: { id: 6 },
          create: {
            Actor: {
              create: {
                name: "Vera",
                surname: "Farmiga",
                dateOfBirth: 1973,
                placeOfBirth: "USA, New Jersey",
                height: 171,
                career: "Academy Award-nominated actress",
                totalMovies: 40,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Vera_Farmiga_2019.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 6 },
          create: {
            Genre: {
              create: {
                name: "horror"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "The Conjuring" добавлен.');
}



// Функция для добавления фильма "Hereditary"
async function createHereditary() {
  await prisma.movie.create({
    data: {
      Name: "Hereditary",
      ReleaseDate: "08.06",
      Year: 2018,
      Country: "USA",
      Director: "Ari Aster",
      Duration: "2.07 hours",
      Screenwriter: "Ari Aster",
      Description: "A grieving family is haunted by tragic and disturbing occurrences.",
      Language: "english",
      FilmCompany: "A24",
      Img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
      Rating: 7.3,
      Actors: {
        connectOrCreate: {
          where: { id: 7 },
          create: {
            Actor: {
              create: {
                name: "Toni",
                surname: "Collette",
                dateOfBirth: 1972,
                placeOfBirth: "Australia, New South Wales",
                height: 169,
                career: "Academy Award-nominated actress",
                totalMovies: 60,
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Toni_Collette_2019.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 7 },
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
  console.log('Фильм "Hereditary" добавлен.');
}

// Функция для добавления фильма "Get Out"
async function createGetOut() {
  await prisma.movie.create({
    data: {
      Name: "Get Out",
      ReleaseDate: "24.02",
      Year: 2017,
      Country: "USA",
      Director: "Jordan Peele",
      Duration: "1.44 hours",
      Screenwriter: "Jordan Peele",
      Description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      Language: "english",
      FilmCompany: "Universal Pictures",
      Img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
      Rating: 7.7,
      Actors: {
        connectOrCreate: {
          where: { id: 8 },
          create: {
            Actor: {
              create: {
                name: "Daniel",
                surname: "Kaluuya",
                dateOfBirth: 1989,
                placeOfBirth: "UK, London",
                height: 178,
                career: "Academy Award-winning actor",
                totalMovies: 30,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Daniel_Kaluuya_2018.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 8 },
          create: {
            Genre: {
              create: {
                name: "thriller"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "Get Out" добавлен.');
}



// Функция для добавления фильма "The Babadook"
async function createTheBabadook() {
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
      Img: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Babadook.jpg",
      Rating: 6.8,
      Actors: {
        connectOrCreate: {
          where: { id: 9 },
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
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Essie_Davis_2014.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 9 },
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

// Функция для добавления фильма "A Quiet Place"
async function createAQuietPlace() {
  await prisma.movie.create({
    data: {
      Name: "A Quiet Place",
      ReleaseDate: "06.04",
      Year: 2018,
      Country: "USA",
      Director: "John Krasinski",
      Duration: "1.30 hours",
      Screenwriter: "Bryan Woods, Scott Beck, John Krasinski",
      Description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
      Language: "english",
      FilmCompany: "Paramount Pictures",
      Img: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
      Rating: 7.5,
      Actors: {
        connectOrCreate: {
          where: { id: 10 },
          create: {
            Actor: {
              create: {
                name: "Emily",
                surname: "Blunt",
                dateOfBirth: 1983,
                placeOfBirth: "UK, London",
                height: 170,
                career: "Academy Award-nominated actress",
                totalMovies: 45,
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Emily_Blunt_2019.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 10 },
          create: {
            Genre: {
              create: {
                name: "horror"
              }
            }
          }
        }
      }
    }
  });
  console.log('Фильм "A Quiet Place" добавлен.');
}

async function createSonic3() {
  await prisma.movie.create({
    data: {
      Name: "Sonic the Hedgehog 3",
      ReleaseDate: "20.12",
      Year: 2024,
      Country: "USA, Japan",
      Director: "Jeff Fowler",
      Duration: "2.05 hours", 
      Screenwriter: "Pat Casey, Josh Miller, John Whittington",
      Description: "The continuing adventures of Sonic the Hedgehog as he faces new threats in the human world alongside his friends Tails and Knuckles.",
      Language: "english",
      FilmCompany: "Paramount Pictures, SEGA",
      Img: "https://upload.wikimedia.org/wikipedia/ru/2/2b/%D0%A1%D0%BE%D0%BD%D0%B8%D0%BA_3_%D0%B2_%D0%BA%D0%B8%D0%BD%D0%BE.png", 
      Rating: 7, 
      Actors: {
        connectOrCreate: [
          {
            where: { id: 11 },
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
                  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ben_Schwartz_by_Gage_Skidmore.jpg"
                }
              }
            }
          },
          {
            where: { id: 12 },
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
                  image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Idris_Elba_2019.jpg"
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
                  name: "action"
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
          },
          {
            where: { id: 13 },
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
      Img: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Babadook.jpg",
      Rating: 6.8,
      Actors: {
        connectOrCreate: {
          where: { id: 16 },
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
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Essie_Davis_2014.jpg"
              }
            }
          }
        }
      },
      Genres: {
        connectOrCreate: {
          where: { id: 16 },
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

async function main() {
    // await createMovie();
    // await createComments()
    // await deleteMovieById(6)
    // await getAllGenres();
    // await getMovieById();
    // await getAllMovies();
    // await deleteGenreById(1)
    // await deleteComentById(1)
    // await deleteActorById(1)
    await createUser();
    // await createAQuietPlace()
    // await createTheBabadook()
    // await createGetOut()
    // await createHereditary()
    // await createTheRevenant()
    // await createTheGrandBudapestHotel()
    // await createInterstellar()
    // await createTheDarkKnight()
    // await createInception()
    // await createTheConjuring()
    // await deleteUser(8)
    // await clearAllUsers()
    // await createSonic3()
    // await skuf()
  };

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})