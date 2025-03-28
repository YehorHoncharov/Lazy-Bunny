# Lazy Bunny - Backend

## Описание проекта

Lazy Bunny – это серверная часть веб-приложения для просмотра фильмов, реализованная на **Node.js** с использованием **Express.js** и **MongoDB**.  

Приложение обрабатывает запросы клиентов, управляет базой данных фильмов, пользователей и отзывов.  

---

## Технологии  

- **Node.js** – серверная среда  
- **Express.js** – фреймворк для API  
- **JWT** – аутентификация  
- **bcrypt** – хеширование паролей  

---

## Установка и запуск 

## Эндпоинты

| Метод      | Маршрут                | Описание |
| ------------- |:------------------:| -----:|
| GET | /genres/ | Получение всех жанров. |
| post | '/', genreController.addGenre | Добавление жанра. |
| put | '/:id', genreController.updateGenre | Обновление жанров. |
| delete | '/:id', genreController.deleteGenre | Удаление жанра. |
| ------------- |:------------------:| -----:|
| get | '/', movieController.getMovies | Получение фильмов. |
| get | '/:id', movieController.getMovieById | Получение фильма по Id. |
| get | '/actor/:id', movieController.getActorById | Получение актера по Id. |
| post | '/', movieController.addMovie | Добавление фильма. |
| put | '/:id', movieController.updateMovie | Обновление информации о фильме. |
| delete | '/:id', movieController.deleteMovie | Удаление фильма. |
| ------------- |:------------------:| -----:|
| get | '/', userController.getUsers | Получение пользователей. |
| get | '/me', authTokenMiddleware, userController.aboutUser | Получение информации о пользователе. |
| get | '/:id', userController.getUserById | Получение пользователя по Id. |
| put | '/:id', userController.updateUserById | Обновление информации о пользователе. |
| delete | '/:id', userController.deleteUserById | Удаление пользователя, используя Id. |
| delete | '/comment/:id', userController.deleteCommentById | Удаление комментария, используя Id. |
| post | '/login', userController.authorisateUser | Авторизация пользователя. |
| post | '/reg', userController.registrateUser | Регистрация пользователя. |

