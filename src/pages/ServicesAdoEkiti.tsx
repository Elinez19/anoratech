import React from 'react';
import SEO from '../components/ui/SEO';
import LocationServices from '../components/sections/LocationServices';

const ServicesAdoEkiti: React.FC = () => {
  const adoEkitiLocation = {
    name: 'Ado Ekiti',
    state: 'Ekiti State',
    description: 'Premier software development agency in Ado Ekiti, the capital of Ekiti State. We deliver cutting-edge web development, mobile applications, and digital transformation services to businesses across Ekiti State and Southwest Nigeria.',
    address: '15 Iworoko Road, Ado Ekiti, Ekiti State, Nigeria',
    phone: '+234 (0) 813 456 7890',
    landmarks: [
      'Ekiti State University (EKSU)',
      'Fajuyi Park',
      'New Iyin Road',
      'Iworoko Road',
      'Basiri Market'
    ],
    servingAreas: [
      'Ado Ekiti',
      'Ikere Ekiti',
      'Aramoko',
      'Ijero',
      'Emure',
      'Ise',
      'Ikole',
      'Omuo',
      'Efon Alaaye',
      'Otun Ekiti',
      'Ilawe',
      'Igede Ekiti'
    ]
  };

  return (
    <>
      <SEO
        title="Best Software Development Agency in Ado Ekiti - AnoraTech"
        description="Leading software development agency in Ado Ekiti, Ekiti State. Professional web development, mobile apps, and digital solutions. Serving Ado Ekiti, Ikere, Aramoko, and all Ekiti State."
        keywords={[
          'software development agency Ado Ekiti',
          'best software company Ado Ekiti',
          'web development Ado Ekiti',
          'mobile app development Ekiti State',
          'software development Iworoko Road',
          'tech company Ado Ekiti',
          'digital solutions Ekiti State',
          'custom software development Ado Ekiti',
          'Ado Ekiti software developers',
          'IT services Ekiti State Nigeria',
          'EKSU software development',
          'Ikere Ekiti software company'
        ]}
        url="/services/ado-ekiti"
      />
      <LocationServices location={adoEkitiLocation} />
    </>
  );
};

export default ServicesAdoEkiti;