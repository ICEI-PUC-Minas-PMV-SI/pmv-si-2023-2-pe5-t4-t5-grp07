var db_produtos = {
    dados: [

        {
            codigo: '0001',
            descricao: 'Ovos Branco Perfa 20 Un',
            categoria: 'carnes',
            imagem: '../img/ovo.webp',
            preco: [
                {
                    supermercado1: '11.98',
                    supermercado2: '12.50',
                    supermercado3: '10.30'
                }
            ]

        },

        {
            codigo: '0002',
            descricao: 'Café Extraforte Fino Grão Pacote 500g',
            categoria: 'cafe',
            imagem: '../img/cafe.jpg',
            preco: [
                {
                    supermercado1: '13.98',
                    supermercado2: '11.50',
                    supermercado3: '10.00'
                }
            ]

        },

        {
            codigo: '0003',
            descricao: 'Salgadinho Doritos Queijo Nacho 140g',
            categoria: 'petiscos',
            imagem: '../img/doritos.jpg',
            preco: [
                {
                    supermercado1: '9.98',
                    supermercado2: '8.50',
                    supermercado3: '10.50'
                }
            ]

        },

        {
            codigo: '0004',
            descricao: 'Cerveja Itaipava Latão 473ml',
            categoria: 'bebidas',
            imagem: '../img/cerveja.webp',
            preco: [
                {
                    supermercado1: '2.99',
                    supermercado2: '2.49',
                    supermercado3: '3.19'
                }
            ]

        },

        {
            codigo: '0005',
            descricao: 'Biscoito Danix Recheado Morango 130g',
            categoria: 'biscoitos',
            imagem: '../img/biscoito.webp',
            preco: [
                {
                    supermercado1: '2.48',
                    supermercado2: '2.19',
                    supermercado3: '2.99'
                }
            ]

        },

        {
            codigo: '0006',
            descricao: 'Macarrão Santa Amália Espaguete Nº 8 500g',
            categoria: 'massas',
            imagem: '../img/macarrao.webp',
            preco: [
                {
                    supermercado1: '3.98',
                    supermercado2: '3.50',
                    supermercado3: '3.30'
                }
            ]

        },

        {
            codigo: '0007',
            descricao: 'Leite Condensado Itambé Carto 395g',
            categoria: 'carnes',
            imagem: '../img/leitecondensado.webp',
            preco: [
                {
                    supermercado1: '4.98',
                    supermercado2: '4.50',
                    supermercado3: '4.30'
                }
            ]

        },

        {
            codigo: '0008',
            descricao: 'Lava Roupas Em Pó Omo 1.6kg',
            categoria: 'limpeza',
            imagem: '../img/omo.webp',
            preco: [
                {
                    supermercado1: '19.98',
                    supermercado2: '18.50',
                    supermercado3: '19.30'
                }
            ]

        },

        {
            codigo: '0009',
            descricao: 'Óleo Sinhá Girassol Pet 900ml',
            categoria: 'carnes',
            imagem: '../img/oleo.jpg',
            preco: [
                {
                    supermercado1: '8.98',
                    supermercado2: '8.50',
                    supermercado3: '7.30'
                }
            ]

        },

        {
            codigo: '0010',
            descricao: 'Refrigerante Fanta Laranja 2l',
            categoria: 'bebidas',
            imagem: '../img/fanta.jpg',
            preco: [
                {
                    supermercado1: '6.79',
                    supermercado2: '6.50',
                    supermercado3: '7.30'
                }
            ]

        },

        {
            codigo: '0011',
            descricao: 'Pão Bisnaguinha Seven Boys Original 300g',
            categoria: 'padaria',
            imagem: '../img/pao.webp',
            preco: [
                {
                    supermercado1: '6.39',
                    supermercado2: '6.50',
                    supermercado3: '5.30'
                }
            ]

        },

        {
            codigo: '0012',
            descricao: 'Molho De Tomate Tradicional Heinz Pouch 300g',
            categoria: 'carnes',
            imagem: '../img/molho.webp',
            preco: [
                {
                    supermercado1: '2.79',
                    supermercado2: '2.50',
                    supermercado3: '2.30'
                }
            ]

        },

        {
            codigo: '0013',
            descricao: 'Leite Longa Vida Porto Alegre Integral 1l',
            categoria: 'carnes',
            imagem: '../img/leite.jpg',
            preco: [
                {
                    supermercado1: '3.48',
                    supermercado2: '2.99',
                    supermercado3: '3.30'
                }
            ]

        },

        {
            codigo: '0014',
            descricao: 'Margarina Cremosa Com Sal Qualy 500g',
            categoria: 'carnes',
            imagem: '../img/margarina.webp',
            preco: [
                {
                    supermercado1: '6.49',
                    supermercado2: '6.19',
                    supermercado3: '7.30'
                }
            ]

        },

        {
            codigo: '0015',
            descricao: 'Achocolatado Pó Original Toddy Pote 750g',
            categoria: 'carnes',
            imagem: '../img/toddy.webp',
            preco: [
                {
                    supermercado1: '15.48',
                    supermercado2: '14.50',
                    supermercado3: '16.30'
                }
            ]

        },

    ]

}


// var db_users = {
//     dados: [
//         {
//             id: generateUUID(),
//             login: "admin",
//             senha: "123",
//             nome: "Administrador",
//             email: "admin@abc.com",
//             endereco: "Av das Americas, 200"
//         },

//         {
//             id: generateUUID(),
//             login: "user", 
//             senha: "123",
//             nome: "Usuario Comum",
//             email: "user@abc.com",
//             endereco: "Av Afonso Pena, 200"
//         },

//         {
//             id: generateUUID(),
//             login: "carlos", 
//             senha: "123",
//             nome: "Carlos",
//             email: "cavs2209@hotmail.com",
//             endereco: "Rua São Paulo, 120"
//         },

//         {
//             id: generateUUID(),
//             login: "cristiano", 
//             senha: "123",
//             nome: "Cristiano",
//             email: "cristiano.kemb@gmail.com",
//             endereco: "Av das Americas, 300"
//         },

//         {
//             id: generateUUID(),
//             login: "vitor", 
//             senha: "123",
//             nome: "Vitor",
//             email: "vitorluzdesales@gmail.com",
//             endereco: "Rua Minas Gerais, 109"
//         },

//         {
//             id: generateUUID(),
//             login: "guilherme", 
//             senha: "123",
//             nome: "Guilherme",
//             email: "guilherme.sada.pm@gmail.com",
//             endereco: "Rua Goiás, 100"
//         }
//     ]
// }

// // função para gerar códigos randômicos a serem utilizados como código de usuário
// // Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
// function generateUUID() { // Public Domain/MIT
//     var d = new Date().getTime();//Timestamp
//     var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16;//random number between 0 and 16
//         if(d > 0){//Use timestamp until depleted
//             r = (d + r)%16 | 0;
//             d = Math.floor(d/16);
//         } else {//Use microseconds since page-load if supported
//             r = (d2 + r)%16 | 0;
//             d2 = Math.floor(d2/16);
//         }
//         return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
// }

