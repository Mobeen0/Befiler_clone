import app0 from '../assets/app_0.png';
import app1 from '../assets/app_1.png';
import app2 from '../assets/app_2.png';



const AppPromo= () => {
    return (
      <div className="h-fit py-4" style={{ backgroundColor: "#fdebee" }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left side with phone image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src={app0}
              alt="App Screenshot" 
              className="max-w-sm w-full mx-auto"
            />
          </div>
  
          {/* Right side with text and download buttons */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">
              Say hello to the app that made everything even more convenient
            </h2>
            <p className="text-xl mb-6">1 million app downloads by Pakistani's</p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block">
                <img 
                  src={app1}
                  alt="Get it on Google Play" 
                  className="h-14"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src={app2}
                  alt="Download on the App Store" 
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default AppPromo;