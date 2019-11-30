gdjs.PotionHouseCode = {};
gdjs.PotionHouseCode.GDShopTitleObjects1= [];
gdjs.PotionHouseCode.GDShopTitleObjects2= [];
gdjs.PotionHouseCode.GDBGObjects1= [];
gdjs.PotionHouseCode.GDBGObjects2= [];
gdjs.PotionHouseCode.GDInfoObjects1= [];
gdjs.PotionHouseCode.GDInfoObjects2= [];
gdjs.PotionHouseCode.GDGreetingObjects1= [];
gdjs.PotionHouseCode.GDGreetingObjects2= [];
gdjs.PotionHouseCode.GDProfileObjects1= [];
gdjs.PotionHouseCode.GDProfileObjects2= [];
gdjs.PotionHouseCode.GDOptionObjects1= [];
gdjs.PotionHouseCode.GDOptionObjects2= [];
gdjs.PotionHouseCode.GDOption2Objects1= [];
gdjs.PotionHouseCode.GDOption2Objects2= [];
gdjs.PotionHouseCode.GDOption3Objects1= [];
gdjs.PotionHouseCode.GDOption3Objects2= [];
gdjs.PotionHouseCode.GDOption4Objects1= [];
gdjs.PotionHouseCode.GDOption4Objects2= [];
gdjs.PotionHouseCode.GDOption5Objects1= [];
gdjs.PotionHouseCode.GDOption5Objects2= [];
gdjs.PotionHouseCode.GDSelectorObjects1= [];
gdjs.PotionHouseCode.GDSelectorObjects2= [];
gdjs.PotionHouseCode.GDCreditsObjects1= [];
gdjs.PotionHouseCode.GDCreditsObjects2= [];
gdjs.PotionHouseCode.GDScoreObjects1= [];
gdjs.PotionHouseCode.GDScoreObjects2= [];
gdjs.PotionHouseCode.GDJunkObjects1= [];
gdjs.PotionHouseCode.GDJunkObjects2= [];
gdjs.PotionHouseCode.GDFuelObjects1= [];
gdjs.PotionHouseCode.GDFuelObjects2= [];
gdjs.PotionHouseCode.GDRestFXObjects1= [];
gdjs.PotionHouseCode.GDRestFXObjects2= [];
gdjs.PotionHouseCode.GDTipObjects1= [];
gdjs.PotionHouseCode.GDTipObjects2= [];

gdjs.PotionHouseCode.conditionTrue_0 = {val:false};
gdjs.PotionHouseCode.condition0IsTrue_0 = {val:false};
gdjs.PotionHouseCode.condition1IsTrue_0 = {val:false};
gdjs.PotionHouseCode.condition2IsTrue_0 = {val:false};
gdjs.PotionHouseCode.condition3IsTrue_0 = {val:false};
gdjs.PotionHouseCode.condition4IsTrue_0 = {val:false};
gdjs.PotionHouseCode.condition5IsTrue_0 = {val:false};
gdjs.PotionHouseCode.condition6IsTrue_0 = {val:false};
gdjs.PotionHouseCode.conditionTrue_1 = {val:false};
gdjs.PotionHouseCode.condition0IsTrue_1 = {val:false};
gdjs.PotionHouseCode.condition1IsTrue_1 = {val:false};
gdjs.PotionHouseCode.condition2IsTrue_1 = {val:false};
gdjs.PotionHouseCode.condition3IsTrue_1 = {val:false};
gdjs.PotionHouseCode.condition4IsTrue_1 = {val:false};
gdjs.PotionHouseCode.condition5IsTrue_1 = {val:false};
gdjs.PotionHouseCode.condition6IsTrue_1 = {val:false};


gdjs.PotionHouseCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
gdjs.PotionHouseCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.PotionHouseCode.GDFuelObjects1.createFrom(runtimeScene.getObjects("Fuel"));
gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.PotionHouseCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
gdjs.PotionHouseCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));
gdjs.PotionHouseCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
gdjs.PotionHouseCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDGreetingObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDGreetingObjects1[i].setScale(5);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDOptionObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDOptionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDFuelObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDFuelObjects1[i].setString("Fuel:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(25)) + "%");
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDScoreObjects1[i].setString("Score:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDJunkObjects1[i].setString("Potions:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(53)));
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDCreditsObjects1[i].setString("Berries:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(54)));
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDShopTitleObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(24)) + " Potion House");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "2");
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(54)) < 10;
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8744996);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDOption4Objects1[i].setString("Not enough Berries");
}
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(54)) > 9;
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8745652);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDOption4Objects1[i].setString("Craft Potion");
}
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() < 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_0.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PotionHouseCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.PotionHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDGreetingObjects1[i].setOpacity(gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() + (22));
}
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getScaleX() > 1 ) {
        gdjs.PotionHouseCode.condition0IsTrue_0.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PotionHouseCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.PotionHouseCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDGreetingObjects1[i].setScale(gdjs.PotionHouseCode.GDGreetingObjects1[i].getScale() - (0.2));
}
}}

}


