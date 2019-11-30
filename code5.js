gdjs.ShopCode = {};
gdjs.ShopCode.GDShopTitleObjects1= [];
gdjs.ShopCode.GDShopTitleObjects2= [];
gdjs.ShopCode.GDBGObjects1= [];
gdjs.ShopCode.GDBGObjects2= [];
gdjs.ShopCode.GDInfoObjects1= [];
gdjs.ShopCode.GDInfoObjects2= [];
gdjs.ShopCode.GDGreetingObjects1= [];
gdjs.ShopCode.GDGreetingObjects2= [];
gdjs.ShopCode.GDProfileObjects1= [];
gdjs.ShopCode.GDProfileObjects2= [];
gdjs.ShopCode.GDOptionObjects1= [];
gdjs.ShopCode.GDOptionObjects2= [];
gdjs.ShopCode.GDOption2Objects1= [];
gdjs.ShopCode.GDOption2Objects2= [];
gdjs.ShopCode.GDOption3Objects1= [];
gdjs.ShopCode.GDOption3Objects2= [];
gdjs.ShopCode.GDOption4Objects1= [];
gdjs.ShopCode.GDOption4Objects2= [];
gdjs.ShopCode.GDOption5Objects1= [];
gdjs.ShopCode.GDOption5Objects2= [];
gdjs.ShopCode.GDSelectorObjects1= [];
gdjs.ShopCode.GDSelectorObjects2= [];
gdjs.ShopCode.GDCreditsObjects1= [];
gdjs.ShopCode.GDCreditsObjects2= [];
gdjs.ShopCode.GDScoreObjects1= [];
gdjs.ShopCode.GDScoreObjects2= [];
gdjs.ShopCode.GDJunkObjects1= [];
gdjs.ShopCode.GDJunkObjects2= [];
gdjs.ShopCode.GDObjectivesObjects1= [];
gdjs.ShopCode.GDObjectivesObjects2= [];
gdjs.ShopCode.GDFuelObjects1= [];
gdjs.ShopCode.GDFuelObjects2= [];
gdjs.ShopCode.GDRestFXObjects1= [];
gdjs.ShopCode.GDRestFXObjects2= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};
gdjs.ShopCode.condition3IsTrue_0 = {val:false};
gdjs.ShopCode.condition4IsTrue_0 = {val:false};
gdjs.ShopCode.conditionTrue_1 = {val:false};
gdjs.ShopCode.condition0IsTrue_1 = {val:false};
gdjs.ShopCode.condition1IsTrue_1 = {val:false};
gdjs.ShopCode.condition2IsTrue_1 = {val:false};
gdjs.ShopCode.condition3IsTrue_1 = {val:false};
gdjs.ShopCode.condition4IsTrue_1 = {val:false};


gdjs.ShopCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.ShopCode.GDFuelObjects1.createFrom(runtimeScene.getObjects("Fuel"));
gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.ShopCode.GDJunkObjects1.createFrom(runtimeScene.getObjects("Junk"));
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
gdjs.ShopCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
gdjs.ShopCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
{for(var i = 0, len = gdjs.ShopCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGreetingObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGreetingObjects1[i].setScale(5);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDFuelObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDFuelObjects1[i].setString("Fuel:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(25)) + "%");
}
}{for(var i = 0, len = gdjs.ShopCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDScoreObjects1[i].setString("Score:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.ShopCode.GDJunkObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDJunkObjects1[i].setString("Junk:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.ShopCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDCreditsObjects1[i].setString("Coins:  " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTitleObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(24)) + " Shipyard");
}
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Complete Objectives to Unlock Airship");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == 100;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8680260);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDOption2Objects1.createFrom(runtimeScene.getObjects("Option2"));
{for(var i = 0, len = gdjs.ShopCode.GDOption2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDOption2Objects1[i].setString("Airship Ready");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) < 100;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8681148);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDOption2Objects1.createFrom(runtimeScene.getObjects("Option2"));
{for(var i = 0, len = gdjs.ShopCode.GDOption2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDOption2Objects1[i].setString("Airship Locked + Empty");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == 100;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8682068);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDOption2Objects1.createFrom(runtimeScene.getObjects("Option2"));
{for(var i = 0, len = gdjs.ShopCode.GDOption2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDOption2Objects1[i].setString("Airship Locked");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) < 100;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8682964);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDOption2Objects1.createFrom(runtimeScene.getObjects("Option2"));
{for(var i = 0, len = gdjs.ShopCode.GDOption2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDOption2Objects1[i].setString("Airship Empty");
}
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() < 255 ) {
        gdjs.ShopCode.condition0IsTrue_0.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGreetingObjects1[i].setOpacity(gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() + (22));
}
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getScaleX() > 1 ) {
        gdjs.ShopCode.condition0IsTrue_0.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDGreetingObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDGreetingObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGreetingObjects1[i].setScale(gdjs.ShopCode.GDGreetingObjects1[i].getScale() - (0.2));
}
}}

}


