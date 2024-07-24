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

  event.recipes.susy.fluidized_bed_reactor('vfyyhmufwwglwp') // remapped from original line 22
    .inputFluids(safeFluidOf('susy:ortho_xylene', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 6000))
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .itemOutputs('13x #forge:dusts/phthalic_anhydride')
    .duration(300)
    .EUt(240)

  event.recipes.susy.batch_reactor('vuswowqlgfbeto') // remapped from original line 32
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('15x #forge:dusts/phthalic_anhydride')
    .itemOutputs('18x #forge:dusts/phthalic_acid')
    .duration(200)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('xjb12lvrsvbayn') // remapped from original line 40
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .inputFluids(safeFluidOf('gtceu:naphthalene', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('18x #forge:dusts/phthalic_acid')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('j53kkrhkqw4kbc') // remapped from original line 53
    .inputFluids(safeFluidOf('gtceu:methane', 1000))
    .inputFluids(safeFluidOf('gtceu:bromine', 8000))
    .itemOutputs('5x #forge:dusts/carbon_tetrabromide')
    .outputFluids(safeFluidOf('susy:hydrogen_bromide', 4000))
    .EUt(120)
    .duration(3)

  event.recipes.gtceu.mixer('wasbdwrltq0xm6') // remapped from original line 62
    .itemInputs('1x #forge:dusts/cobalt')
    .itemInputs('1x #forge:dusts/manganese')
    .itemInputs('5x #forge:dusts/carbon_tetrabromide')
    .itemOutputs('2x #forge:dusts/amoco_process_catalyst')
    .EUt(120)
    .duration(120)

  event.recipes.gtceu.large_chemical_reactor('4a7gyklfkyjou0') // remapped from original line 71
    .inputFluids(safeFluidOf('susy:para_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_air', 8000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:terephthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('628fln7ony7frj') // remapped from original line 81
    .inputFluids(safeFluidOf('susy:para_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 2000))
    .notConsumable(safeFluidOf('gtceu:carbon_dioxide', 6000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:terephthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('1ii6tmborr6db0') // remapped from original line 92
    .inputFluids(safeFluidOf('susy:meta_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_air', 8000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:isophthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('evy2zqo14dh5to') // remapped from original line 102
    .inputFluids(safeFluidOf('susy:meta_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 2000))
    .notConsumable(safeFluidOf('gtceu:carbon_dioxide', 6000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:isophthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.sifter('xbeolvt6jmjwhg') // remapped from original line 113
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:isophthalic_acid_slurry', 2000))
    .itemOutputs('18x #forge:dusts/amoco_isophthalic_acid')
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.sifter('zriajkqwd5yucu') // remapped from original line 122
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:terephthalic_acid_slurry', 2000))
    .itemOutputs('18x #forge:dusts/amoco_terephthalic_acid')
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.distillation_tower('wcac9qws1xcual') // remapped from original line 131
    .inputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.mixer('3m4n0v26s6mgxs') // remapped from original line 141
    .itemInputs('18x #forge:dusts/amoco_terephthalic_acid')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .outputFluids(safeFluidOf('susy:crude_terephthalic_acid_slurry', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('umhxsu0k12pyua') // remapped from original line 149
    .itemInputs('18x #forge:dusts/amoco_isophthalic_acid')
    .inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    .outputFluids(safeFluidOf('susy:crude_isophthalic_acid_slurry', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.susy.trickle_bed_reactor('7ejkef4d812m5h') // remapped from original line 157
    .notConsumable('1x #forge:dusts/palladium_on_carbon')
    .inputFluids(safeFluidOf('susy:crude_terephthalic_acid_slurry', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 15))
    .outputFluids(safeFluidOf('susy:hydrogenated_terephthalic_acid_slurry', 1005))
    .EUt(120)
    .duration(100)

  event.recipes.susy.trickle_bed_reactor('yvovb4uv3wnxtb') // remapped from original line 166
    .notConsumable('1x #forge:dusts/palladium_on_carbon')
    .inputFluids(safeFluidOf('susy:crude_isophthalic_acid_slurry', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 15))
    .outputFluids(safeFluidOf('susy:hydrogenated_isophthalic_acid_slurry', 1005))
    .EUt(120)
    .duration(100)

  event.recipes.susy.crystallizer('pcgffn2ifpekj3') // remapped from original line 175
    .inputFluids(safeFluidOf('susy:hydrogenated_terephthalic_acid_slurry', 1005))
    .itemOutputs('18x #forge:dusts/wet_terephthalic_acid')
    .outputFluids(safeFluidOf('susy:amoco_purification_mother_liquor', 505))
    .EUt(120)
    .duration(100)

  event.recipes.susy.crystallizer('ccpsu0jy7caoif') // remapped from original line 183
    .inputFluids(safeFluidOf('susy:hydrogenated_isophthalic_acid_slurry', 1005))
    .itemOutputs('18x #forge:dusts/wet_isophthalic_acid')
    .outputFluids(safeFluidOf('susy:amoco_purification_mother_liquor', 505))
    .EUt(120)
    .duration(100)

  event.recipes.susy.dryer('edmbnbh7mwjzu3') // remapped from original line 191
    .itemInputs('18x #forge:dusts/wet_terephthalic_acid')
    .itemOutputs('18x #forge:dusts/terephthalic_acid')
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .duration(200)
    .EUt(30)

  event.recipes.susy.dryer('k9h9lkrxsursdt') // remapped from original line 199
    .itemInputs('18x #forge:dusts/wet_isophthalic_acid')
    .itemOutputs('18x #forge:dusts/isophthalic_acid')
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('rh7m8wzildf5mp') // remapped from original line 207
    .inputFluids(safeFluidOf('susy:amoco_purification_mother_liquor', 505))
    .chancedOutput('50x #forge:dusts/para_toluic_acid', 50, 0)
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.extractor('u5fckfbu20rao7') // remapped from original line 215
    .itemInputs('1x #forge:dusts/para_toluic_acid')
    .outputFluids(safeFluidOf('susy:para_toluic_acid', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.susy.fixed_bed_reactor('nhyx9tc7lrjyaw') // remapped from original line 224
    .circuit(1)
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .inputFluids(safeFluidOf('susy:para_xylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 150))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:para_toluic_acid', 50))
    .EUt(120)
    .duration(20)

  event.recipes.susy.reaction_furnace('inui2pbjyb2rui') // remapped from original line 235
    .inputFluids(safeFluidOf('susy:para_toluic_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:methyl_para_toluate', 1000))
    .EUt(120)
    .duration(400)

  event.recipes.susy.fixed_bed_reactor('ekhc8pbe2nos8a') // remapped from original line 245
    .circuit(2)
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .inputFluids(safeFluidOf('susy:para_xylene', 50))
    .inputFluids(safeFluidOf('susy:methyl_para_toluate', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 300))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:para_toluate_mixture', 100))
    .EUt(120)
    .duration(20)

  event.recipes.susy.reaction_furnace('cnjj2x5wxkbzkq') // remapped from original line 257
    .inputFluids(safeFluidOf('susy:para_toluate_mixture', 2000))
    .inputFluids(safeFluidOf('gtceu:methanol', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:methyl_para_toluate_mixture', 2000))
    .EUt(120)
    .duration(400)

  event.recipes.susy.vacuum_distillation('cxpbcth4vfdjos') // remapped from original line 266
    .inputFluids(safeFluidOf('susy:methyl_para_toluate_mixture', 2000))
    .itemOutputs('24x #forge:dusts/crude_dimethyl_terephthalate')
    .outputFluids(safeFluidOf('susy:methyl_para_toluate', 1000))
    .EUt(120)
    .duration(400)

  event.recipes.gtceu.mixer('bne1m5gqv2uzst') // remapped from original line 276
    .itemInputs('24x #forge:dusts/crude_dimethyl_terephthalate')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:crude_dimethyl_terephthalate_solution', 1000))
    .EUt(120)
    .duration(20)

  event.recipes.susy.crystallizer('ulkxgbyfqy8je2') // remapped from original line 284
    .inputFluids(safeFluidOf('susy:crude_dimethyl_terephthalate_solution', 1000))
    .itemOutputs('12x #forge:dusts/dimethyl_terephthalate')
    .outputFluids(safeFluidOf('susy:terephthalate_mother_liquor', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.mixer('ccqoyounjjobek') // remapped from original line 293
    .itemInputs('12x #forge:dusts/crude_dimethyl_terephthalate')
    .inputFluids(safeFluidOf('susy:terephthalate_mother_liquor', 1000))
    .outputFluids(safeFluidOf('susy:crude_dimethyl_terephthalate_solution', 1000))
    .EUt(120)
    .duration(20)

  event.recipes.susy.batch_reactor('mz2orcwhdlcabc') // remapped from original line 303
    .inputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .itemInputs('18x #forge:dusts/isophthalic_acid')
    .outputFluids(safeFluidOf('susy:dichloroethane_isophthalic_acid_solution', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('g2hwh2ttiobnl1') // remapped from original line 311
    .inputFluids(safeFluidOf('susy:dichloroethane_isophthalic_acid_solution', 1000))
    .inputFluids(safeFluidOf('susy:phosgene', 2000))
    .outputFluids(safeFluidOf('susy:isophthaloyl_chloride_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillery('fvej2flzkmmejz') // remapped from original line 321
    .inputFluids(safeFluidOf('susy:isophthaloyl_chloride_solution', 1000))
    .itemOutputs('16x #forge:dusts/isophthaloyl_chloride')
    .outputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .duration(40)
    .EUt(30)

  event.recipes.susy.batch_reactor('lnrndpvsxkl7ru') // remapped from original line 331
    .itemInputs('3x #forge:dusts/terephthalic_acid')
    .inputFluids(safeFluidOf('susy:bistrichloromethylbenzene', 1000))
    .itemOutputs('32x #forge:dusts/terephthaloyl_chloride')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(300)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // SIFTER = recipemap('sifter')
  // LCR = recipemap('large_chemical_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // MIXER = recipemap('mixer')
  // CRYSTALLIZER = recipemap('crystallizer')
  // FBR = recipemap('fixed_bed_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // DISTILLERY = recipemap('distillery')
  // FLUID_EXTRACTOR = recipemap('extractor')
  // DRYER = recipemap('dryer')
  //         
  //     
});