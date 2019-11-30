gdjs.UpgradeCode = {};
gdjs.UpgradeCode.GDShopTitleObjects1= [];
gdjs.UpgradeCode.GDShopTitleObjects2= [];
gdjs.UpgradeCode.GDBGObjects1= [];
gdjs.UpgradeCode.GDBGObjects2= [];
gdjs.UpgradeCode.GDInfoObjects1= [];
gdjs.UpgradeCode.GDInfoObjects2= [];
gdjs.UpgradeCode.GDGreetingObjects1= [];
gdjs.UpgradeCode.GDGreetingObjects2= [];
gdjs.UpgradeCode.GDProfileObjects1= [];
gdjs.UpgradeCode.GDProfileObjects2= [];
gdjs.UpgradeCode.GDCostObjects1= [];
gdjs.UpgradeCode.GDCostObjects2= [];
gdjs.UpgradeCode.GDOptionObjects1= [];
gdjs.UpgradeCode.GDOptionObjects2= [];
gdjs.UpgradeCode.GDOption2Objects1= [];
gdjs.UpgradeCode.GDOption2Objects2= [];
gdjs.UpgradeCode.GDOption3Objects1= [];
gdjs.UpgradeCode.GDOption3Objects2= [];
gdjs.UpgradeCode.GDOption4Objects1= [];
gdjs.UpgradeCode.GDOption4Objects2= [];
gdjs.UpgradeCode.GDOption5Objects1= [];
gdjs.UpgradeCode.GDOption5Objects2= [];
gdjs.UpgradeCode.GDSelectorObjects1= [];
gdjs.UpgradeCode.GDSelectorObjects2= [];
gdjs.UpgradeCode.GDCreditsObjects1= [];
gdjs.UpgradeCode.GDCreditsObjects2= [];
gdjs.UpgradeCode.GDScoreObjects1= [];
gdjs.UpgradeCode.GDScoreObjects2= [];
gdjs.UpgradeCode.GDJunkObjects1= [];
gdjs.UpgradeCode.GDJunkObjects2= [];
gdjs.UpgradeCode.GDFuelObjects1= [];
gdjs.UpgradeCode.GDFuelObjects2= [];
gdjs.UpgradeCode.GDRestFXObjects1= [];
gdjs.UpgradeCode.GDRestFXObjects2= [];
gdjs.UpgradeCode.GDTipObjects1= [];
gdjs.UpgradeCode.GDTipObjects2= [];

gdjs.UpgradeCode.conditionTrue_0 = {val:false};
gdjs.UpgradeCode.condition0IsTrue_0 = {val:false};
gdjs.UpgradeCode.condition1IsTrue_0 = {val:false};
gdjs.UpgradeCode.condition2IsTrue_0 = {val:false};
gdjs.UpgradeCode.condition3IsTrue_0 = {val:false};
gdjs.UpgradeCode.condition4IsTrue_0 = {val:false};
gdjs.UpgradeCode.condition5IsTrue_0 = {val:false};
gdjs.UpgradeCode.condition6IsTrue_0 = {val:false};
gdjs.UpgradeCode.conditionTrue_1 = {val:false};
gdjs.UpgradeCode.condition0IsTrue_1 = {val:false};
gdjs.UpgradeCode.condition1IsTrue_1 = {val:false};
gdjs.UpgradeCode.condition2IsTrue_1 = {val:false};
gdjs.UpgradeCode.condition3IsTrue_1 = {val:false};
gdjs.UpgradeCode.condition4IsTrue_1 = {val:false};
gdjs.UpgradeCode.condition5IsTrue_1 = {val:false};
gdjs.UpgradeCode.condition6IsTrue_1 = {val:false};


gdjs.UpgradeCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.UpgradeCode.GDFuelObjects1.createFrom(runtimeScene.getObjects("Fuel"));
gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.UpgradeCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
gdjs.UpgradeCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));
gdjs.UpgradeCode.GDOption2Objects1.createFrom(runtimeScene.getObjects("Option2"));
gdjs.UpgradeCode.GDOption3Objects1.createFrom(runtimeScene.getObjects("Option3"));
gdjs.UpgradeCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
gdjs.UpgradeCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Class");
}{for(var i = 0, len = gdjs.UpgradeCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDGreetingObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDGreetingObjects1[i].setScale(5);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDFuelObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDFuelObjects1[i].setString("Fuel:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(25)) + "%");
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDScoreObjects1[i].setString("Score:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDOptionObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOptionObjects1[i].setString("Weapon Lvl " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(28)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption2Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption2Objects1[i].setString("Armour Lvl " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(29)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption3Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption3Objects1[i].setString("Shield Lvl " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(30)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDJunkObjects1[i].setString("Junk:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(31)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("");
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() < 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_0.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UpgradeCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.UpgradeCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDGreetingObjects1[i].setOpacity(gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() + (4));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getScaleX() > 1 ) {
        gdjs.UpgradeCode.condition0IsTrue_0.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UpgradeCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.UpgradeCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDGreetingObjects1[i].setScale(gdjs.UpgradeCode.GDGreetingObjects1[i].getScale() - (0.2));
}
}}

}


