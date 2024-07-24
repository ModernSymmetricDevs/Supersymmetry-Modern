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
  // import globals.Globals
  // def voltaic_pile_ingredients = [
  //     [null, metaitem('electrolyte_paper'), null],
  //     [null, metaitem('plateZinc'), null],
  //     [null, metaitem('plateCopper'), null]
  // ]
  // def magnetic_rod_ingredients = [
  //     [metaitem('voltaic_pile').reuse(), metaitem('wireGtSingleCopper').reuse(), metaitem('springCopper').reuse()],
  //     [null, null, metaitem('hot_iron_rod')],
  //     [null, null, null]
  // ]
  // oreDict.add('electrolyteFruit', metaitem('gregtechfoodoption:food.lime'))
  // oreDict.add('electrolyteFruit', metaitem('gregtechfoodoption:food.lemon'))
  // oreDict.add('electrolyteFruit', metaitem('gregtechfoodoption:food.orange'))
  // crafting.removeByOutput(metaitem('stickIronMagnetic')) 
  // furnace.add(metaitem('stickIron'), metaitem('hot_iron_rod'))
  // crafting.addShapeless('ElectrolytePaperSalt',metaitem('electrolyte_paper'), [
  //     item('forge:bucketfilled').withNbt([FluidName: "salt_water", Amount: 1000]),
  //     item('minecraft:paper')
  // ]) 
  // crafting.addShapeless('ElectrolytePaperFruit',metaitem('electrolyte_paper'), [
  //     ore('electrolyteFruit'),
  //     item('minecraft:paper'),
  //     ore('craftingToolMortar')
  // ]) 
  // crafting.addShapeless('MagneticIronDuplication',metaitem('stickIronMagnetic') * 2, [
  //     metaitem('hot_iron_rod'), 
  //     metaitem('stickIronMagnetic')
  // ])
  // crafting.addShapeless('MagneticIronMagentite',metaitem('stickIronMagnetic'), [
  //     metaitem('hot_iron_rod'), 
  //     metaitem('chunk.magnetite')
  // ])
  // crafting.addShaped('MagneticRodVoltaic',metaitem('stickIronMagnetic'), magnetic_rod_ingredients)
  // crafting.addShaped('VoltaicPileCrafting',metaitem('voltaic_pile'), voltaic_pile_ingredients)
});