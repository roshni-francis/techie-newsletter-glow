
import React from 'react';

const DuHeads = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="newsletter-container max-w-4xl w-full mx-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>DMS Newsletter - DMS DU Heads</title>
              <style>
                /* Reset styles */
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                
                body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  background-color: #f7f7f7;
                }
                
                .newsletter-wrapper {
                  max-width: 900px;
                  margin: 20px auto;
                  background-color: #fff;
                  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
                  overflow: hidden;
                }
                
                .newsletter-container {
                  display: flex;
                  flex-direction: column;
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

                .page-navigation a {
                  padding: 5px 15px;
                  margin: 0 5px;
                  color: #024d87;
                  text-decoration: none;
                  border-radius: 4px;
                  transition: all 0.3s ease;
                }

                .page-navigation a:hover {
                  background-color: #0370c0;
                  color: #ffffff;
                }
                
                .content-section {
                  padding: 30px;
                }

                .section-title {
                  font-size: 32px;
                  color: #024d87;
                  margin-bottom: 30px;
                  font-weight: 600;
                  text-align: center;
                  position: relative;
                }

                .section-title:after {
                  content: '';
                  display: block;
                  width: 100px;
                  height: 3px;
                  background-color: #0370c0;
                  margin: 10px auto;
                }

                .heads-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                  gap: 25px;
                }
                
                .head-card {
                  background-color: #ffffff;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  transition: transform 0.3s ease;
                }
                
                .head-card:hover {
                  transform: translateY(-5px);
                }
                
                .head-title-bar {
                  background-color: #024d87;
                  color: #ffffff;
                  padding: 10px 15px;
                  font-size: 24px;
                  font-weight: bold;
                  text-align: center;
                }
                
                .head-image-container {
                  position: relative;
                  height: 200px;
                  background-color: #024d87;
                  overflow: hidden;
                }
                
                .head-image {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 36px;
                }

                .head-overlay {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  padding: 15px;
                  background: linear-gradient(to top, rgba(2, 77, 135, 0.9) 0%, rgba(2, 77, 135, 0) 100%);
                }

                .head-image::before {
                  content: '';
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  width: calc(100% - 20px);
                  height: calc(100% - 20px);
                  border: 2px solid #0370c0;
                  clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%);
                  z-index: 1;
                }

                .head-info {
                  padding: 15px;
                }
                
                .head-name {
                  font-size: 18px;
                  font-weight: bold;
                  color: #000000;
                  margin-bottom: 5px;
                }
                
                .head-position {
                  font-size: 14px;
                  color: #0370c0;
                  text-transform: uppercase;
                  margin-bottom: 10px;
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
                  .heads-grid {
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 15px;
                  }
                  
                  .page-navigation {
                    flex-wrap: wrap;
                  }
                  
                  .page-navigation a {
                    margin: 5px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="newsletter-wrapper">
                <div class="newsletter-container">
                  <!-- Header -->
                  <div class="page-header">
                    <h1>DMS NEWSLETTER</h1>
                    <div>Canvas Chronicles | Apr–Sep 2024, FY25 H1</div>
                  </div>
                  
                  <!-- Navigation -->
                  <div class="page-navigation">
                    <a href="/">Home</a>
                    <a href="/message-leaders">Message & Leaders</a>
                    <a href="/du-heads">DU Heads</a>
                    <a href="/editorial-board">Editorial Board</a>
                    <a href="/table-of-contents">Contents</a>
                  </div>
                  
                  <div class="content-section">
                    <h2 class="section-title">DMS DU HEADS</h2>
                    
                    <div class="heads-grid">
                      <!-- Head 1 -->
                      <div class="head-card">
                        <div class="head-title-bar">MEH</div>
                        <div class="head-image-container">
                          <div class="head-image">MB</div>
                        </div>
                        <div class="head-info">
                          <div class="head-name">Muthu Balasubramanian</div>
                          <div class="head-position">Mechanical Engineering Services</div>
                        </div>
                      </div>
                      
                      <!-- Head 2 -->
                      <div class="head-card">
                        <div class="head-title-bar">IAM</div>
                        <div class="head-image-container">
                          <div class="head-image">VN</div>
                        </div>
                        <div class="head-info">
                          <div class="head-name">Venkatesan Narasimhan</div>
                          <div class="head-position">Integrated Asset Management</div>
                        </div>
                      </div>
                      
                      <!-- Head 3 -->
                      <div class="head-card">
                        <div class="head-title-bar">SMS</div>
                        <div class="head-image-container">
                          <div class="head-image">VS</div>
                        </div>
                        <div class="head-info">
                          <div class="head-name">Vinodkumar Subramaniam</div>
                          <div class="head-position">Smart Mfg. & Sourcing</div>
                        </div>
                      </div>
                      
                      <!-- Head 4 -->
                      <div class="head-card">
                        <div class="head-title-bar">PLM</div>
                        <div class="head-image-container">
                          <div class="head-image">RP</div>
                        </div>
                        <div class="head-info">
                          <div class="head-name">Rakesh Pandey</div>
                          <div class="head-position">Product Lifecycle Management</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="issue-number">05</div>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `
          }}
        />
      </div>
    </div>
  );
};

export default DuHeads;
