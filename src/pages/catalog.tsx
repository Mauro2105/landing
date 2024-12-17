import ProductList from '@/components/ProductList';
import React, { useState } from 'react';
import "../styles/catalog.css"
import BackButton from '@/components/BackButton';

const Catalog: React.FC = () => {
    const [products] = useState([
        {
            id: 1,
            name: 'Bicicleta estatica spinning',
            price: 519900,
            image: "bicicletaEstatica.png",
        },
        {
            id: 2,
            name: 'Banco de peso ajustable',
            price: 264822,
            image: "banco.jpg",
        },
        {
            id: 3,
            name: 'Trampolín',
            price: 288600,
            image: "trampolin.png",
        },
        {
            id: 4,
            name: 'Kit de entrenamiento de resistencia',
            price: 264822,
            image: "trx.jpg",
        },
        {
            id: 5,
            name: 'Mascara para Artes Marciales Sport',
            price: 109000,
            image: "mascara.png",
        },
        {
            id: 6,
            name: 'Balón de Voleibol Wilson',
            price: 119990,
            image: "balonvoleibol.jpg",
        },
        {
            id: 7,
            name: 'Balón de Futbol Adidas',
            price: 109990,
            image: "balonfutbol.jpg",
        },
        {
            id: 8,
            name: 'Wilson Us Open Extra Duty Tennis Balls',
            price: 482295,
            image: "usopen.jpg",
        },
        {
            id: 9,
            name: 'Raqueta de Tenis Wilson Principiante',
            price: 232900,
            image: "raqueta.jpg",
        },
        {
            id: 10,
            name: 'Set de Bandas Elásticas',
            price: 21600,
            image: "bandas.jpg",
        },
        {
            id: 11,
            name: 'Mancuerna Encauchetada',
            price: 91600,
            image: "mancuerna.jpg",
        },
        {
            id: 12,
            name: 'Set de Pesas 50 Kg',
            price: 549900,
            image: "setpesas.jpg",
        },
        {
            id: 13,
            name: 'Barra en Z Curva',
            price: 121856,
            image: "barraz.jpg",
        },
        {
            id: 14,
            name: 'Pistola de Masajes de Tejido Profundo',
            price: 121856,
            image: "pistolaMasajes.jpg",
        },
        {
            id: 15,
            name: 'Pesas Tobilleras 3Kg',
            price: 60000,
            image: "tobilleras.jpg",
        },
        {
            id: 16,
            name: 'Pantaloneta Ciclismo Hombre',
            price: 363000,
            image: "pantalonetaCiclis.jpg",
        },
        {
            id: 17,
            name: 'Gafas de Sol Polarizadas',
            price: 59377,
            image: "gafas.jpg",
        },
        {
            id: 18,
            name: 'Casco de Bicicleta',
            price: 211758,
            image: "casco.jpg",
        },
        {
            id: 19,
            name: 'Conjunto de esnorquel',
            price: 157189,
            image: "snorkel.jpg",
        },
        {
            id: 20,
            name: 'Aletas Flotantes para nadar',
            price: 144946,
            image: "aletas.jpg",
        },
        {
            id: 21,
            name: 'Canillera Profesional Golty',
            price: 56900,
            image: "canillera.jpg",
        },
        {
            id: 22,
            name: 'Balon de Basketball Wilson',
            price: 196541,
            image: "balonbasketball.png",
        },
        {
            id: 23,
            name: 'Máquina Multifuerza',
            price: 2764900,
            image: "multifuerza.jpg",
        },
        {
            id: 24,
            name: 'Trotadora',
            price: 9989900,
            image: "trotadora.jpg",
        },
    ]);
    
    return (
        <div className="container">
            <h1 className='title'>Implementos Deportivos</h1>
            <ProductList products={products} />
            <BackButton />
        </div>
    );
};

export default Catalog;
