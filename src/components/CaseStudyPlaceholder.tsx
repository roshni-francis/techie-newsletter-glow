
import React from 'react';
import PageNavigation from './PageNavigation';
import { Calendar } from 'lucide-react';

interface CaseStudyPlaceholderProps {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const CaseStudyPlaceholder: React.FC<CaseStudyPlaceholderProps> = ({ title, icon: Icon }) => {
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
          
          <div className="flex items-center justify-center mb-8">
            <div className="segment-icon-wrapper mr-3">
              <Icon size={28} className="text-primary-blue" />
            </div>
            <h2 className="segment-title">
              {title}
              <span className="segment-title-underline"></span>
            </h2>
          </div>
          
          {/* Case Study #1 */}
          <div className="case-study-box mb-8">
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Case Study #1</h3>
            <div className="placeholder-content">
              <div className="coming-soon-label">Coming Soon</div>
              <p className="text-cool-gray text-center">Content coming soon</p>
            </div>
          </div>
          
          {/* Case Study #2 */}
          <div className="case-study-box mb-8">
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Case Study #2</h3>
            <div className="placeholder-content">
              <div className="coming-soon-label">Coming Soon</div>
              <p className="text-cool-gray text-center">Content coming soon</p>
            </div>
          </div>
          
          {/* Last Updated */}
          <div className="flex justify-end items-center text-cool-gray italic text-sm mt-12">
            <Calendar size={14} className="mr-1" />
            Last Updated: <span className="font-light ml-1">—</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .segment-title {
          font-size: 2rem;
          font-family: Georgia, serif;
          color: #024d87;
          font-weight: 700;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .segment-title-underline {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #024d87, #0370c0);
          border-radius: 1px;
        }
        
        .segment-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(2, 77, 135, 0.1);
        }
        
        .case-study-box {
          border: 1px dashed #c6c6c6;
          border-radius: 8px;
          padding: 1.5rem;
          background-color: #f6f6f6;
        }
        
        .placeholder-content {
          background-color: white;
          border-radius: 6px;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .coming-soon-label {
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
      `}</style>
    </div>
  );
};

export default CaseStudyPlaceholder;
