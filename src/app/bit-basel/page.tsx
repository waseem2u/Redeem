import React from "react";
import BitBasel from "../components/BitBasel";
import HeaderBit from "../components/HeaderBit";
import BitNft from "../components/BitNft";
import BitselAbout from "../components/BitselAbout";
import BitLocation from "../components/BitLocation";
import BitselJourney from "../components/BitselJourney";
import BitselNft from "../components/BitselNft";
import BitselStepTwo from "../components/BitselStepTwo";
import BitbaselReward from "../components/BitbaselReward";
import BitProduct from "../components/BitProduct";
import BitFooter from "../components/BitFooter";

function BitBaselPage() {
  return (
    <div>
      <BitBasel />
      <BitNft />
      <HeaderBit />
      <BitselAbout />
      <BitLocation />
      <BitselJourney />
      <BitselNft />
      <BitselStepTwo />
      <BitbaselReward />
      <BitProduct /> 
      <BitFooter />
    </div>
  );
}

export default BitBaselPage;
