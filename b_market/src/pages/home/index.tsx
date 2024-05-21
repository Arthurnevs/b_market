import React from 'react';
import Header from '../../components/header/index.tsx';
import CardItem from "../../components/card/index.tsx"
import Typography from '@mui/material/Typography';
import main_img from "../../assets/main_img.png"
import freezer from "../../assets/items/freezer.png"
import desk from "../../assets/items/desk.png"
import plant from "../../assets/items/plant.png"


function Home() {

    const items = [
        {image: freezer, title: "Geladeira Braste", price: "R$ 3.599,99", installments: "10x de R$ 250", favorite: true},
        {image: desk, title: "Cadeira Vitalis M", price: "R$ 3.599,99", installments: "10x de R$ 250", favorite: false},
        {image: plant, title: "Conjunto plantin", price: "R$ 300,99", installments: "10x de R$ 250", favorite: false}
    ]

    return (
        <div>
            <Header/>
            <div className='w-full'>
                <img src={main_img} width={"100%"}/>
            </div>
            <div className='px-lg py-md'>
                <Typography gutterBottom variant="h5" component="div">
                    Ofertas especiais
                </Typography>
                <Typography>
                    Os melhores preços
                </Typography>

                <div className='flex gap-6 mt-4'>
                {
                    items.map((item, index) => (
                        <CardItem image={item.image} title={item.title} price={item.price} installments={item.installments} isFilled={item.favorite}/>
                    ))
                }
            </div>
        </div>
        </div>
    );
}

export default Home;