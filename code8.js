gdjs.JunkHouseCode = {};
gdjs.JunkHouseCode.GDShopTitleObjects1= [];
gdjs.JunkHouseCode.GDShopTitleObjects2= [];
gdjs.JunkHouseCode.GDShopTitleObjects3= [];
gdjs.JunkHouseCode.GDBGObjects1= [];
gdjs.JunkHouseCode.GDBGObjects2= [];
gdjs.JunkHouseCode.GDBGObjects3= [];
gdjs.JunkHouseCode.GDInfoObjects1= [];
gdjs.JunkHouseCode.GDInfoObjects2= [];
gdjs.JunkHouseCode.GDInfoObjects3= [];
gdjs.JunkHouseCode.GDGreetingObjects1= [];
gdjs.JunkHouseCode.GDGreetingObjects2= [];
gdjs.JunkHouseCode.GDGreetingObjects3= [];
gdjs.JunkHouseCode.GDProfileObjects1= [];
gdjs.JunkHouseCode.GDProfileObjects2= [];
gdjs.JunkHouseCode.GDProfileObjects3= [];
gdjs.JunkHouseCode.GDOptionObjects1= [];
gdjs.JunkHouseCode.GDOptionObjects2= [];
gdjs.JunkHouseCode.GDOptionObjects3= [];
gdjs.JunkHouseCode.GDOption2Objects1= [];
gdjs.JunkHouseCode.GDOption2Objects2= [];
gdjs.JunkHouseCode.GDOption2Objects3= [];
gdjs.JunkHouseCode.GDOption3Objects1= [];
gdjs.JunkHouseCode.GDOption3Objects2= [];
gdjs.JunkHouseCode.GDOption3Objects3= [];
gdjs.JunkHouseCode.GDOption4Objects1= [];
gdjs.JunkHouseCode.GDOption4Objects2= [];
gdjs.JunkHouseCode.GDOption4Objects3= [];
gdjs.JunkHouseCode.GDOption5Objects1= [];
gdjs.JunkHouseCode.GDOption5Objects2= [];
gdjs.JunkHouseCode.GDOption5Objects3= [];
gdjs.JunkHouseCode.GDSelectorObjects1= [];
gdjs.JunkHouseCode.GDSelectorObjects2= [];
gdjs.JunkHouseCode.GDSelectorObjects3= [];
gdjs.JunkHouseCode.GDCreditsObjects1= [];
gdjs.JunkHouseCode.GDCreditsObjects2= [];
gdjs.JunkHouseCode.GDCreditsObjects3= [];
gdjs.JunkHouseCode.GDScoreObjects1= [];
gdjs.JunkHouseCode.GDScoreObjects2= [];
gdjs.JunkHouseCode.GDScoreObjects3= [];
gdjs.JunkHouseCode.GDJunkObjects1= [];
gdjs.JunkHouseCode.GDJunkObjects2= [];
gdjs.JunkHouseCode.GDJunkObjects3= [];
gdjs.JunkHouseCode.GDFuelObjects1= [];
gdjs.JunkHouseCode.GDFuelObjects2= [];
gdjs.JunkHouseCode.GDFuelObjects3= [];
gdjs.JunkHouseCode.GDRestFXObjects1= [];
gdjs.JunkHouseCode.GDRestFXObjects2= [];
gdjs.JunkHouseCode.GDRestFXObjects3= [];
gdjs.JunkHouseCode.GDTipObjects1= [];
gdjs.JunkHouseCode.GDTipObjects2= [];
gdjs.JunkHouseCode.GDTipObjects3= [];

