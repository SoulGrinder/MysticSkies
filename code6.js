gdjs.InnCode = {};
gdjs.InnCode.GDShopTitleObjects1= [];
gdjs.InnCode.GDShopTitleObjects2= [];
gdjs.InnCode.GDBGObjects1= [];
gdjs.InnCode.GDBGObjects2= [];
gdjs.InnCode.GDInfoObjects1= [];
gdjs.InnCode.GDInfoObjects2= [];
gdjs.InnCode.GDGreetingObjects1= [];
gdjs.InnCode.GDGreetingObjects2= [];
gdjs.InnCode.GDProfileObjects1= [];
gdjs.InnCode.GDProfileObjects2= [];
gdjs.InnCode.GDOptionObjects1= [];
gdjs.InnCode.GDOptionObjects2= [];
gdjs.InnCode.GDOption2Objects1= [];
gdjs.InnCode.GDOption2Objects2= [];
gdjs.InnCode.GDOption3Objects1= [];
gdjs.InnCode.GDOption3Objects2= [];
gdjs.InnCode.GDOption4Objects1= [];
gdjs.InnCode.GDOption4Objects2= [];
gdjs.InnCode.GDOption5Objects1= [];
gdjs.InnCode.GDOption5Objects2= [];
gdjs.InnCode.GDSelectorObjects1= [];
gdjs.InnCode.GDSelectorObjects2= [];
gdjs.InnCode.GDCreditsObjects1= [];
gdjs.InnCode.GDCreditsObjects2= [];
gdjs.InnCode.GDScoreObjects1= [];
gdjs.InnCode.GDScoreObjects2= [];
gdjs.InnCode.GDJunkObjects1= [];
gdjs.InnCode.GDJunkObjects2= [];
gdjs.InnCode.GDFuelObjects1= [];
gdjs.InnCode.GDFuelObjects2= [];
gdjs.InnCode.GDRestFXObjects1= [];
gdjs.InnCode.GDRestFXObjects2= [];
gdjs.InnCode.GDTipObjects1= [];
gdjs.InnCode.GDTipObjects2= [];

gdjs.InnCode.conditionTrue_0 = {val:false};
gdjs.InnCode.condition0IsTrue_0 = {val:false};
gdjs.InnCode.condition1IsTrue_0 = {val:false};
gdjs.InnCode.condition2IsTrue_0 = {val:false};
gdjs.InnCode.condition3IsTrue_0 = {val:false};
gdjs.InnCode.condition4IsTrue_0 = {val:false};
gdjs.InnCode.condition5IsTrue_0 = {val:false};
gdjs.InnCode.conditionTrue_1 = {val:false};
gdjs.InnCode.condition0IsTrue_1 = {val:false};
gdjs.InnCode.condition1IsTrue_1 = {val:false};
gdjs.InnCode.condition2IsTrue_1 = {val:false};
gdjs.InnCode.condition3IsTrue_1 = {val:false};
gdjs.InnCode.condition4IsTrue_1 = {val:false};
gdjs.InnCode.condition5IsTrue_1 = {val:false};


gdjs.InnCode.mapOfGDgdjs_46InnCode_46GDRestFXObjects1Objects = Hashtable.newFrom({"RestFX": gdjs.InnCode.GDRestFXObjects1});gdjs.InnCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.InnCode.condition0IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InnCode.condition0IsTrue_0.val) {
gdjs.InnCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.InnCode.GDFuelObjects1.createFrom(runtimeScene.getObjects("Fuel"));
gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.InnCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
gdjs.InnCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));
gdjs.InnCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
gdjs.InnCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
gdjs.InnCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
{for(var i = 0, len = gdjs.InnCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDGreetingObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.InnCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDGreetingObjects1[i].setScale(5);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InnCode.GDOptionObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDOptionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InnCode.GDFuelObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDFuelObjects1[i].setString("Fuel:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(25)) + "%");
}
}{for(var i = 0, len = gdjs.InnCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDScoreObjects1[i].setString("Score:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.InnCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDJunkObjects1[i].setString("Junk:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.InnCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.InnCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDShopTitleObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(24)) + " Inn");
}
}{for(var i = 0, len = gdjs.InnCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDTipObjects1[i].setString("HP: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " / " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(26)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "2");
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() < 255 ) {
        gdjs.InnCode.condition0IsTrue_0.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if (gdjs.InnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InnCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.InnCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDGreetingObjects1[i].setOpacity(gdjs.InnCode.GDGreetingObjects1[i].getOpacity() + (22));
}
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getScaleX() > 1 ) {
        gdjs.InnCode.condition0IsTrue_0.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if (gdjs.InnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InnCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.InnCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDGreetingObjects1[i].setScale(gdjs.InnCode.GDGreetingObjects1[i].getScale() - (0.2));
}
}}

}