{



}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition1IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8684948);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].setPosition(395,120);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition1IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8686028);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].setPosition(395,159);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition1IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8687060);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].setPosition(395,198);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition1IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8688092);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].setPosition(395,240);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition1IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8689124);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].setPosition(395,278);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuSFX.wav", false, 50, 1);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 2;
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
gdjs.ShopCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ShopCode.condition2IsTrue_1.val ) {
{
gdjs.ShopCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val && gdjs.ShopCode.condition3IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Upgrade", false);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.ShopCode.GDOption4Objects1.createFrom(runtimeScene.getObjects("Option4"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
gdjs.ShopCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.ShopCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDOption4Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDOption4Objects1[i].isVisible() ) {
        gdjs.ShopCode.condition3IsTrue_1.val = true;
        gdjs.ShopCode.GDOption4Objects1[k] = gdjs.ShopCode.GDOption4Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDOption4Objects1.length = k;}}
}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val && gdjs.ShopCode.condition3IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(52).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tips", false);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_0.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.ShopCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDSelectorObjects1[i].hide(false);
}
}}

}


{

gdjs.ShopCode.GDGreetingObjects1.createFrom(runtimeScene.getObjects("Greeting"));
gdjs.ShopCode.GDOptionObjects1.createFrom(runtimeScene.getObjects("Option"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
gdjs.ShopCode.condition3IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDGreetingObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDGreetingObjects1[i].getOpacity() == 255 ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDGreetingObjects1[k] = gdjs.ShopCode.GDGreetingObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDGreetingObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.ShopCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDOptionObjects1.length;i<l;++i) {
    if ( !(gdjs.ShopCode.GDOptionObjects1[i].isVisible()) ) {
        gdjs.ShopCode.condition3IsTrue_1.val = true;
        gdjs.ShopCode.GDOptionObjects1[k] = gdjs.ShopCode.GDOptionObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDOptionObjects1.length = k;}}
}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val && gdjs.ShopCode.condition3IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8697244);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 100, 1);
}}

}


{



}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8698316);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete for " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(24)));
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(40)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8699324);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(41)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8700372);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(42)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8701420);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8702468);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(44)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8703516);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(45)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8704564);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(46)) == 0;
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDObjectivesObjects1.createFrom(runtimeScene.getObjects("Objectives"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ShopCode.GDObjectivesObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDObjectivesObjects1[i].setString("Objective Complete");
}
}}

}


{



}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 1;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8706468);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("3rd Class Ship");
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 2;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8707100);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("2nd Class Ship");
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8707732);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setString("1st Class Ship");
}}

}


}; //End of gdjs.ShopCode.eventsList0xb5aa0


gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDShopTitleObjects1.length = 0;
gdjs.ShopCode.GDShopTitleObjects2.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;
gdjs.ShopCode.GDInfoObjects1.length = 0;
gdjs.ShopCode.GDInfoObjects2.length = 0;
gdjs.ShopCode.GDGreetingObjects1.length = 0;
gdjs.ShopCode.GDGreetingObjects2.length = 0;
gdjs.ShopCode.GDProfileObjects1.length = 0;
gdjs.ShopCode.GDProfileObjects2.length = 0;
gdjs.ShopCode.GDOptionObjects1.length = 0;
gdjs.ShopCode.GDOptionObjects2.length = 0;
gdjs.ShopCode.GDOption2Objects1.length = 0;
gdjs.ShopCode.GDOption2Objects2.length = 0;
gdjs.ShopCode.GDOption3Objects1.length = 0;
gdjs.ShopCode.GDOption3Objects2.length = 0;
gdjs.ShopCode.GDOption4Objects1.length = 0;
gdjs.ShopCode.GDOption4Objects2.length = 0;
gdjs.ShopCode.GDOption5Objects1.length = 0;
gdjs.ShopCode.GDOption5Objects2.length = 0;
gdjs.ShopCode.GDSelectorObjects1.length = 0;
gdjs.ShopCode.GDSelectorObjects2.length = 0;
gdjs.ShopCode.GDCreditsObjects1.length = 0;
gdjs.ShopCode.GDCreditsObjects2.length = 0;
gdjs.ShopCode.GDScoreObjects1.length = 0;
gdjs.ShopCode.GDScoreObjects2.length = 0;
gdjs.ShopCode.GDJunkObjects1.length = 0;
gdjs.ShopCode.GDJunkObjects2.length = 0;
gdjs.ShopCode.GDObjectivesObjects1.length = 0;
gdjs.ShopCode.GDObjectivesObjects2.length = 0;
gdjs.ShopCode.GDFuelObjects1.length = 0;
gdjs.ShopCode.GDFuelObjects2.length = 0;
gdjs.ShopCode.GDRestFXObjects1.length = 0;
gdjs.ShopCode.GDRestFXObjects2.length = 0;

gdjs.ShopCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['ShopCode'] = gdjs.ShopCode;
