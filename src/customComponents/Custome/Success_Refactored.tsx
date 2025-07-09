
'use client';

import  React,{ useEffect, useRef } from 'react';
import { useCampaignFlow } from './context/CampaignFlowContext';
import './success.css';

const SuccessRefactored = () => {
  const { projectData, setProjectData, setActiveForm } = useCampaignFlow();
  const particlesRef = useRef(null);

  const handleNewCampaign = () => {
    setProjectData(undefined);
    setActiveForm('main');
  };
  
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;
    
    const colors = ['#60a5fa', '#3b82f6', '#93c5fd', '#bfdbfe'];
    const particles = [];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      
      const size = Math.random() * 10 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${posX}%;
        top: ${posY}%;
        animation: float ${duration}s linear ${delay}s infinite;
        opacity: 0;
      `;
      
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }
    
    return () => {
      particles.forEach(p => particlesContainer.removeChild(p));
    };
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div ref={particlesRef} className="particles-container" />
        
        <div className="card">
          <div className="card-header" />
          
          <div className="card-body">
            <div className="icon-container animate-pulse-slow" />
            
            <h1 className="main-title">
              ¡ Campaign "{projectData?.title}" has been created successfully !
            </h1>
            
            <p className="subtitle">
              Your campaign has been created and is ready to go. All systems are operational.
            </p>
            
            <div className="details-container">
              <h2 className="details-title">
                Project Details
                <span className="details-title-underline" />
              </h2>
              
              <div className="details-grid">
                <div className="detail-item">
                  <div className="detail-item-header">
                    <span className="detail-item-header-title">ID</span>
                  </div>
                  <div className="detail-item-value">{projectData?.id}</div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-item-header">
                    <span className="detail-item-header-title">Name (Repo)</span>
                  </div>
                  <div className="detail-item-value">{projectData?.repo}</div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-item-header">
                    <span className="detail-item-header-title">Type</span>
                  </div>
                  <div className="detail-item-value">{projectData?.campaignType}</div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-item-header">
                    <span className="detail-item-header-title">URL</span>
                  </div>
                  <div className="detail-item-value">{projectData?.homepage}</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleNewCampaign}
              className="create-new-button"
            >
              <span className="create-new-button-bg"></span>
              <span className="create-new-button-text">Create New Campaign</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessRefactored;
