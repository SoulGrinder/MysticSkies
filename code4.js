gdjs.CombatCode = {};
gdjs.CombatCode.GDEnemyTitleObjects1= [];
gdjs.CombatCode.GDEnemyTitleObjects2= [];
gdjs.CombatCode.GDEnemyObjects1= [];
gdjs.CombatCode.GDEnemyObjects2= [];
gdjs.CombatCode.GDAttackButtonObjects1= [];
gdjs.CombatCode.GDAttackButtonObjects2= [];
gdjs.CombatCode.GDEscapeControlTextObjects1= [];
gdjs.CombatCode.GDEscapeControlTextObjects2= [];
gdjs.CombatCode.GDPotionControlTextObjects1= [];
gdjs.CombatCode.GDPotionControlTextObjects2= [];
gdjs.CombatCode.GDAttackControlTextObjects1= [];
gdjs.CombatCode.GDAttackControlTextObjects2= [];
gdjs.CombatCode.GDEscapeButtonObjects1= [];
gdjs.CombatCode.GDEscapeButtonObjects2= [];
gdjs.CombatCode.GDEnemyTextObjects1= [];
gdjs.CombatCode.GDEnemyTextObjects2= [];
gdjs.CombatCode.GDYouTextObjects1= [];
gdjs.CombatCode.GDYouTextObjects2= [];
gdjs.CombatCode.GDHPTextObjects1= [];
gdjs.CombatCode.GDHPTextObjects2= [];
gdjs.CombatCode.GDPotionTextObjects1= [];
gdjs.CombatCode.GDPotionTextObjects2= [];
gdjs.CombatCode.GDAttackTextObjects1= [];
gdjs.CombatCode.GDAttackTextObjects2= [];
gdjs.CombatCode.GDEnemyHPTextObjects1= [];
gdjs.CombatCode.GDEnemyHPTextObjects2= [];
gdjs.CombatCode.GDEnemyAttackTextObjects1= [];
gdjs.CombatCode.GDEnemyAttackTextObjects2= [];
gdjs.CombatCode.GDMagicFXObjects1= [];
gdjs.CombatCode.GDMagicFXObjects2= [];
gdjs.CombatCode.GDRestFXObjects1= [];
gdjs.CombatCode.GDRestFXObjects2= [];
gdjs.CombatCode.GDAttackFXObjects1= [];
gdjs.CombatCode.GDAttackFXObjects2= [];
gdjs.CombatCode.GDCombatSkyObjects1= [];
gdjs.CombatCode.GDCombatSkyObjects2= [];
gdjs.CombatCode.GDYouPanelObjects1= [];
gdjs.CombatCode.GDYouPanelObjects2= [];
gdjs.CombatCode.GDPotionButtonObjects1= [];
gdjs.CombatCode.GDPotionButtonObjects2= [];

gdjs.CombatCode.conditionTrue_0 = {val:false};
gdjs.CombatCode.condition0IsTrue_0 = {val:false};
gdjs.CombatCode.condition1IsTrue_0 = {val:false};
gdjs.CombatCode.condition2IsTrue_0 = {val:false};
gdjs.CombatCode.condition3IsTrue_0 = {val:false};
gdjs.CombatCode.condition4IsTrue_0 = {val:false};
gdjs.CombatCode.condition5IsTrue_0 = {val:false};
gdjs.CombatCode.conditionTrue_1 = {val:false};
gdjs.CombatCode.condition0IsTrue_1 = {val:false};
gdjs.CombatCode.condition1IsTrue_1 = {val:false};
gdjs.CombatCode.condition2IsTrue_1 = {val:false};
gdjs.CombatCode.condition3IsTrue_1 = {val:false};
gdjs.CombatCode.condition4IsTrue_1 = {val:false};
gdjs.CombatCode.condition5IsTrue_1 = {val:false};


gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDRestFXObjects1Objects = Hashtable.newFrom({"RestFX": gdjs.CombatCode.GDRestFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDMagicFXObjects1Objects = Hashtable.newFrom({"MagicFX": gdjs.CombatCode.GDMagicFXObjects1});gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects = Hashtable.newFrom({"AttackFX": gdjs.CombatCode.GDAttackFXObjects1});gdjs.CombatCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDAttackButtonObjects1.createFrom(runtimeScene.getObjects("AttackButton"));
gdjs.CombatCode.GDAttackControlTextObjects1.createFrom(runtimeScene.getObjects("AttackControlText"));
gdjs.CombatCode.GDAttackTextObjects1.createFrom(runtimeScene.getObjects("AttackText"));
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTitleObjects1.createFrom(runtimeScene.getObjects("EnemyTitle"));
gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));
gdjs.CombatCode.GDEscapeControlTextObjects1.createFrom(runtimeScene.getObjects("EscapeControlText"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));
gdjs.CombatCode.GDPotionControlTextObjects1.createFrom(runtimeScene.getObjects("PotionControlText"));
gdjs.CombatCode.GDPotionTextObjects1.createFrom(runtimeScene.getObjects("PotionText"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().get("Ding").setNumber(0);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(gdjs.randomInRange(0, 6));
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{for(var i = 0, len = gdjs.CombatCode.GDPotionButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackControlTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeControlTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionControlTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackButtonObjects1[i].setAnimationFrame(17);
}
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(6);
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionButtonObjects1[i].setAnimationFrame(11);
}
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionTextObjects1[i].setString("Potions: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(53)));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesCombatLoop.mp3", 1, true, 100, 1);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(gdjs.randomInRange(1, 4));
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTitleObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTitleObjects1[i].setOutline("143;0;0", 3);
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8535412);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesCombatLoop.mp3", 1, true, 40, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8536100);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesCombatLoop2.mp3", 1, true, 50, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8536804);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesCombatLoop3.mp3", 1, true, 50, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8537476);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesCombatLoop4.mp3", 1, true, 50, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8538156);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 2));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8538788);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(2, 3));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8539460);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(3, 4));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8540132);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(4, 5));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8540804);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(5, 6));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8541476);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(6, 7));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8542148);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(7, 8));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8542820);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(8, 9));
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8543492);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(9, 10));
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8544388);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Gremlin");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(20);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(3);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8546332);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(15);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(6);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)));
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(90);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 15 Exp, 6 Coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8547708);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Goblin");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(2);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(40);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(5);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8549612);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(18);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(8);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)));
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(108);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 18 Exp, 8 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8551076);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Ork");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(4);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(60);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(7);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8553020);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(21);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(12);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(126);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 21 Exp, 12 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8554484);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Skeleton");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(6);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(80);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(9);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8556428);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(24);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(15);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 2);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(144);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 24 Exp, 15 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8557892);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Wyrm");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(8);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(100);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(11);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8559836);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(27);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(17);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 3);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(162);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 27 Exp, 17 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8561300);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Lurker");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(10);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(120);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(13);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8563244);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(30);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(19);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 4);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(180);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 30 Exp, 19 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8564708);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Golem");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(12);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(140);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(15);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8566652);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(33);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(21);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 5);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(198);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 33 Exp, 21 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8568116);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Ogre");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(14);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(160);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(17);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8570060);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(36);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(23);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 6);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(216);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 36 Exp, 23 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8571524);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Troll");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(16);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(180);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(19);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8573468);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(39);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(25);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 7);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(234);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 39 Exp, 25 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8574876);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{runtimeScene.getVariables().getFromIndex(4).setString("Sorcerer");
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(18);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(200);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(21);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].setString("Attack Power: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8576820);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).add(42);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(50);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) + 8);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(340);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Gained 42 Exp, 50 coins and " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " Junk");
}}

}


{

gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 0;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyObjects1[i].getOpacity() < 255 ) {
        gdjs.CombatCode.condition1IsTrue_1.val = true;
        gdjs.CombatCode.GDEnemyObjects1[k] = gdjs.CombatCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyObjects1.length = k;}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setOpacity(gdjs.CombatCode.GDEnemyObjects1[i].getOpacity() + (4));
}
}}

}


