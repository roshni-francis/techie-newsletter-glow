
import React from 'react';
import { Link } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';
import { Monitor, Brain, Milestone, Target, Briefcase } from 'lucide-react';

const SegmentCard = ({ 
  title, 
  icon: Icon, 
  description, 
  link, 
  bgColor = 'bg-white' 
}) => (
  <Link to={link} className="no-underline">
    <div className={`segment-card ${bgColor} rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-gray-200`}>
      <div className="flex items-center mb-4">
        <div className="segment-icon-wrapper">
          <Icon size={24} className="text-primary-blue" />
        </div>
        <h3 className="text-xl font-semibold text-primary-blue ml-3">{title}</h3>
      </div>
      <p className="text-dark-gray">{description}</p>
      <div className="coming-soon">
        Coming Soon
      </div>
    </div>
  </Link>
);

const Segments = () => {
  return (
    <div className="min-h-screen bg-ultra-light-gray">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#024d87] to-[#0370c0] text-white p-5 text-center">
          <h1 className="text-2xl mb-1">DMS NEWSLETTER</h1>
          <div>Canvas Chronicles | Apr–Sep 2024, FY25 H1</div>
        </div>
        
        {/* Navigation */}
        <PageNavigation />
        
        <div className="p-8 relative">
          <div className="bookmark-strip">Placeholder Page</div>
          
          <h2 className="segments-title">
            Segments
            <span className="underline-accent"></span>
          </h2>
          
          <p className="text-center text-dark-gray mb-8">
            Explore the verticals shaping innovation this year
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <SegmentCard 
              title="IP" 
              icon={Target}
              description="Intellectual Property innovations and industry insights" 
              link="/segments/ip"
              bgColor="bg-white"
            />
            
            <SegmentCard 
              title="PE" 
              icon={Briefcase}
              description="Private Equity trends and investment strategies" 
              link="/segments/pe"
              bgColor="bg-[#f6f6f6]"
            />
            
            <SegmentCard 
              title="HighTech" 
              icon={Monitor}
              description="Latest developments in high technology sectors" 
              link="/segments/high-tech"
              bgColor="bg-white"
            />
            
            <SegmentCard 
              title="MedTech" 
              icon={Brain}
              description="Medical technology advancements and healthcare innovation" 
              link="/segments/med-tech"
              bgColor="bg-[#f6f6f6]"
            />
            
            <SegmentCard 
              title="Mobility" 
              icon={Milestone}
              description="Future of transportation and mobility solutions" 
              link="/segments/mobility"
              bgColor="bg-white"
            />
          </div>
          
          <div className="text-right text-cool-gray italic text-sm">
            Last Updated: <span className="font-light">—</span>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .segments-title {
          font-size: 2rem;
          font-family: Georgia, serif;
          color: #024d87;
          text-align: center;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .segments-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(to right, #024d87, #0370c0);
          border-radius: 2px;
        }
        
        .segment-card {
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        
        .segment-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(2, 77, 135, 0.1);
        }
        
        .coming-soon {
          position: absolute;
          top: 10px;
          right: -30px;
          background-color: #0370c0;
          color: white;
          font-size: 0.7rem;
          padding: 3px 25px;
          transform: rotate(45deg);
        }
        
        .bookmark-strip {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          transform-origin: right;
          background-color: #024d87;
          color: white;
          padding: 5px 10px;
          font-size: 0.8rem;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        `}
      </style>
    </div>
  );
};

export default Segments;
