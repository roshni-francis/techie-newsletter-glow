
import React from 'react';
import { Link } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';

const TableOfContents = () => {
  return (
    <div className="min-h-screen">
      <div className="newsletter-container max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="page-header">
          <h1>DMS NEWSLETTER</h1>
          <div>Canvas Chronicles | Apr–Sep 2024, FY25 H1</div>
        </div>
        
        {/* Navigation */}
        <PageNavigation />
        
        <div className="content-section">
          <h2 className="section-title">Table Of Contents</h2>
          
          <div className="toc-container">
            {/* Section 1 */}
            <div className="toc-section">
              <div className="toc-section-header">
                <div className="toc-section-header-icon">1</div>
                Know Your Leaders
              </div>
              
              <div className="toc-image">
                [Leadership Team Image]
              </div>
              
              <ul className="toc-list">
                <li className="toc-item">
                  <div className="toc-item-title">✉️ Introduction to the Newsletter</div>
                  <div className="toc-item-page">02</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">✍️ Message from Dr. NR</div>
                  <div className="toc-item-page">03</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">👥 Know your Leaders</div>
                  <div className="toc-item-page">04</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">🧑‍💼 DMS DU Heads</div>
                  <div className="toc-item-page">05</div>
                </li>
              </ul>
            </div>
            
            {/* Section 2 */}
            <div className="toc-section">
              <div className="toc-section-header">
                <div className="toc-section-header-icon">2</div>
                Team Events
              </div>
              
              <div className="toc-image">
                [Team Events Image]
              </div>
              
              <ul className="toc-list">
                <li className="toc-item">
                  <div className="toc-item-title">🏢 Engineering Pradakshina</div>
                  <div className="toc-item-page">11</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">💻 Engineering Tech Workshops</div>
                  <div className="toc-item-page">13</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">🤝 Team Interactions</div>
                  <div className="toc-item-page">15</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">🌟 Special Highlights</div>
                  <div className="toc-item-page">17</div>
                </li>
              </ul>
            </div>
            
            {/* Section 3 */}
            <div className="toc-section">
              <div className="toc-section-header">
                <div className="toc-section-header-icon">3</div>
                Technical Quotient
              </div>
              
              <div className="toc-image">
                [Technical Image]
              </div>
              
              <ul className="toc-list">
                <li className="toc-item">
                  <div className="toc-item-title">🧠 Expert Interview Series</div>
                  <div className="toc-item-page">51</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">
                    <Link to="/segments" className="hover:text-accent-blue">
                      🔷 Business Segments
                    </Link>
                  </div>
                  <div className="toc-item-page">55</div>
                </li>
              </ul>
            </div>
            
            {/* Section 4 */}
            <div className="toc-section">
              <div className="toc-section-header">
                <div className="toc-section-header-icon">4</div>
                HR Updates
              </div>
              
              <div className="toc-image">
                [HR Image]
              </div>
              
              <ul className="toc-list">
                <li className="toc-item">
                  <div className="toc-item-title">🎭 DMS Fun Fiesta Vadodara</div>
                  <div className="toc-item-page">19</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">🌴 Engagement Activity Kerala</div>
                  <div className="toc-item-page">21</div>
                </li>
                <li className="toc-item">
                  <div className="toc-item-title">🎪 DMS Fun Fiesta Bangalore</div>
                  <div className="toc-item-page">23</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="issue-number">10</div>
        </div>

        <style>
          {`
          /* Reset styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .newsletter-container {
            max-width: 900px;
            margin: 20px auto;
            background-color: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
          }

          .page-header {
            background: linear-gradient(135deg, #024d87 0%, #0370c0 100%);
            color: #fff;
            padding: 20px;
            text-align: center;
          }

          .page-header h1 {
            font-size: 24px;
            margin-bottom: 5px;
          }

          .page-navigation {
            display: flex;
            justify-content: center;
            background-color: #f6f6f6;
            border-bottom: 1px solid #c6c6c6;
            padding: 10px;
          }

          .nav-link {
            padding: 5px 15px;
            margin: 0 5px;
            color: #024d87;
            text-decoration: none;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .nav-link:hover {
            background-color: #0370c0;
            color: #ffffff;
          }
          
          .content-section {
            padding: 30px;
            background-color: #fff;
            position: relative;
            background-image: linear-gradient(#f6f6f6 1px, transparent 1px),
                              linear-gradient(to right, #f6f6f6 1px, #ffffff 1px);
            background-size: 25px 25px;
          }

          .section-title {
            font-size: 32px;
            color: #024d87;
            margin-bottom: 30px;
            font-weight: 700;
            text-align: center;
            position: relative;
            font-family: 'Georgia', serif;
          }

          .section-title::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -10px;
            width: 150px;
            height: 3px;
            background-color: #0370c0;
          }

          .toc-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-top: 20px;
          }
          
          .toc-section {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            border: 1px solid #eeeeee;
          }
          
          .toc-section-header {
            background-color: #024d87;
            color: #ffffff;
            padding: 12px 15px;
            font-weight: 600;
            font-size: 18px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #0370c0;
          }
          
          .toc-section-header-icon {
            margin-right: 8px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            border-radius: 50%;
            color: #024d87;
            font-size: 12px;
            font-weight: bold;
          }
          
          .toc-list {
            padding: 15px;
            list-style-type: none;
          }
          
          .toc-item {
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px dotted #c6c6c6;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .toc-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .toc-item-title {
            color: #666666;
            font-size: 14px;
            flex: 1;
          }
          
          .toc-item-page {
            background-color: #FFD700;
            color: #333;
            font-weight: bold;
            min-width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            font-size: 12px;
            margin-left: 10px;
          }
          
          .toc-image {
            width: 100%;
            height: 120px;
            background-color: #eeeeee;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999999;
            font-style: italic;
          }
          
          .issue-number {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background-color: #FFD700;
            color: #333;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 4px;
          }
          
          /* Responsive Design */
          @media screen and (max-width: 768px) {
            .toc-container {
              grid-template-columns: 1fr;
            }
            
            .page-navigation {
              flex-wrap: wrap;
            }
            
            .page-navigation a {
              margin: 5px;
            }
          }
          `}
        </style>
      </div>
    </div>
  );
};

export default TableOfContents;
