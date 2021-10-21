# My Assets App Server
My Assets App is an application to manage your assets. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## List Endpoint Users

- `get /news`
- `get /standings/premierleague`
- `get /standings/laliga`
- `get /clubs/premierleague`
- `get /clubs/laliga`
- `Post /register`
- `Post /login`
- `Post /bookmarks/:id`
- `Get /bookmarks`

## RESTFUL endpoints
### Get /news

>  Get all news

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not_needed
}
```

_Response (200)_
```
[
    {
        "source": {
            "id": null,
            "name": "Bolasport.com"
        },
        "author": "Wila Wildayanti",
        "title": "Komdis PSSI Jatuhkan Hukuman 100 Juta ke PSS Sleman dan 50 Juta ke Persib Bandung - Bolasport.com - Bolasport.com",
        "description": "Kompetisi Liga 1 2021/2022 baru bergulir tujuh pekan, tetapi 10 klub termasuk PSS Sleman hingga Persib Bandung sudah kena sanksi dari Komdis PSSI.",
        "url": "https://www.bolasport.com/read/312951651/komdis-pssi-jatuhkan-hukuman-100-juta-ke-pss-sleman-dan-50-juta-ke-persib-bandung",
        "urlToImage": "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/10/01/20211001_193504jpg-20211001083136.jpg",
        "publishedAt": "2021-10-20T11:50:00Z",
        "content": null
    },
    ...
]
```

_Response (500)_
```
{
    Something Wicked Happened
}
```
---

### Get /standings/premierleague

>  Get all table premier league

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not_needed
}
```

_Response (200)_
```
[
    {
        "rank": 1,
        "team": {
            "id": 49,
            "name": "Chelsea",
            "logo": "https://media.api-sports.io/football/teams/49.png"
        },
        "points": 19,
        "goalsDiff": 13,
        "group": "Premier League",
        "form": "WWLWW",
        "status": "same",
        "description": "Promotion - Champions League (Group Stage)",
        "all": {
            "played": 8,
            "win": 6,
            "draw": 1,
            "lose": 1,
            "goals": {
                "for": 16,
                "against": 3
            }
        },
        "home": {
            "played": 4,
            "win": 3,
            "draw": 0,
            "lose": 1,
            "goals": {
                "for": 9,
                "against": 2
            }
        },
        "away": {
            "played": 4,
            "win": 3,
            "draw": 1,
            "lose": 0,
            "goals": {
                "for": 7,
                "against": 1
            }
        },
        "update": "2021-10-18T00:00:00+00:00"
    },
    ...
]
```

_Response (500)_
```
{
    Something Wicked Happened
}
```
---

### Get /standings/laliga

>  Get all table la liga

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not_needed
}
```

_Response (200)_
```
[
    {
        "rank": 1,
        "team": {
            "id": 548,
            "name": "Real Sociedad",
            "logo": "https://media.api-sports.io/football/teams/548.png"
        },
        "points": 20,
        "goalsDiff": 5,
        "group": "Primera División",
        "form": "WDWWD",
        "status": "same",
        "description": "Promotion - Champions League (Group Stage)",
        "all": {
            "played": 9,
            "win": 6,
            "draw": 2,
            "lose": 1,
            "goals": {
                "for": 12,
                "against": 7
            }
        },
        "home": {
            "played": 5,
            "win": 4,
            "draw": 1,
            "lose": 0,
            "goals": {
                "for": 4,
                "against": 0
            }
        },
        "away": {
            "played": 4,
            "win": 2,
            "draw": 1,
            "lose": 1,
            "goals": {
                "for": 8,
                "against": 7
            }
        },
        "update": "2021-10-18T00:00:00+00:00"
    },
    ...
]
```

_Response (500)_
```
{
    Something Wicked Happened
}
```
---

### Get /clubs/premierleague

>  Get all clubs premier league

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not_needed
}
```