{



}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8796676);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].setPosition(395,120);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Weapon Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(32)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8797756);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].setPosition(395,159);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Armour Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(33)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8798964);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].setPosition(395,198);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Shield Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(34)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) < 3;
}}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8800332);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].setPosition(395,240);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Class Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(36)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) > 2;
}}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8801676);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].setPosition(395,240);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Highest Class Ship Reached");
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8803036);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].setPosition(395,278);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("");
}
}}

}


{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 1;
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
gdjs.UpgradeCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(32));
}if ( gdjs.UpgradeCode.condition2IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val && gdjs.UpgradeCode.condition3IsTrue_1.val;
}
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.UpgradeCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(32)));
}{runtimeScene.getGame().getVariables().getFromIndex(27).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(28).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(32).add(30);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDOptionObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOptionObjects1[i].setString("Weapon Lvl " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(28)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Weapon Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(32)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
gdjs.UpgradeCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33));
}if ( gdjs.UpgradeCode.condition2IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val && gdjs.UpgradeCode.condition3IsTrue_1.val;
}
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.UpgradeCode.GDOption2Objects1.createFrom(runtimeScene.getObjects("Option2"));
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)));
}{runtimeScene.getGame().getVariables().getFromIndex(10).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(29).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(33).add(30);
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption2Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption2Objects1[i].setString("Armour Lvl " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(29)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Armour Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(33)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
gdjs.UpgradeCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(34));
}if ( gdjs.UpgradeCode.condition2IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val && gdjs.UpgradeCode.condition3IsTrue_1.val;
}
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.UpgradeCode.GDOption3Objects1.createFrom(runtimeScene.getObjects("Option3"));
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(34)));
}{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(30).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(34).add(30);
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption3Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption3Objects1[i].setString("Shield Lvl " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(30)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Shield Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(34)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
gdjs.UpgradeCode.condition3IsTrue_1.val = false;
gdjs.UpgradeCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36));
}if ( gdjs.UpgradeCode.condition2IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.UpgradeCode.condition3IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) < 3;
}}
}
}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val && gdjs.UpgradeCode.condition3IsTrue_1.val && gdjs.UpgradeCode.condition4IsTrue_1.val;
}
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
gdjs.UpgradeCode.GDCostObjects1.createFrom(runtimeScene.getObjects("Cost"));
gdjs.UpgradeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.UpgradeCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)));
}{runtimeScene.getGame().getVariables().getFromIndex(35).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(27).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(36).add(250);
}{for(var i = 0, len = gdjs.UpgradeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDCostObjects1[i].setString("Class Upgrade cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(36)));
}
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(31)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Class");
}{gdjs.evtTools.sound.playSound(runtimeScene, "ClassUpgrade.wav", false, 65, 1);
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
gdjs.UpgradeCode.condition3IsTrue_1.val = false;
gdjs.UpgradeCode.condition4IsTrue_1.val = false;
gdjs.UpgradeCode.condition5IsTrue_1.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Class");
}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition1IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.UpgradeCode.condition2IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36));
}if ( gdjs.UpgradeCode.condition3IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition4IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.UpgradeCode.condition4IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition5IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) > 2;
}}
}
}
}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val && gdjs.UpgradeCode.condition3IsTrue_1.val && gdjs.UpgradeCode.condition4IsTrue_1.val && gdjs.UpgradeCode.condition5IsTrue_1.val;
}
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 40, 1);
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val;
}
}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition0IsTrue_0;
gdjs.UpgradeCode.condition0IsTrue_1.val = false;
gdjs.UpgradeCode.condition1IsTrue_1.val = false;
gdjs.UpgradeCode.condition2IsTrue_1.val = false;
gdjs.UpgradeCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_1.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if ( gdjs.UpgradeCode.condition0IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.UpgradeCode.condition1IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) > 2;
}if ( gdjs.UpgradeCode.condition2IsTrue_1.val ) {
{
gdjs.UpgradeCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
}
gdjs.UpgradeCode.conditionTrue_1.val = true && gdjs.UpgradeCode.condition0IsTrue_1.val && gdjs.UpgradeCode.condition1IsTrue_1.val && gdjs.UpgradeCode.condition2IsTrue_1.val && gdjs.UpgradeCode.condition3IsTrue_1.val;
}
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8817308);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 40, 1);
}}

}


