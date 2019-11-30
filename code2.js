gdjs.IntroCode = {};
gdjs.IntroCode.GDNewObjectObjects1= [];
gdjs.IntroCode.GDNewObjectObjects2= [];
gdjs.IntroCode.GDText1Objects1= [];
gdjs.IntroCode.GDText1Objects2= [];
gdjs.IntroCode.GDSceneObjects1= [];
gdjs.IntroCode.GDSceneObjects2= [];
gdjs.IntroCode.GDSorcerersObjects1= [];
gdjs.IntroCode.GDSorcerersObjects2= [];
gdjs.IntroCode.GDMagicFXObjects1= [];
gdjs.IntroCode.GDMagicFXObjects2= [];
gdjs.IntroCode.GDCreatureFXObjects1= [];
gdjs.IntroCode.GDCreatureFXObjects2= [];
gdjs.IntroCode.GDTipObjects1= [];
gdjs.IntroCode.GDTipObjects2= [];
gdjs.IntroCode.GDInfoObjects1= [];
gdjs.IntroCode.GDInfoObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMagicFXObjects1Objects = Hashtable.newFrom({"MagicFX": gdjs.IntroCode.GDMagicFXObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCreatureFXObjects1Objects = Hashtable.newFrom({"CreatureFX": gdjs.IntroCode.GDCreatureFXObjects1});gdjs.IntroCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
gdjs.IntroCode.GDSceneObjects1.createFrom(runtimeScene.getObjects("Scene"));
gdjs.IntroCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{for(var i = 0, len = gdjs.IntroCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDInfoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDSceneObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSceneObjects1[i].setOpacity(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(70);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(70);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(28).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(32).setNumber(40);
}{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(30);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(54).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(200);
}{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(765);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(387);
}{runtimeScene.getGame().getVariables().getFromIndex(24).setString("Slumber Wood");
}{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(41).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(42).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(44).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(45).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(46).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setString("3rd Class Airship");
}{for(var i = 0, len = gdjs.IntroCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTipObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesIntro.mp3", 1, false, 70, 1);
}}

}


{

gdjs.IntroCode.GDSceneObjects1.createFrom(runtimeScene.getObjects("Scene"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDSceneObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDSceneObjects1[i].getOpacity() < 255 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDSceneObjects1[k] = gdjs.IntroCode.GDSceneObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDSceneObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDSceneObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDSceneObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSceneObjects1[i].setOpacity(gdjs.IntroCode.GDSceneObjects1[i].getOpacity() + (4));
}
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8128156);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
{for(var i = 0, len = gdjs.IntroCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDInfoObjects1[i].hide(false);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8128684);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDSceneObjects1.createFrom(runtimeScene.getObjects("Scene"));
gdjs.IntroCode.GDText1Objects1.createFrom(runtimeScene.getObjects("Text1"));
{for(var i = 0, len = gdjs.IntroCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDText1Objects1[i].setString("Until one dark stormy night, three powerful dark sorcerers begin a potent ritual.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.IntroCode.GDSceneObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSceneObjects1[i].setColor("71;44;102");
}
}}

}


{

gdjs.IntroCode.GDSorcerersObjects1.createFrom(runtimeScene.getObjects("Sorcerers"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.IntroCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDSorcerersObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDSorcerersObjects1[i].getX() < 1 ) {
        gdjs.IntroCode.condition1IsTrue_1.val = true;
        gdjs.IntroCode.GDSorcerersObjects1[k] = gdjs.IntroCode.GDSorcerersObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDSorcerersObjects1.length = k;}}
gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val && gdjs.IntroCode.condition1IsTrue_1.val;
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDSorcerersObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDSorcerersObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSorcerersObjects1[i].addForce(100, 0, 0);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9.5, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8130324);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDText1Objects1.createFrom(runtimeScene.getObjects("Text1"));
{for(var i = 0, len = gdjs.IntroCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDText1Objects1[i].setString("Combining their powers to rip a hole in reality to another world.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val;
}
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8131204);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDMagicFXObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMagicFXObjects1Objects, 141, 306, "Front");
}{for(var i = 0, len = gdjs.IntroCode.GDMagicFXObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMagicFXObjects1[i].setAngle(270);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 14, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8131932);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDText1Objects1.createFrom(runtimeScene.getObjects("Text1"));
{for(var i = 0, len = gdjs.IntroCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDText1Objects1[i].setString("Otherworldly creatures of all sizes invade from above.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val;
}
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8132812);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDCreatureFXObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCreatureFXObjects1Objects, 626, 39, "Front");
}{for(var i = 0, len = gdjs.IntroCode.GDCreatureFXObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCreatureFXObjects1[i].setAngle(110);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 19, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8133540);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDCreatureFXObjects1.createFrom(runtimeScene.getObjects("CreatureFX"));
gdjs.IntroCode.GDMagicFXObjects1.createFrom(runtimeScene.getObjects("MagicFX"));
gdjs.IntroCode.GDSceneObjects1.createFrom(runtimeScene.getObjects("Scene"));
gdjs.IntroCode.GDSorcerersObjects1.createFrom(runtimeScene.getObjects("Sorcerers"));
gdjs.IntroCode.GDText1Objects1.createFrom(runtimeScene.getObjects("Text1"));
{for(var i = 0, len = gdjs.IntroCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDText1Objects1[i].setString("You must step up and help the Kingdom fight back these creatures and reclaim the skies.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.IntroCode.GDMagicFXObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMagicFXObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDCreatureFXObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCreatureFXObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDSceneObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDSorcerersObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSorcerersObjects1[i].hide();
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 23, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8134772);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
{for(var i = 0, len = gdjs.IntroCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTipObjects1[i].hide(false);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 27, "1");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
{for(var i = 0, len = gdjs.IntroCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTipObjects1[i].addForce(0, -(50), 0);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val;
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDText1Objects1.createFrom(runtimeScene.getObjects("Text1"));
{for(var i = 0, len = gdjs.IntroCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDText1Objects1[i].addForce(0, -(50), 0);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 34, "1");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8136204);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MysticSkiesMap1.mp3", true, 100, 1);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "1");
}if ( gdjs.IntroCode.condition0IsTrue_1.val ) {
{
gdjs.IntroCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
}}
gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val && gdjs.IntroCode.condition1IsTrue_1.val;
}
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8137372);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MysticSkiesMap1.mp3", true, 100, 1);
}}

}


}; //End of gdjs.IntroCode.eventsList0xb5aa0


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewObjectObjects1.length = 0;
gdjs.IntroCode.GDNewObjectObjects2.length = 0;
gdjs.IntroCode.GDText1Objects1.length = 0;
gdjs.IntroCode.GDText1Objects2.length = 0;
gdjs.IntroCode.GDSceneObjects1.length = 0;
gdjs.IntroCode.GDSceneObjects2.length = 0;
gdjs.IntroCode.GDSorcerersObjects1.length = 0;
gdjs.IntroCode.GDSorcerersObjects2.length = 0;
gdjs.IntroCode.GDMagicFXObjects1.length = 0;
gdjs.IntroCode.GDMagicFXObjects2.length = 0;
gdjs.IntroCode.GDCreatureFXObjects1.length = 0;
gdjs.IntroCode.GDCreatureFXObjects2.length = 0;
gdjs.IntroCode.GDTipObjects1.length = 0;
gdjs.IntroCode.GDTipObjects2.length = 0;
gdjs.IntroCode.GDInfoObjects1.length = 0;
gdjs.IntroCode.GDInfoObjects2.length = 0;

gdjs.IntroCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['IntroCode'] = gdjs.IntroCode;