_Response (200)_
```
[
    {
        "id": 1,
        "name": "Arsenal",
        "image": "https://media.api-sports.io/football/teams/42.png",
        "stadion": "Emirates Stadium",
        "country": "England",
        "createdAt": "2021-10-19T10:10:02.272Z",
        "updatedAt": "2021-10-19T10:10:02.272Z"
    },
    {
        "id": 2,
        "name": "Aston Villa",
        "image": "https://media.api-sports.io/football/teams/66.png",
        "stadion": "Villa Park",
        "country": "England",
        "createdAt": "2021-10-19T10:10:02.272Z",
        "updatedAt": "2021-10-19T10:10:02.272Z"
    },
    ...
]
```

_Response (500)_
```
{
    Something Wicked Happened
}
```
---

### Get /clubs/laliga

>  Get all clubs la liga

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not_needed
}
```

_Response (200)_
```
[
    {
        "id": 29,
        "name": "Athletic Club",
        "image": "https://media.api-sports.io/football/teams/531.png",
        "stadion": "Estadio San Mamez",
        "country": "Spain",
        "createdAt": "2021-10-19T10:10:02.272Z",
        "updatedAt": "2021-10-19T10:10:02.272Z"
    },
    {
        "id": 24,
        "name": "Atletico de Madrid",
        "image": "https://media.api-sports.io/football/teams/530.png",
        "stadion": "Wanda Metropolitano",
        "country": "Spain",
        "createdAt": "2021-10-19T10:10:02.272Z",
        "updatedAt": "2021-10-19T10:10:02.272Z"
    },
    ...
]
```

_Response (500)_
```
{
    Something Wicked Happened
}
```
---

### Post /login

>  Login users

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "email": "<string>",
    "password": "<string>",
}
```

_Response (201 - Created)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2MzI3OTU0OTZ9.Rj52111"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": [
        "Email / Password doesn't match"
    ]
}
```
---

### Post /register

>  Create new users

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "email": "<string>",
    "password": "<string>",
}
```

_Response (201 - Created)_
```
{
    "id": 16,
    "email": "test1212@gmail.com",
    "password": "I1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoiYW5kLmZyZW5na3lAZ21haWwuY29tIiwiaWF0IjoxNjM0Nzg3MDM0fQ.3XkvCQWC5IxRl4y3vMVNO2gu55Q6AZZVt",
    "updatedAt": "2021-10-21T03:24:08.194Z",
    "createdAt": "2021-10-21T03:24:08.194Z"
}
```

_Response (400 - Bad request)_
```
{
    "msg": "Email already registered"
}
```
---

### Post /bookmarks/:id

>  Create new bookmark

_Request Header_
```
{
    access_token
}
```

_Request Body_
```
{
    not_needed
}
```

_Request Params_
```
{
    Id_bookmark
}
```

_Response (201 - Created)_
```
{
    "id": 7,
    "ClubId": 23,
    "UserId": 1,
    "updatedAt": "2021-10-21T03:32:37.333Z",
    "createdAt": "2021-10-21T03:32:37.333Z"
}
```

_Response (401 - Bad request)_
```
{
    "msg": "You have bookmarked this club"
}
```

_Response (500 - Internal server error)_
```
{
    "msg": "Something Wicked Happened"
}
```
---

### Get /bookmarks

>  Get bookmark

_Request Header_
```
{
    access_token
}
```

_Request Body_
```
{
    not_needed
}
```

_Response (200)_
```
[
    {
        "id": 1,
        "UserId": 1,
        "ClubId": 21,
        "createdAt": "2021-10-19T10:28:24.832Z",
        "updatedAt": "2021-10-19T10:28:24.832Z",
        "User": {
            "id": 1,
            "email": "test@gmail.com",
            "password": "$2a$10$BJ53J4HIcFl.lJTpctTLHuDkqU3b5FQ0GgqJOw4lNui.4wGf7tBJy",
            "createdAt": "2021-10-19T09:17:39.894Z",
            "updatedAt": "2021-10-19T09:17:39.894Z"
        },
        "Club": {
            "id": 21,
            "name": "Real Sociedad",
            "image": "https://media.api-sports.io/football/teams/548.png",
            "stadion": "Reale Arena",
            "country": "Spain",
            "createdAt": "2021-10-19T10:10:02.272Z",
            "updatedAt": "2021-10-19T10:10:02.272Z"
        }
    },
    ```
]

_Response (500 - Internal server error)_
```
{
    "msg": "Something Wicked Happened"
}
```
---