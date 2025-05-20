
import React from 'react';

const Index = () => {
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
              <title>DMS Newsletter - Canvas Chronicles</title>
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
                  flex-direction: row;
                }
                
                /* Left Column - Branding */
                .brand-section {
                  flex: 0 0 40%;
                  padding: 0;
                  position: relative;
                  background: linear-gradient(135deg, #243949 0%, #517fa4 100%);
                  color: #fff;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  min-height: 600px;
                }
                
                .brand-overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='0' y2='100%25' gradientTransform='rotate(220)'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0.05'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' d='M0 0h100v50c-20 40-80 40-100 0z'/%3E%3C/svg%3E");
                  opacity: 0.6;
                  z-index: 1;
                }
                
                .brand-content {
                  padding: 40px;
                  position: relative;
                  z-index: 2;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                }
                
                .slogan {
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 1.5px;
                  color: #FFD700;
                  margin-bottom: 30px;
                  font-weight: 600;
                }
                
                .title {
                  font-size: 50px;
                  font-weight: 700;
                  line-height: 1.1;
                  margin-bottom: 30px;
                }
                
                .title span {
                  color: #FFD700;
                  display: block;
                }
                
                .version-info {
                  margin-top: auto;
                  color: rgba(255, 255, 255, 0.8);
                  font-size: 14px;
                }
                
                .core-values {
                  margin-top: 20px;
                  font-size: 16px;
                  color: rgba(255, 255, 255, 0.9);
                  line-height: 1.5;
                }
                
                /* Right Column - Content */
                .content-section {
                  flex: 0 0 60%;
                  padding: 40px;
                  background-color: #fff;
                  position: relative;
                }
                
                .greeting {
                  font-size: 24px;
                  color: #243949;
                  margin-bottom: 20px;
                  font-weight: 600;
                }
                
                .message {
                  margin-bottom: 30px;
                  color: #555;
                  font-size: 15px;
                }
                
                .message p {
                  margin-bottom: 15px;
                }
                
                .canvas-chronicles {
                  font-size: 32px;
                  color: #517fa4;
                  font-weight: 700;
                  margin: 30px 0;
                  letter-spacing: 1px;
                }
                
                .mascot {
                  position: relative;
                  margin-top: 30px;
                  text-align: right;
                }
                
                .speech-bubble {
                  display: inline-block;
                  position: relative;
                  background: #fff;
                  border: 2px solid #517fa4;
                  border-radius: 20px;
                  padding: 8px 15px;
                  font-size: 14px;
                  color: #517fa4;
                  font-weight: 600;
                  margin-right: 70px;
                  margin-bottom: 10px;
                }
                
                .speech-bubble:after {
                  content: '';
                  position: absolute;
                  right: -10px;
                  top: 50%;
                  width: 0;
                  height: 0;
                  border: 10px solid transparent;
                  border-left-color: #517fa4;
                  border-right: 0;
                  margin-top: -10px;
                  margin-right: -10px;
                }
                
                .mascot-character {
                  width: 80px;
                  height: 80px;
                  background-color: #517fa4;
                  border-radius: 50%;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-weight: bold;
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
                  .newsletter-container {
                    flex-direction: column;
                  }
                  
                  .brand-section {
                    flex: none;
                    min-height: auto;
                    padding: 30px 20px;
                  }
                  
                  .content-section {
                    flex: none;
                    padding: 30px 20px;
                  }
                  
                  .title {
                    font-size: 36px;
                  }
                  
                  .brand-content {
                    padding: 20px 0;
                  }
                  
                  .canvas-chronicles {
                    font-size: 28px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="newsletter-wrapper">
                <div class="newsletter-container">
                  <!-- Left Column - Branding -->
                  <div class="brand-section">
                    <div class="brand-overlay"></div>
                    <div class="brand-content">
                      <div>
                        <div class="slogan">Engineering the Change</div>
                        <h1 class="title">DMS <span>NEWSLETTER</span></h1>
                      </div>
                      <div>
                        <div class="version-info">Apr–Sep 2024, FY25 H1, Version 1</div>
                        <div class="core-values">Purposeful.<br>Agile.<br>Innovation.</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Right Column - Content -->
                  <div class="content-section">
                    <h2 class="greeting">Greetings from DMS Team!</h2>
                    <div class="message">
                      <p>We welcome you all to the inaugural edition of the LTTS- DMS Newsletter! 
                      Through this newsletter we are thrilled to bring you the latest updates 
                      from our dynamic world of digital manufacturing. In this first edition, we dive into the 
                      various innovations that are driving our industry forward, showcasing cutting-edge 
                      technologies and breakthrough solutions that are transforming manufacturing 
                      processes.</p>
                      
                      <p>You'll find highlights of our recent projects, demonstrating our commitment to 
                      excellence and our ability to deliver superior results. We also feature exciting 
                      collaborations with industry leaders and partners, reflecting our dedication to 
                      fostering a collaborative ecosystem that drives mutual growth and success. 
                      Moreover, we share inspiring stories and experiences from our talented employees, 
                      giving you a glimpse into the vibrant culture and the passionate people behind our 
                      achievements.</p>
                      
                      <p>Stay tuned for all this and more as we embark on this journey to keep you informed, 
                      inspired, and connected with the latest in digital manufacturing.</p>
                      
                      <p>Happy reading with our first edition of</p>
                    </div>
                    <div class="canvas-chronicles">CANVAS CHRONICLES</div>
                    
                    <div class="mascot">
                      <div class="speech-bubble">Techie says Hi!</div>
                      <div class="mascot-character">👷</div>
                    </div>
                    
                    <div class="issue-number">02</div>
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

export default Index;
