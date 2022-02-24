# ROTAS

#

## CATALOGO
**GET**: */catalogo/id1/id2/*

- id1: *numero de indice da pagina*
- id2: *numero de produtos a serem solicitados*

**response header**:
~~~
X-Powered-By	                Express
Access-Control-Allow-Origin     www.application.com.br/
Access-Control-Allow-Methods	GET
Content-Type	                application/json; charset=utf-8
Content-Length	                416
ETag	                        W/"1a0-8LQ4kClJOtRNOvVIQFhlWfpIk5g"
Date	                        Mon, 21 Feb 2022 01:01:32 GMT
Connection                      keep-alive
Keep-Alive                      timeout=5
~~~

**response body**:
~~~js
[
    {
        "id": "pd54654",
        "name": "Tênis Nike Air Max Excee",
        "brand": "Nike",
        "category": ["feminino"]
        "colors": [
            "rosa",
            "azul",
            "vermelho"
        ],
        "price": 649.99,
        "in_inventory": 8,
        "path_image": "/src/public/img/products/154654d45ddds.jpg"
    },
    {...},
    {...},
    {...},
    {...},
    ...
]
~~~