gdjs.JunkHouseCode.conditionTrue_0 = {val:false};
gdjs.JunkHouseCode.condition0IsTrue_0 = {val:false};
gdjs.JunkHouseCode.condition1IsTrue_0 = {val:false};
gdjs.JunkHouseCode.condition2IsTrue_0 = {val:false};
gdjs.JunkHouseCode.condition3IsTrue_0 = {val:false};
gdjs.JunkHouseCode.condition4IsTrue_0 = {val:false};
gdjs.JunkHouseCode.condition5IsTrue_0 = {val:false};
gdjs.JunkHouseCode.condition6IsTrue_0 = {val:false};
gdjs.JunkHouseCode.conditionTrue_1 = {val:false};
gdjs.JunkHouseCode.condition0IsTrue_1 = {val:false};
gdjs.JunkHouseCode.condition1IsTrue_1 = {val:false};
gdjs.JunkHouseCode.condition2IsTrue_1 = {val:false};
gdjs.JunkHouseCode.condition3IsTrue_1 = {val:false};
gdjs.JunkHouseCode.condition4IsTrue_1 = {val:false};
gdjs.JunkHouseCode.condition5IsTrue_1 = {val:false};
gdjs.JunkHouseCode.condition6IsTrue_1 = {val:false};


gdjs.JunkHouseCode.eventsList0x7b7cfc = function(runtimeScene) {

{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) < 1;
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8769764);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
gdjs.JunkHouseCode.GDOption4Objects2.createFrom(runtimeScene.getObjects("Option4"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDOption4Objects2.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDOption4Objects2[i].setString("Nothing to Sell");
}
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) > 99;
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8770428);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JunkHouseCode.GDOptionObjects1 */
{for(var i = 0, len = gdjs.JunkHouseCode.GDOptionObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDOptionObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.JunkHouseCode.eventsList0x7b7cfc
gdjs.JunkHouseCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
gdjs.JunkHouseCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.JunkHouseCode.GDFuelObjects1.createFrom(runtimeScene.getObjects("Fuel"));
gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.JunkHouseCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
gdjs.JunkHouseCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));
gdjs.JunkHouseCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
gdjs.JunkHouseCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDGreetingObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDGreetingObjects1[i].setScale(5);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDOptionObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDOptionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDFuelObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDFuelObjects1[i].setString("Fuel:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(25)) + "%");
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDScoreObjects1[i].setString("Score:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDJunkObjects1[i].setString("Junk:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDShopTitleObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(24)) + " Junk House");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "2");
}
{ //Subevents
gdjs.JunkHouseCode.eventsList0x7b7cfc(runtimeScene);} //End of subevents
}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() < 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_0.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JunkHouseCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.JunkHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDGreetingObjects1[i].setOpacity(gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() + (22));
}
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getScaleX() > 1 ) {
        gdjs.JunkHouseCode.condition0IsTrue_0.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JunkHouseCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.JunkHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDGreetingObjects1[i].setScale(gdjs.JunkHouseCode.GDGreetingObjects1[i].getScale() - (0.2));
}
}}

}


