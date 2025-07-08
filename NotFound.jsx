import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 col-md-10 col-12">
            {/* Main Content Container */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center py-5 px-4"
            >
              {/* 404 Number with Material Design */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                className="error-code mb-4"
              >
                <div className="position-relative d-inline-block">
                  <h1 
                    className="display-1 fw-bold mb-0 position-relative" 
                    style={{ 
                      fontSize: '7rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3))'
                    }}
                  >
                    404
                  </h1>
                  {/* Decorative circles */}
                  <div 
                    className="position-absolute rounded-circle"
                    style={{
                      width: '120px',
                      height: '120px',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: -1
                    }}
                  />
                </div>
              </motion.div>

              {/* Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="error-message mb-5"
              >
                <h2 className="h2 fw-bold mb-3 text-dark">
                  Oops! Page Not Found
                </h2>
                <p className="lead text-muted mb-0 px-md-3">
                  The page you're looking for seems to have wandered off into the digital void. 
                  Don't worry, even the best explorers sometimes take a wrong turn!
                </p>
              </motion.div>

              {/* Floating Robot Icon */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="floating-icon mb-5"
              >
                <div 
                  className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  }}
                >
                  <i className="fas fa-robot fa-3x" style={{ color: '#667eea' }}></i>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="action-buttons mb-5"
              >
                <Link 
                  to="/" 
                  className="btn btn-lg me-3 mb-3"
                  style={{ 
                    borderRadius: '16px',
                    padding: '14px 32px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="fas fa-home me-2"></i>
                  Back to Home
                </Link>
                <button 
                  onClick={() => window.history.back()}
                  className="btn btn-lg mb-3"
                  style={{ 
                    borderRadius: '16px',
                    padding: '14px 32px',
                    fontWeight: '600',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '2px solid #e9ecef',
                    color: '#495057',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Go Back
                </button>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="quick-links"
              >
                <p className="text-muted mb-4 fw-medium">Or explore these sections:</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link 
                    to="/projects" 
                    className="btn btn-sm rounded-pill px-4 py-2"
                    style={{
                      background: 'rgba(102, 126, 234, 0.15)',
                      border: '1px solid rgba(102, 126, 234, 0.2)',
                      color: '#667eea',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className="fas fa-project-diagram me-2"></i>Projects
                  </Link>
                  <Link 
                    to="/blogs" 
                    className="btn btn-sm rounded-pill px-4 py-2"
                    style={{
                      background: 'rgba(23, 162, 184, 0.15)',
                      border: '1px solid rgba(23, 162, 184, 0.2)',
                      color: '#17a2b8',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className="fas fa-blog me-2"></i>Blogs
                  </Link>
                  <Link 
                    to="/services" 
                    className="btn btn-sm rounded-pill px-4 py-2"
                    style={{
                      background: 'rgba(40, 167, 69, 0.15)',
                      border: '1px solid rgba(40, 167, 69, 0.2)',
                      color: '#28a745',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className="fas fa-cogs me-2"></i>Services
                  </Link>
                  <Link 
                    to="/skills" 
                    className="btn btn-sm rounded-pill px-4 py-2"
                    style={{
                      background: 'rgba(255, 193, 7, 0.15)',
                      border: '1px solid rgba(255, 193, 7, 0.2)',
                      color: '#ffc107',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className="fas fa-code me-2"></i>Skills
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Material Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="decorative-cards mt-4"
            >
              <div className="row g-3">
                {[
                  { icon: 'fas fa-home', color: '#667eea', delay: 0 },
                  { icon: 'fas fa-search', color: '#17a2b8', delay: 0.1 },
                  { icon: 'fas fa-lightbulb', color: '#28a745', delay: 0.2 },
                  { icon: 'fas fa-star', color: '#ffc107', delay: 0.3 }
                ].map((item, index) => (
                  <div key={index} className="col-3">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                      }}
                      className="card border-0 text-center p-3"
                      style={{
                        borderRadius: '16px',
                        background: `rgba(${item.color === '#667eea' ? '102, 126, 234' : 
                                           item.color === '#17a2b8' ? '23, 162, 184' :
                                           item.color === '#28a745' ? '40, 167, 69' : '255, 193, 7'}, 0.1)`,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                      }}
                    >
                      <i className={item.icon} style={{ color: item.color, fontSize: '1.5rem' }}></i>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background with Material Design */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -2 }}>
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
              'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
              'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="w-100 h-100"
        />
      </div>

      {/* Floating Material Elements */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -1, overflow: 'hidden' }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute"
            style={{
              width: Math.random() * 80 + 40 + 'px',
              height: Math.random() * 80 + 40 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              borderRadius: Math.random() > 0.5 ? '50%' : '16px',
              background: `rgba(102, 126, 234, ${Math.random() * 0.1 + 0.03})`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .not-found-container {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
          min-height: 100vh;
          position: relative;
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        
        .quick-links .btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15) !important;
        }
        
        .decorative-cards .card:hover {
          transform: translateY(-4px) scale(1.05);
        }
        
        .floating-icon {
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }
        
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Material Design ripple effect */
        .btn:active {
          transform: translateY(-1px) scale(0.98);
        }
        
        /* Smooth scrolling for better UX */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
