
import React from 'react';

const MessageAndLeaders = () => {
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
              <title>DMS Newsletter - Message from Dr. NR | Know Your Leaders</title>
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
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                }

                /* Message from Dr. NR Section */
                .message-section {
                  flex: 1;
                  min-width: 300px;
                  padding: 30px;
                  background-color: #f6f6f6;
                  position: relative;
                }

                .message-header {
                  font-size: 24px;
                  color: #024d87;
                  margin-bottom: 20px;
                  font-weight: 600;
                  border-bottom: 2px solid #0370c0;
                  padding-bottom: 10px;
                  font-family: 'Georgia', serif;
                }

                .message-author {
                  display: flex;
                  align-items: center;
                  margin-bottom: 20px;
                }

                .author-image {
                  width: 100px;
                  height: 100px;
                  background-color: #c6c6c6;
                  border-radius: 8px;
                  overflow: hidden;
                  border: 2px solid #fff;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .author-image img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }

                .message-content {
                  color: #666666;
                  font-size: 15px;
                }

                .message-content p {
                  margin-bottom: 15px;
                }

                .message-content .greeting {
                  font-style: italic;
                  color: #999999;
                  margin-bottom: 10px;
                }

                .message-initial {
                  float: left;
                  font-size: 60px;
                  line-height: 0.8;
                  padding-right: 8px;
                  color: #0370c0;
                  font-family: 'Georgia', serif;
                }
                
                /* Leaders Section */
                .leaders-section {
                  flex: 1;
                  min-width: 300px;
                  padding: 30px;
                  background-color: #ffffff;
                }

                .leaders-header {
                  font-size: 24px;
                  color: #024d87;
                  margin-bottom: 20px;
                  font-weight: 600;
                  border-bottom: 2px solid #0370c0;
                  padding-bottom: 10px;
                  font-family: 'Georgia', serif;
                }

                .leader-info {
                  margin-bottom: 30px;
                }

                .leader-card {
                  background-color: #ffffff;
                  border: 1px solid #c6c6c6;
                  border-radius: 8px;
                  padding: 15px;
                  margin-bottom: 20px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }

                .leader-header {
                  display: flex;
                  align-items: center;
                  margin-bottom: 15px;
                }

                .leader-image {
                  width: 80px;
                  height: 80px;
                  background-color: #024d87;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  position: relative;
                }

                .leader-image img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }

                .leader-image::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  border: 2px solid #0370c0;
                  border-radius: 8px;
                  clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
                }

                .leader-details {
                  margin-left: 15px;
                }

                .leader-name {
                  font-weight: bold;
                  font-size: 18px;
                  color: #000000;
                }

                .leader-title {
                  font-size: 14px;
                  color: #999999;
                }

                .leader-bio {
                  font-size: 14px;
                  color: #666666;
                }

                .leader-bio h4 {
                  font-size: 16px;
                  color: #024d87;
                  margin-bottom: 5px;
                }

                .leader-bio p {
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
                  .content-section {
                    flex-direction: column;
                  }
                  
                  .message-section,
                  .leaders-section {
                    flex: none;
                    min-width: auto;
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
                    <!-- Left Column - Message -->
                    <div class="message-section">
                      <h2 class="message-header">Message from Dr. NR</h2>
                      
                      <div class="message-author">
                        <div class="author-image">
                          <!-- Placeholder image -->
                          <div style="background-color: #024d87; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">DR</div>
                        </div>
                      </div>
                      
                      <div class="message-content">
                        <div class="greeting">Dear Team,</div>
                        
                        <p><span class="message-initial">W</span>elcome to the first edition of our DMS newsletter, where we shine a spotlight on our most valuable asset—our people. Our aim is to recognize the remarkable achievements of our team members, showcasing how their hard work and creativity contribute to our collective goals. In this issue, we're thrilled to share inspiring stories of employee engagement and success that drive our department forward. We hope these narratives motivate and inspire you.</p>
                        
                        <p><strong>Why Canvas Chronicles?</strong></p>
                        
                        <p><strong>Recognition:</strong> It will play a crucial role in fostering a culture of recognition. It provides a consistent and visible platform for acknowledging employees' and family members achievements.</p>
                        
                        <p><strong>Building Trust:</strong> Regular newsletters can serve as a platform for sharing important updates, celebrating successes, and addressing any challenges openly.</p>
                        
                        <p><strong>Fostering Community and Belonging:</strong> Newsletters can highlight team achievements, share personal stories, and recognize individual contributions, all of which contribute to a stronger sense of community and belonging.</p>
                      </div>
                    </div>
                    
                    <!-- Right Column - Leaders -->
                    <div class="leaders-section">
                      <h2 class="leaders-header">Know Your Leaders</h2>
                      
                      <div class="leader-info">
                        <div class="leader-card">
                          <div class="leader-header">
                            <div class="leader-image">
                              <!-- Placeholder image -->
                              <div style="background-color: #024d87; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">MB</div>
                            </div>
                            <div class="leader-details">
                              <div class="leader-name">Muthu Balasubramanian</div>
                              <div class="leader-title">Mechanical Engineering Services</div>
                            </div>
                          </div>
                          
                          <div class="leader-bio">
                            <h4>Personal Info:</h4>
                            <p>Working as delivery group head for Mechanical Services (comprise of 1700+ associates in various geographies) in L&T Technology Services and his primary objective is to focus on quality, time, cost efficient delivery, leading to client and employee satisfaction for sustainable and healthy business.</p>
                            
                            <h4>Experience:</h4>
                            <p>Muthu has 35+ years of experience and prior to joining LTTS, he was in various roles at TCS, Tech Mahindra and was responsible for setting up large design centers for GE,T&W and Airbus.</p>
                            
                            <h4>Personal & Family background:</h4>
                            <p>Muthu lives in Bangalore with his wife and two daughters. He is holding Associate membership in Mechanical Engineering from Institution of Engineers, Calcutta.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="issue-number">03</div>
                    </div>
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

export default MessageAndLeaders;
