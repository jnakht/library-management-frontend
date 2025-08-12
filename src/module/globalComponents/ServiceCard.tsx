import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function ServiceCard({service}) {
  return (
    <Card className='h-[300px]  w-[90%]'>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent className='flex flex-col gap-6 h-full'>
          <Typography gutterBottom variant="h5" component="div">
            {service?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {service?.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <button className='text-[16px] hover:text-brand-primary underline cursor-pointer font-semibold'>LEARN MORE</button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}