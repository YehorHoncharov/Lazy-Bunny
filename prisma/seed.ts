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



async function createHappyMovies() {
  // Movie 1: The Super Mario Bros. Movie
  await prisma.movie.create({
    data: {
      Name: "The Super Mario Bros. Movie",
      ReleaseDate: "05.04",
      Year: 2023,
      Country: "USA, Japan",
      Director: "Aaron Horvath, Michael Jelenic",
      Duration: "1.32 hours",
      Screenwriter: "Matthew Fogel",
      Description: "The story of Brooklyn plumbers Mario and Luigi as they travel through a mysterious pipe to a magical new world.",
      Language: "english",
      FilmCompany: "Illumination, Nintendo",
      Img: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg",
      Rating: 7,
      Baner: "https://www.escapistmagazine.com/wp-content/uploads/2023/04/THE-SUPER-MARIO-BROS-MOVIE3.jpg?fit=1280%2C720",
      Mood: "Happy",
      Url: "https://youtu.be/TnGl01FkMMo",
      Moments: {
        create: [
          { url: "https://media.newyorker.com/photos/64526e8287ae684cabca2c9c/master/w_1920,c_limit/Chayka-Mario.jpg" },
          { url: "https://variety.com/wp-content/uploads/2023/04/MCDSUMA_UV036.jpg?w=1000&h=562&crop=1" },
          { url: "https://static.filmvandaag.nl/news/22519/super-mario-bros-the-movie-vanaf-vandaag-op-netflix.jpg?ts=1729493869" },
          { url: "https://www.hollywoodreporter.com/wp-content/uploads/2023/04/Super-Mario-Bros-Movie-Toad-Peach-Everett-MCDSUMA_UV009-H-2023.jpg?w=1296&h=730&crop=1" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Actor: {
                create: {
                  name: "Chris",
                  surname: "Pratt",
                  dateOfBirth: 1979,
                  placeOfBirth: "USA, Minnesota",
                  height: 188,
                  career: "Actor known for Guardians of the Galaxy and Jurassic World",
                  totalMovies: 90,
                  image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Chris_Pratt_2018.jpg"
                }
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Actor: {
                create: {
                  name: "Anya",
                  surname: "Taylor-Joy",
                  dateOfBirth: 1996,
                  placeOfBirth: "USA, Florida",
                  height: 173,
                  career: "Actress known for The Queen's Gambit and Furiosa",
                  totalMovies: 30,
                  image: "https://cdn.britannica.com/31/222531-050-BB75F3FD/Anya-Taylor-Joy-2020.jpg"
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
                  name: "animation"
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

  // Movie 2: Paddington 2
  await prisma.movie.create({
    data: {
      Name: "Paddington 2",
      ReleaseDate: "10.11",
      Year: 2017,
      Country: "UK, France",
      Director: "Paul King",
      Duration: "1.43 hours",
      Screenwriter: "Paul King, Simon Farnaby",
      Description: "Paddington, now happily settled with the Brown family, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy's 100th birthday.",
      Language: "english",
      FilmCompany: "StudioCanal, Heyday Films",
      Img: "https://m.media-amazon.com/images/M/MV5BMmYwNWZlNzEtNjE4Zi00NzQ4LWI2YmUtOWZhNzZhZDYyNmVmXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
      Rating: 8,
      Baner: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/2f105508-af55-40fa-a2ce-59b021ce19bf/5d66ff71-4fee-483f-b69d-7c92898edcca?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      Mood: "Happy",
      Url: "https://youtu.be/6FgUUO9Ztd0",
      Moments: {
        create: [
          { url: "https://i.guim.co.uk/img/media/d29f48f658177e673f0c32a85c60cff063c75597/0_139_1538_922/master/1538.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0ae026c586f43a203a9ed9a04f64a70f" },
          { url: "https://fakty.ua/photos/article/25/52/255204w540zc0.jpg?v=233155" },
          { url: "https://i.ytimg.com/vi/1AuP-nsrfXU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWEsAnS9KzTfZTa3TQzUgsAOZHnA" },
          { url: "https://i.ytimg.com/vi/2-fIxHN4xjw/maxresdefault.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 3 },
            create: {
              Actor: {
                create: {
                  name: "Hugh",
                  surname: "Grant",
                  dateOfBirth: 1960,
                  placeOfBirth: "UK, London",
                  height: 180,
                  career: "Actor known for romantic comedies and dramatic roles",
                  totalMovies: 70,
                  image: "https://globalnews.ca/wp-content/uploads/2016/08/hugh-grant.jpg?quality=85&strip=all"
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
                  name: "family"
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
}

// Calm Mood Movies
async function createCalmMovies() {
  // Movie 4: Chef
  await prisma.movie.create({
    data: {
      Name: "Chef",
      ReleaseDate: "09.05",
      Year: 2014,
      Country: "USA",
      Director: "Jon Favreau",
      Duration: "1.54 hours",
      Screenwriter: "Jon Favreau",
      Description: "A chef who loses his restaurant job starts up a food truck in an effort to reclaim his creative promise.",
      Language: "english",
      FilmCompany: "Fairview Entertainment",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7WeZAkQhbzycUBc1vb9B4BC4CLMXbo0gLg&s",
      Rating: 7,
      Baner: "https://ntvb.tmsimg.com/assets/p10367270_v_h8_ab.jpg?w=1280&h=720",
      Mood: "Calm",
      Url: "https://youtu.be/ffxP2xf7G2c",
      Moments: {
        create: [
          { url: "https://people.com/thmb/-BFSXF3ikyx8Gecwxl0Drx6mr60=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(299x0:301x2)/chef-600x450-4ac4d97049814c6898331caa1f75be88.jpg" },
          { url: "https://cdn.theplaylist.net/wp-content/uploads/2014/05/15124127/jon-favreau-chef.jpg" },
          { url: "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/540/907/Chef_Trailer1.jpg" },
          { url: "https://lh3.googleusercontent.com/2GjVm3Diot6ZhhJy7Iee9yULPFDp9k-p1LDP2xIIzJtxu-Xt36yPbQ88KHYeKsHg6JGrYNNQk1v9vLZVQc_DKLN9QSHTUzNO6a1_1jalI9Sv-2bhkMyYnjgDue91-pXECu0qGHvkBa1HBEqBJz83tPAbPI24f9cgNo-YWV-WNMNxfS474fNSadQ7_Xflkw" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Actor: {
                create: {
                  name: "Jon",
                  surname: "Favreau",
                  dateOfBirth: 1966,
                  placeOfBirth: "USA, New York",
                  height: 185,
                  career: "Actor, director and producer known for Iron Man and The Mandalorian",
                  totalMovies: 100,
                  image: "https://www.onthisday.com/images/people/jon-favreau.jpg?w=360"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 3 },
            create: {
              Genre: {
                create: {
                  name: "comedy"
                }
              }
            }
          },
          {
            where: { id: 5 },
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
}

// Sad Mood Movies
async function createSadMovies() {
  // Movie 5: The Fault in Our Stars
  await prisma.movie.create({
    data: {
      Name: "The Fault in Our Stars",
      ReleaseDate: "06.06",
      Year: 2014,
      Country: "USA",
      Director: "Josh Boone",
      Duration: "2.06 hours",
      Screenwriter: "Scott Neustadter, Michael H. Weber",
      Description: "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
      Language: "english",
      FilmCompany: "20th Century Fox",
      Img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png/250px-The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png",
      Rating: 8,
      Baner: "https://musicart.xboxlive.com/7/dd1c5200-0000-0000-0000-000000000002/504/image.jpg",
      Mood: "Sad",
      Url: "https://youtu.be/9ItBvH5J6ss",
      Moments: {
        create: [
          { url: "https://decider.com/wp-content/uploads/2019/05/the-fault-in-our-stars-2.jpg?quality=75&strip=all" },
          { url: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/6/12/1402574582977/The-Fault-Is-In-Our-Stars-014.jpg?width=465&dpr=1&s=none&crop=none" },
          { url: "https://tvgidsassets.nl/v355/upload/t/the-fault-in-our-stars-454757641.jpg" },
          { url: "https://nypost.com/wp-content/uploads/sites/2/2014/05/the_fault_in_our_stars_93833527-e1401600706471.jpg?quality=75&strip=all&w=744" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 6 },
            create: {
              Actor: {
                create: {
                  name: "Shailene",
                  surname: "Woodley",
                  dateOfBirth: 1991,
                  placeOfBirth: "USA, California",
                  height: 173,
                  career: "Actress known for Divergent series and Big Little Lies",
                  totalMovies: 40,
                  image: "https://starsunfolded.com/wp-content/uploads/2025/04/Shailene-Woodley.jpg"
                }
              }
            }
          },
          {
            where: { id: 7 },
            create: {
              Actor: {
                create: {
                  name: "Ansel",
                  surname: "Elgort",
                  dateOfBirth: 1994,
                  placeOfBirth: "USA, New York",
                  height: 193,
                  career: "Actor and singer known for Baby Driver and West Side Story",
                  totalMovies: 20,
                  image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_30/1231111/ansel-elgort-baby-names-today-inline.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Genre: {
                create: {
                  name: "romance"
                }
              }
            }
          },
          {
            where: { id: 5 },
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

  // Movie 6: Manchester by the Sea
  await prisma.movie.create({
    data: {
      Name: "Manchester by the Sea",
      ReleaseDate: "18.11",
      Year: 2016,
      Country: "USA",
      Director: "Kenneth Lonergan",
      Duration: "2.17 hours",
      Screenwriter: "Kenneth Lonergan",
      Description: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
      Language: "english",
      FilmCompany: "Amazon Studios",
      Img: "https://m.media-amazon.com/images/S/pv-target-images/85fbbb9b523a60e9270b66042ab7cc35997f37ba6934e700e4d6c9eba7692da0.jpg",
      Rating: 8,
      Baner: "https://i0.wp.com/elementsofmadness.com/wp-content/uploads/2017/01/manchester-by-the-sea.png?fit=851%2C315&ssl=1",
      Mood: "Sad",
      Url: "https://youtu.be/gsVoD0pTge0",
      Moments: {
        create: [
          { url: "https://variety.com/wp-content/uploads/2016/10/manchester-by-the-sea.jpg?w=1000&h=563&crop=1" },
          { url: "https://variety.com/wp-content/uploads/2016/01/manchester-by-the-sea-sundance-2016.jpg?w=1000&h=608&crop=1" },
          { url: "https://media.newyorker.com/photos/59097c1f1c7a8e33fb390338/master/pass/Brody-KennethLonergansDevastatingLiberatingManchesterbytheSea2.jpg" },
          { url: "https://static01.nyt.com/images/2016/11/18/arts/18MANBYSEA/18MANBYSEA-videoSixteenByNineJumbo1600.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 8 },
            create: {
              Actor: {
                create: {
                  name: "Casey",
                  surname: "Affleck",
                  dateOfBirth: 1975,
                  placeOfBirth: "USA, Massachusetts",
                  height: 175,
                  career: "Actor known for his dramatic roles and brother of Ben Affleck",
                  totalMovies: 60,
                  image: "https://ntvb.tmsimg.com/assets/assets/10933_v9_bc.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 5 },
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
}

// Angry Mood Movies
async function createAngryMovies() {
  // Movie 7: Joker
  await prisma.movie.create({
    data: {
      Name: "Joker",
      ReleaseDate: "04.10",
      Year: 2019,
      Country: "USA",
      Director: "Todd Phillips",
      Duration: "2.02 hours",
      Screenwriter: "Todd Phillips, Scott Silver",
      Description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      Language: "english",
      FilmCompany: "Warner Bros.",
      Img: "https://resizing.flixster.com/z4hiL8ZBmyZYrgP523AZvdk7uUI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRmOWU4ODJhLTNkMzAtNDNhMC04YjhjLWVkMjJjMGI4MjE4Ni5wbmc=",
      Rating: 9,
      Baner: "https://images.mubicdn.net/images/film/205704/cache-372080-1683644542/image-w1280.jpg",
      Mood: "Angry",
      Url: "https://youtu.be/zAGVQLHvwOY",
      Moments: {
        create: [
          { url: "https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2019/Schede_film/970x647/Venezia_76/joker.jpg?itok=Tn_swkJU" },
          { url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/joker-movie-header.jpg" },
          { url: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19282421/JOKER_MOVIE_REVIEW.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZhjwwg_F9O1rSCfbBevyTXiatVCLLrcSlQ&s" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 9 },
            create: {
              Actor: {
                create: {
                  name: "Joaquin",
                  surname: "Phoenix",
                  dateOfBirth: 1974,
                  placeOfBirth: "USA, Puerto Rico",
                  height: 173,
                  career: "Academy Award winning actor known for intense dramatic roles",
                  totalMovies: 50,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Joaquin_Phoenix-64908_%28cropped%29.jpg/960px-Joaquin_Phoenix-64908_%28cropped%29.jpg"
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
            where: { id: 5 },
            create: {
              Genre: {
                create: {
                  name: "drama"
                }
              }
            }
          },
          {
            where: { id: 9 },
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

  // Movie 8: Fight Club
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
      FilmCompany: "20th Century Fox",
      Img: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      Rating: 9,
      Baner: "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/pass/Baker-FightClub.jpg",
      Mood: "Angry",
      Url: "https://youtu.be/qtRKdVHc-cE",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BMzVjNDRkMTYtMTczYS00ZTEyLWI3NTQtYTc3NWE4MTY3OGNkXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg" },
          { url: "https://images.justwatch.com/backdrop/247729258/s640/fight-club" },
          { url: "https://erickimphotography.com/blog/wp-content/uploads/2017/05/fight-club-cinematography-life-lessons-18.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BMTgxNzY2NjIxOV5BMl5BanBnXkFtZTcwNzU3ODMzMw@@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 10 },
            create: {
              Actor: {
                create: {
                  name: "Brad",
                  surname: "Pitt",
                  dateOfBirth: 1963,
                  placeOfBirth: "USA, Oklahoma",
                  height: 180,
                  career: "Academy Award winning actor and producer",
                  totalMovies: 100,
                  image: "https://hips.hearstapps.com/hmg-prod/images/actor-brad-pitt-attends-the-photocall-of-the-movie-wolfs-news-photo-1726680022.jpg?crop=0.670xw:1.00xh;0.0760xw,0&resize=640:*"
                }
              }
            }
          },
          {
            where: { id: 11 },
            create: {
              Actor: {
                create: {
                  name: "Edward",
                  surname: "Norton",
                  dateOfBirth: 1969,
                  placeOfBirth: "USA, Massachusetts",
                  height: 183,
                  career: "Academy Award nominated actor known for intense dramatic roles",
                  totalMovies: 50,
                  image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 5 },
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
}

async function createHappyAdventure() {
  await prisma.movie.create({
    data: {
      Name: "The Happy Adventure",
      ReleaseDate: "15.05",
      Year: 2025,
      Country: "USA",
      Director: "John Doe",
      Duration: "1.45 hours",
      Screenwriter: "Jane Doe",
      Description: "A heartwarming adventure of a young girl who discovers the beauty of life and friendship in unexpected places.",
      Language: "english",
      FilmCompany: "Happy Films",
      Img: "https://i.mydramalist.com/nv75Ec.jpg?v=1",
      Rating: 8,
      Baner: "https://static.diksia.com/media/id/2024/03/Sinopsis-Film-The-Adventures-2023-Petualangan-Seru-Mencari-Harta-Karun-dari-Thailand-ke-Shanghai.webp",
      Mood: "Happy",
      Url: "https://youtu.be/some_trailer_url",
      Moments: {
        create: [
          { url: "https://i.ytimg.com/vi/S-f497e5x6k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCMDmz8JgZ3XhzyHzFxPih1FiyyA" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyDvGAJYANz7y6zbPmDs5KeP97E5HbHcheg&s" },
          { url: "https://i.ytimg.com/vi/sg4hk0J_NJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuffJAnB1py2NEV-PvfkMGY_isXg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Actor: {
                create: {
                  name: "Emma",
                  surname: "Watson",
                  dateOfBirth: 1990,
                  placeOfBirth: "UK, Paris",
                  height: 165,
                  career: "Famous actress, known for playing Hermione in Harry Potter",
                  totalMovies: 50,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_.jpg"
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
                  name: "adventure"
                }
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Genre: {
                create: {
                  name: "family"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "The Happy Adventure" добавлен.');
}

async function createCalmWaves() {
  await prisma.movie.create({
    data: {
      Name: "The Waves",
      ReleaseDate: "20.06",
      Year: 2025,
      Country: "Canada",
      Director: "Sarah Lee",
      Duration: "1.30 hours",
      Screenwriter: "Michael Smith",
      Description: "A serene story about the peaceful rhythm of life, set in a quiet coastal town.",
      Language: "english",
      FilmCompany: "Calm Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BZTcwYTY5MjAtOGU0MS00MGM5LThiYTMtMDM0YWIzYTM5OTczXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg",
      Rating: 9,
      Baner: "https://i.ytimg.com/vi/BLZcKmZQqV8/mqdefault.jpg",
      Mood: "Calm",
      Url: "https://www.youtube.com/watch?v=nhamfl3lNOo",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BY2FjNjBiNTQtYmYzNS00MTljLWI4MzktZWI1ZmM5NGU4Y2I4XkEyXkFqcGc@._V1_QL75_UX327_.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgvMkSnj7Z55o1bdd5VfiPQ8-L0acAo18F_r6lPK2g9sGNFPSupRo01X1IwkUTkHzDYU&usqp=CAU" },
          { url: "https://english.radio.cz/sites/default/files/styles/rcz_lightbox_v2/public/images/32945ab36eac18045fe292426ab2f946.jpg?itok=2w9_6vf2&timestamp=1741419893" },
          { url: "https://m.media-amazon.com/images/M/MV5BNjQ1M2ZkODYtY2QzNy00N2NiLTlmMjktNzU0ODI0YzhlNGYyXkEyXkFqcGc@._V1_QL75_UX328_.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 2 },
            create: {
              Actor: {
                create: {
                  name: "Daniel",
                  surname: "Radcliffe",
                  dateOfBirth: 1989,
                  placeOfBirth: "UK, London",
                  height: 165,
                  career: "Known for his role as Harry Potter",
                  totalMovies: 40,
                  image: "https://static.wikia.nocookie.net/extras/images/6/62/Daniel_Radcliffe.jpg/revision/latest?cb=20220320074438"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 3 },
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
  console.log('Фильм "The Calm Waves" добавлен.');
}

async function createComedyShow() {
  await prisma.movie.create({
    data: {
      Name: "The Comedy Show",
      ReleaseDate: "10.07",
      Year: 2025,
      Country: "USA",
      Director: "Alice Brown",
      Duration: "1.20 hours",
      Screenwriter: "James Hill",
      Description: "A hilarious variety show featuring comedians from around the world, with skits, stand-up, and improvisation.",
      Language: "english",
      FilmCompany: "Comedy Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BNjk5YzUyZjgtYTExNy00OTNjLThjN2ItYjVlZGFmZjdjMzdmXkEyXkFqcGc@._V1_.jpg",
      Rating: 8,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOwCDyCp61PaXdj1EBNCWiH_q_dWRWAQZrqKH1O33SbKZuIecRPq0pZ8mKM8f0aCdclI&usqp=CAU",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=BHC5rLnwVzY",
      Moments: {
        create: [
          { url: "https://canvas-lb.tubitv.com/opts/r3eATfIZRJPmlA==/32754046-fae0-49ea-b5a0-d1f9975be944/CJ4GEMADOgUxLjEuNg==" },
          { url: "https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F66fabb6a4421817ff1a4cf71%2FComedy_Cafe-27.jpg&w=3840&q=75" },
          { url: "https://d32dbz94xv1iru.cloudfront.net/resize/1/images/events/by_uuid/4d/4d38755f-c852-4402-9f4e-01e14e5db676-1500x900.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9qLORr-iutEsJvF-Ffd_pAXJbUWY4iAylgCjOn0UakwPj4Sy10dp_6aQ0ss02bgvg-I&usqp=CAU" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 3 },
            create: {
              Actor: {
                create: {
                  name: "Kevin",
                  surname: "Hart",
                  dateOfBirth: 1979,
                  placeOfBirth: "USA, Philadelphia",
                  height: 163,
                  career: "Comedian and actor known for his energetic stand-up comedy",
                  totalMovies: 90,
                  image: "https://www.datocms-assets.com/70938/1711350545-1711138476-kevin-hart-comedian-net-worth.jpg?auto=format%2Ccompress&cs=srgb"
                }
              }
            }
          },
          {
            where: { id: 4 },
            create: {
              Actor: {
                create: {
                  name: "Tiffany",
                  surname: "Haddish",
                  dateOfBirth: 1979,
                  placeOfBirth: "USA, Los Angeles",
                  height: 165,
                  career: "Comedian and actress known for her breakout role in 'Girls Trip'",
                  totalMovies: 30,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tiffany_Haddish_at_Incirlik_%28cropped_2%29.jpg/640px-Tiffany_Haddish_at_Incirlik_%28cropped_2%29.jpg"
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
                  name: "show"
                }
              }
            }
          },
          {
            where: { id: 1 },
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
  console.log('Фильм "The Comedy Show" добавлен.');
}

async function createTalentShow() {
  await prisma.movie.create({
    data: {
      Name: "The Talent Show",
      ReleaseDate: "25.08",
      Year: 2025,
      Country: "USA",
      Director: "Bob White",
      Duration: "1.40 hours",
      Screenwriter: "Chris Green",
      Description: "A national talent competition where performers of all kinds compete for a grand prize and the chance to be discovered.",
      Language: "english",
      FilmCompany: "Talent Studios",
      Img: "https://saintthomaschurch.org/wp-content/uploads/2021/01/Talent-Show-Featured-Image-1200x576.jpg",
      Rating: 7,
      Baner: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Talent_Show_Story_title_card.jpg",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=V4GhdGkS1MU",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BZGI5Y2MwNzMtMzc1YS00ZGRiLWJkN2UtZjE0ZmEyMGI3ZTM5XkEyXkFqcGc@._V1_.jpg" },
          { url: "https://i.ytimg.com/vi/V9cYXgPqyho/maxresdefault.jpg" },
          { url: "https://i.ytimg.com/vi/H7GDgnHpT8M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBqvI-QKRIDgQwguy0PfASk-Saiw" },
          { url: "https://i.ytimg.com/vi/7B5PIzh1LEk/mqdefault.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Actor: {
                create: {
                  name: "Simon",
                  surname: "Cowell",
                  dateOfBirth: 1959,
                  placeOfBirth: "UK, London",
                  height: 175,
                  career: "Television producer and talent show judge known for 'American Idol'",
                  totalMovies: 10,
                  image: "https://images.prismic.io/findmypast-titan/83f0e9b0542dada1bd6466f65f0cd657019c578e_980x.jpg?auto=compress%2Cformat&border=20%2C00FFFFFF&border-radius=20%2C20%2C20%2C20&fit=max&w=1200"
                }
              }
            }
          },
          {
            where: { id: 6 },
            create: {
              Actor: {
                create: {
                  name: "Ariana",
                  surname: "Grande",
                  dateOfBirth: 1993,
                  placeOfBirth: "USA, Boca Raton",
                  height: 153,
                  career: "Singer and actress, known for her powerful voice and starring in 'Victorious'",
                  totalMovies: 15,
                  image: "https://www.usmagazine.com/wp-content/uploads/2024/11/Ariana-Grande-Explains-Why-She-Used-Her-Full-Last-Name-in-Wicked-Movie-Credits-Such-a-Homecoming-0.jpg?w=1000&quality=86&strip=all"
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
                  name: "show"
                }
              }
            }
          },
          {
            where: { id: 2 },
            create: {
              Genre: {
                create: {
                  name: "reality"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "The Talent Show" добавлен.');
}

async function createFashionShow() {
  await prisma.movie.create({
    data: {
      Name: "The Fashion Show",
      ReleaseDate: "05.09",
      Year: 2025,
      Country: "Italy",
      Director: "Gina Moreno",
      Duration: "1.15 hours",
      Screenwriter: "Sophia Lucci",
      Description: "A glamorous fashion show highlighting the latest trends in clothing, showcasing the top designers of the year.",
      Language: "english",
      FilmCompany: "Glamour Studios",
      Img: "https://static.wikia.nocookie.net/gameshows/images/5/5f/Bravos-the-fashion-show-logo.jpg/revision/latest?cb=20130502075205",
      Rating: 9,
      Baner: "https://upload.wikimedia.org/wikipedia/en/0/0a/The_Fashion_Show_Ultimate_Collection_logo.png",
      Mood: "Happy",
      Url: "https://www.youtube.com/shorts/M48CrsRxMbk",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BMmRmNDM2ZDctMzg0Zi00MTQwLWFjYTAtNGU0MTMyZWZiOGJjXkEyXkFqcGc@._V1_.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkKSgy0zDCY5hR49ipbsSR9PkVWebeJZfi3EY68kDJg9fafq6iEeRWLKDzRLhATNXkKU&usqp=CAU" },
          { url: "https://i.dailymail.co.uk/1s/2021/04/07/21/41467686-0-image-a-14_1617827634563.jpg" },
          { url: "https://s.yimg.com/ny/api/res/1.2/szl8N3soDuvEWKXh69HdeQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MQ--/https://media.zenfs.com/en/fashionista_850/2294680c0f571742dfea2c9ef8d08294" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Actor: {
                create: {
                  name: "Bella",
                  surname: "Hadid",
                  dateOfBirth: 1996,
                  placeOfBirth: "USA, Los Angeles",
                  height: 178,
                  career: "Supermodel, one of the most in-demand models in the fashion industry",
                  totalMovies: 5,
                  image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Bella_Hadid_Cannes_2018_%28cropped%29_%28cropped%29.jpg"
                }
              }
            }
          },
          {
            where: { id: 8 },
            create: {
              Actor: {
                create: {
                  name: "Kendall",
                  surname: "Jenner",
                  dateOfBirth: 1995,
                  placeOfBirth: "USA, Los Angeles",
                  height: 179,
                  career: "Supermodel and reality TV star, known for her work in high-fashion shows",
                  totalMovies: 10,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPVMa-EQlO8Bppp_ZpO_WIu_5DN0KAU10IA&s"
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
                  name: "show"
                }
              }
            }
          },
          {
            where: { id: 5 },
            create: {
              Genre: {
                create: {
                  name: "fashion"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "The Fashion Show" добавлен.');
}


async function createSecretAdventure() {
  await prisma.movie.create({
    data: {
      Name: "The Secret Adventure",
      ReleaseDate: "15.03",
      Year: 2025,
      Country: "USA",
      Director: "George Miller",
      Duration: "2.10 hours",
      Screenwriter: "David Karp",
      Description: "A group of explorers embarks on a thrilling journey to uncover hidden treasures and ancient secrets.",
      Language: "English",
      FilmCompany: "Adventure Films",
      Img: "https://m.media-amazon.com/images/M/MV5BNTc0NjZmODUtMWQyZi00NTEyLTljMWMtNDQ5ZGI5MDhkNWNiXkEyXkFqcGc@._V1_.jpg", 
      Rating: 8,
      Baner: "https://m.media-amazon.com/images/M/MV5BMDNiNDBmMzQtMGM0Ni00MTQ3LThjNDYtYzMwNmJhMjkxZjEzXkEyXkFqcGc@._V1_.jpg",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=pS-GhUx2AXk",
      Moments: {
        create: [
          { url: "https://ghmoviefreak.com/wp-content/uploads/2023/06/the-secret-kingdom.webp" },
          { url: "https://i.ytimg.com/vi/Wx5wSLA6cqU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD7-DiREIlJyEZ4hXSxuApvxu9hgQ" },
          { url: "https://i.ytimg.com/vi/oDCgzGdZJUA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQbtchWY2iy9bt5mrmfB-FTMJnjw" },
          { url: "https://i.ytimg.com/vi/zcCgU-O-ox4/sddefault.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Actor: {
                create: {
                  name: "Tom",
                  surname: "Hanks",
                  dateOfBirth: 1956,
                  placeOfBirth: "USA, Concord",
                  height: 183,
                  career: "Award-winning actor",
                  totalMovies: 120,
                  image: "https://static.wikia.nocookie.net/disney/images/3/3d/Tom_Hanks.jpg/revision/latest?cb=20230731035300"
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
  console.log('Фильм "The Secret Adventure" добавлен.');
}

async function createMagicFashion() {
  await prisma.movie.create({
    data: {
      Name: "Magic Fashion",
      ReleaseDate: "12.05",
      Year: 2025,
      Country: "France",
      Director: "Sophie Laurent",
      Duration: "1.50 hours",
      Screenwriter: "Jean-Pierre Morel",
      Description: "A young designer discovers a magical thread that brings clothes to life.",
      Language: "French",
      FilmCompany: "Fashion Dreams",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHe4DrD31GQD25oueP61d9YDFxWxTx5-ij8fRCwHhV-ft9izah3sD0PJoQJHkB6AqrAM&usqp=CAU",
      Rating: 7.8,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-1Omp30H-QQVnfui-Y3GkisiwSYvDzJ7hg&s",
      Mood: "Happy",
      Url: "https://youtu.be/VvH1Q0zsn34",
      Moments: {
        create: [
          { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD3FK5ENL3JiBbfvwjsQyqcadNw5-HEvImJcPwiYZrmvccSznDL1w0u5FCNTxtAQX_GhFlp6MKq4nHMrwJKxl_NLXLOq1KU9UmmpkM4TwMnmVu1HykUTW90lSEDhdddoAaKkOhe-p2wM0/s1600/IMG_E4198.JPG" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNEMa5xYs29HP2Ve_MhHpO2-iWw-81hBRNIkup-zHd9puvzFVYOd_TwBhRB4pqVYSUac&usqp=CAU" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRizeAvylw0dRABkPLFcp1S6HoXqKJjO2jEF45GLJqctuILRh0h3bwPpv6hBXZuXlCI4g&usqp=CAU" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykRymkoSh-EsenNM7sDJvuDt507KecHsOq9KNI10fDDYVFpJvlmGMWQMZC5_Q9ZQKjag&usqp=CAU" },
        ]
      },
      Actors: {
        connect: [{ id: 7 }, { id: 8 }]
      },
      Genres: {
        connect: [{ id: 5 }]
      }
    }
  });
  console.log('Фильм "Magic Fashion" добавлен.');
}

async function createLostinFashion() {
  await prisma.movie.create({
    data: {
      Name: "Lost in Fashion",
      ReleaseDate: "05.10",
      Year: 2024,
      Country: "USA",
      Director: "Sophia Coppola",
      Duration: "1.50 hours",
      Screenwriter: "Lana Kim",
      Description: "A young designer navigates the dazzling and dramatic world of high fashion.",
      Language: "English",
      FilmCompany: "Glamour Studios",
      Img: "https://m.media-amazon.com/images/I/61NIQ-HgRJL._AC_UF894,1000_QL80_.jpg",
      Rating: 7.8,
      Baner: "https://assets.vogue.com/photos/60c0c431deeade9d50fa69b4/master/w_2560%2Cc_limit/00_story.jpg",
      Mood: "Calm",
      Url: "https://www.youtube.com/watch?v=qUIJ5HFz5Jc&list=RDqUIJ5HFz5Jc&start_radio=1",
      Moments: {
        create: [
          { url: "https://www.rollingstone.com/wp-content/uploads/2023/09/MCDLOIN_EC024.jpg?w=1024" },
          { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSM6pMeRmVNaDEcGt90_p-MCPIsWkDGZ3KLZFSunQ_jqHFCUvb08BsORbgFtnIyYZStXUzamS6u5KmW3tkJeSwNwQEOi7q67_xLsgAdBomnfSwHfPqPLaCdRvW7qoOqiOeUFGJfPNstl0JOxZ-O-KiJyPG1pXT6I5yetNfjWAs7ODDqq2_7_aLdI_U616W/s1280/IMG_0506.webp" },
          { url: "https://media.newyorker.com/photos/5bb3ddf4f229dd2d8d57b794/master/pass/Syme-Celine.jpg" },
          { url: "https://fashionista.com/.image/t_share/MTU4ODA3NTYxNDUyMTM2MTUy/gettyimages-1042670274.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Actor: {
                create: {
                  name: "Bella",
                  surname: "Hadid",
                  dateOfBirth: 1996,
                  placeOfBirth: "USA, Los Angeles",
                  height: 0,
                  career: "Supermodel turned actress",
                  totalMovies: 4,
                  image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Bella_Hadid_Cannes_2018_%28cropped%29_%28cropped%29.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Genre: {
                create: {
                  name: "fashion"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Lost in Fashion" добавлен.');
}

async function createAnimatedHearts() {
  await prisma.movie.create({
    data: {
      Name: "Sweethearts",
      ReleaseDate: "01.02",
      Year: 2024,
      Country: "USA",
      Director: "Pete Docter",
      Duration: "1.40 hours",
      Screenwriter: "Meg LeFauve",
      Description: "An emotional journey of a cartoon heart that discovers the meaning of love.",
      Language: "English",
      FilmCompany: "Pixar Animation Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BYWIwMzc4Y2ItMWEzOS00MzI2LTkyZTQtYTMxMjEwMGRiOThjXkEyXkFqcGc@._V1_.jpg",
      Rating: 8.2,
      Baner: "https://m.media-amazon.com/images/M/MV5BOWYxYzM0MzItNjhjZC00MTRkLTk2MjktZDM4N2NkNTUxYjQ3XkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=_PV3-uCQdJI",
      Moments: {
        create: [
          { url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/11/claire-and-simon-sit-next-to-each-other-on-the-couch-in-max-s-sweethearts-1.jpg" },
          { url: "https://static01.nyt.com/images/2024/11/26/multimedia/sweethearts1-hjcw/sweethearts1-hjcw-videoSixteenByNineJumbo1600.jpg" },
          { url: "https://www.indiewire.com/wp-content/uploads/2024/10/Screen-Shot-2024-10-29-at-4.56.53-PM.png?w=600&h=337&crop=1" },
          { url: "https://i0.wp.com/www.femestella.com/wp-content/uploads/2024/11/kiernan-2.jpg?resize=800%2C1200&ssl=1" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Actor: {
                create: {
                  name: "Kiernan",
                  surname: "Shipka",
                  dateOfBirth: 1999,
                  placeOfBirth: "USA, Chicago",
                  height: 175,
                  career: "TV host and producer",
                  totalMovies: 12,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kiernan_Shipka_in_2018_-_1.png/500px-Kiernan_Shipka_in_2018_-_1.png"
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
                  name: "family"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Animated Hearts" добавлен.');
}

async function createQuestBeyond() {
  await prisma.movie.create({
    data: {
      Name: "Quest Beyond",
      ReleaseDate: "12.03",
      Year: 2023,
      Country: "USA",
      Director: "James Cameron",
      Duration: "2.30 hours",
      Screenwriter: "Christopher McQuarrie",
      Description: "A hero embarks on a journey beyond the known universe to find a missing planet.",
      Language: "English",
      FilmCompany: "Lightstorm Entertainment",
      Img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1294172370i/5210334.jpg",
      Rating: 8.7,
      Baner: "https://assets.isthereanydeal.com/018ebcc9-7100-70e2-b196-89e7c8c6a82d/banner400.jpg?t=1740576608",
      Mood: "Calm",
      Url: "https://www.youtube.com/watch?v=nqY_yZAI9UI",
      Moments: {
        create: [
          { url: "https://m.media-amazon.com/images/M/MV5BYWFiMDM5YTItMTUzOC00ZDNjLWI1MWMtZjA2YmZlOTk3NzQ5XkEyXkFqcGc@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BYWY4YjdkY2ItOGZjZC00MGE0LTljNDItYWRkNmI3NzA0Zjc0XkEyXkFqcGc@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BNzQ3ZjdmYzYtYTdiNS00M2Q3LWIwMTEtNGRhOTczZDg3ZjBiXkEyXkFqcGc@._V1_.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BODAwMjg2MmUtNDY4OS00OTZlLWJhZTMtMmVhMDczNGZhOGI2XkEyXkFqcGc@._V1_.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 1 },
            create: {
              Actor: {
                create: {
                  name: "Chris",
                  surname: "Pratt",
                  dateOfBirth: 1979,
                  placeOfBirth: "USA, Minnesota",
                  height: 188,
                  career: "Actor, voice actor",
                  totalMovies: 45,
                  image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Chris_Pratt_2018.jpg"
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
  console.log('Фильм "Quest Beyond" добавлен.');
}

async function createLaughterLane() {
  await prisma.movie.create({
    data: {
      Name: "Laughter Lane",
      ReleaseDate: "07.06",
      Year: 2022,
      Country: "UK",
      Director: "Edgar Wright",
      Duration: "1.50 hours",
      Screenwriter: "Simon Pegg",
      Description: "A group of eccentric neighbors find themselves in hilarious situations on a quiet British street.",
      Language: "English",
      FilmCompany: "Working Title Films",
      Img: "https://m.media-amazon.com/images/M/MV5BZDg4OTVhNTYtNThiYS00NTAxLWE1MjktODQ1MTlhODNmODIzXkEyXkFqcGc@._V1_.jpgg",
      Rating: 7.9,
      Baner: "https://i.ytimg.com/vi/fprTa0FqXVU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5zuXUZ1uVzX6Gc-mhiedCMwHmtg",
      Mood: "Calm",
      Url: "https://www.youtube.com/watch?v=yigtKg-s0O8",
      Moments: {
        create: [
          { url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/050815/050815_producers_hmed_12p.jpg" },
          { url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/050815/050815_producers_hmed_12p.jpg" },
          { url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/050815/050815_producers_hmed_12p.jpg" },
          { url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/050815/050815_producers_hmed_12p.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 5 },
            create: {
              Actor: {
                create: {
                  name: "Simon",
                  surname: "Cowell",
                  dateOfBirth: 1959,
                  placeOfBirth: "UK, London",
                  height: 175,
                  career: "TV host and producer",
                  totalMovies: 12,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Simon_Cowell_in_December_2011.jpg/640px-Simon_Cowell_in_December_2011.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
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
  console.log('Фильм "Laughter Lane" добавлен.');
}

async function createEchoesOfSilence() {
  await prisma.movie.create({
    data: {
      Name: "Echoes of Silence",
      ReleaseDate: "11.10",
      Year: 2022,
      Country: "France",
      Director: "Claire Denis",
      Duration: "1.55 hours",
      Screenwriter: "Jean-Claude Carrière",
      Description: "A haunting exploration of a mute woman's emotional journey through love and loss.",
      Language: "French",
      FilmCompany: "StudioCanal",
      Img: "https://m.media-amazon.com/images/M/MV5BM2QwMmIwOGQtYjlhMS00MzgxLWE0ZDYtYWVlMmU1MTU2ZmRlXkEyXkFqcGc@._V1_.jpg",
      Rating: 7.6,
      Baner: "https://i.ytimg.com/vi/bnLw9r-26bY/maxresdefault.jpg",
      Mood: "Sad",
      Url: "https://www.youtube.com/watch?v=bnLw9r-26bY",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzJG3cKlxMvoQiLYyFjtlELUHdfzGWV36wg&s" },
          { url: "https://images.squarespace-cdn.com/content/v1/5d9353389da03e48d46ff794/1569936505939-B9C4BYKQ5NJOJKZ48QPN/image-asset.jpeg?format=2500w" },
          { url: "https://assets.mubicdn.net/images/film/90862/image-w856.jpg?1445917692" },
          { url: "https://mir-s3-cdn-cf.behance.net/project_modules/source/95fa77133681175.61c3269410a97.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 6 },
            create: {
              Actor: {
                create: {
                  name: "Juliette",
                  surname: "Binoche",
                  dateOfBirth: 1964,
                  placeOfBirth: "France, Paris",
                  height: 168,
                  career: "Award-winning actress",
                  totalMovies: 80,
                  image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Juliette_Binoche_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 5 },
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
  console.log('Фильм "Echoes of Silence" добавлен.');
}

async function createNeonPulse() {
  await prisma.movie.create({
    data: {
      Name: "Neon Pulse",
      ReleaseDate: "23.08",
      Year: 2025,
      Country: "USA",
      Director: "Denis Villeneuve",
      Duration: "2.20 hours",
      Screenwriter: "Eric Heisserer",
      Description: "In a future ruled by AI, one woman discovers a hidden force pulsing through neon cities.",
      Language: "English",
      FilmCompany: "Legendary Pictures",
      Img: "https://i.ytimg.com/vi/jaLsp0UFEnM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgyT9Gtg1G40kyxNgOexHeLDuunw",
      Rating: 8.4,
      Baner: "https://i.ytimg.com/vi/i31_IaZ2CnY/hqdefault.jpg",
      Mood: "Angry",
      Url: "https://www.youtube.com/watch?v=i31_IaZ2CnY",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TKERziaHtWOFp7z6F6LeyMVkKTc1DpkpdyB04LoVD1dxEsOB3O2WKM4CZqyo16EZlFk&usqp=CAU" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TKERziaHtWOFp7z6F6LeyMVkKTc1DpkpdyB04LoVD1dxEsOB3O2WKM4CZqyo16EZlFk&usqp=CAU" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TKERziaHtWOFp7z6F6LeyMVkKTc1DpkpdyB04LoVD1dxEsOB3O2WKM4CZqyo16EZlFk&usqp=CAU" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TKERziaHtWOFp7z6F6LeyMVkKTc1DpkpdyB04LoVD1dxEsOB3O2WKM4CZqyo16EZlFk&usqp=CAU" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Actor: {
                create: {
                  name: "Zendaya",
                  surname: "Coleman",
                  dateOfBirth: 1996,
                  placeOfBirth: "USA, Oakland",
                  height: 178,
                  career: "Actress, singer",
                  totalMovies: 30,
                  image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg"
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
                  name: "sci-fi"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Neon Pulse" добавлен.');
}

async function createLiveTonight() {
  await prisma.movie.create({
    data: {
      Name: "Live Tonight",
      ReleaseDate: "30.05",
      Year: 2023,
      Country: "USA",
      Director: "Samantha Bee",
      Duration: "1.00 hours",
      Screenwriter: "Various writers",
      Description: "A satirical late-night variety show that brings politics, comedy and music together.",
      Language: "English",
      FilmCompany: "Comedy Central",
      Img: "https://m.media-amazon.com/images/M/MV5BZWY2YzM5MzgtZmJjNS00NDY4LThmNmQtOTc1ZTBmZTU3OGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      Rating: 7.1,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iJ1yD-aICiGAomzez9BCUYzvWqL8yqQQ_w&s",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=hTWKbfoikeg",
      Moments: {
        create: [
          { url: "https://media-cache.cinematerial.com/p/500x/tmeiopbs/nirvana-live-tonight-sold-out-movie-cover.jpg?v=1456017870" },
          { url: "https://media-cache.cinematerial.com/p/500x/tmeiopbs/nirvana-live-tonight-sold-out-movie-cover.jpg?v=1456017870" },
          { url: "https://media-cache.cinematerial.com/p/500x/tmeiopbs/nirvana-live-tonight-sold-out-movie-cover.jpg?v=1456017870" },
          { url: "https://media-cache.cinematerial.com/p/500x/tmeiopbs/nirvana-live-tonight-sold-out-movie-cover.jpg?v=1456017870" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 8 },
            create: {
              Actor: {
                create: {
                  name: "Trevor",
                  surname: "Noah",
                  dateOfBirth: 1984,
                  placeOfBirth: "South Africa, Johannesburg",
                  height: 180,
                  career: "Comedian, host",
                  totalMovies: 18,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFhP9osyoBz4a9YXND9JIK9nhm3DQS06DuQ&s"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          {
            where: { id: 7 },
            create: {
              Genre: {
                create: {
                  name: "show"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Live Tonight" добавлен.');
}

async function createTheLastRehearsal() {
  await prisma.movie.create({
    data: {
      Name: "The Last Rehearsal",
      ReleaseDate: "14.11",
      Year: 2020,
      Country: "USA",
      Director: "Tom Hooper",
      Duration: "2.00 hours",
      Screenwriter: "Lee Hall",
      Description: "A talented young dancer struggles to find her place in a competitive theater world.",
      Language: "English",
      FilmCompany: "Universal Pictures",
      Img: "https://m.media-amazon.com/images/M/MV5BM2UzZTZjOWYtNjE5ZC00ZWU5LWExZTUtYWZmMzIwMTczYjY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      Rating: 6.9,
      Baner: "https://m.media-amazon.com/images/M/MV5BMjEyNzMyMjcxOF5BMl5BanBnXkFtZTgwNjE0NTEyNzM@._V1_.jpg",
      Mood: "Sad",
      Url: "https://www.youtube.com/watch?v=GcCNcgoyG_0",
      Moments: {
        create: [
          { url: "https://static.fabrik.io/1iwe/c4c6a8e039e06fff.jpg?lossless=1&w=2560&fit=crop&crop=faces%2Centropy&s=0fc41a20e7fe60195b19674349f42a63" },
          { url: "https://images.mubicdn.net/images/film/430170/cache-1017534-1732982474/image-w1280.jpg?size=800x" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8ZoLPxWaJMA9ZdyfpLFrCpwMw4ToKx9JuA&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc9nJ-bXr1F726srXabyNOjqdpmnJzZwoEQ&s" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 9 },
            create: {
              Actor: {
                create: {
                  name: "Anne",
                  surname: "Hathaway",
                  dateOfBirth: 1982,
                  placeOfBirth: "USA, New York",
                  height: 173,
                  career: "Actress",
                  totalMovies: 50,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoG1gBPLv_0Y5cR69tnKAGD4YjA2l4hv6AA&s"
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
                  name: "musical"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "The Last Rehearsal" добавлен.');
}


async function createLaLaLand() {
  await prisma.movie.create({
    data: {
      Name: "La La Land",
      ReleaseDate: "09.12",
      Year: 2016,
      Country: "USA",
      Director: "Damien Chazelle",
      Duration: "2.08 hours",
      Screenwriter: "Damien Chazelle",
      Description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
      Language: "English",
      FilmCompany: "Lionsgate",
      Img: "https://m.media-amazon.com/images/M/MV5BMTg1NDQ5OTYxNV5BMl5BanBnXkFtZTgwODU2NzQxMDI@._V1_.jpg",
      Rating: 8.0,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0_ye6y-Q1ahQGLW48WLRea8htKyyhbJlfQ&s",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=GTWqwSNQCcg",
      Moments: {
        create: [
          { url: "https://virginiafilmfestival.org/wp-content/uploads/2016/09/La-La-Land-Image-FINAL-scaled.jpg" },
          { url: "https://s.abcnews.com/images/Entertainment/nc-lala-100-er-170129_16x9_992.jpg?w=384" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd90pzOj1zSZ2AwLdTCXeMr2J2jTGLmqbgg&s" },
          { url: "https://media.npr.org/assets/img/2017/01/05/xlll_d35_05828_r2_wide-8001bb39513f62ab6eec51fb6720e06b18cddef8.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 14 },
            create: {
              Actor: {
                create: {
                  name: "Ryan",
                  surname: "Gosling",
                  dateOfBirth: 1980,
                  placeOfBirth: "Canada",
                  height: 184,
                  career: "Actor",
                  totalMovies: 45,
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgRTE2CmeBOl_e8KRT8mYdZ4CRyMkaLjzeA&s"
                }
              }
            }
          },
          {
            where: { id: 15 },
            create: {
              Actor: {
                create: {
                  name: "Emma",
                  surname: "Stone",
                  dateOfBirth: 1988,
                  placeOfBirth: "USA, Arizona",
                  height: 168,
                  career: "Actress",
                  totalMovies: 35,
                  image: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg"
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
                  name: "musical"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "La La Land" добавлен.');
}

async function create1917() {
  await prisma.movie.create({
    data: {
      Name: "1917",
      ReleaseDate: "25.12",
      Year: 2019,
      Country: "UK",
      Director: "Sam Mendes",
      Duration: "1.59 hours",
      Screenwriter: "Sam Mendes, Krysty Wilson-Cairns",
      Description: "Two British soldiers are sent across enemy territory to deliver a message that could save 1,600 men.",
      Language: "English",
      FilmCompany: "Universal Pictures",
      Img: "https://upload.wikimedia.org/wikipedia/ru/e/ef/1917_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpeg",
      Rating: 8.3,
      Baner: "https://c.files.bbci.co.uk/F667/production/_110497036_b1f0f8cf-22eb-4d34-b4d0-e85fd3c80ca9.jpg",
      Mood: "Sad",
      Url: "https://www.youtube.com/watch?v=OXuyIM-opQU",
      Moments: {
        create: [
          { url: "https://kor.ill.in.ua/m/1260x900/2463897.jpeg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnyuZd6-1w7LAhJMrR4-iAtNdZncO0F6hPA&s" },
          { url: "https://shpalta.media/wp-content/uploads/2020/02/1917-4.jpg" },
          { url: "https://cdn4.suspilne.media/images/resize/400x1.78/8dafd91cedad8147.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 16 },
            create: {
              Actor: {
                create: {
                  name: "George",
                  surname: "MacKay",
                  dateOfBirth: 1992,
                  placeOfBirth: "UK, London",
                  height: 183,
                  career: "Actor",
                  totalMovies: 25,
                  image: "https://m.media-amazon.com/images/M/MV5BMTQ4NjQ0NTEwOV5BMl5BanBnXkFtZTgwODQyMzIyMTI@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 17 },
            create: {
              Actor: {
                create: {
                  name: "Dean-Charles",
                  surname: "Chapman",
                  dateOfBirth: 1997,
                  placeOfBirth: "UK, Essex",
                  height: 175,
                  career: "Actor",
                  totalMovies: 15,
                  image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Dean-Charles_Chapman_2019.jpg"
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
                  name: "war"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "1917" добавлен.');
}

async function createInception() {
  await prisma.movie.create({
    data: {
      Name: "Inception",
      ReleaseDate: "16.07",
      Year: 2010,
      Country: "USA",
      Director: "Christopher Nolan",
      Duration: "2.28 hours",
      Screenwriter: "Christopher Nolan",
      Description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jIZ4ghU8MiF_BbvSUquG7zEDzlA_rXiqnA&s",
      Rating: 8.8,
      Baner: "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
      Mood: "Angry",
      Url: "https://www.youtube.com/watch?v=8hP9D6kZseM",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCuEYS4JqsDqddK_SkWBFHJw35zwsetlrnQ&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9TexZU9AhNpLm3ZEh7JXMLj5zAJ96HEoDQ&s" },
          { url: "https://images.theconversation.com/files/359713/original/file-20200924-16-bsgsp7.jpg?ixlib=rb-4.1.0&rect=33%2C186%2C1455%2C727&q=45&auto=format&w=1356&h=668&fit=crop" },
          { url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/cobb-in-a-corridor-in-inception.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 18 },
            create: {
              Actor: {
                create: {
                  name: "Leonardo",
                  surname: "DiCaprio",
                  dateOfBirth: 1974,
                  placeOfBirth: "USA, California",
                  height: 183,
                  career: "Actor",
                  totalMovies: 55,
                  image: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg"
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
                  name: "sci-fi"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Inception" добавлен.');
}


async function createTheMatrix() {
  await prisma.movie.create({
    data: {
      Name: "The Matrix",
      ReleaseDate: "31.03",
      Year: 1999,
      Country: "USA",
      Director: "Lana Wachowski, Lilly Wachowski",
      Duration: "2.16 hours",
      Screenwriter: "The Wachowskis",
      Description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      Rating: 8.7,
      Baner: "https://cdn.planetakino.ua/old-movie-files/00000000000000000000000000002203/opt_null",
      Mood: "Angry",
      Url: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      Moments: {
        create: [
          { url: "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-5885917bh.jpg?c=16x9&q=h_833,w_1480,c_fill" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnYGcGamsIot0xdU-tBhoLS660Eo0KIFJaA&s" },
          { url: "https://m.media-amazon.com/images/M/MV5BMTY3NDY5NTMyMF5BMl5BanBnXkFtZTYwMjU3MDg4._V1_.jpghttps://media.wired.com/photos/5c9ba67d1e34481170ef2bcd/master/pass/Culture_Matrix_RedPillBluePill-1047403844.jpg" },
          { url: "https://st3.depositphotos.com/4805703/16170/i/450/depositphotos_161704604-stock-photo-red-and-blue-pills-on.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [{
          where: { id: 21 },
          create: {
            Actor: {
              create: {
                name: "Keanu",
                surname: "Reeves",
                dateOfBirth: 1964,
                placeOfBirth: "Lebanon, Beirut",
                height: 186,
                career: "Actor",
                totalMovies: 70,
                image: "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              }
            }
          }
        }]
      },
      Genres: {
        connectOrCreate: [{
          where: { id: 6 },
          create: { Genre: { create: { name: "sci-fi" } } }
        }]
      }
    }
  });
  console.log('Фильм "The Matrix" добавлен.');
}


async function createAvatar() {
  await prisma.movie.create({
    data: {
      Name: "Avatar",
      ReleaseDate: "18.12",
      Year: 2009,
      Country: "USA",
      Director: "James Cameron",
      Duration: "2.42 hours",
      Screenwriter: "James Cameron",
      Description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "english",
      FilmCompany: "Lightstorm Entertainment",
      Img: "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg",
      Rating: 7.8,
      Baner: "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg",
      Mood: "Adventure",
      Url: "https://youtu.be/5PSNL1qE6VY",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUpM-2yqZIsCi-wb_H-ywhEaznFO37SUhlg&s" },
          { url: "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE3/630f5c7fd1d4a867d8cb3a01/IMAGE_16_9_XL.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw66pWqgCV3_kX0MlygE_icQ2LzU96xmeDkg&s" },
          { url: "https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 27 },
            create: {
              Actor: {
                create: {
                  name: "Sam",
                  surname: "Worthington",
                  dateOfBirth: 1976,
                  placeOfBirth: "Australia",
                  height: 180,
                  career: "Actor best known for 'Avatar'",
                  totalMovies: 30,
                  image: "https://m.media-amazon.com/images/M/MV5BODAwMTQ0Y2UtYmE0ZS00Mjc4LWExZTMtNTIzMjdmYTZlMTJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 6 }, create: { Genre: { create: { name: "sci-fi" } } } },
          { where: { id: 3 }, create: { Genre: { create: { name: "action" } } } }
        ]
      }
    }
  });
  console.log('Фильм "Avatar" добавлен.');
}

async function createQuantumLeap2025() {
  await prisma.movie.create({
    data: {
      Name: "Quantum Leap",
      ReleaseDate: "05.03",
      Year: 2025,
      Country: "USA",
      Director: "Alex Green",
      Duration: "2.00 hours",
      Screenwriter: "Alex Green",
      Description: "A groundbreaking scientist discovers time travel, and tries to fix broken moments in history.",
      Language: "english",
      FilmCompany: "TimeLoop Studios",
      Img: "https://m.media-amazon.com/images/M/MV5BYjFiYWZjZTctZWUxOS00YTA5LTg1ZjctNzYyMzYxODhjOWZlXkEyXkFqcGc@._V1_.jpg",
      Rating: 8.2,
      Baner: "https://images.squarespace-cdn.com/content/v1/529e3f47e4b0437241215504/7220dcfd-4882-47df-b594-3026163baf20/QL_KA_16x9.jpg",
      Mood: "Adventure",
      Url: "https://youtu.be/bkTEhZWknNM?si=08uYkqcpp_3FjqJ0",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEORqY8SpzrH4qYc14uuH38XanoQo_1Zlaxg&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowwAL1oo6iuelidJ98vtnvEyoaKbgI1EC4Q&s" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2022/08/Quantum-Leap-New-Series.jpg?fit=1200%2C675" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEOi0rjN52QzMaXB5anrgWLuuao7Zcr6mlQ&s" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 27 },
            create: {
              Actor: {
                create: {
                  name: "Daniel",
                  surname: "Radcliffe",
                  dateOfBirth: 1989,
                  placeOfBirth: "England",
                  height: 165,
                  career: "Actor known for 'Harry Potter' series",
                  totalMovies: 40,
                  image: "https://m.media-amazon.com/images/M/MV5BYzVmYjIxMzgtZWU2Ny00MjAyLTk5ZWUtZDEyMTliYjczMmIxXkEyXkFqcGc@._V1_.jpg" 
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 6 }, create: { Genre: { create: { name: "sci-fi" } } } },
          { where: { id: 9 }, create: { Genre: { create: { name: "action" } } } }
        ]
      }
    }
  });
  console.log('Фильм "Quantum Leap" добавлен.');
}


async function createNeonSkies2026() {
  await prisma.movie.create({
    data: {
      Name: "Neon Skies",
      ReleaseDate: "14.01",
      Year: 2026,
      Country: "Japan",
      Director: "Kenji Matsuda",
      Duration: "1.55 hours",
      Screenwriter: "Kenji Matsuda",
      Description: "In a hyper-advanced society, a young woman explores the vast skies of a neon-lit city, discovering secrets about her family's past.",
      Language: "japanese",
      FilmCompany: "Neon Productions",
      Img: "https://images.squarespace-cdn.com/content/v1/638702ecf8cfbb29620dcb25/2a3f7cc3-6f24-44e7-bf6d-14c9cb4c6fb6/DSC00751-Edit-2.jpg", 
      Rating: 7.6,
      Baner: "https://images.squarespace-cdn.com/content/v1/638702ecf8cfbb29620dcb25/2a3f7cc3-6f24-44e7-bf6d-14c9cb4c6fb6/DSC00751-Edit-2.jpg", 
      Mood: "Calm",
      Url: "https://youtu.be/neon_skies_trailer",
      Moments: {
        create: [
          { url: "https://images.squarespace-cdn.com/content/v1/638702ecf8cfbb29620dcb25/2a3f7cc3-6f24-44e7-bf6d-14c9cb4c6fb6/DSC00751-Edit-2.jpg" },
          { url: "https://images.squarespace-cdn.com/content/v1/638702ecf8cfbb29620dcb25/2a3f7cc3-6f24-44e7-bf6d-14c9cb4c6fb6/DSC00751-Edit-2.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 30 },
            create: {
              Actor: {
                create: {
                  name: "Rinko",
                  surname: "Kikuchi",
                  dateOfBirth: 1981,
                  placeOfBirth: "Japan",
                  height: 160,
                  career: "Actress known for 'Pacific Rim' and 'Babel'",
                  totalMovies: 30,
                  image: "https://m.media-amazon.com/images/M/MV5BMTI5NjE0MjcwN15BMl5BanBnXkFtZTYwMDcxNTA1._V1_.jpg" 
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 6 }, create: { Genre: { create: { name: "sci-fi" } } } },
          { where: { id: 1 }, create: { Genre: { create: { name: "animation" } } } }
        ]
      }
    }
  });
  console.log('Фильм "Neon Skies" добавлен.');
}


async function createEchoes2020() {
  await prisma.movie.create({
    data: {
      Name: "Echoes",
      ReleaseDate: "15.07",
      Year: 2020,
      Country: "UK",
      Director: "Johnathan Reese",
      Duration: "1.30 hours",
      Screenwriter: "Emma Carter",
      Description: "A suspenseful psychological thriller about a woman who begins to lose grip on reality after hearing mysterious voices.",
      Language: "english",
      FilmCompany: "Reverie Films",
      Img: "https://m.media-amazon.com/images/M/MV5BM2ZmNDdhMDItNmUyOC00MDY1LWFhNzctYzk1ZjA5YjQ1ZDg4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
      Rating: 7.5,
      Baner: "https://cdn.theplaylist.net/wp-content/uploads/2022/07/26134551/ENUS_Echoes_Main_4x5_RGB_PRE.jpg", 
      Mood: "Sad",
      Url: "https://www.youtube.com/watch?v=bOLRxUkKMcY",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6U_qsZOeOo_xpOPg2zkIuVvoO0J2W1kIXA&s" },
          { url: "https://static.tvtropes.org/pmwiki/pub/images/stir_of_echoes_nightmare_fuel.jpg" },
          { url: "https://ew.com/thmb/XqV3xU4eRI0_KGfJkxPQD8bo3A0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stir-of-echoes-2000-3d2eb449f4ed49ce8be6255b4f310f69.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVIppaXCiWd4O9bQ0gMO8LyALuWytpUQTKw&s" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 39 },
            create: {
              Actor: {
                create: {
                  name: "Emily",
                  surname: "Blunt",
                  dateOfBirth: 1983,
                  placeOfBirth: "England",
                  height: 169,
                  career: "Actress known for 'A Quiet Place' and 'The Girl on the Train'",
                  totalMovies: 35,
                  image: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Echoes" добавлен.');
}

async function createSunsetDreams2021() {
  await prisma.movie.create({
    data: {
      Name: "Sunset Dreams",
      ReleaseDate: "03.09",
      Year: 2021,
      Country: "USA",
      Director: "Sophia Lee",
      Duration: "2.00 hours",
      Screenwriter: "Michael Johnson",
      Description: "A feel-good romantic comedy about two people who meet on a road trip across America and fall in love under the golden skies of sunset.",
      Language: "english",
      FilmCompany: "Sunset Films",
      Img: "https://m.media-amazon.com/images/M/MV5BYzdkZTIyZWMtNWY3ZC00NTVmLTgyYTQtYzRkMzgxMWYwMDc2XkEyXkFqcGc@._V1_.jpg", 
      Rating: 8.0,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSkjCNE85d0VSMgJUf_48Gtc0GSSEBvCppQ&s", 
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=-4O0CdfZFJU",
      Moments: {
        create: [
          { url: "https://images.stockcake.com/public/e/a/a/eaaf436d-2646-4261-a821-cac3412b4f10_large/cinematic-sunset-dreams-stockcake.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKC9QnaMLPNd3UC_IR3JPzhykngbY72hK0Rg&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJT1cpEk9qS019alGrlFF2ZNfyVdbNc-vYA&s" },
          { url: "https://images.napali.app/global/roxy-products/all/default/xlarge/arjl101150_roxy,p_tan_frt4.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 40 },
            create: {
              Actor: {
                create: {
                  name: "Zoe",
                  surname: "Kravitz",
                  dateOfBirth: 1988,
                  placeOfBirth: "USA",
                  height: 157,
                  career: "Actress and singer known for 'Big Little Lies' and 'Mad Max: Fury Road'",
                  totalMovies: 25,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Zoe_Kravitz_2020_dvna_studio.jpg/640px-Zoe_Kravitz_2020_dvna_studio.jpg"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Sunset Dreams" добавлен.');
}


async function createBrokenPromises2023() {
  await prisma.movie.create({
    data: {
      Name: "Broken Promises",
      ReleaseDate: "19.05",
      Year: 2023,
      Country: "Canada",
      Director: "Oliver Stone",
      Duration: "1.45 hours",
      Screenwriter: "Jackie Stewart",
      Description: "A gripping drama about a woman whose life is turned upside down after she finds out her husband is keeping a life-changing secret.",
      Language: "english",
      FilmCompany: "Stone Films",
      Img: "https://m.media-amazon.com/images/M/MV5BNTJmNjk0ZGYtZGIxNS00MmE0LWI3OTctMTAwODE1Y2IyZDE3XkEyXkFqcGc@._V1_.jpg",
      Rating: 7.3,
      Baner: "https://m.media-amazon.com/images/M/MV5BNTJmNjk0ZGYtZGIxNS00MmE0LWI3OTctMTAwODE1Y2IyZDE3XkEyXkFqcGc@._V1_.jpg",
      Mood: "Sad",
      Url: "https://www.youtube.com/watch?app=desktop&v=7-8Z0FNoOsE",
      Moments: {
        create: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zOKqIqIMjYklVb_r5pF4a8WWvFvhXgRbfQ&s" },
          { url: "https://lh6.googleusercontent.com/proxy/ii97IlX4613Q2plpTNY936M9ae_X2iQcLkX4oeZIFS-bX692Ng_cvDjQwmS13YjOEyNX8YlcFQn5WOVqj52OZ6SPaK1rKWOkc7emrGrxS6_0bwaphGTPsqT5SGb7pVDlK4IMF8KxQvopsvAJ" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkoTyYbmDpglhq_FcehytEugdjJMV8A7t0Q&s" },
          { url: "https://i.pinimg.com/736x/9d/a6/a0/9da6a06fe59de56b35688a1d02f0a1e7.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 42 },
            create: {
              Actor: {
                create: {
                  name: "Rebecca",
                  surname: "Ferguson",
                  dateOfBirth: 1983,
                  placeOfBirth: "Sweden",
                  height: 170,
                  career: "Actress known for 'Mission: Impossible' and 'The White Queen'",
                  totalMovies: 20,
                  image: "https://m.media-amazon.com/images/M/MV5BMDVlZjIzOTktYzNmZC00MjIzLTk1YTMtMzdlOTFiNzQ3ZGY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                }
              }
            }
          }
        ]
      }
    }
  });
  console.log('Фильм "Broken Promises" добавлен.');
}


async function createDarkKnight() {
  await prisma.movie.create({
    data: {
      Name: "The Dark Knight",
      ReleaseDate: "18.07",
      Year: 2008,
      Country: "USA",
      Director: "Christopher Nolan",
      Duration: "2.32 hours",
      Screenwriter: "Jonathan Nolan, Christopher Nolan",
      Description: "Batman faces a new nemesis, the Joker, whose anarchistic and chaotic methods put Gotham City on the edge of destruction.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      Rating: 9.0,
      Baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CrCO_nh1NS65y1Lix3HIysy66w5nvOJ8Lg&s", 
      Mood: "Angry",
      Url: "https://www.youtube.com/watch?v=KO90kiH6W0U",
      Moments: {
        create: [
          { url: "https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2012/7/24/1343140784259/Still-from-The-Dark-Knigh-008.jpg?width=465&dpr=1&s=none&crop=none" },
          { url: "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/1/8/1231415036722/Scene-from-The-Dark-Knigh-001.jpg?width=465&dpr=1&s=none&crop=none" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZWgyO4zhFIiASIG0DFOV8vYPXWDTKmu1eA&s" },
          { url: "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/7/30/1248961807284/Scene-from-the-Dark-Knigh-001.jpg?width=465&dpr=1&s=none&crop=none" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 23 },
            create: {
              Actor: {
                create: {
                  name: "Christian",
                  surname: "Bale",
                  dateOfBirth: 1974,
                  placeOfBirth: "England",
                  height: 183,
                  career: "Actor known for 'American Psycho' and 'The Prestige'",
                  totalMovies: 50,
                  image: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg"
                }
              }
            }
          },
          {
            where: { id: 24 },
            create: {
              Actor: {
                create: {
                  name: "Heath",
                  surname: "Ledger",
                  dateOfBirth: 1979,
                  placeOfBirth: "Australia",
                  height: 183,
                  career: "Actor known for 'Brokeback Mountain' and '10 Things I Hate About You'",
                  totalMovies: 20,
                  image: "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_FMjpg_UX1000_.jpg" 
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 9 }, create: { Genre: { create: { name: "action" } } } },
          { where: { id: 8 }, create: { Genre: { create: { name: "thriller" } } } }
        ]
      }
    }
  });
  console.log('Фильм "The Dark Knight" добавлен.');
}

async function createDune2021() {
  await prisma.movie.create({
    data: {
      Name: "Dune",
      ReleaseDate: "22.10",
      Year: 2021,
      Country: "USA",
      Director: "Denis Villeneuve",
      Duration: "2.35 hours",
      Screenwriter: "Denis Villeneuve",
      Description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg", 
      Rating: 8.1,
      Baner: "https://torontofilmschool.ca/app/uploads/2024/05/dune-part-two.jpeg", 
      Mood: "Angry",
      Url: "https://www.youtube.com/watch?v=n9xhJrPXop4",
      Moments: {
        create: [
          { url: "https://snworksceo.imgix.net/bdh/0ef7a0e8-0478-4915-8974-ae45052c1d71.sized-1000x1000.jpg?w=1000" },
          { url: "https://www.dartington.org/wp-content/uploads/2021/10/dune.jpg" },
          { url: "https://images.thedirect.com/media/article_full/dune-part-2s.jpg" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38PmQWNi8QXR-aFYLVFeJiYG86OHA9-fMvQ&s" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 23 },
            create: {
              Actor: {
                create: {
                  name: "Timothée",
                  surname: "Chalamet",
                  dateOfBirth: 1995,
                  placeOfBirth: "USA",
                  height: 177,
                  career: "Actor known for 'Call Me by Your Name' and 'Dune'",
                  totalMovies: 15,
                  image: "https://cdn.britannica.com/36/231936-050-63D849FB/Timothee-Chalamet-2021.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 6 }, create: { Genre: { create: { name: "sci-fi" } } } },
          { where: { id: 2 }, create: { Genre: { create: { name: "adventure" } } } }
        ]
      }
    }
  });
  console.log('Фильм "Dune" добавлен.');
}

async function createTenet2020() {
  await prisma.movie.create({
    data: {
      Name: "Tenet",
      ReleaseDate: "03.09",
      Year: 2020,
      Country: "USA",
      Director: "Christopher Nolan",
      Duration: "2.30 hours",
      Screenwriter: "Christopher Nolan",
      Description: "Armed with only one word—Tenet—and fighting for the survival of the world, a protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbsNTsIjDM9caiuREo8VGVaj6FW7SaH0Dvw&s",
      Rating: 7.8,
      Baner: "https://images.vertigo.com.ua/2020/08/wzjrb4mki3yk138bjyul9nx47y6-1280x630.jpg", 
      Mood: "Thriller",
      Url: "https://youtu.be/pctuHEeztlw?si=x5n9Xme7Nj76dieT",
      Moments: {
        create: [
          { url: "https://prm.ua/wp-content/uploads/2020/08/MV5BNWFlNjVkM2ItZDE1My00NTEwLWJhYmQtYWM5ODRkNzY3OGE5XkEyXkFqcGdeQXVyNjUwNzk3NDc-._V1_.jpg" },
          { url: "https://cdn.mos.cms.futurecdn.net/nEhb42udh7tNdUWDYgEPf4.jpg" },
          { url: "https://mbr.com.ua/uploads/news/2020/07/28/e16af68afc3a80e99370492b5f1b3d0d0fc7aa68.jpg" },
          { url: "https://m.media-amazon.com/images/M/MV5BNGQ4MWM5ZDEtMTNkNi00ZDRkLWE1NDEtNTY2NDU4MzgzZTQzXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 24 },
            create: {
              Actor: {
                create: {
                  name: "John",
                  surname: "David Washington",
                  dateOfBirth: 1984,
                  placeOfBirth: "USA",
                  height: 183,
                  career: "Actor known for 'BlacKkKlansman' and 'Tenet'",
                  totalMovies: 10,
                  image: "https://m.media-amazon.com/images/M/MV5BOTY4NDcyNDM5OF5BMl5BanBnXkFtZTgwMjk4Mzk0NTM@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 8 }, create: { Genre: { create: { name: "thriller" } } } },
          { where: { id: 2 }, create: { Genre: { create: { name: "adventure" } } } }
        ]
      }
    }
  });
  console.log('Фильм "Tenet" добавлен.');
}

async function createMatrixResurrections2021() {
  await prisma.movie.create({
    data: {
      Name: "The Matrix Resurrections",
      ReleaseDate: "22.12",
      Year: 2021,
      Country: "USA",
      Director: "Lana Wachowski",
      Duration: "2.28 hours",
      Screenwriter: "Lana Wachowski, David Mitchell, Aleksandar Hemon",
      Description: "Neo's peaceful life is shattered when he is contacted by the mysterious Morpheus, who offers him the chance to discover the truth behind the Matrix once again.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_.jpg",
      Rating: 5.7,
      Baner: "https://m.media-amazon.com/images/S/pv-target-images/32cbdbe4273fdfbb0f88c22efee93bb93975a357a34b7afffb3ec8a2634ced6f.jpg",
      Mood: "Calm",
      Url: "https://youtu.be/nNpvWBuTfrc?si=m4jyMOQ8eBRYU1XB",
      Moments: {
        create: [
          { url: "https://images.squarespace-cdn.com/content/v1/5548389fe4b0cbbc3dfcb99b/1640369076397-Q1410YZB1DTKKY14OJX1/trinity+and+neo.JPG?format=1500w" },
          { url: "https://static01.nyt.com/images/2021/12/23/arts/22matrix/merlin_199400751_eda8b51c-9262-412c-8d5d-c235a803b0c9-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
          { url: "https://i.guim.co.uk/img/media/4662136a8f463057c14e614f0a99aa11af747c62/606_0_2330_1398/master/2330.jpg?width=465&dpr=1&s=none&crop=none" },
          { url: "https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-neo-trinity.jpg?fit=3840%2C2134" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 25 },
            create: {
              Actor: {
                create: {
                  name: "Keanu",
                  surname: "Reeves",
                  dateOfBirth: 1964,
                  placeOfBirth: "Canada",
                  height: 186,
                  career: "Actor known for 'The Matrix' and 'John Wick'",
                  totalMovies: 50,
                  image: "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 9 }, create: { Genre: { create: { name: "action" } } } },
          { where: { id: 8 }, create: { Genre: { create: { name: "thriller" } } } }
        ]
      }
    }
  });
  console.log('Фильм "The Matrix Resurrections" добавлен.');
}

async function createTheWitcher2020() {
  await prisma.movie.create({
    data: {
      Name: "The Witcher",
      ReleaseDate: "20.12",
      Year: 2020,
      Country: "USA",
      Director: "Lauren Schmidt Hissrich",
      Duration: "1.00 hour (episode)",
      Screenwriter: "Lauren Schmidt Hissrich",
      Description: "Geralt of Rivia, a monster hunter, struggles to find his place in a world where humans can often be more wicked than beasts.",
      Language: "English",
      FilmCompany: "Netflix",
      Img: "https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_.jpg",
      Rating: 8.0,
      Baner: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQd2_TAKVVSh49tvLxy4G30vLEbyGerbS__xeBNtQppqEbGdlCKVB_YBJr2yIpjxzSJ33NWjDERifUw2EenYNwOih_TiogEo60gEYsxjh4yHcUhrvwNGAqOQ_MZ3XuQgTu2T-NAFwbzpyV8Z-dd47-iNTQWY.jpg?r=960",
      Mood: "Happy",
      Url: "https://www.youtube.com/watch?v=SzS8Ao0H6Co",
      Moments: {
        create: [
          { url: "https://i.guim.co.uk/img/media/d74fb48312da07d3419482b1a22f5eb1cb04e4f1/0_103_1532_919/master/1532.jpg?width=465&dpr=1&s=none&crop=none" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGUqVS1CwpAsNl_Qa1d6qUjF-FE-Khu5DpA&s" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxUx_akU-i15L9tiYA9PMCcZNcuDF5UJwuA&s" },
          { url: "https://www.bosshunting.com.au/wp-content/uploads/2020/03/maxresdefault-9.jpg" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 23 },
            create: {
              Actor: {
                create: {
                  name: "Henry",
                  surname: "Cavill",
                  dateOfBirth: 1983,
                  placeOfBirth: "UK",
                  height: 185,
                  career: "Actor known for 'Superman' and 'The Witcher'",
                  totalMovies: 20,
                  image: "https://m.media-amazon.com/images/M/MV5BNWFmNmI2NmYtNDUyYi00MDZhLTk0ZmEtODY0MmM5NGQxMWEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 1 }, create: { Genre: { create: { name: "action" } } } },
          { where: { id: 6 }, create: { Genre: { create: { name: "fantasy" } } } }
        ]
      }
    }
  });
  console.log('Фильм "The Witcher" добавлен.');
}

async function createTheInvisibleMan2020() {
  await prisma.movie.create({
    data: {
      Name: "The Invisible Man",
      ReleaseDate: "28.02",
      Year: 2020,
      Country: "USA",
      Director: "Leigh Whannell",
      Duration: "2.04 hours",
      Screenwriter: "Leigh Whannell",
      Description: "A woman believes her abusive ex-boyfriend, now invisible, is stalking her and manipulating events to drive her insane.",
      Language: "English",
      FilmCompany: "Blumhouse Productions",
      Img: "https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg",
      Rating: 7.1,
      Baner: "https://www.syfy.com/sites/syfy/files/2023/03/theinvisibleman-keyart-show-tile-1920x1080.jpg",
      Mood: "Sad",
      Url: "https://youtu.be/WO_FJdiY9dA?si=LcOT-R73wbibDmZF",
      Moments: {
        create: [
          { url: "https://beforesandafters.com/wp-content/uploads/2020/04/2527_t1f_0001.jpg" },
          { url: "https://i.insider.com/5e5d7b9ba9f40c40b2424f28?width=1200&format=jpeg" },
          { url: "https://media.newyorker.com/photos/5e58019406c51600088b25d0/16:9/w_2111,h_1187,c_limit/Richard-InvisibleMan.jpg" },
          { url: "https://i.insider.com/5e6028f6a9f40c140e694e5a?width=700" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 25 },
            create: {
              Actor: {
                create: {
                  name: "Elisabeth",
                  surname: "Moss",
                  dateOfBirth: 1982,
                  placeOfBirth: "USA",
                  height: 155,
                  career: "Actress known for 'The Handmaid's Tale' and 'The Invisible Man'",
                  totalMovies: 40,
                  image: "https://cdn01.justjared.com/wp-content/uploads/2025/04/handmaid-hollywood/elisabeth-moss-the-handmaids-tale-season-6-premiere-16.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 8 }, create: { Genre: { create: { name: "thriller" } } } },
          { where: { id: 7 }, create: { Genre: { create: { name: "horror" } } } }
        ]
      }
    }
  });
  console.log('Фильм "The Invisible Man" добавлен.');
}


async function createBirdsOfPrey2020() {
  await prisma.movie.create({
    data: {
      Name: "Birds of Prey",
      ReleaseDate: "07.02",
      Year: 2020,
      Country: "USA",
      Director: "Cathy Yan",
      Duration: "1.49 hours",
      Screenwriter: "Christina Hodson",
      Description: "Harley Quinn joins forces with three other women to save a young girl from a crime lord in Gotham City.",
      Language: "English",
      FilmCompany: "Warner Bros.",
      Img: "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg",
      Rating: 6.1,
      Baner: "https://variety.com/wp-content/uploads/2019/10/birds-of-prey.jpg",
      Mood: "Calm",
      Url: "https://youtu.be/PhOpKlMGkQ8?si=6PeHG5vNbRuxshR2",
      Moments: {
        create: [
          { url: "https://itc.ua/wp-content/uploads/2020/02/birds_of_prey_05-770x447.jpg" },
          { url: "https://www.indiewire.com/wp-content/uploads/2019/10/birds2.jpg?w=600&h=337&crop=1" },
          { url: "https://i0.wp.com/filmireland.net/wp-content/uploads/2020/02/1_YktuBPI2FW3UnTbNFmYA8g.jpg?fit=738%2C369&ssl=1" },
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3lt6kGFLrPNfq-j4z89DRY04NtJikQvIaw&s" }
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 27 },
            create: {
              Actor: {
                create: {
                  name: "Margot",
                  surname: "Robbie",
                  dateOfBirth: 1990,
                  placeOfBirth: "Australia",
                  height: 165,
                  career: "Actress known for 'The Wolf of Wall Street' and 'Birds of Prey'",
                  totalMovies: 30,
                  image: "https://upload.wikimedia.org/wikipedia/commons/8/87/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2825980753838%29_%28cropped%29.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 1 }, create: { Genre: { create: { name: "action" } } } },
          { where: { id: 7 }, create: { Genre: { create: { name: "crime" } } } }
        ]
      }
    }
  });
  console.log('Фильм "Birds of Prey" добавлен.');
}

async function createTheTrialOfTheChicago72020() {
  await prisma.movie.create({
    data: {
      Name: "The Trial of the Chicago 7",
      ReleaseDate: "16.09",
      Year: 2020,
      Country: "USA",
      Director: "Aaron Sorkin",
      Duration: "2.09 hours",
      Screenwriter: "Aaron Sorkin",
      Description: "The true story of seven defendants who were charged with conspiracy and inciting riots during the 1968 Democratic National Convention in Chicago.",
      Language: "English",
      FilmCompany: "Netflix",
      Img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/ef/THe_Trial_of_the_Chicago_7.jpg/250px-THe_Trial_of_the_Chicago_7.jpg",
      Rating: 7.8,
      Baner: "https://m.media-amazon.com/images/M/MV5BODAyZTM1N2UtNDAzMS00MjRlLWFiNTItY2VkZDQ1YzI5MDc2XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
      Mood: "Happy",
      Url: "https://youtu.be/gNW-J0anyNc?si=8HKglW6zK2Avwx_M",
      Moments: {
        create: [
          { url: "https://itc.ua/wp-content/uploads/2020/10/the_trial_of_the_chicago_7_16-770x520.jpg" },
          { url: "https://images.spletnik.ru/i/X/Xo8jcnUBQl/1011.jpg" },
          { url: "https://itc.ua/wp-content/uploads/2020/10/the_trial_of_the_chicago_7_25-770x513.jpg" },
          { url: "https://itc.ua/wp-content/uploads/2020/10/the_trial_of_the_chicago_7_13-770x470.jpg" },
        ]
      },
      Actors: {
        connectOrCreate: [
          {
            where: { id: 30 },
            create: {
              Actor: {
                create: {
                  name: "Eddie",
                  surname: "Redmayne",
                  dateOfBirth: 1982,
                  placeOfBirth: "UK",
                  height: 180,
                  career: "Actor known for 'The Theory of Everything' and 'The Trial of the Chicago 7'",
                  totalMovies: 25,
                  image: "https://m.media-amazon.com/images/M/MV5BMTU0MjEyNzQyM15BMl5BanBnXkFtZTcwMTc4ODUxOQ@@._V1_.jpg"
                }
              }
            }
          }
        ]
      },
      Genres: {
        connectOrCreate: [
          { where: { id: 5 }, create: { Genre: { create: { name: "drama" } } } },
          { where: { id: 7 }, create: { Genre: { create: { name: "crime" } } } }
        ]
      }
    }
  });
  console.log('Фильм "The Trial of the Chicago 7" добавлен.');
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
  await createHappyMovies()
  await createCalmMovies()
  await createSadMovies()
  await createAngryMovies()
  await createHappyAdventure()
  await createCalmWaves()
  await createComedyShow()
  await createTalentShow()
  await createFashionShow()
  await createSecretAdventure()
  await createMagicFashion()
  await createLostinFashion()
  await createAnimatedHearts()
  await createQuestBeyond()
  await createLaughterLane()
  await createEchoesOfSilence()
  await createNeonPulse()
  await createLiveTonight()
  await createTheLastRehearsal()
  await createLaLaLand()
  await create1917()
  await createInception()
  await createTheMatrix()
  await createAvatar()
  await createQuantumLeap2025()
  await createNeonSkies2026()
  await createEchoes2020()
  await createSunsetDreams2021()
  await createBrokenPromises2023()
  await createTheTrialOfTheChicago72020()
  await createTheWitcher2020()
  await createTheInvisibleMan2020()
  await createBirdsOfPrey2020()
  await createDarkKnight()
  await createDune2021()
  await createTenet2020()
  await createMatrixResurrections2021()

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