{

gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 0;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyObjects1[i].getOpacity() == 255 ) {
        gdjs.CombatCode.condition1IsTrue_1.val = true;
        gdjs.CombatCode.GDEnemyObjects1[k] = gdjs.CombatCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyObjects1.length = k;}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8579196);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(8).setNumber(1);
}}

}


{

gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyObjects1[i].getY() < 80 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDEnemyObjects1[k] = gdjs.CombatCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyObjects1.length = k;}if (gdjs.CombatCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].addForce(0, 80, 0);
}
}}

}


{

gdjs.CombatCode.GDEnemyTitleObjects1.createFrom(runtimeScene.getObjects("EnemyTitle"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyTitleObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyTitleObjects1[i].getY() < 20 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDEnemyTitleObjects1[k] = gdjs.CombatCode.GDEnemyTitleObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyTitleObjects1.length = k;}if (gdjs.CombatCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEnemyTitleObjects1 */
{for(var i = 0, len = gdjs.CombatCode.GDEnemyTitleObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTitleObjects1[i].addForce(0, 50, 0);
}
}}

}


{

gdjs.CombatCode.GDEnemyTitleObjects1.createFrom(runtimeScene.getObjects("EnemyTitle"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyTitleObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyTitleObjects1[i].getY() > 19 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDEnemyTitleObjects1[k] = gdjs.CombatCode.GDEnemyTitleObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyTitleObjects1.length = k;}if (gdjs.CombatCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEnemyTitleObjects1 */
{for(var i = 0, len = gdjs.CombatCode.GDEnemyTitleObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTitleObjects1[i].setOpacity(gdjs.CombatCode.GDEnemyTitleObjects1[i].getOpacity() - (4));
}
}}

}


{

gdjs.CombatCode.GDEnemyTitleObjects1.createFrom(runtimeScene.getObjects("EnemyTitle"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyTitleObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyTitleObjects1[i].getOpacity() < 1 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDEnemyTitleObjects1[k] = gdjs.CombatCode.GDEnemyTitleObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyTitleObjects1.length = k;}if (gdjs.CombatCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEnemyTitleObjects1 */
{for(var i = 0, len = gdjs.CombatCode.GDEnemyTitleObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyTitleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyObjects1[i].getOpacity() == 255 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDEnemyObjects1[k] = gdjs.CombatCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8581564);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDAttackButtonObjects1.createFrom(runtimeScene.getObjects("AttackButton"));
gdjs.CombatCode.GDAttackControlTextObjects1.createFrom(runtimeScene.getObjects("AttackControlText"));
gdjs.CombatCode.GDAttackTextObjects1.createFrom(runtimeScene.getObjects("AttackText"));
gdjs.CombatCode.GDEnemyAttackTextObjects1.createFrom(runtimeScene.getObjects("EnemyAttackText"));
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));
gdjs.CombatCode.GDEscapeControlTextObjects1.createFrom(runtimeScene.getObjects("EscapeControlText"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));
gdjs.CombatCode.GDPotionControlTextObjects1.createFrom(runtimeScene.getObjects("PotionControlText"));
gdjs.CombatCode.GDPotionTextObjects1.createFrom(runtimeScene.getObjects("PotionText"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.CombatCode.GDAttackButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackControlTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeControlTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyAttackTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDAttackTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionControlTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionTextObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8584276);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(39).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(40)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8585412);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(40).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(41)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8586548);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(41).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(42)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8587684);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(42).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8588820);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(43).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(44)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8589956);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(44).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(45)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8591092);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(45).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(46)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8592228);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(46).sub(1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(47)) > 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8593364);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(47).sub(1);
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 0;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8594556);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDAttackButtonObjects1.createFrom(runtimeScene.getObjects("AttackButton"));
{for(var i = 0, len = gdjs.CombatCode.GDAttackButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDAttackButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.CombatCode.GDAttackButtonObjects1.createFrom(runtimeScene.getObjects("AttackButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDAttackButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDAttackButtonObjects1[i].getAnimationFrame() == 8 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDAttackButtonObjects1[k] = gdjs.CombatCode.GDAttackButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDAttackButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8595324);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 386, 160, "Front");
}{runtimeScene.getVariables().getFromIndex(6).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)));
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.CombatCode.GDAttackButtonObjects1.createFrom(runtimeScene.getObjects("AttackButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDAttackButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDAttackButtonObjects1[i].getAnimationFrame() > 16 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDAttackButtonObjects1[k] = gdjs.CombatCode.GDAttackButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDAttackButtonObjects1.length = k;}if (gdjs.CombatCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 0;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(53)) > 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8597500);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));
{for(var i = 0, len = gdjs.CombatCode.GDPotionButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}


{

gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDPotionButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDPotionButtonObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDPotionButtonObjects1[k] = gdjs.CombatCode.GDPotionButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDPotionButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8598268);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDPotionTextObjects1.createFrom(runtimeScene.getObjects("PotionText"));
gdjs.CombatCode.GDRestFXObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDRestFXObjects1Objects, 109, 130, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(8);
}{runtimeScene.getGame().getVariables().getFromIndex(53).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "PotionFX.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.CombatCode.GDPotionTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionTextObjects1[i].setString("Potions: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(53)));
}
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDPotionButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDPotionButtonObjects1[i].getAnimationFrame() == 11 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDPotionButtonObjects1[k] = gdjs.CombatCode.GDPotionButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDPotionButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8599772);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(53)) < 1;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8600364);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));
gdjs.CombatCode.GDPotionControlTextObjects1.createFrom(runtimeScene.getObjects("PotionControlText"));
{for(var i = 0, len = gdjs.CombatCode.GDPotionButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionControlTextObjects1[i].setString("No Potions");
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionControlTextObjects1[i].setPosition(205,371);
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(53)) > 0;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8601420);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDPotionButtonObjects1.createFrom(runtimeScene.getObjects("PotionButton"));
gdjs.CombatCode.GDPotionControlTextObjects1.createFrom(runtimeScene.getObjects("PotionControlText"));
{for(var i = 0, len = gdjs.CombatCode.GDPotionButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionButtonObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionControlTextObjects1[i].setString("Press W");
}
}{for(var i = 0, len = gdjs.CombatCode.GDPotionControlTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDPotionControlTextObjects1[i].setPosition(221,371);
}
}}

}


