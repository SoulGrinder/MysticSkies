gdjs.MapCode = {};
gdjs.MapCode.GDLogVertObjects1= [];
gdjs.MapCode.GDLogVertObjects2= [];
gdjs.MapCode.GDLogSideObjects1= [];
gdjs.MapCode.GDLogSideObjects2= [];
gdjs.MapCode.GDNewObjectObjects1= [];
gdjs.MapCode.GDNewObjectObjects2= [];
gdjs.MapCode.GDMapTitleObjects1= [];
gdjs.MapCode.GDMapTitleObjects2= [];
gdjs.MapCode.GDWorldMapObjects1= [];
gdjs.MapCode.GDWorldMapObjects2= [];
gdjs.MapCode.GDInfoObjects1= [];
gdjs.MapCode.GDInfoObjects2= [];
gdjs.MapCode.GDRouteObjects1= [];
gdjs.MapCode.GDRouteObjects2= [];
gdjs.MapCode.GDRoute2Objects1= [];
gdjs.MapCode.GDRoute2Objects2= [];
gdjs.MapCode.GDRoute3Objects1= [];
gdjs.MapCode.GDRoute3Objects2= [];
gdjs.MapCode.GDRoute4Objects1= [];
gdjs.MapCode.GDRoute4Objects2= [];
gdjs.MapCode.GDRoute5Objects1= [];
gdjs.MapCode.GDRoute5Objects2= [];
gdjs.MapCode.GDRoute6Objects1= [];
gdjs.MapCode.GDRoute6Objects2= [];
gdjs.MapCode.GDRoute7Objects1= [];
gdjs.MapCode.GDRoute7Objects2= [];
gdjs.MapCode.GDRoute8Objects1= [];
gdjs.MapCode.GDRoute8Objects2= [];
gdjs.MapCode.GDRoute9Objects1= [];
gdjs.MapCode.GDRoute9Objects2= [];
gdjs.MapCode.GDSelectorObjects1= [];
gdjs.MapCode.GDSelectorObjects2= [];
gdjs.MapCode.GDLocationObjects1= [];
gdjs.MapCode.GDLocationObjects2= [];
gdjs.MapCode.GDTravelTextObjects1= [];
gdjs.MapCode.GDTravelTextObjects2= [];

gdjs.MapCode.conditionTrue_0 = {val:false};
gdjs.MapCode.condition0IsTrue_0 = {val:false};
gdjs.MapCode.condition1IsTrue_0 = {val:false};
gdjs.MapCode.condition2IsTrue_0 = {val:false};
gdjs.MapCode.conditionTrue_1 = {val:false};
gdjs.MapCode.condition0IsTrue_1 = {val:false};
gdjs.MapCode.condition1IsTrue_1 = {val:false};
gdjs.MapCode.condition2IsTrue_1 = {val:false};


gdjs.MapCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MapCode.condition0IsTrue_0.val) {
}

}


{


{
gdjs.MapCode.GDTravelTextObjects1.createFrom(runtimeScene.getObjects("TravelText"));
{for(var i = 0, len = gdjs.MapCode.GDTravelTextObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDTravelTextObjects1[i].setString("From " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(23)) + " to " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(24)));
}
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8962364);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(148,178);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8963084);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(220,122);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8963764);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(331,156);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8964484);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(302,85);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8965204);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(380,65);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8965924);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(451,50);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8966644);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(486,105);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8967364);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(559,95);
}
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8968084);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDLocationObjects1.createFrom(runtimeScene.getObjects("Location"));
{for(var i = 0, len = gdjs.MapCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDLocationObjects1[i].setPosition(634,45);
}
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8968876);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8969476);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Airship", false);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8970876);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(203,176);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Slumberwood");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Whispering Meadows");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(2);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8972740);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(131,237);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Whispering Meadows");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Slumberwood");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8974380);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(313,204);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Whispering Meadows");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Thorntree Forest");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(3);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8976260);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(203,176);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Thorntree Forest");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Whispering Meadows");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(2);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8977916);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(285,134);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Thorntree Forest");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Sapphire Swamp");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(4);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8979796);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(313,204);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Sapphire Swamp");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Thorntree Forest");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(3);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8981452);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(362,108);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Sapphire Swamp");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Creepy Canyon");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(5);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8983316);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(285,134);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Creepy Canyon");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Sapphire Swamp");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(4);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8984956);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(434,97);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Creepy Canyon");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Purple Marsh");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(6);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8986804);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(362,108);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Purple Marsh");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Creepy Canyon");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(5);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8988428);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(469,152);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Purple Marsh");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Sunken Wastes");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(7);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(7);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8990276);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(434,97);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Sunken Wastes");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Purple Marsh");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(6);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8991900);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(541,139);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Sunken Wastes");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Midoria Mountain");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(8);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8993492);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(469,152);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Midoria Mountain");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Sunken Wastes");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(7);
}}

}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
gdjs.MapCode.condition1IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}if ( gdjs.MapCode.condition0IsTrue_1.val ) {
{
gdjs.MapCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val && gdjs.MapCode.condition1IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8994988);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(616,92);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Midoria Mountain");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Sky Palace");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(9);
}}

}