{



}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
{
gdjs.InnCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition1IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val;
}
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8716572);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].setPosition(395,120);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
{
gdjs.InnCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition1IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val;
}
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8717564);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].setPosition(395,159);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
{
gdjs.InnCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition1IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val;
}
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8718596);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].setPosition(395,198);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
{
gdjs.InnCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition1IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val;
}
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8719628);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].setPosition(395,240);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
{
gdjs.InnCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition1IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val;
}
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8720660);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].setPosition(395,278);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 3;
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.InnCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
gdjs.InnCode.condition2IsTrue_1.val = false;
gdjs.InnCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
gdjs.InnCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.InnCode.condition1IsTrue_1.val ) {
{
gdjs.InnCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.InnCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDOptionObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDOptionObjects1[i].isVisible() ) {
        gdjs.InnCode.condition3IsTrue_1.val = true;
        gdjs.InnCode.GDOptionObjects1[k] = gdjs.InnCode.GDOptionObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDOptionObjects1.length = k;}}
}
}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val && gdjs.InnCode.condition2IsTrue_1.val && gdjs.InnCode.condition3IsTrue_1.val;
}
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
gdjs.InnCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
gdjs.InnCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.InnCode.condition1IsTrue_1.val ) {
{
gdjs.InnCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val && gdjs.InnCode.condition2IsTrue_1.val;
}
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Upgrade", false);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
gdjs.InnCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
gdjs.InnCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.InnCode.condition1IsTrue_1.val ) {
{
gdjs.InnCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val && gdjs.InnCode.condition2IsTrue_1.val;
}
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(52).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tips", false);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
gdjs.InnCode.condition2IsTrue_1.val = false;
gdjs.InnCode.condition3IsTrue_1.val = false;
gdjs.InnCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
gdjs.InnCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.InnCode.condition1IsTrue_1.val ) {
{
gdjs.InnCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.InnCode.condition2IsTrue_1.val ) {
{
gdjs.InnCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26));
}if ( gdjs.InnCode.condition3IsTrue_1.val ) {
{
gdjs.InnCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 4;
}}
}
}
}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val && gdjs.InnCode.condition2IsTrue_1.val && gdjs.InnCode.condition3IsTrue_1.val && gdjs.InnCode.condition4IsTrue_1.val;
}
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8727004);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.InnCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
gdjs.InnCode.GDRestFXObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.InnCode.mapOfGDgdjs_46InnCode_46GDRestFXObjects1Objects, 595, 218, "Front");
}{for(var i = 0, len = gdjs.InnCode.GDRestFXObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDRestFXObjects1[i].setAngle(270);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "PotionFX.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.InnCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDTipObjects1[i].setString("HP: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " / " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(26)));
}
}{for(var i = 0, len = gdjs.InnCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "2");
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
gdjs.InnCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
gdjs.InnCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.InnCode.condition1IsTrue_1.val ) {
{
gdjs.InnCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val && gdjs.InnCode.condition2IsTrue_1.val;
}
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_0.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if (gdjs.InnCode.condition0IsTrue_0.val) {
gdjs.InnCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.InnCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.InnCode.GDSelectorObjects1[i].hide(false);
}
}}

}