{



}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8603284);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap1.mp3", 1, false, 80, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8605132);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap2.mp3", 1, false, 40, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8606956);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap3.mp3", 1, false, 45, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8608804);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap4.mp3", 1, false, 60, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8610652);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap5.mp3", 1, false, 60, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8612500);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap6.mp3", 1, false, 60, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8614348);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap7.mp3", 1, false, 60, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8616196);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap8.mp3", 1, false, 60, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
gdjs.CombatCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].isVisible() ) {
        gdjs.CombatCode.condition0IsTrue_1.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if ( gdjs.CombatCode.condition3IsTrue_1.val ) {
{
gdjs.CombatCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}}
}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val && gdjs.CombatCode.condition4IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8618044);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CombatCode.GDEscapeButtonObjects1 */
{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs.CombatCode.GDEscapeButtonObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEscapeButtonObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap9.mp3", 1, false, 60, 1);
}}

}


{

gdjs.CombatCode.GDEscapeButtonObjects1.createFrom(runtimeScene.getObjects("EscapeButton"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEscapeButtonObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEscapeButtonObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.CombatCode.condition0IsTrue_0.val = true;
        gdjs.CombatCode.GDEscapeButtonObjects1[k] = gdjs.CombatCode.GDEscapeButtonObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEscapeButtonObjects1.length = k;}if (gdjs.CombatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8620268);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Punch.wav", false, 25, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8623300);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Punch.wav", false, 25, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8626332);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(5);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Punch.wav", false, 25, 1.1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8629364);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(6);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(7);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Punch.wav", false, 25, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8632396);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(8);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(9);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MonsterGrowl.wav", false, 80, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8635468);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(10);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(11);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Punch.wav", false, 25, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8638500);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(12);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(13);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Thud.wav", false, 60, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8641532);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(14);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(15);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Thud.wav", false, 60, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8644564);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(16);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(17);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Thud.wav", false, 70, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyAttack");
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8647596);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(18);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EnemyAttack");
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Enemy");
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.CombatCode.GDHPTextObjects1.createFrom(runtimeScene.getObjects("HPText"));
gdjs.CombatCode.GDAttackFXObjects1.length = 0;

