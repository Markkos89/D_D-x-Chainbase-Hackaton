import React from "react";

const NftCard = () => {
  return (
   
<div className="grid justify-items-end pr-4">

  
    <h1
      className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-white-800"
    >
      NFTcards
    </h1>


    <div className="flex gap-8 columns-4">
      <div className="box-border h-32 w-32 p-4 border-4"></div>
      <div className="box-border h-32 w-32 p-4 border-4"></div>
      <div className="box-border h-32 w-32 p-4 border-4"></div>
      <div className="box-border h-32 w-32 p-4 border-4"></div>

 </div>
 
 <div className="flex py-5 gap-8 columns-4">
      <div className="box-border h-32 w-32 p-4 border-4"></div>
      <div className="box-border h-32 w-32 p-4 border-4"></div>
      <div className="box-border h-32 w-32 p-4 border-4"></div>
      <div className="box-border h-32 w-32 p-4 border-4"></div>

 </div>
    
    
</div>




  );
};

export default NftCard;