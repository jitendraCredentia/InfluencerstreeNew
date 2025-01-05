import React, { useRef } from 'react';
import { Carousel, Col, Row, Button } from 'antd';
import { withTranslation } from 'react-i18next';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Ant Design icons for arrows

interface TeamMember {
  image: string;
  name: string;
  role: string;
  designation: string;
}

const teamMembers: TeamMember[] = [
  {
    image: 'AnkitKhadoliya.jpg',
    name: 'Ankit Khadoliya',
    role: 'Marketing Head',
    designation: 'Co-founder & Chief Marketing Officer',
  },
  {
    image: 'AdeshSaini.jpg',
    name: 'Adesh Saini',
    role: 'Operations Lead',
    designation: 'Co-founder & Chief Operating officer',
  },
  {
    image: 'Aayushsaini.jpg',
    name: 'Aayush Saini',
    role: 'Creative Lead',
    designation: 'Co-founder & Chief Creative Officer',
  },
  {
    image: 'MonuJangir.jpg',
    name: 'Monu Jangir',
    role: 'Company Founder',
    designation: 'CEO & Founder',
  }
];


// Chunk array for carousel slides (2 members per slide)
const chunkArray = (array: TeamMember[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const TeamCarousel = () => {
  const carouselRef = useRef<any>(null);
  const chunkedMembers = chunkArray(teamMembers, 2); // Display 2 members per slide

  // Function to go to the next slide
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="carousel-wrapper">
      {/* Custom previous arrow button */}
      <Button
        className="arrow-btn prev-btn"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={prevSlide}
      />
      
      {/* The Carousel component */}
      <Carousel ref={carouselRef} autoplay>
        {chunkedMembers.map((chunk, index) => (
          <div key={index}>
            <Row gutter={[16, 16]} justify="center" align="middle">
              {chunk.map((member, memberIndex) => (
                <Col key={memberIndex} lg={12} md={12} sm={24} xs={24} className=''>
                  <div className="team-card c-px-40">
                    <img
                      src={`/img/svg/${member?.image}`}
                      alt={member.name}
                      className="team-image"
                      style={{ width: '100%', borderRadius: '50%' }}
                    />
                    
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <span>{member.designation}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
      
      {/* Custom next arrow button */}
      <Button
        className="arrow-btn next-btn"
        shape="circle"
        icon={<RightOutlined />}
        onClick={nextSlide}
      />
    </div>
  );
};

export default withTranslation()(TeamCarousel);