gdjs.CombatCode.GDMagicFXObjects1.length = 0;

{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setAnimation(19);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "SorcererPunchSound.wav", false, 25, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDMagicFXObjects1Objects, 392, 180, "Front");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CombatCode.mapOfGDgdjs_46CombatCode_46GDAttackFXObjects1Objects, 80, 188, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.CombatCode.GDHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EnemyAttack");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}{for(var i = 0, len = gdjs.CombatCode.GDMagicFXObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDMagicFXObjects1[i].setAngle(90);
}
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8650948);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyHPTextObjects1.createFrom(runtimeScene.getObjects("EnemyHPText"));
{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.CombatCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyHPTextObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
{for(var i = 0, len = gdjs.CombatCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.CombatCode.GDEnemyObjects1[i].setOpacity(gdjs.CombatCode.GDEnemyObjects1[i].getOpacity() - (4));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}}

}


{

gdjs.CombatCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.CombatCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.CombatCode.GDEnemyObjects1[i].getOpacity() < 1 ) {
        gdjs.CombatCode.condition1IsTrue_1.val = true;
        gdjs.CombatCode.GDEnemyObjects1[k] = gdjs.CombatCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.CombatCode.GDEnemyObjects1.length = k;}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Objective");
}}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38));
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8653556);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(26).add(12);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(200);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().get("Ding").setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(13).add(3);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(38).add(50);
}{}{}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 1;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8656204);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap1.mp3", 1, true, 80, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 2;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8657132);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap2.mp3", 1, true, 40, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 3;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8658060);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap3.mp3", 1, true, 45, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 4;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8658988);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap4.mp3", 1, true, 60, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 5;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8659916);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap5.mp3", 1, true, 60, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 6;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8660844);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap6.mp3", 1, true, 60, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 7;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8661772);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap7.mp3", 1, true, 60, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 8;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8662700);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap8.mp3", 1, true, 60, 1);
}}

}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1;
}}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val;
}
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8663628);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MysticSkiesMap9.mp3", 1, true, 60, 1);
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition0IsTrue_0;
gdjs.CombatCode.condition0IsTrue_1.val = false;
gdjs.CombatCode.condition1IsTrue_1.val = false;
gdjs.CombatCode.condition2IsTrue_1.val = false;
gdjs.CombatCode.condition3IsTrue_1.val = false;
{
gdjs.CombatCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(22)) == 9;
}if ( gdjs.CombatCode.condition0IsTrue_1.val ) {
{
gdjs.CombatCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if ( gdjs.CombatCode.condition1IsTrue_1.val ) {
{
gdjs.CombatCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) <= 0;
}if ( gdjs.CombatCode.condition2IsTrue_1.val ) {
{
gdjs.CombatCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(47)) <= 0;
}}
}
}
gdjs.CombatCode.conditionTrue_1.val = true && gdjs.CombatCode.condition0IsTrue_1.val && gdjs.CombatCode.condition1IsTrue_1.val && gdjs.CombatCode.condition2IsTrue_1.val && gdjs.CombatCode.condition3IsTrue_1.val;
}
}if (gdjs.CombatCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Complete", false);
}}

}


{



}