{



}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition1IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8772444);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].setPosition(395,120);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition1IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8773348);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].setPosition(395,159);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition1IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8774380);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].setPosition(395,198);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition1IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8775412);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].setPosition(395,240);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition1IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8776444);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].setPosition(395,278);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 4;
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.JunkHouseCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
gdjs.JunkHouseCode.condition2IsTrue_1.val = false;
gdjs.JunkHouseCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.JunkHouseCode.condition1IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.JunkHouseCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDOptionObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDOptionObjects1[i].isVisible() ) {
        gdjs.JunkHouseCode.condition3IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDOptionObjects1[k] = gdjs.JunkHouseCode.GDOptionObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDOptionObjects1.length = k;}}
}
}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val && gdjs.JunkHouseCode.condition2IsTrue_1.val && gdjs.JunkHouseCode.condition3IsTrue_1.val;
}
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
gdjs.JunkHouseCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.JunkHouseCode.condition1IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val && gdjs.JunkHouseCode.condition2IsTrue_1.val;
}
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
gdjs.JunkHouseCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.JunkHouseCode.condition1IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val && gdjs.JunkHouseCode.condition2IsTrue_1.val;
}
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.JunkHouseCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
gdjs.JunkHouseCode.condition2IsTrue_1.val = false;
gdjs.JunkHouseCode.condition3IsTrue_1.val = false;
gdjs.JunkHouseCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.JunkHouseCode.condition1IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.JunkHouseCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDOption4Objects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDOption4Objects1[i].isVisible() ) {
        gdjs.JunkHouseCode.condition3IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDOption4Objects1[k] = gdjs.JunkHouseCode.GDOption4Objects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDOption4Objects1.length = k;}if ( gdjs.JunkHouseCode.condition3IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) > 0;
}}
}
}
}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val && gdjs.JunkHouseCode.condition2IsTrue_1.val && gdjs.JunkHouseCode.condition3IsTrue_1.val && gdjs.JunkHouseCode.condition4IsTrue_1.val;
}
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
gdjs.JunkHouseCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.JunkHouseCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
/* Reuse gdjs.JunkHouseCode.GDOption4Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Correct.wav", false, 40, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{for(var i = 0, len = gdjs.JunkHouseCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDJunkObjects1[i].setString("Junk:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.JunkHouseCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDOption4Objects1[i].setString("Junk Sold");
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "2");
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
gdjs.JunkHouseCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.JunkHouseCode.condition1IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val && gdjs.JunkHouseCode.condition2IsTrue_1.val;
}
}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_0.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if (gdjs.JunkHouseCode.condition0IsTrue_0.val) {
gdjs.JunkHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.JunkHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.JunkHouseCode.GDSelectorObjects1[i].hide(false);
}
}}

}


{

gdjs.JunkHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.JunkHouseCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));

gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition0IsTrue_0;
gdjs.JunkHouseCode.condition0IsTrue_1.val = false;
gdjs.JunkHouseCode.condition1IsTrue_1.val = false;
gdjs.JunkHouseCode.condition2IsTrue_1.val = false;
gdjs.JunkHouseCode.condition3IsTrue_1.val = false;
gdjs.JunkHouseCode.condition4IsTrue_1.val = false;
gdjs.JunkHouseCode.condition5IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.JunkHouseCode.condition0IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDGreetingObjects1[k] = gdjs.JunkHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.JunkHouseCode.condition0IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.JunkHouseCode.condition1IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.JunkHouseCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.JunkHouseCode.GDOption4Objects1.length;i<l;++i) {
    if ( gdjs.JunkHouseCode.GDOption4Objects1[i].isVisible() ) {
        gdjs.JunkHouseCode.condition3IsTrue_1.val = true;
        gdjs.JunkHouseCode.GDOption4Objects1[k] = gdjs.JunkHouseCode.GDOption4Objects1[i];
        ++k;
    }
}
gdjs.JunkHouseCode.GDOption4Objects1.length = k;}if ( gdjs.JunkHouseCode.condition3IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) < 1;
}if ( gdjs.JunkHouseCode.condition4IsTrue_1.val ) {
{
gdjs.JunkHouseCode.condition5IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.8, "2");
}}
}
}
}
}
gdjs.JunkHouseCode.conditionTrue_1.val = true && gdjs.JunkHouseCode.condition0IsTrue_1.val && gdjs.JunkHouseCode.condition1IsTrue_1.val && gdjs.JunkHouseCode.condition2IsTrue_1.val && gdjs.JunkHouseCode.condition3IsTrue_1.val && gdjs.JunkHouseCode.condition4IsTrue_1.val && gdjs.JunkHouseCode.condition5IsTrue_1.val;
}
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8785668);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 60, 1);
}}

}


{



}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 1;
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8786452);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("3rd Class Ship");
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 2;
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8787084);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("2nd Class Ship");
}}

}


{


gdjs.JunkHouseCode.condition0IsTrue_0.val = false;
gdjs.JunkHouseCode.condition1IsTrue_0.val = false;
{
gdjs.JunkHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 3;
}if ( gdjs.JunkHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.JunkHouseCode.conditionTrue_1 = gdjs.JunkHouseCode.condition1IsTrue_0;
gdjs.JunkHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8787716);
}
}}
if (gdjs.JunkHouseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("1st Class Ship");
}}

}


}; //End of gdjs.JunkHouseCode.eventsList0xb5aa0


gdjs.JunkHouseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JunkHouseCode.GDShopTitleObjects1.length = 0;
gdjs.JunkHouseCode.GDShopTitleObjects2.length = 0;
gdjs.JunkHouseCode.GDShopTitleObjects3.length = 0;
gdjs.JunkHouseCode.GDBGObjects1.length = 0;
gdjs.JunkHouseCode.GDBGObjects2.length = 0;
gdjs.JunkHouseCode.GDBGObjects3.length = 0;
gdjs.JunkHouseCode.GDInfoObjects1.length = 0;
gdjs.JunkHouseCode.GDInfoObjects2.length = 0;
gdjs.JunkHouseCode.GDInfoObjects3.length = 0;
gdjs.JunkHouseCode.GDGreetingObjects1.length = 0;
gdjs.JunkHouseCode.GDGreetingObjects2.length = 0;
gdjs.JunkHouseCode.GDGreetingObjects3.length = 0;
gdjs.JunkHouseCode.GDProfileObjects1.length = 0;
gdjs.JunkHouseCode.GDProfileObjects2.length = 0;
gdjs.JunkHouseCode.GDProfileObjects3.length = 0;
gdjs.JunkHouseCode.GDOptionObjects1.length = 0;
gdjs.JunkHouseCode.GDOptionObjects2.length = 0;
gdjs.JunkHouseCode.GDOptionObjects3.length = 0;
gdjs.JunkHouseCode.GDOption2Objects1.length = 0;
gdjs.JunkHouseCode.GDOption2Objects2.length = 0;
gdjs.JunkHouseCode.GDOption2Objects3.length = 0;
gdjs.JunkHouseCode.GDOption3Objects1.length = 0;
gdjs.JunkHouseCode.GDOption3Objects2.length = 0;
gdjs.JunkHouseCode.GDOption3Objects3.length = 0;
gdjs.JunkHouseCode.GDOption4Objects1.length = 0;
gdjs.JunkHouseCode.GDOption4Objects2.length = 0;
gdjs.JunkHouseCode.GDOption4Objects3.length = 0;
gdjs.JunkHouseCode.GDOption5Objects1.length = 0;
gdjs.JunkHouseCode.GDOption5Objects2.length = 0;
gdjs.JunkHouseCode.GDOption5Objects3.length = 0;
gdjs.JunkHouseCode.GDSelectorObjects1.length = 0;
gdjs.JunkHouseCode.GDSelectorObjects2.length = 0;
gdjs.JunkHouseCode.GDSelectorObjects3.length = 0;
gdjs.JunkHouseCode.GDCreditsObjects1.length = 0;
gdjs.JunkHouseCode.GDCreditsObjects2.length = 0;
gdjs.JunkHouseCode.GDCreditsObjects3.length = 0;
gdjs.JunkHouseCode.GDScoreObjects1.length = 0;
gdjs.JunkHouseCode.GDScoreObjects2.length = 0;
gdjs.JunkHouseCode.GDScoreObjects3.length = 0;
gdjs.JunkHouseCode.GDJunkObjects1.length = 0;
gdjs.JunkHouseCode.GDJunkObjects2.length = 0;
gdjs.JunkHouseCode.GDJunkObjects3.length = 0;
gdjs.JunkHouseCode.GDFuelObjects1.length = 0;
gdjs.JunkHouseCode.GDFuelObjects2.length = 0;
gdjs.JunkHouseCode.GDFuelObjects3.length = 0;
gdjs.JunkHouseCode.GDRestFXObjects1.length = 0;
gdjs.JunkHouseCode.GDRestFXObjects2.length = 0;
gdjs.JunkHouseCode.GDRestFXObjects3.length = 0;
gdjs.JunkHouseCode.GDTipObjects1.length = 0;
gdjs.JunkHouseCode.GDTipObjects2.length = 0;
gdjs.JunkHouseCode.GDTipObjects3.length = 0;

gdjs.JunkHouseCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['JunkHouseCode'] = gdjs.JunkHouseCode;