{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 2;
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8817908);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("2nd Class Ship");
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(31)));
}
}}

}


{


gdjs.UpgradeCode.condition0IsTrue_0.val = false;
gdjs.UpgradeCode.condition1IsTrue_0.val = false;
{
gdjs.UpgradeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 3;
}if ( gdjs.UpgradeCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradeCode.conditionTrue_1 = gdjs.UpgradeCode.condition1IsTrue_0;
gdjs.UpgradeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8818748);
}
}}
if (gdjs.UpgradeCode.condition1IsTrue_0.val) {
gdjs.UpgradeCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("1st Class Ship");
}{for(var i = 0, len = gdjs.UpgradeCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDOption4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(31)));
}
}}

}


{

gdjs.UpgradeCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.UpgradeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UpgradeCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.UpgradeCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.UpgradeCode.condition0IsTrue_0.val = true;
        gdjs.UpgradeCode.GDGreetingObjects1[k] = gdjs.UpgradeCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.UpgradeCode.GDGreetingObjects1.length = k;}if (gdjs.UpgradeCode.condition0IsTrue_0.val) {
gdjs.UpgradeCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.UpgradeCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.UpgradeCode.GDSelectorObjects1[i].hide(false);
}
}}

}


{


{
}

}


}; //End of gdjs.UpgradeCode.eventsList0xb5aa0


gdjs.UpgradeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UpgradeCode.GDShopTitleObjects1.length = 0;
gdjs.UpgradeCode.GDShopTitleObjects2.length = 0;
gdjs.UpgradeCode.GDBGObjects1.length = 0;
gdjs.UpgradeCode.GDBGObjects2.length = 0;
gdjs.UpgradeCode.GDInfoObjects1.length = 0;
gdjs.UpgradeCode.GDInfoObjects2.length = 0;
gdjs.UpgradeCode.GDGreetingObjects1.length = 0;
gdjs.UpgradeCode.GDGreetingObjects2.length = 0;
gdjs.UpgradeCode.GDProfileObjects1.length = 0;
gdjs.UpgradeCode.GDProfileObjects2.length = 0;
gdjs.UpgradeCode.GDCostObjects1.length = 0;
gdjs.UpgradeCode.GDCostObjects2.length = 0;
gdjs.UpgradeCode.GDOptionObjects1.length = 0;
gdjs.UpgradeCode.GDOptionObjects2.length = 0;
gdjs.UpgradeCode.GDOption2Objects1.length = 0;
gdjs.UpgradeCode.GDOption2Objects2.length = 0;
gdjs.UpgradeCode.GDOption3Objects1.length = 0;
gdjs.UpgradeCode.GDOption3Objects2.length = 0;
gdjs.UpgradeCode.GDOption4Objects1.length = 0;
gdjs.UpgradeCode.GDOption4Objects2.length = 0;
gdjs.UpgradeCode.GDOption5Objects1.length = 0;
gdjs.UpgradeCode.GDOption5Objects2.length = 0;
gdjs.UpgradeCode.GDSelectorObjects1.length = 0;
gdjs.UpgradeCode.GDSelectorObjects2.length = 0;
gdjs.UpgradeCode.GDCreditsObjects1.length = 0;
gdjs.UpgradeCode.GDCreditsObjects2.length = 0;
gdjs.UpgradeCode.GDScoreObjects1.length = 0;
gdjs.UpgradeCode.GDScoreObjects2.length = 0;
gdjs.UpgradeCode.GDJunkObjects1.length = 0;
gdjs.UpgradeCode.GDJunkObjects2.length = 0;
gdjs.UpgradeCode.GDFuelObjects1.length = 0;
gdjs.UpgradeCode.GDFuelObjects2.length = 0;
gdjs.UpgradeCode.GDRestFXObjects1.length = 0;
gdjs.UpgradeCode.GDRestFXObjects2.length = 0;
gdjs.UpgradeCode.GDTipObjects1.length = 0;
gdjs.UpgradeCode.GDTipObjects2.length = 0;

gdjs.UpgradeCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['UpgradeCode'] = gdjs.UpgradeCode;
