import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { MdDesignServices } from 'react-icons/md';
import { IoLogoXing } from 'react-icons/io';
import { HiCode } from 'react-icons/hi';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaPhotoVideo, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const iconStyle = (Icon) => <Icon size="3rem" color="white" />;

export const featuresData = [
    {
        name: 'Libray/FrameWork',
        description:
            'Javascript, React, NextJs',
        icon: iconStyle(FaReact),
        imgClass: 'one',
    },
    {
        name: 'Database',
        description: 'MongoDB, Sanity.io, SQL',
        icon: iconStyle(SiMongodb),
        imgClass: 'two',
    },
    /*  {
         name: 'Branding',
         description: 'Visual Identity, Stationary Kit, Marketing Materials',
         icon: iconStyle(IoLogoXing),
         imgClass: 'three',
     }, */
    {
        name: 'Design',
        description: 'HTML/CSS, Javascript, Styled Components',
        icon: iconStyle(HiCode),
        imgClass: 'four',
    },
    /*  {
         name: 'Motion',
         description: '2D Animation, UI Motion',
         icon: iconStyle(MdSlowMotionVideo),
         imgClass: 'five',
     },
    {
        name: 'Photography',
        description: 'Travel Photography, Product Photography',
        icon: iconStyle(FaPhotoVideo),
        imgClass: 'six',
    }, */
];