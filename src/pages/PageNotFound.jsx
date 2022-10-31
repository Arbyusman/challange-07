import React from "react";
export default function PageNotFound() {
  return (
    <div className="container-fluid d-flex justify-content-center  " style={{background:"red"}}>
        <div className="row" >
            <div className="col-md-12">
                <div className="error-template" >
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 </h2>
                    <h2 >
                        Anda Kurang Beruntung 
                    </h2>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
