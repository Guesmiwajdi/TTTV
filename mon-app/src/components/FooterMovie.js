import React from "react";

const FooterMovie = () => {
  return (
    <div>
      <div className="text-center p-3 text-light">
      <span class="copyright">
        Copyright 2022 - GoingTowajdi
    </span>
    
    <div class="subscribe">
        <form>
        <input type="email" placeholder="Example@gmail.com" required/>
        <input type="submit" value="Subscribe"/>
        </form>
    </div>
        
      </div>
    </div>
  );
};

export default FooterMovie;
