import React from 'react';
import backgroundImage from 'D:/restaurant_food_order/frontend/src/assets/online.jpeg'; // Update with the path to your background image

const SignupPage = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  };

  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background with 80% opacity
  };

  return (
    <div className="container-fluid p-0" >
      <div className="row justify-content-center" style={containerStyle}>
        <div className="col-md-6 col-lg-4">
          <div className="card text-white" style={cardStyle}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Signup</h2>
              <form>
              <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

