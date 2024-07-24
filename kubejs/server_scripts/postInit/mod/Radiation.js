const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import nc.radiation.RadSources;
  // log.infoMC("Running Radiation.groovy...")
  // private void addRadiationToDusts (String materialName, double baseRadiation){
  //     RadSources.addToStackMap(metaitem("dust" + materialName), baseRadiation);
  //     RadSources.addToStackMap(metaitem("dustSmall" + materialName), baseRadiation / 4.0);
  //     RadSources.addToStackMap(metaitem("dustTiny" + materialName), baseRadiation / 9.0);
  // }
  // addRadiationToDusts('Technetium99', 0.0000042d);
  // addRadiationToDusts('Polonium210', 2d);
  // addRadiationToDusts('Astatine209', 552d);
  // addRadiationToDusts('Astatine210', 826d);
  // addRadiationToDusts('Astatine211', 735d);
  // addRadiationToDusts('Francium212', 9936d);
  // addRadiationToDusts('Francium221', 39744d);
  // addRadiationToDusts('Francium222', 13248d);
  // addRadiationToDusts('Francium223', 8565d);
  // addRadiationToDusts('Radium223', 28d);
  // addRadiationToDusts('Radium224', 80d);
  // addRadiationToDusts('Radium225', 19d);
  // addRadiationToDusts('Radium226', 0.000523d);
  // addRadiationToDusts('Radium228', 0.139d);
  // addRadiationToDusts('Actinium225', 28d);
  // addRadiationToDusts('Actinium226', 240d);
  // addRadiationToDusts('Actinium227', 0.037d);
  // private void addRadiationToIngots (String materialName, double baseRadiation){
  //     RadSources.addToStackMap(metaitem("ingot" + materialName), baseRadiation);
  //     RadSources.addToStackMap(metaitem("dust" + materialName), baseRadiation);
  //     RadSources.addToStackMap(metaitem("dustSmall" + materialName), baseRadiation / 4.0);
  //     RadSources.addToStackMap(metaitem("dustTiny" + materialName), baseRadiation / 9.0);
  //     //RadSources.addToStackMap(metaitem("chunk" + materialName), baseRadiation / 4.0);
  //     RadSources.addToStackMap(metaitem("nugget" + materialName), baseRadiation / 9.0);
  //     RadSources.addToStackMap(metaitem("block" + materialName), baseRadiation * 9.0);
  // }
  // addRadiationToIngots("Sodium22", 0.384);
  // addRadiationToIngots("Uranium234", 0.000004);
  // addRadiationToIngots("Cobalt60", 0.19);
  // addRadiationToIngots("Iridium192", 4);
  // addRadiationToIngots("Strontium90", 0.034);
  // addRadiationToIngots("Ruthenium106", 0.98);
  // addRadiationToIngots("Caesium137", 0.033);
  // addRadiationToIngots("Promethium147", 0.38);
  // addRadiationToIngots("Europium155", 0.21);
  // addRadiationToIngots("Gold198", 135);
  // private void  addIsotopeRadiation (String materialName, double baseRadiation){
  //     addRadiationToIngots(materialName, baseRadiation);
  //     addRadiationToIngots(materialName + "Carbide", baseRadiation);
  //     addRadiationToIngots(materialName + "Oxide", baseRadiation);
  //     addRadiationToIngots(materialName + "Nitride", baseRadiation);
  //     addRadiationToIngots(materialName + "ZA", baseRadiation);
  // }
  // addIsotopeRadiation("Uranium233", 0.000006);
  // addIsotopeRadiation("Uranium", 0.000000000225);
  // addIsotopeRadiation("Uranium235", 0.000000001);
  // addIsotopeRadiation("Neptunium236", 0.000006);
  // addIsotopeRadiation("Neptunium237", 0.00000047);
  // addIsotopeRadiation("Plutonium238", 0.11);
  // addIsotopeRadiation("Plutonium", 0.000041);
  // addIsotopeRadiation("Plutonium242", 0.000002);
  // addIsotopeRadiation("Plutonium241", 0.071);
  // addIsotopeRadiation("Americium241", 0.002);
  // addIsotopeRadiation("Americium242", 0.007);
  // addIsotopeRadiation("Americium243", 0.000139);
  // addIsotopeRadiation("Curium243", 0.034);
  // addIsotopeRadiation("Curium245", 0.00012);
  // addIsotopeRadiation("Curium246", 0.000215);
  // addIsotopeRadiation("Curium247", 0.000000064);
  // addIsotopeRadiation("Berkelium247", 0.000000725);
  // addIsotopeRadiation("Berkelium248", 0.003);
  // addIsotopeRadiation("Californium249", 0.002);
  // addIsotopeRadiation("Californium250", 0.076);
  // addIsotopeRadiation("Californium251", 0.001);
  // addIsotopeRadiation("Californium252", 0.38);
  // addIsotopeRadiation("Copernicium291", 0.000833);
  // */
});