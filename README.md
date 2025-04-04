# Lazy Bunny - Backend для платформи перегляду фільмів

## Опис проекту

Lazy Bunny – це серверна частина веб-програми для перегляду фільмів, реалізована на Node.js з використанням Express.js та Prisma ORM.

Програма обробляє запити клієнтів, керує базою даних фільмів, користувачів та відгуків.

## Технології  

- Серверне середовище: Node.js
- Фреймворк для API: Express.js   
- Автентифікація: JWT
- Хешування паролів: bcrypt

## Схема проекту

 mermaid
    graph TD
    ROOT["/ (root)"] --> prisma
    ROOT --> src
    ROOT --> client
    ROOT --> config
    ROOT --> middlewares
    ROOT --> templates
    ROOT --> types
    ROOT --> static/img
    ROOT --> .env
    ROOT --> .gitignore
    ROOT --> README.md
    ROOT --> package.json
    ROOT --> tsconfig.json
    ROOT --> index.ts

    prisma --> db
    prisma --> migrations
    prisma --> schema
    prisma --> seed.ts

    src --> GenresApp
    src --> MoviesApp
    src --> UserApp

[Посилання на FigJam-схему](https://www.figma.com/board/UbgQAU8TwanZH2Pac5Rrbo/LazyBunny-BackEnd-Scheme?node-id=0-1&t=m0giMnyBWQRT1mkY-1)

## Запуск проекту 

1. Клонування репозиторію git clone
2. Встановлення залежностей npm install
3. Запуск проекту npm run start

## Ендпоінти

| Метод      | Маршрут                | Опис |
| GET | /genres | Отримання всіх жанрів. |
| POST | /genres | Додавання жанру. |
| PUT | /genres/:id | Відновлення жанрів. |
| DELETE | /genres/:id | Видалення жанру. |
| GET | /movies | Отримання фільмів. |
| GET | /movies/:id | Отримання фільму за Id. |
| GET | /movies/actor/:id | Отримання актора за Id. |
| POST | /movies | Додавання фільму. |
| put | /movies/:id | Оновлення інформації про фільм. |
| DELETE | /movies/:id | Видалення фільму. |
| GET | /users | Отримання користувачів. |
| GET | /users/me | Отримання інформації про користувача. |
| GET | /users/:id | Отримання користувача за Id. |
| put | /users/:id | Оновлення інформації про користувача. |
| DELETE | /users/:id | Видалення користувача за допомогою Id. |
| DELETE | /users/comment/:id | Видалення коментарів за допомогою Id. |
| POST | /users/login | Авторизація користувача. |
| POST | /users/reg | Реєстрація користувача. |

## Команда розробки

- Єгор Гончаров - [GitHub](https://github.com/YehorHoncharov)
- Семен Гераймович - [GitHub](https://github.com/arman455)
- Богдан Рубанов - [GitHub](https://github.com/BohdanRubanov)
- Мирослава Теліус - [GitHub](https://github.com/AsolaRim)