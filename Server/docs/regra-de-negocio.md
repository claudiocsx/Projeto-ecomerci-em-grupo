## Regras de Negocio

### Usuarios:
- **name**
    - **description**: Nome completo
    - **min char**: *5*
    - **max char**: *50*
    - **require**: *True*
    - **chars**: *Aa-Zz*
    - **type**: *Varchar*
- **cpf**
    - **description**: Numero de cpf valido
    - **length**: *11*
    - **require**: *True*
    - **chars**: *0-9*
    - **type**: *Char*
- **email**
    - **description**: Email valido
    - **min char**: *6*
    - **max char**: *60*
    - **require**: *True*
    - **type**: *Varchar*
- **password**
    - **description**: Senha de usuario
    - **min char**: *6*
    - **max char**: *30*
    - **require**: *True*
    - **type**: *Hash*

### Produtos:
- **name**
    - **description**: Nome do produto
    - **min char**: *3*
    - **max char**: *60*
    - **require**: *True*
    - **type**: *Varchar*
- **price**
    - **description**: Valor do produto
    - **require**: *True*
    - **type**: *Float*
- **in_invetory**
    - **description**: Quantidade em estoque
    - **require**: *True*
    - **type**: *Inter*
- **path_image**
    - **description**: Caminho da localização da imagem(foto) do produto
    - **require**: *False*
    - **type**: *Varchar*
- **category**
    - **description**: Categorias do produto [tenis-casual', 'tenis-esportivo', 'sapatenis']
    - **require**: *True*
    - **type**: *Varchar*
- **colors**
    - **description**: Cores disponiveis para aquele produto(tenis)
    - **require**: *True*
    - **type**: *Varchar*

### Carrinhos:
- **id_user**
    - **description**: Id do usuario a quem pertence este carrinho
    - **require**: *True*
    - **type**: *Char*
- **products**
    - **description**: Lista de produtos no carrinho do usuario (id_user)
    - **require**: *True*
    - **type**: *Array*
    - ***conteudo do array***:
        - **id_product**
            - **description**: Id do produto
            - **require**: *True*
            - **type**: *ObjectID*
        - **quantity**
            - **description**: Quantidade solicitada deste produto
            - **require**: *True*
            - **type**: *Integer*


