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
  // crafting.replaceShaped('packagedauto:packager', item('packagedauto:packager'), [
  //     [ore('plateSteel'), item('packagedauto:me_package_component'), ore('plateSteel')],
  //     [ore('wireFineRedAlloy'), metaitem('robot.arm.mv'), ore('wireFineRedAlloy')],
  //     [ore('plateSteel'), ore('piston'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped('packagedauto:encoder', item('packagedauto:encoder'), [
  //     [ore('plateSteel'), item('packagedauto:package_component'), ore('plateSteel')],
  //     [metaitem('robot.arm.mv'), null, metaitem('robot.arm.mv')],
  //     [ore('plateSteel'), ore('circuitMv'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped('packagedauto:unpackager', item('packagedauto:unpackager'), [
  //     [ore('plateSteel'), item('packagedauto:me_package_component'), ore('plateSteel')],
  //     [ore('wireFineRedAlloy'), metaitem('crate.wood'), ore('wireFineRedAlloy')],
  //     [ore('plateSteel'), metaitem('robot.arm.mv'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped('packagedauto:packager_extension', item('packagedauto:packager_extension'), [
  //     [ore('plateSteel'), item('packagedauto:me_package_component'), ore('plateSteel')],
  //     [ore('wireFineRedAlloy'), metaitem('crate.wood'), ore('wireFineRedAlloy')],
  //     [ore('plateSteel'), ore('piston'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped('packagedauto:recipe_holder', item('packagedauto:recipe_holder') * 2, [
  //     [ore('plateGlass'), ore('wireFineRedAlloy'), ore('plateGlass')],
  //     [ore('wireFineRedAlloy'), item('appliedenergistics2:material', 39), ore('wireFineRedAlloy')],
  //     [ore('plateSteel'), item('packagedauto:package_component'), ore('plateSteel')]
  // ])
  // crafting.replaceShaped('packagedauto:package_component', item('packagedauto:package_component'), [
  //     [ore('plateGold'), ore('wireFineRedAlloy'), ore('plateGold')],
  //     [ore('wireFineRedAlloy'), ore('circuitMv'), ore('wireFineRedAlloy')],
  //     [ore('plateGold'), ore('wireFineRedAlloy'), ore('plateGold')]
  // ])
  // crafting.replaceShaped('packagedauto:me_package_component', item('packagedauto:me_package_component'), [
  //     [ore('plateSteel'), item('appliedenergistics2:quartz_glass'), ore('plateSteel')],
  //     [item('appliedenergistics2:material', 43), item('packagedauto:package_component'), item('appliedenergistics2:material', 44)],
  //     [ore('plateSteel'), item('appliedenergistics2:quartz_glass'), ore('plateSteel')]
  // ])
});