{



}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition1IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8747660);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].setPosition(395,120);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition1IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8748604);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].setPosition(395,159);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition1IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8749636);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].setPosition(395,198);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition1IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8750804);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].setPosition(395,240);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition1IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8751836);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].setPosition(395,278);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 4;
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.PotionHouseCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
gdjs.PotionHouseCode.condition2IsTrue_1.val = false;
gdjs.PotionHouseCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.PotionHouseCode.condition1IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.PotionHouseCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDOptionObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDOptionObjects1[i].isVisible() ) {
        gdjs.PotionHouseCode.condition3IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDOptionObjects1[k] = gdjs.PotionHouseCode.GDOptionObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDOptionObjects1.length = k;}}
}
}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val && gdjs.PotionHouseCode.condition2IsTrue_1.val && gdjs.PotionHouseCode.condition3IsTrue_1.val;
}
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
gdjs.PotionHouseCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.PotionHouseCode.condition1IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val && gdjs.PotionHouseCode.condition2IsTrue_1.val;
}
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
gdjs.PotionHouseCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.PotionHouseCode.condition1IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val && gdjs.PotionHouseCode.condition2IsTrue_1.val;
}
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.PotionHouseCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
gdjs.PotionHouseCode.condition2IsTrue_1.val = false;
gdjs.PotionHouseCode.condition3IsTrue_1.val = false;
gdjs.PotionHouseCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.PotionHouseCode.condition1IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.PotionHouseCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDOption4Objects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDOption4Objects1[i].isVisible() ) {
        gdjs.PotionHouseCode.condition3IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDOption4Objects1[k] = gdjs.PotionHouseCode.GDOption4Objects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDOption4Objects1.length = k;}if ( gdjs.PotionHouseCode.condition3IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(54)) > 9;
}}
}
}
}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val && gdjs.PotionHouseCode.condition2IsTrue_1.val && gdjs.PotionHouseCode.condition3IsTrue_1.val && gdjs.PotionHouseCode.condition4IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8757380);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
gdjs.PotionHouseCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.PotionHouseCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
{gdjs.evtTools.sound.playSound(runtimeScene, "Correct.wav", false, 40, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(54).sub(10);
}{runtimeScene.getGame().getVariables().getFromIndex(53).add(1);
}{for(var i = 0, len = gdjs.PotionHouseCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDJunkObjects1[i].setString("Potions:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(53)));
}
}{for(var i = 0, len = gdjs.PotionHouseCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDCreditsObjects1[i].setString("Berries:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(54)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "2");
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
gdjs.PotionHouseCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.PotionHouseCode.condition1IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val && gdjs.PotionHouseCode.condition2IsTrue_1.val;
}
}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition0IsTrue_0.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if (gdjs.PotionHouseCode.condition0IsTrue_0.val) {
gdjs.PotionHouseCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.PotionHouseCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.PotionHouseCode.GDSelectorObjects1[i].hide(false);
}
}}

}


{

gdjs.PotionHouseCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.PotionHouseCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));

gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition0IsTrue_0;
gdjs.PotionHouseCode.condition0IsTrue_1.val = false;
gdjs.PotionHouseCode.condition1IsTrue_1.val = false;
gdjs.PotionHouseCode.condition2IsTrue_1.val = false;
gdjs.PotionHouseCode.condition3IsTrue_1.val = false;
gdjs.PotionHouseCode.condition4IsTrue_1.val = false;
gdjs.PotionHouseCode.condition5IsTrue_1.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.PotionHouseCode.condition0IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.PotionHouseCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.PotionHouseCode.condition2IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDGreetingObjects1[k] = gdjs.PotionHouseCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDGreetingObjects1.length = k;}if ( gdjs.PotionHouseCode.condition2IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(54)) < 10;
}if ( gdjs.PotionHouseCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.PotionHouseCode.GDOption4Objects1.length;i<l;++i) {
    if ( gdjs.PotionHouseCode.GDOption4Objects1[i].isVisible() ) {
        gdjs.PotionHouseCode.condition4IsTrue_1.val = true;
        gdjs.PotionHouseCode.GDOption4Objects1[k] = gdjs.PotionHouseCode.GDOption4Objects1[i];
        ++k;
    }
}
gdjs.PotionHouseCode.GDOption4Objects1.length = k;}if ( gdjs.PotionHouseCode.condition4IsTrue_1.val ) {
{
gdjs.PotionHouseCode.condition5IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "2");
}}
}
}
}
}
gdjs.PotionHouseCode.conditionTrue_1.val = true && gdjs.PotionHouseCode.condition0IsTrue_1.val && gdjs.PotionHouseCode.condition1IsTrue_1.val && gdjs.PotionHouseCode.condition2IsTrue_1.val && gdjs.PotionHouseCode.condition3IsTrue_1.val && gdjs.PotionHouseCode.condition4IsTrue_1.val && gdjs.PotionHouseCode.condition5IsTrue_1.val;
}
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8760812);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 100, 1);
}}

}


{



}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 1;
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8761596);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("3rd Class Ship");
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 2;
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8762228);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("2nd Class Ship");
}}

}


{


gdjs.PotionHouseCode.condition0IsTrue_0.val = false;
gdjs.PotionHouseCode.condition1IsTrue_0.val = false;
{
gdjs.PotionHouseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 3;
}if ( gdjs.PotionHouseCode.condition0IsTrue_0.val ) {
{
{gdjs.PotionHouseCode.conditionTrue_1 = gdjs.PotionHouseCode.condition1IsTrue_0;
gdjs.PotionHouseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8762860);
}
}}
if (gdjs.PotionHouseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("1st Class Ship");
}}

}


}; //End of gdjs.PotionHouseCode.eventsList0xb5aa0


gdjs.PotionHouseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PotionHouseCode.GDShopTitleObjects1.length = 0;
gdjs.PotionHouseCode.GDShopTitleObjects2.length = 0;
gdjs.PotionHouseCode.GDBGObjects1.length = 0;
gdjs.PotionHouseCode.GDBGObjects2.length = 0;
gdjs.PotionHouseCode.GDInfoObjects1.length = 0;
gdjs.PotionHouseCode.GDInfoObjects2.length = 0;
gdjs.PotionHouseCode.GDGreetingObjects1.length = 0;
gdjs.PotionHouseCode.GDGreetingObjects2.length = 0;
gdjs.PotionHouseCode.GDProfileObjects1.length = 0;
gdjs.PotionHouseCode.GDProfileObjects2.length = 0;
gdjs.PotionHouseCode.GDOptionObjects1.length = 0;
gdjs.PotionHouseCode.GDOptionObjects2.length = 0;
gdjs.PotionHouseCode.GDOption2Objects1.length = 0;
gdjs.PotionHouseCode.GDOption2Objects2.length = 0;
gdjs.PotionHouseCode.GDOption3Objects1.length = 0;
gdjs.PotionHouseCode.GDOption3Objects2.length = 0;
gdjs.PotionHouseCode.GDOption4Objects1.length = 0;
gdjs.PotionHouseCode.GDOption4Objects2.length = 0;
gdjs.PotionHouseCode.GDOption5Objects1.length = 0;
gdjs.PotionHouseCode.GDOption5Objects2.length = 0;
gdjs.PotionHouseCode.GDSelectorObjects1.length = 0;
gdjs.PotionHouseCode.GDSelectorObjects2.length = 0;
gdjs.PotionHouseCode.GDCreditsObjects1.length = 0;
gdjs.PotionHouseCode.GDCreditsObjects2.length = 0;
gdjs.PotionHouseCode.GDScoreObjects1.length = 0;
gdjs.PotionHouseCode.GDScoreObjects2.length = 0;
gdjs.PotionHouseCode.GDJunkObjects1.length = 0;
gdjs.PotionHouseCode.GDJunkObjects2.length = 0;
gdjs.PotionHouseCode.GDFuelObjects1.length = 0;
gdjs.PotionHouseCode.GDFuelObjects2.length = 0;
gdjs.PotionHouseCode.GDRestFXObjects1.length = 0;
gdjs.PotionHouseCode.GDRestFXObjects2.length = 0;
gdjs.PotionHouseCode.GDTipObjects1.length = 0;
gdjs.PotionHouseCode.GDTipObjects2.length = 0;

gdjs.PotionHouseCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['PotionHouseCode'] = gdjs.PotionHouseCode;