{



}


{


gdjs.MapCode.condition0IsTrue_0.val = false;
gdjs.MapCode.condition1IsTrue_0.val = false;
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition0IsTrue_0;
gdjs.MapCode.condition0IsTrue_1.val = false;
{
gdjs.MapCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}gdjs.MapCode.conditionTrue_1.val = true && gdjs.MapCode.condition0IsTrue_1.val;
}
}if ( gdjs.MapCode.condition0IsTrue_0.val ) {
{
{gdjs.MapCode.conditionTrue_1 = gdjs.MapCode.condition1IsTrue_0;
gdjs.MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8996564);
}
}}
if (gdjs.MapCode.condition1IsTrue_0.val) {
gdjs.MapCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{for(var i = 0, len = gdjs.MapCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDSelectorObjects1[i].setPosition(541,139);
}
}{runtimeScene.getGame().getVariables().getFromIndex(23).setString("Midoria Mountain");
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Sky Palace");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(8);
}}

}


{



}


{


{
}

}


}; //End of gdjs.MapCode.eventsList0xb5aa0


gdjs.MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MapCode.GDLogVertObjects1.length = 0;
gdjs.MapCode.GDLogVertObjects2.length = 0;
gdjs.MapCode.GDLogSideObjects1.length = 0;
gdjs.MapCode.GDLogSideObjects2.length = 0;
gdjs.MapCode.GDNewObjectObjects1.length = 0;
gdjs.MapCode.GDNewObjectObjects2.length = 0;
gdjs.MapCode.GDMapTitleObjects1.length = 0;
gdjs.MapCode.GDMapTitleObjects2.length = 0;
gdjs.MapCode.GDWorldMapObjects1.length = 0;
gdjs.MapCode.GDWorldMapObjects2.length = 0;
gdjs.MapCode.GDInfoObjects1.length = 0;
gdjs.MapCode.GDInfoObjects2.length = 0;
gdjs.MapCode.GDRouteObjects1.length = 0;
gdjs.MapCode.GDRouteObjects2.length = 0;
gdjs.MapCode.GDRoute2Objects1.length = 0;
gdjs.MapCode.GDRoute2Objects2.length = 0;
gdjs.MapCode.GDRoute3Objects1.length = 0;
gdjs.MapCode.GDRoute3Objects2.length = 0;
gdjs.MapCode.GDRoute4Objects1.length = 0;
gdjs.MapCode.GDRoute4Objects2.length = 0;
gdjs.MapCode.GDRoute5Objects1.length = 0;
gdjs.MapCode.GDRoute5Objects2.length = 0;
gdjs.MapCode.GDRoute6Objects1.length = 0;
gdjs.MapCode.GDRoute6Objects2.length = 0;
gdjs.MapCode.GDRoute7Objects1.length = 0;
gdjs.MapCode.GDRoute7Objects2.length = 0;
gdjs.MapCode.GDRoute8Objects1.length = 0;
gdjs.MapCode.GDRoute8Objects2.length = 0;
gdjs.MapCode.GDRoute9Objects1.length = 0;
gdjs.MapCode.GDRoute9Objects2.length = 0;
gdjs.MapCode.GDSelectorObjects1.length = 0;
gdjs.MapCode.GDSelectorObjects2.length = 0;
gdjs.MapCode.GDLocationObjects1.length = 0;
gdjs.MapCode.GDLocationObjects2.length = 0;
gdjs.MapCode.GDTravelTextObjects1.length = 0;
gdjs.MapCode.GDTravelTextObjects2.length = 0;

gdjs.MapCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['MapCode'] = gdjs.MapCode;
