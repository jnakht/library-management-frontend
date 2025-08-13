import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function ServiceCard({service}) {
  return (
    // <Card className='h-[180px] bg-[#5B9894] pb-8 w-[90%]'>
    //   <CardActionArea className='bg-[#5B9894] '>
    //     {/* <CardMedia
    //       component="img"
    //       height="140"
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       alt="green iguana"
    //     /> */}
    //     <CardContent className='flex flex-col gap-6 bg-[#5B9894] '>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {service?.title}
    //       </Typography>
    //       <Typography variant="body2" className='flex flex-col' sx={{ color: 'text.secondary' }}>
    //         {service?.description}
    //         <button className='text-[16px] hover:text-brand-primary underline cursor-pointer font-semibold'>LEARN MORE</button>
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>

    <div className='space-y-5 w-full md:w-[80%] h-[300px] xl:h-[190px] bg-[#5B9894] p-4 rounded-md'>
      <div className='flex-1'>
        <h3 className='text-2xl font-font-lora'>{service?.title}</h3>
      </div>
      <div className=' flex-1'>
        <p className='text-[16px] '>{service?.description}</p>
      </div>
      <button className='text-[16px] hover:text-brand-primary underline cursor-pointer font-semibold'>LEARN MORE</button>
    </div>
  );
}