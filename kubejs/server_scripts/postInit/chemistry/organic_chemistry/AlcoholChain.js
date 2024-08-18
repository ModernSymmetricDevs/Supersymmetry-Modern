ServerEvents.recipes(event => {

  event.recipes.gtceu.alloy_smelter('3qjyxtg1lw0qcu') // remapped from original line 12
    .itemInputs('2x #forge:dusts/cupric_oxide')
    .itemInputs('5x #forge:dusts/alumina')
    .itemOutputs('7x #forge:dusts/impregnated_copper_oxide_catalyst')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.fixed_bed_reactor('tttlwth3jmfzci') // remapped from original line 20
    .inputFluids(safeFluidOf('susy:syngas', 350))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 25))
    .notConsumable('1x #forge:dusts/impregnated_copper_oxide_catalyst')
    .outputFluids(safeFluidOf('gtceu:methanol', 75))
    .duration(8)
    .EUt(480)

  event.recipes.susy.fixed_bed_reactor('awzft6ybemnlfg') // remapped from original line 29
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 200))
    .notConsumable('1x #forge:dusts/impregnated_copper_oxide_catalyst')
    .outputFluids(safeFluidOf('gtceu:methanol', 50))
    .duration(8)
    .EUt(480)

  event.recipes.susy.fixed_bed_reactor('nvblixhamwhiaw') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 300))
    .notConsumable('1x #forge:dusts/impregnated_copper_oxide_catalyst')
    .outputFluids(safeFluidOf('gtceu:methanol', 50))
    .outputFluids(safeFluidOf('susy:dense_steam', 50))
    .duration(8)
    .EUt(480)

  event.recipes.susy.fixed_bed_reactor('xi9onswsdrkbev') // remapped from original line 48
    .inputFluids(safeFluidOf('susy:syngas', 1050))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .notConsumable('1x #forge:dusts/impregnated_copper_oxide_catalyst')
    .outputFluids(safeFluidOf('gtceu:methanol', 200))
    .outputFluids(safeFluidOf('susy:dense_steam', 50))
    .duration(24)
    .EUt(480)

  event.recipes.gtceu.distillation_tower('mig2am7l5ohnxx') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:impure_ethanol', 2000))
    .itemOutputs('1x #forge:dusts/wood')
    .outputFluids(safeFluidOf('susy:fusel_oil', 20))
    .outputFluids(safeFluidOf('minecraft:water', 1280))
    .outputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 700))
    .duration(50)
    .EUt(30)

  event.recipes.gtceu.mixer('fnl6pdarkrlwv8') // remapped from original line 70
    .inputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 700))
    .inputFluids(safeFluidOf('gtceu:toluene', 10))
    .outputFluids(safeFluidOf('susy:entrained_ethanol_water_azeotrope', 710))
    .duration(50)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('vdovs4ktaggllg') // remapped from original line 78
    .inputFluids(safeFluidOf('susy:entrained_ethanol_water_azeotrope', 710))
    .outputFluids(safeFluidOf('gtceu:toluene', 10))
    .outputFluids(safeFluidOf('minecraft:water', 70))
    .outputFluids(safeFluidOf('gtceu:ethanol', 630))
    .duration(50)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('50iuhqnjm1kjid') // remapped from original line 87
    .inputFluids(safeFluidOf('susy:fusel_oil', 1000))
    .outputFluids(safeFluidOf('susy:isoamyl_alcohol', 615))
    .outputFluids(safeFluidOf('susy:n_butanol', 10))
    .outputFluids(safeFluidOf('susy:isobutyl_alcohol', 155))
    .outputFluids(safeFluidOf('minecraft:water', 110))
    .outputFluids(safeFluidOf('susy:n_propanol', 10))
    .outputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 100))
    .duration(50)
    .EUt(30)

  event.recipes.susy.reaction_furnace('vv1ck12zrsyiku') // remapped from original line 100
    .itemInputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 2000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('susy:one_butene', 1000))
    .outputFluids(safeFluidOf('susy:pentanal_mixture', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('9ehmpvqxl8pcpn') // remapped from original line 110
    .inputFluids(safeFluidOf('susy:pentanal_mixture', 1000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .outputFluids(safeFluidOf('susy:valeraldehyde', 800))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.fixed_bed_reactor('jlbxxqtc4ezm6e') // remapped from original line 118
    .inputFluids(safeFluidOf('susy:valeraldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable(safeItemId('1x susy:hv_catalyst_bed_reduction'))
    .outputFluids(safeFluidOf('susy:n_pentanol', 50))
    .EUt(voltAmps[3])
    .duration(4)

  event.recipes.susy.fixed_bed_reactor('xjnhxdscgsmghn') // remapped from original line 127
    .inputFluids(safeFluidOf('susy:valeraldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:n_pentanol', 50))
    .EUt(voltAmps[3])
    .duration(4)

  event.recipes.susy.fixed_bed_reactor('vnhvknzjbayaom') // remapped from original line 138
    .notConsumable('1x #forge:catalysts/bed_zsm_five')
    .inputFluids(safeFluidOf('gtceu:propene', 150))
    .outputFluids(safeFluidOf('susy:tripropylene', 50))
    .duration(5)
    .EUt(voltAmps[1])

  event.recipes.susy.reaction_furnace('bnxdwomiismd6b') // remapped from original line 146
    .itemInputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 2000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('susy:tripropylene', 1000))
    .outputFluids(safeFluidOf('susy:isodecanal_mixture', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('u1zopeov3koi9r') // remapped from original line 156
    .inputFluids(safeFluidOf('susy:isodecanal_mixture', 1000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .outputFluids(safeFluidOf('susy:isodecanal', 500))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.fixed_bed_reactor('5lzsvpadlvbb3y') // remapped from original line 164
    .inputFluids(safeFluidOf('susy:isodecanal', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:isodecanol', 50))
    .EUt(voltAmps[3])
    .duration(4)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // FBR = recipemap('fixed_bed_reactor')
  // DISTILLERY = recipemap('distillery')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // MIXER = recipemap('mixer')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
});