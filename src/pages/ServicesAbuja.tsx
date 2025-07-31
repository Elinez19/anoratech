import React from 'react';
import SEO from '../components/ui/SEO';
import LocationServices from '../components/sections/LocationServices';

const ServicesAbuja: React.FC = () => {
  const abujaLocation = {
    name: 'Abuja',
    state: 'FCT',
    description: 'Leading software development agency in Abuja, Nigeria\'s capital city. We provide world-class web development, mobile app development, and digital transformation services to businesses in the Federal Capital Territory.',
    address: 'Plot 1234, Central Business District, Abuja, FCT, Nigeria',
    phone: '+234 (0) 812 345 6789',
    landmarks: [
      'Central Business District',
      'Three Arms Zone',
      'Maitama District',
      'Wuse II',
      'Garki Area'
    ],
    servingAreas: [
      'Central Business District',
      'Maitama',
      'Asokoro',
      'Wuse I & II',
      'Garki',
      'Utako',
      'Jabi',
      'Kubwa',
      'Gwagwalada',
      'Karu',
      'Lugbe',
      'Nyanya'
    ]
  };

  return (
    <>
      <SEO
        title="Best Software Development Agency in Abuja - AnoraTech"
        description="Top-rated software development agency in Abuja, FCT. Expert web development, mobile apps, and digital solutions. Serving Central Business District, Maitama, Wuse, Garki, and all Abuja areas."
        keywords={[
          'software development agency Abuja',
          'best software company Abuja',
          'web development Abuja FCT',
          'mobile app development Abuja',
          'software development Central Business District',
          'tech company Maitama Abuja',
          'digital solutions Abuja Nigeria',
          'custom software development Abuja',
          'Abuja software developers',
          'IT services Abuja FCT'
        ]}
        url="/services/abuja"
      />
      <LocationServices location={abujaLocation} />
    </>
  );
};

export default ServicesAbuja;