{


gdjs.CombatCode.condition0IsTrue_0.val = false;
gdjs.CombatCode.condition1IsTrue_0.val = false;
{
gdjs.CombatCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 1;
}if ( gdjs.CombatCode.condition0IsTrue_0.val ) {
{
{gdjs.CombatCode.conditionTrue_1 = gdjs.CombatCode.condition1IsTrue_0;
gdjs.CombatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8665708);
}
}}
if (gdjs.CombatCode.condition1IsTrue_0.val) {
gdjs.CombatCode.GDEnemyTextObjects1.createFrom(runtimeScene.getObjects("EnemyText"));
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(51).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString("Defeated by an evil " + (( gdjs.CombatCode.GDEnemyTextObjects1.length === 0 ) ? "" :gdjs.CombatCode.GDEnemyTextObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


}; //End of gdjs.CombatCode.eventsList0xb5aa0


gdjs.CombatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CombatCode.GDEnemyTitleObjects1.length = 0;
gdjs.CombatCode.GDEnemyTitleObjects2.length = 0;
gdjs.CombatCode.GDEnemyObjects1.length = 0;
gdjs.CombatCode.GDEnemyObjects2.length = 0;
gdjs.CombatCode.GDAttackButtonObjects1.length = 0;
gdjs.CombatCode.GDAttackButtonObjects2.length = 0;
gdjs.CombatCode.GDEscapeControlTextObjects1.length = 0;
gdjs.CombatCode.GDEscapeControlTextObjects2.length = 0;
gdjs.CombatCode.GDPotionControlTextObjects1.length = 0;
gdjs.CombatCode.GDPotionControlTextObjects2.length = 0;
gdjs.CombatCode.GDAttackControlTextObjects1.length = 0;
gdjs.CombatCode.GDAttackControlTextObjects2.length = 0;
gdjs.CombatCode.GDEscapeButtonObjects1.length = 0;
gdjs.CombatCode.GDEscapeButtonObjects2.length = 0;
gdjs.CombatCode.GDEnemyTextObjects1.length = 0;
gdjs.CombatCode.GDEnemyTextObjects2.length = 0;
gdjs.CombatCode.GDYouTextObjects1.length = 0;
gdjs.CombatCode.GDYouTextObjects2.length = 0;
gdjs.CombatCode.GDHPTextObjects1.length = 0;
gdjs.CombatCode.GDHPTextObjects2.length = 0;
gdjs.CombatCode.GDPotionTextObjects1.length = 0;
gdjs.CombatCode.GDPotionTextObjects2.length = 0;
gdjs.CombatCode.GDAttackTextObjects1.length = 0;
gdjs.CombatCode.GDAttackTextObjects2.length = 0;
gdjs.CombatCode.GDEnemyHPTextObjects1.length = 0;
gdjs.CombatCode.GDEnemyHPTextObjects2.length = 0;
gdjs.CombatCode.GDEnemyAttackTextObjects1.length = 0;
gdjs.CombatCode.GDEnemyAttackTextObjects2.length = 0;
gdjs.CombatCode.GDMagicFXObjects1.length = 0;
gdjs.CombatCode.GDMagicFXObjects2.length = 0;
gdjs.CombatCode.GDRestFXObjects1.length = 0;
gdjs.CombatCode.GDRestFXObjects2.length = 0;
gdjs.CombatCode.GDAttackFXObjects1.length = 0;
gdjs.CombatCode.GDAttackFXObjects2.length = 0;
gdjs.CombatCode.GDCombatSkyObjects1.length = 0;
gdjs.CombatCode.GDCombatSkyObjects2.length = 0;
gdjs.CombatCode.GDYouPanelObjects1.length = 0;
gdjs.CombatCode.GDYouPanelObjects2.length = 0;
gdjs.CombatCode.GDPotionButtonObjects1.length = 0;
gdjs.CombatCode.GDPotionButtonObjects2.length = 0;

gdjs.CombatCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['CombatCode'] = gdjs.CombatCode;
