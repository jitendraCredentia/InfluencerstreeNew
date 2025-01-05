import React from 'react';
import CountUp from 'react-countup';

interface SocialMediaCardProps {
  icon: React.ReactNode;   // Icon for social media (can be from any icon library)
  title: string;           // Social media name (e.g., Instagram)
  description: string;     // Small description (e.g., "Follow us on Instagram")
  followers: number;       // Follower count
  link?: string;           // Link to the social media page or any specific URL
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ icon, title, description, followers, link }) => {
  const cardContent = (
    <div className="social-card-content">
      <div className="social-icon-wrapper">
        <div className="social-icon">{icon}</div>
      </div>
      <div className="social-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="social-followers">
          <CountUp start={0} end={followers} duration={3} separator="," />
          <span>+ Followers</span>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      className="social-card"
      target="_blank"                   // This opens the link in a new tab
      rel="noopener noreferrer"         // Security feature to prevent access to window.opener
    >
      {cardContent}
    </a>
  ) : (
    <div className="social-card">{cardContent}</div>
  );
};

export default SocialMediaCard;
