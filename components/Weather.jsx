import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl font-fancy'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl font-fancy'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom */}

<div className='bg-black/50 relative p-8 rounded-md'>
    <p className='font-fancy text-2xl text-center pb-6'>{data.name}の天気</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='font-fancy font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='font-fancy text-xl'>体感温度</p>
        </div>
        <div>
            <p className='font-fancy font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='font-fancy text-xl'>湿度</p>
        </div>
        <div>
            <p className='font-fancy font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='font-fancy text-xl'>風速</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Weather;