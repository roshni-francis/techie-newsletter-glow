
import React from 'react';

const EditorialBoard = () => {
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
              <title>DMS Newsletter - Editorial Board Members</title>
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
                  position: relative;
                }

                .section-title {
                  font-size: 32px;
                  color: #024d87;
                  margin-bottom: 30px;
                  font-weight: 600;
                  text-align: center;
                  position: relative;
                  font-family: 'Georgia', serif;
                }

                .section-title:after {
                  content: '';
                  display: block;
                  width: 100px;
                  height: 3px;
                  background-color: #0370c0;
                  margin: 10px auto;
                }

                .members-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  gap: 20px;
                }
                
                .member-card {
                  background-color: #ffffff;
                  border: 1px solid #eeeeee;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .member-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                }
                
                .member-image {
                  position: relative;
                  height: 180px;
                  background-color: #024d87;
                  overflow: hidden;
                }
                
                .member-photo {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 24px;
                  background-color: #024d87;
                }
                
                .member-frame {
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  right: 10px;
                  bottom: 10px;
                  border: 2px solid #0370c0;
                  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%);
                }
                
                .member-info {
                  padding: 15px;
                  text-align: center;
                }
                
                .member-name {
                  font-weight: 600;
                  font-size: 16px;
                  color: #000000;
                  margin-bottom: 5px;
                }
                
                .member-location {
                  font-size: 14px;
                  color: #666666;
                }
                
                .member-role {
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  font-size: 12px;
                  background-color: #f6f6f6;
                  color: #024d87;
                  padding: 2px 8px;
                  border-radius: 20px;
                  font-weight: 500;
                  border: 1px solid #c6c6c6;
                }
                
                .member-role::before {
                  content: '✏️';
                  margin-right: 3px;
                  font-size: 10px;
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
                @media screen and (max-width: 900px) {
                  .members-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }
                
                @media screen and (max-width: 600px) {
                  .members-grid {
                    grid-template-columns: 1fr;
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
                    <h2 class="section-title">Editorial Board Members</h2>
                    
                    <div class="members-grid">
                      <!-- Member 1 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">RM</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Rajkumar Maji</div>
                          <div class="member-location">Chennai</div>
                        </div>
                        <div class="member-role">Editor</div>
                      </div>
                      
                      <!-- Member 2 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">AS</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Ashish Shah</div>
                          <div class="member-location">Vadodara</div>
                        </div>
                        <div class="member-role">Designer</div>
                      </div>
                      
                      <!-- Member 3 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">MSA</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Mohamed Sher Ali</div>
                          <div class="member-location">Bangalore</div>
                        </div>
                        <div class="member-role">Writer</div>
                      </div>
                      
                      <!-- Member 4 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">HJ</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Harsh Jobanputra</div>
                          <div class="member-location">Vadodara</div>
                        </div>
                        <div class="member-role">Writer</div>
                      </div>
                      
                      <!-- Member 5 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">MM</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Matthias Mallon</div>
                          <div class="member-location">Germany</div>
                        </div>
                        <div class="member-role">Advisor</div>
                      </div>
                      
                      <!-- Member 6 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">SS</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Shreya Sridhar</div>
                          <div class="member-location">Bangalore</div>
                        </div>
                        <div class="member-role">Designer</div>
                      </div>
                      
                      <!-- Member 7 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">SB</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Sonam Bhattbhatt</div>
                          <div class="member-location">Vadodara</div>
                        </div>
                        <div class="member-role">Writer</div>
                      </div>
                      
                      <!-- Member 8 -->
                      <div class="member-card">
                        <div class="member-image">
                          <div class="member-photo">NP</div>
                          <div class="member-frame"></div>
                        </div>
                        <div class="member-info">
                          <div class="member-name">Nayeera Parveen S J</div>
                          <div class="member-location">Tokyo</div>
                        </div>
                        <div class="member-role">Coordinator</div>
                      </div>
                    </div>
                    
                    <div class="issue-number">07</div>
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

export default EditorialBoard;
