import { Oferta } from "../shared/oferta.model";

export class OfertaService {

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ];
    
    public getOfertas() : Array<Oferta> {
        return this.ofertas;
    }

    public getOfertasPromise() : Promise<Array<Oferta>> {
        //O objeto promise espera uma ação de callback (resolve ou reject)
        return new Promise((resolve, reject) => {
            
            //Simulando que a requisição deu errado.
            let deu_certo = true;

            if (deu_certo){
                //simulando processamento assíncrono
                setTimeout(() => {
                    resolve(this.ofertas);                    
                }, 3000);
            } else {
                //retorna um objeto literal com o erro que quiser.
                reject({codigo_erro: 403, mensagem_erro: 'Forbidden'})
            }
        })
        .then((ofertas : Array<Oferta>) => {
            //exemplo de como pode ser feita uma trataitiva em encadeamento
            console.log("primeiro then");
            
            //Ainda assim retorna uma Promise com o array de ofertas
            return ofertas;
        });
        //Aqui poderia ter mais then() cascateados para processamento.
    }
}