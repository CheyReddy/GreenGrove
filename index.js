function AnnualCarbonFootprint(){
    //var AnnualCarbonFootprint = document.getElementById("ACF-value");
    const AnnualCarbonFootprint = 10;
    const SequestrationOfTree = 0.022;
    var NoOfTrees = AnnualCarbonFootprint/SequestrationOfTree;
    document.getElementById("AnnualCarbonFootprint").innerHTML = `You need to plant approximately ${Math.trunc(NoOfTrees)} trees to offer your annual carbon footprint.`;
}