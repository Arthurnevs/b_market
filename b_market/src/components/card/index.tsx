import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HealthIcon from '../icons/health.tsx';

function CardItem({image, title, price, installments, isFilled}) {
  return (
    <div>
        <Card sx={{ maxWidth: 230, }} className='rounded-lg shadow h-full'>
            <CardMedia
                component="img"
                alt="green iguana"
                height="70"
                image={image}
            />
            <CardContent>
                <div className='flex'>
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                        {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                        <Typography>
                            {installments}
                        </Typography>
                    </div>
                    <div className='cursor-pointer'>
                        <HealthIcon isFilled={isFilled}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

export default CardItem;