{

gdjs.InnCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.InnCode.condition0IsTrue_0.val = false;
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition0IsTrue_0;
gdjs.InnCode.condition0IsTrue_1.val = false;
gdjs.InnCode.condition1IsTrue_1.val = false;
gdjs.InnCode.condition2IsTrue_1.val = false;
gdjs.InnCode.condition3IsTrue_1.val = false;
gdjs.InnCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.InnCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.InnCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.InnCode.condition0IsTrue_1.val = true;
        gdjs.InnCode.GDGreetingObjects1[k] = gdjs.InnCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.InnCode.GDGreetingObjects1.length = k;}if ( gdjs.InnCode.condition0IsTrue_1.val ) {
{
gdjs.InnCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.InnCode.condition1IsTrue_1.val ) {
{
gdjs.InnCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.InnCode.condition2IsTrue_1.val ) {
{
gdjs.InnCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26));
}if ( gdjs.InnCode.condition3IsTrue_1.val ) {
{
gdjs.InnCode.condition4IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.8, "2");
}}
}
}
}
gdjs.InnCode.conditionTrue_1.val = true && gdjs.InnCode.condition0IsTrue_1.val && gdjs.InnCode.condition1IsTrue_1.val && gdjs.InnCode.condition2IsTrue_1.val && gdjs.InnCode.condition3IsTrue_1.val && gdjs.InnCode.condition4IsTrue_1.val;
}
}if (gdjs.InnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 60, 1);
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26));
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8731204);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{for(var i = 0, len = gdjs.InnCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.InnCode.GDOption4Objects1[i].setString("Fully Rested");
}
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26));
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8731876);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
gdjs.InnCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));
{for(var i = 0, len = gdjs.InnCode.GDOption4Objects1.length ;i < len;++i) {
    gdjs.InnCode.GDOption4Objects1[i].setString("Rest (5 Coins)");
}
}}

}


{



}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 1;
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8732748);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("3rd Class Ship");
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 2;
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8733380);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("2nd Class Ship");
}}

}


{


gdjs.InnCode.condition0IsTrue_0.val = false;
gdjs.InnCode.condition1IsTrue_0.val = false;
{
gdjs.InnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 3;
}if ( gdjs.InnCode.condition0IsTrue_0.val ) {
{
{gdjs.InnCode.conditionTrue_1 = gdjs.InnCode.condition1IsTrue_0;
gdjs.InnCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8734012);
}
}}
if (gdjs.InnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("1st Class Ship");
}}

}


}; //End of gdjs.InnCode.eventsList0xb5aa0


gdjs.InnCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InnCode.GDShopTitleObjects1.length = 0;
gdjs.InnCode.GDShopTitleObjects2.length = 0;
gdjs.InnCode.GDBGObjects1.length = 0;
gdjs.InnCode.GDBGObjects2.length = 0;
gdjs.InnCode.GDInfoObjects1.length = 0;
gdjs.InnCode.GDInfoObjects2.length = 0;
gdjs.InnCode.GDGreetingObjects1.length = 0;
gdjs.InnCode.GDGreetingObjects2.length = 0;
gdjs.InnCode.GDProfileObjects1.length = 0;
gdjs.InnCode.GDProfileObjects2.length = 0;
gdjs.InnCode.GDOptionObjects1.length = 0;
gdjs.InnCode.GDOptionObjects2.length = 0;
gdjs.InnCode.GDOption2Objects1.length = 0;
gdjs.InnCode.GDOption2Objects2.length = 0;
gdjs.InnCode.GDOption3Objects1.length = 0;
gdjs.InnCode.GDOption3Objects2.length = 0;
gdjs.InnCode.GDOption4Objects1.length = 0;
gdjs.InnCode.GDOption4Objects2.length = 0;
gdjs.InnCode.GDOption5Objects1.length = 0;
gdjs.InnCode.GDOption5Objects2.length = 0;
gdjs.InnCode.GDSelectorObjects1.length = 0;
gdjs.InnCode.GDSelectorObjects2.length = 0;
gdjs.InnCode.GDCreditsObjects1.length = 0;
gdjs.InnCode.GDCreditsObjects2.length = 0;
gdjs.InnCode.GDScoreObjects1.length = 0;
gdjs.InnCode.GDScoreObjects2.length = 0;
gdjs.InnCode.GDJunkObjects1.length = 0;
gdjs.InnCode.GDJunkObjects2.length = 0;
gdjs.InnCode.GDFuelObjects1.length = 0;
gdjs.InnCode.GDFuelObjects2.length = 0;
gdjs.InnCode.GDRestFXObjects1.length = 0;
gdjs.InnCode.GDRestFXObjects2.length = 0;
gdjs.InnCode.GDTipObjects1.length = 0;
gdjs.InnCode.GDTipObjects2.length = 0;

gdjs.InnCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['InnCode'] = gdjs.InnCode;
